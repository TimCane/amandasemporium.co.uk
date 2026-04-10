#!/usr/bin/env node

/** START FROM RUBY
 * node scripts/generate-bear-tags.mjs --model sonnet --replace --from ruby
 */

/**
 * Generate tags for bears by analysing their photos using Claude via `claude -p`.
 *
 * Usage:
 *   node scripts/generate-bear-tags.mjs                  # all bears
 *   node scripts/generate-bear-tags.mjs --limit 5        # first 5 bears only
 *   node scripts/generate-bear-tags.mjs --bear aaron     # single bear
 *   node scripts/generate-bear-tags.mjs --dry-run        # preview without writing
 *   node scripts/generate-bear-tags.mjs --model sonnet   # use a different model
 *   node scripts/generate-bear-tags.mjs --replace        # replace tags instead of merging
 *   node scripts/generate-bear-tags.mjs --from ruby     # start from a specific bear (alphabetical)
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { join } from 'node:path';

function execClaude(args, options = {}) {
  return new Promise((resolve, reject) => {
    const proc = spawn('claude', args, { ...options, stdio: ['pipe', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    proc.stdout.on('data', d => stdout += d);
    proc.stderr.on('data', d => stderr += d);
    proc.on('close', code => {
      if (code !== 0) reject(new Error(`Exit ${code}: ${stderr || stdout}`));
      else resolve({ stdout, stderr });
    });
    proc.on('error', reject);
    // Close stdin immediately to avoid the "no stdin data" warning
    proc.stdin.end();
  });
}
const BEARS_DIR = new URL('../src/content/bears', import.meta.url).pathname;

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const limitIdx = args.indexOf('--limit');
const limit = limitIdx !== -1 ? parseInt(args[limitIdx + 1], 10) : Infinity;
const bearIdx = args.indexOf('--bear');
const singleBear = bearIdx !== -1 ? args[bearIdx + 1] : null;
const modelIdx = args.indexOf('--model');
const model = modelIdx !== -1 ? args[modelIdx + 1] : 'haiku';
const replace = args.includes('--replace');
const fromIdx = args.indexOf('--from');
const fromBear = fromIdx !== -1 ? args[fromIdx + 1] : null;

const PROMPT = `You are analysing a photo of a rescued teddy bear for a website catalogue.

The photo has a coloured backdrop cloth behind the bear — IGNORE the backdrop entirely, it is just staging.
Some photos may include props or themed scenery (boats, trees, etc.) — IGNORE these too unless the bear is clearly wearing or holding something.

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

async function getExistingTags(mdContent) {
  const match = mdContent.match(/^tags:\s*\[([^\]]*)\]/m);
  if (match) {
    // Inline format: tags: ["foo", "bar"]
    return match[1]
      .split(',')
      .map(t => t.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  // YAML list format: tags:\n  - "foo"\n  - "bar"
  const listMatch = mdContent.match(/^tags:\s*\n((?:\s+-\s+.*\n?)*)/m);
  if (listMatch) {
    return listMatch[1]
      .split('\n')
      .map(line => line.replace(/^\s*-\s*/, '').replace(/^["']|["']$/g, '').trim())
      .filter(Boolean);
  }
  return [];
}

async function generateTags(bearDir, bearName) {
  const mdPath = join(bearDir, 'index.md');
  const mdContent = await readFile(mdPath, 'utf-8');
  const existingTags = await getExistingTags(mdContent);

  // Find the image file
  const files = await readdir(bearDir);
  const imageFile = files.find(f => /\.(jpg|jpeg|png|webp)$/i.test(f) && f !== 'index.md');
  if (!imageFile) {
    console.log(`  SKIP ${bearName}: no image found`);
    return null;
  }

  const imagePath = join(bearDir, imageFile);

  // Call claude -p with the image
  const fullPrompt = `${PROMPT}\n\nRead the image at ${imagePath} and return ONLY the JSON array of tags.`;
  let result;
  try {
    result = await execClaude([
      '-p', fullPrompt,
      '--model', model,
      '--allowedTools', 'Read',
    ], {
      timeout: 60000,
    });
  } catch (err) {
    console.error(`  ERROR ${bearName}: ${err.message}`);
    return null;
  }

  const output = result.stdout.trim();

  // Extract JSON array from response
  const jsonMatch = output.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    console.error(`  ERROR ${bearName}: no JSON array in response: ${output.slice(0, 200)}`);
    return null;
  }

  let aiTags;
  try {
    aiTags = JSON.parse(jsonMatch[0]);
  } catch (err) {
    console.error(`  ERROR ${bearName}: invalid JSON: ${jsonMatch[0].slice(0, 200)}`);
    return null;
  }

  // Replace or merge tags
  const merged = replace ? aiTags : [...new Set([...existingTags, ...aiTags])];

  return { mdPath, mdContent, existingTags, aiTags, merged };
}

function updateFrontmatter(mdContent, newTags) {
  const tagsYaml = `tags: [${newTags.map(t => `"${t}"`).join(', ')}]`;

  // Replace inline tags format
  if (/^tags:\s*\[.*\]/m.test(mdContent)) {
    return mdContent.replace(/^tags:\s*\[.*\]/m, tagsYaml);
  }

  // Replace YAML list format
  if (/^tags:\s*\n(?:\s+-\s+.*\n?)*/m.test(mdContent)) {
    return mdContent.replace(/^tags:\s*\n(?:\s+-\s+.*\n?)*/m, tagsYaml + '\n');
  }

  // Replace empty tags
  if (/^tags:\s*$/m.test(mdContent)) {
    return mdContent.replace(/^tags:\s*$/m, tagsYaml);
  }

  return mdContent;
}

async function main() {
  let bearDirs = await readdir(BEARS_DIR);
  bearDirs.sort();

  if (singleBear) {
    bearDirs = bearDirs.filter(d => d === singleBear);
  }
  if (fromBear) {
    const idx = bearDirs.indexOf(fromBear);
    if (idx === -1) {
      console.error(`Bear "${fromBear}" not found`);
      process.exit(1);
    }
    bearDirs = bearDirs.slice(idx);
  }
  if (limit < bearDirs.length) {
    bearDirs = bearDirs.slice(0, limit);
  }

  console.log(`Processing ${bearDirs.length} bears${dryRun ? ' (DRY RUN)' : ''}...\n`);

  let processed = 0;
  let skipped = 0;
  let errors = 0;

  for (const bearName of bearDirs) {
    const bearDir = join(BEARS_DIR, bearName);
    process.stdout.write(`[${processed + skipped + errors + 1}/${bearDirs.length}] ${bearName}... `);

    const result = await generateTags(bearDir, bearName);
    if (!result) {
      errors++;
      continue;
    }

    const { mdPath, mdContent, existingTags, aiTags, merged } = result;
    console.log(`existing: [${existingTags.join(', ')}] + ai: [${aiTags.join(', ')}] = [${merged.join(', ')}]`);

    if (!dryRun) {
      const updated = updateFrontmatter(mdContent, merged);
      await writeFile(mdPath, updated, 'utf-8');
    }

    processed++;
  }

  console.log(`\nDone! Processed: ${processed}, Skipped/Errors: ${errors}`);
}

main().catch(console.error);
