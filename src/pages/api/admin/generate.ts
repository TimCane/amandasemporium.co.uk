/**
 * API: POST /api/admin/generate — AI content generation via claude CLI
 * Accepts { collection, formData, context } and returns { tagline, narrative }
 */
export const prerender = false;
import type { APIRoute } from 'astro';
import { execSync } from 'node:child_process';

const SYSTEM_PROMPT = `You are Amanda. You run a craft market stall that rescues teddy bears, sells handmade products, and appears at local events. Write for your website in first-person plural "we" voice, like you're telling a friend about your stall over a cup of tea.

Rules:
- Short sentences. Short paragraphs. One idea per paragraph.
- Use specific concrete details from the data provided. If someone gave you extra context, lean on it heavily.
- You may invent small plausible details to add colour (e.g. "he'd clearly been well-loved") but never fabricate major facts.
- Bears never arrive with clothes. Amanda picks out and dresses every bear herself. If you mention an outfit, frame it as something Amanda chose for them, not something they came wearing.
- Prefer commas and full stops. Never use em dashes. Go easy on exclamation marks.
- Never use these words: journey, nestled, delightful, heartwarming, whimsical, truly, perhaps, embark, spark, tapestry, vital, beacon, undeniable, remarkable.
- Don't over-describe. One good specific detail beats three adjectives.
- When referencing how long ago something happened, use {RESCUED_DATE_AGO} or {REHOMED_DATE_AGO} tokens instead of relative times like "twelve years ago" or absolute years like "back in 2012". These tokens get replaced at render time. Use them naturally in a sentence, e.g. "We found her {RESCUED_DATE_AGO} ago at a car boot sale."
- Output valid JSON only, no markdown fences.`;

