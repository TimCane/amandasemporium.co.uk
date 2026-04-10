/**
 * Content Manager — handles file system CRUD for all content collections.
 * Reads/writes markdown frontmatter + body to src/content/ directories.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const CONTENT_DIR = path.resolve('src/content');

/** Convert a name to a URL-friendly slug */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Parse YAML-like frontmatter from markdown text */
function parseFrontmatter(text: string): { frontmatter: Record<string, any>; body: string } {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: text };

  const yamlStr = match[1];
  const body = match[2].trim();
  const frontmatter: Record<string, any> = {};

  // Simple YAML parser for our flat-ish structure
  const lines = yamlStr.split('\n');
  let currentKey = '';
  let currentObj: Record<string, any> | null = null;
  let currentArray: any[] | null = null;
  let arrayKey = '';

  for (const line of lines) {
    // Array item under a key
    if (/^\s{2}- /.test(line) && arrayKey) {
      const val = line.replace(/^\s{2}- /, '').replace(/^"(.*)"$/, '$1');
      currentArray!.push(val);
      continue;
    }

    // Nested object property (2-space indent)
    if (/^\s{4}\w/.test(line) && currentKey) {
      const [k, ...rest] = line.trim().split(':');
      const v = rest.join(':').trim().replace(/^"(.*)"$/, '$1');
      if (!currentObj) {
        currentObj = {};
        frontmatter[currentKey] = currentObj;
      }
      currentObj[k.trim()] = parseYamlValue(v);
      continue;
    }

    // Close any pending array
    if (currentArray) {
      frontmatter[arrayKey] = currentArray;
      currentArray = null;
      arrayKey = '';
    }
    currentObj = null;

    // Top-level key
    const topMatch = line.match(/^(\w[\w-]*)\s*:\s*(.*)?$/);
    if (topMatch) {
      const key = topMatch[1];
      const rawVal = (topMatch[2] || '').trim();
      currentKey = key;

      if (rawVal === '' || rawVal === undefined) {
        // Could be start of nested object or array — peek ahead
        currentObj = null;
        currentArray = null;
        // Check next line to decide
        const idx = lines.indexOf(line);
        const nextLine = lines[idx + 1] || '';
        if (/^\s{2}- /.test(nextLine)) {
          arrayKey = key;
          currentArray = [];
        }
        // else: nested object, handled above
        continue;
      }

      frontmatter[key] = parseYamlValue(rawVal);
      currentKey = key;
      currentObj = null;
    }
  }

  // Close any pending array
  if (currentArray) {
    frontmatter[arrayKey] = currentArray;
  }

  return { frontmatter, body };
}

function parseYamlValue(raw: string): any {
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  if (raw === '""' || raw === "''") return '';
  if (/^-?\d+\.\d+$/.test(raw)) return parseFloat(raw);
  if (/^-?\d+$/.test(raw)) return parseInt(raw, 10);
  // Inline array: ["a", "b"]
  if (raw.startsWith('[') && raw.endsWith(']')) {
    return raw.slice(1, -1).split(',').map(s => s.trim().replace(/^"(.*)"$/, '$1'));
  }
  return raw.replace(/^"(.*)"$/, '$1');
}

/** Check if a string looks like a YAML date (YYYY-MM-DD) */
function isDateString(val: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(val);
}

/** Serialize a single value for YAML output */
function serializeYamlValue(val: any): string {
  if (val instanceof Date) return val.toISOString().split('T')[0];
  if (typeof val === 'boolean' || typeof val === 'number') return String(val);
  if (typeof val === 'string') {
    // Date strings must be unquoted so YAML parses them as dates
    if (isDateString(val)) return val;
    return `"${val}"`;
  }
  return String(val);
}

/** Serialize frontmatter object to YAML string */
function serializeFrontmatter(data: Record<string, any>): string {
  const lines: string[] = [];

  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || value === null) continue;

    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      lines.push(`${key}:`);
      for (const item of value) {
        lines.push(`  - ${serializeYamlValue(item)}`);
      }
    } else if (typeof value === 'object' && !(value instanceof Date)) {
      lines.push(`${key}:`);
      for (const [subKey, subVal] of Object.entries(value)) {
        if (subVal === undefined || subVal === null) continue;
        lines.push(`    ${subKey}: ${serializeYamlValue(subVal)}`);
      }
    } else {
      lines.push(`${key}: ${serializeYamlValue(value)}`);
    }
  }

  return lines.join('\n');
}

/** Compose full markdown content from frontmatter + body */
function composeMarkdown(frontmatter: Record<string, any>, body: string): string {
  const yaml = serializeFrontmatter(frontmatter);
  return `---\n${yaml}\n---\n${body ? '\n' + body + '\n' : ''}\n`;
}

// ===================
// Collection types
// ===================

export type CollectionName = 'bears' | 'events' | 'products' | 'gallery' | 'locations';

interface CollectionMeta {
  /** Whether entries live in folders (with index.md) or flat .md files */
  useFolders: boolean;
  /** Slug prefix for flat files (e.g., events use date-prefixed slugs) */
  slugFromFrontmatter?: boolean;
}

const COLLECTION_META: Record<CollectionName, CollectionMeta> = {
  bears: { useFolders: true },
  events: { useFolders: false },
  products: { useFolders: true },
  gallery: { useFolders: true },
  locations: { useFolders: false },
};

// ===================
// READ operations
// ===================

