/**
 * One-off migration script: reverse geocode all locations to populate
 * country, county, and postcode district fields.
 *
 * Uses OpenStreetMap Nominatim (1 req/sec rate limit).
 * Run: node scripts/geocode-locations.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const LOCATIONS_DIR = path.join(process.cwd(), 'src/content/locations');
const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/reverse';

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { frontmatter: {}, body: '' };
  const body = content.slice(match[0].length).trimStart();
  const frontmatter = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.+)$/);
    if (m) {
      let val = m[2].trim().replace(/^"(.*)"$/, '$1');
      if (!isNaN(Number(val)) && val !== '') val = Number(val);
      frontmatter[m[1]] = val;
    }
  }
  return { frontmatter, body };
}

function toFrontmatter(fm) {
  const lines = ['---'];
  // Write in consistent order
  const order = ['name', 'latitude', 'longitude', 'country', 'county', 'postcode'];
  for (const key of order) {
    if (fm[key] === undefined || fm[key] === '') continue;
    const val = typeof fm[key] === 'string' ? `"${fm[key]}"` : fm[key];
    lines.push(`${key}: ${val}`);
  }
  lines.push('---');
  return lines.join('\n');
}

/** Extract postcode district from full postcode. UK: "KT6 4HG" → "KT6". Others: return as-is. */
function postcodeDistrict(postcode) {
  if (!postcode) return '';
  const trimmed = postcode.trim();
  // UK postcodes: outward code is everything before the space
  const parts = trimmed.split(/\s+/);
  if (parts.length >= 2) return parts[0];
  return trimmed;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function reverseGeocode(lat, lng) {
  const url = `${NOMINATIM_URL}?lat=${lat}&lon=${lng}&format=json&addressdetails=1`;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'AmandasEmporium-Migration/1.0' },
  });
  if (!res.ok) throw new Error(`Nominatim ${res.status}: ${res.statusText}`);
  return res.json();
}

async function main() {
  const files = fs.readdirSync(LOCATIONS_DIR).filter((f) => f.endsWith('.md'));
  console.log(`Found ${files.length} locations to geocode`);

  let updated = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(LOCATIONS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);

    // Skip if already has all fields
    if (frontmatter.country && frontmatter.county && frontmatter.postcode) {
      skipped++;
      continue;
    }

    const lat = frontmatter.latitude;
    const lng = frontmatter.longitude;
    if (!lat || !lng) {
      console.log(`  SKIP ${file} — no coordinates`);
      skipped++;
      continue;
    }

    try {
      const data = await reverseGeocode(lat, lng);
      const addr = data.address || {};

      frontmatter.country = addr.country || '';
      frontmatter.county = addr.county || addr.state_district || addr.state || '';
      frontmatter.postcode = postcodeDistrict(addr.postcode || '');

      const newContent = toFrontmatter(frontmatter) + (body ? '\n' + body : '\n');
      fs.writeFileSync(filePath, newContent);
      updated++;

      console.log(`  [${i + 1}/${files.length}] ${frontmatter.name} → ${frontmatter.county}, ${frontmatter.country} (${frontmatter.postcode})`);
    } catch (e) {
      console.log(`  FAIL ${file}: ${e.message}`);
      failed++;
    }

    // Rate limit: 1 req/sec
    await sleep(1100);
  }

  console.log(`\nDone: ${updated} updated, ${skipped} skipped, ${failed} failed`);
}

main().catch(console.error);