export const POST: APIRoute = async ({ request }) => {
  if (!import.meta.env.DEV) {
    return new Response('Not found', { status: 404 });
  }

  try {
    const { collection, formData, context, mode = 'generate', existingContent } = await request.json();

    if (!collection || !formData) {
      return new Response(JSON.stringify({ error: 'Missing collection or formData' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const prompt = mode === 'update' && existingContent
      ? buildUpdatePrompt(collection, formData, context || '', existingContent)
      : buildPrompt(collection, formData, context || '');

    let output: string;
    try {
      output = execSync(`claude -p "${escapeShell(prompt)}" --system-prompt "${escapeShell(SYSTEM_PROMPT)}"`, {
        encoding: 'utf-8',
        timeout: 60_000,
        maxBuffer: 1024 * 1024,
      }).trim();
    } catch (e: any) {
      return new Response(JSON.stringify({
        error: 'Claude CLI failed. Make sure claude is installed and authenticated.',
        details: e.message,
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Try to extract JSON from the response (may be wrapped in markdown fences)
    const jsonStr = extractJson(output);
    if (!jsonStr) {
      return new Response(JSON.stringify({
        error: 'Could not parse JSON from Claude response',
        raw: output,
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const parsed = JSON.parse(jsonStr);
    if (!parsed.narrative) {
      return new Response(JSON.stringify({
        error: 'Response missing narrative field',
        raw: output,
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      success: true,
      tagline: parsed.tagline || '',
      narrative: parsed.narrative,
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

function escapeShell(str: string): string {
  // Escape for double-quoted shell string
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\$/g, '\\$').replace(/`/g, '\\`');
}

function extractJson(text: string): string | null {
  // Try direct parse first
  try {
    JSON.parse(text);
    return text;
  } catch { /* continue */ }

  // Try extracting from markdown code fences
  const fenceMatch = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
  if (fenceMatch) {
    try {
      JSON.parse(fenceMatch[1].trim());
      return fenceMatch[1].trim();
    } catch { /* continue */ }
  }

  // Try finding first { ... } block
  const braceMatch = text.match(/\{[\s\S]*\}/);
  if (braceMatch) {
    try {
      JSON.parse(braceMatch[0]);
      return braceMatch[0];
    } catch { /* continue */ }
  }

  return null;
}

function buildPrompt(collection: string, data: Record<string, any>, context: string): string {
  switch (collection) {
    case 'bears':
      return buildBearPrompt(data, context);
    case 'products':
      return buildProductPrompt(data, context);
    case 'events':
      return buildEventPrompt(data, context);
    default:
      return buildGenericPrompt(collection, data, context);
  }
}

interface ExistingContent {
  tagline: string;
  body: string;
}

function buildUpdatePrompt(collection: string, data: Record<string, any>, context: string, existing: ExistingContent): string {
  const detailsBlock = buildDetailsBlock(collection, data);

  return `Update the existing content for this ${collection.replace(/s$/, '')} entry. Details have changed. Revise the content to reflect the current data.

${detailsBlock}
${context ? `What changed: ${context}` : ''}

Existing content to revise:
${existing.tagline ? `- Tagline: ${existing.tagline}` : '- Tagline: (empty)'}
${existing.body ? `- Narrative:\n${existing.body}` : '- Narrative: (empty)'}

Weave in the new details naturally, don't just append them. If rehomed, the narrative should feel like a complete story.

Return JSON with the same fields as the existing content.`;
}

function buildDetailsBlock(collection: string, data: Record<string, any>): string {
  switch (collection) {
    case 'bears': {
      const name = data.name || 'Unknown';
      const species = data.species || 'bear';
      const brand = data.brand || 'unknown';
      const rescueLocation = data.rescued?.location || 'unknown location';
      const rescueDate = data.rescued?.date || 'unknown date';
      const rehomeLocation = data.rehomed?.location || '';
      const rehomeDate = data.rehomed?.date || '';
      const rehomed = data.rehomed?.date;
      const event = data.event || '';
      const tags = Array.isArray(data.tags) ? data.tags : [];

      return `Bear details:
- Name: ${name}
- Species: ${species}
- Brand: ${brand}
- Rescued from: ${rescueLocation} on ${rescueDate}
${rehomed ? `- Rehomed to: ${rehomeLocation} on ${rehomeDate}` : '- Still looking for a home'}
${event ? `- Shown at event: ${event}` : ''}
${tags.length ? `- Tags: ${tags.join(', ')}` : ''}`;
    }
    case 'products': {
      const name = data.name || 'Unknown';
      const category = data.category || 'general';
      const price = data.price || '';
      const materials = data.materials || '';
      return `Product details:
- Name: ${name}
- Category: ${category}
${price ? `- Price: ${price}` : ''}
${materials ? `- Materials: ${materials}` : ''}`;
    }
    case 'events': {
      const name = data.name || 'Unknown';
      const date = data.date || '';
      const time = data.time || '';
      const venue = data.location?.name || '';
      return `Event details:
- Name: ${name}
${date ? `- Date: ${date}` : ''}
${time ? `- Time: ${time}` : ''}
${venue ? `- Venue: ${venue}` : ''}`;
    }
    default:
      return `Details:\n${Object.entries(data).map(([k, v]) => `- ${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`).join('\n')}`;
  }
}

function buildBearPrompt(data: Record<string, any>, context: string): string {
  return `Generate JSON with "tagline" and "narrative" for a rescued teddy bear.

${buildDetailsBlock('bears', data)}
${context ? `Additional context: ${context}` : ''}`;
}

function buildProductPrompt(data: Record<string, any>, context: string): string {
  return `Generate JSON with "tagline" and "narrative" for a handmade craft product.

${buildDetailsBlock('products', data)}
${context ? `Additional context: ${context}` : ''}`;
}

function buildEventPrompt(data: Record<string, any>, context: string): string {
  return `Generate JSON with "narrative" for a craft fair/market event.

${buildDetailsBlock('events', data)}
${context ? `Additional context: ${context}` : ''}`;
}

function buildGenericPrompt(collection: string, data: Record<string, any>, context: string): string {
  return `Generate JSON with "tagline" and "narrative" for a ${collection} item.

${buildDetailsBlock(collection, data)}
${context ? `Additional context: ${context}` : ''}`;
}