export async function listEntries(collection: CollectionName): Promise<Array<{ slug: string; frontmatter: Record<string, any>; body: string }>> {
  const dir = path.join(CONTENT_DIR, collection);
  const entries: Array<{ slug: string; frontmatter: Record<string, any>; body: string }> = [];

  try {
    const items = await fs.readdir(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = await fs.stat(fullPath);

      if (stat.isDirectory()) {
        const mdPath = path.join(fullPath, 'index.md');
        try {
          const content = await fs.readFile(mdPath, 'utf-8');
          const { frontmatter, body } = parseFrontmatter(content);
          entries.push({ slug: item, frontmatter, body });
        } catch {
          // skip directories without index.md
        }
      } else if (item.endsWith('.md')) {
        const content = await fs.readFile(fullPath, 'utf-8');
        const { frontmatter, body } = parseFrontmatter(content);
        const slug = item.replace(/\.md$/, '');
        entries.push({ slug, frontmatter, body });
      }
    }
  } catch {
    // collection directory doesn't exist yet
  }

  return entries;
}

export async function getEntry(collection: CollectionName, slug: string): Promise<{ slug: string; frontmatter: Record<string, any>; body: string } | null> {
  const meta = COLLECTION_META[collection];
  const dir = path.join(CONTENT_DIR, collection);

  let content: string;
  try {
    if (meta.useFolders) {
      content = await fs.readFile(path.join(dir, slug, 'index.md'), 'utf-8');
    } else {
      content = await fs.readFile(path.join(dir, `${slug}.md`), 'utf-8');
    }
  } catch {
    return null;
  }

  const { frontmatter, body } = parseFrontmatter(content);
  return { slug, frontmatter, body };
}

// ===================
// WRITE operations
// ===================

export async function saveEntry(
  collection: CollectionName,
  slug: string,
  frontmatter: Record<string, any>,
  body: string,
  _oldSlug?: string
): Promise<{ success: boolean; slug: string; error?: string }> {
  const meta = COLLECTION_META[collection];
  const dir = path.join(CONTENT_DIR, collection);

  // If slug changed, delete old entry first
  if (_oldSlug && _oldSlug !== slug) {
    await deleteEntryFiles(collection, _oldSlug);
  }

  const markdown = composeMarkdown(frontmatter, body);

  try {
    if (meta.useFolders) {
      const entryDir = path.join(dir, slug);
      await fs.mkdir(entryDir, { recursive: true });
      await fs.writeFile(path.join(entryDir, 'index.md'), markdown, 'utf-8');
    } else {
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(path.join(dir, `${slug}.md`), markdown, 'utf-8');
    }
    return { success: true, slug };
  } catch (e: any) {
    return { success: false, slug, error: e.message };
  }
}

export async function deleteEntryFiles(collection: CollectionName, slug: string): Promise<void> {
  const meta = COLLECTION_META[collection];
  const dir = path.join(CONTENT_DIR, collection);

  if (meta.useFolders) {
    await fs.rm(path.join(dir, slug), { recursive: true, force: true });
  } else {
    await fs.rm(path.join(dir, `${slug}.md`), { force: true });
  }
}

// ===================
// IMAGE operations
// ===================

export async function processAndSaveImage(
  collection: CollectionName,
  slug: string,
  imageBuffer: Buffer,
  originalName: string,
  suffix?: string
): Promise<string> {
  const meta = COLLECTION_META[collection];
  // Always output as JPEG (Astro handles WebP/AVIF at build time)
  const filename = suffix ? `${slug}-${suffix}.jpg` : `${slug}.jpg`;

  // Full processing pipeline:
  // 1. Resize — max 1200px on longest edge (preserves aspect ratio)
  // 2. Convert to JPEG
  // 3. Strip EXIF metadata (for privacy)
  // 4. Optimise at 85% quality
  const processed = await sharp(imageBuffer)
    .rotate() // Auto-rotate based on EXIF orientation before stripping
    .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85, mozjpeg: true })
    .toBuffer();

  let destDir: string;
  if (meta.useFolders) {
    destDir = path.join(CONTENT_DIR, collection, slug);
  } else {
    destDir = path.join(CONTENT_DIR, collection);
  }

  await fs.mkdir(destDir, { recursive: true });
  await fs.writeFile(path.join(destDir, filename), processed);

  return `./${filename}`;
}

// ===================
// REFERENTIAL checks
// ===================

export async function findReferences(collection: CollectionName, slug: string): Promise<string[]> {
  const refs: string[] = [];

  if (collection === 'locations') {
    // Check bears for rescued.location and rehomed.location
    const bears = await listEntries('bears');
    for (const bear of bears) {
      if (bear.frontmatter.rescued?.location === slug) {
        refs.push(`Bear "${bear.frontmatter.name}" (rescued location)`);
      }
      if (bear.frontmatter.rehomed?.location === slug) {
        refs.push(`Bear "${bear.frontmatter.name}" (rehomed location)`);
      }
    }
    // Check events
    const events = await listEntries('events');
    for (const evt of events) {
      if (evt.frontmatter.location?.location === slug) {
        refs.push(`Event "${evt.frontmatter.name}" (location)`);
      }
    }
  }

  if (collection === 'events') {
    const bears = await listEntries('bears');
    for (const bear of bears) {
      if (bear.frontmatter.event === slug) {
        refs.push(`Bear "${bear.frontmatter.name}" (event)`);
      }
    }
  }

  if (collection === 'bears') {
    const galleryItems = await listEntries('gallery');
    for (const item of galleryItems) {
      if (item.frontmatter.relatedBear === slug) {
        refs.push(`Gallery "${item.frontmatter.caption}" (related bear)`);
      }
    }
  }

  if (collection === 'products') {
    const galleryItems = await listEntries('gallery');
    for (const item of galleryItems) {
      if (item.frontmatter.relatedProduct === slug) {
        refs.push(`Gallery "${item.frontmatter.caption}" (related product)`);
      }
    }
  }

  return refs;
}
