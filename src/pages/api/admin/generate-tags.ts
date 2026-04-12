/**
 * API: POST /api/admin/generate-tags — AI tag generation from bear photo
 * Accepts multipart form data with an image file, analyses it via claude CLI,
 * and returns an array of kebab-case tags.
 */
export const prerender = false;
import type { APIRoute } from 'astro';
import { writeFile, unlink, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { randomUUID } from 'node:crypto';
import { spawn } from 'node:child_process';

const PROMPT = `You are analysing a photo of a rescued teddy bear for a website catalogue.

The photo has a coloured backdrop cloth behind the bear — IGNORE the backdrop entirely, it is just staging.
Some photos may include props or themed scenery (boats, trees, flowers, tea sets, bunting, etc.) — IGNORE these too unless the bear is clearly wearing or holding something.

Look at the BEAR ONLY and generate tags in these categories:

1. FUR/BODY COLOUR — e.g. brown-fur, white-fur, golden-fur, cream-fur, pink-fur, grey-fur, multi-coloured-fur
2. CLOTHING — what the bear is wearing, e.g. football-kit, dress, t-shirt, hoodie, jacket, dungarees, tutu, onesie, pyjamas, naked (if no clothes)
3. ACCESSORIES — things on/attached to the bear, e.g. hat, scarf, bow, glasses, ribbon, cape, backpack, crown, necklace
4. CHARACTER/COSTUME — if the bear is dressed as or themed after a known character/brand/team, e.g. superman, arsenal, disney-princess, spider-man, batman. Try to read any text on clothing to identify specifics. Only include if clearly identifiable.
5. CONDITION/STYLE — e.g. vintage, fluffy, well-loved, shaggy, smooth, curly-fur, soft
6. NOTABLE FEATURES — e.g. embroidered-eyes, button-eyes, embroidered-nose, stitched-mouth, printed-face, sparkly, glittery, paw-pads

Rules:
- Output ONLY a JSON array of kebab-case tag strings, nothing else
- No duplicates
- Be specific where possible (e.g. "red-t-shirt" not just "t-shirt")
- Do NOT tag anything about the backdrop, background, props, or scenery
- Do NOT include the bear's name or species
- Aim for 5-15 tags per bear`;

function execClaude(args: string[]): Promise<string> {
  return new Promise((resolve, reject) => {
    const proc = spawn('claude', args, { stdio: ['pipe', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    proc.stdout.on('data', (d: Buffer) => stdout += d);
    proc.stderr.on('data', (d: Buffer) => stderr += d);
    proc.on('close', (code: number) => {
      if (code !== 0) reject(new Error(`Exit ${code}: ${stderr || stdout}`));
      else resolve(stdout);
    });
    proc.on('error', reject);
    proc.stdin.end();
  });
}

export const POST: APIRoute = async ({ request }) => {
  if (!import.meta.env.DEV) {
    return new Response('Not found', { status: 404 });
  }

  let tempPath: string | null = null;

  try {
    const formData = await request.formData();
    const image = formData.get('image') as File;

    if (!image) {
      return new Response(JSON.stringify({ error: 'Missing image' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Save image to temp file
    const tempDir = join(tmpdir(), 'ae-tag-gen');
    await mkdir(tempDir, { recursive: true });
    const ext = image.name.split('.').pop() || 'jpg';
    tempPath = join(tempDir, `${randomUUID()}.${ext}`);
    const buffer = Buffer.from(await image.arrayBuffer());
    await writeFile(tempPath, buffer);

    // Call claude -p with the image
    const fullPrompt = `${PROMPT}\n\nRead the image at ${tempPath} and return ONLY the JSON array of tags.`;
    let output: string;
    try {
      output = await execClaude([
        '-p', fullPrompt,
        '--model', 'sonnet',
        '--allowedTools', 'Read',
      ]);
    } catch (e: any) {
      return new Response(JSON.stringify({
        error: 'Claude CLI failed',
        details: e.message,
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Extract JSON array
    const jsonMatch = output.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      return new Response(JSON.stringify({
        error: 'Could not parse tags from Claude response',
        raw: output.slice(0, 500),
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const tags = JSON.parse(jsonMatch[0]);

    return new Response(JSON.stringify({ success: true, tags }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    // Clean up temp file
    if (tempPath) {
      unlink(tempPath).catch(() => {});
    }
  }
};
