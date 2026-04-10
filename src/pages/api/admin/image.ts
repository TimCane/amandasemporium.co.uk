/**
 * API: GET /api/admin/image?collection=bears&slug=aaron&file=aaron.jpg
 * Serves images from src/content/ directories for admin preview.
 */
export const prerender = false;
import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

const CONTENT_DIR = path.resolve('src/content');

const MIME_TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
};

export const GET: APIRoute = async ({ url }) => {
  if (!import.meta.env.DEV) {
    return new Response('Not found', { status: 404 });
  }

  const collection = url.searchParams.get('collection');
  const slug = url.searchParams.get('slug');
  const file = url.searchParams.get('file');

  if (!collection || !slug || !file) {
    return new Response('Missing params', { status: 400 });
  }

  // Prevent path traversal
  if (file.includes('..') || slug.includes('..') || collection.includes('..')) {
    return new Response('Invalid path', { status: 400 });
  }

  // Try folder-based path first (bears/aaron/aaron.jpg), then flat (events/file.jpg)
  let filePath = path.join(CONTENT_DIR, collection, slug, file);
  try {
    await fs.access(filePath);
  } catch {
    filePath = path.join(CONTENT_DIR, collection, file);
    try {
      await fs.access(filePath);
    } catch {
      return new Response('Not found', { status: 404 });
    }
  }

  const ext = path.extname(file).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const buffer = await fs.readFile(filePath);

  return new Response(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
    },
  });
};
