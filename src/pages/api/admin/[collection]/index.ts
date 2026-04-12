/**
 * API: GET /api/admin/[collection] — list all entries
 * API: POST /api/admin/[collection] — create new entry
 */
export const prerender = false;
import type { APIRoute } from 'astro';
import { listEntries, saveEntry, slugify, type CollectionName } from '@/lib/admin/content-manager';

const VALID_COLLECTIONS: CollectionName[] = ['bears', 'events', 'products', 'gallery', 'locations'];

export const GET: APIRoute = async ({ params }) => {
  if (!import.meta.env.DEV) {
    return new Response('Not found', { status: 404 });
  }

  const collection = params.collection as CollectionName;
  if (!VALID_COLLECTIONS.includes(collection)) {
    return new Response(JSON.stringify({ error: 'Invalid collection' }), { status: 400 });
  }

  const entries = await listEntries(collection);
  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ params, request }) => {
  if (!import.meta.env.DEV) {
    return new Response('Not found', { status: 404 });
  }

  const collection = params.collection as CollectionName;
  if (!VALID_COLLECTIONS.includes(collection)) {
    return new Response(JSON.stringify({ error: 'Invalid collection' }), { status: 400 });
  }

  const data = await request.json();
  const { frontmatter, body = '', slug: providedSlug } = data;

  const slug = providedSlug || slugify(frontmatter.name || frontmatter.caption || 'untitled');

  const result = await saveEntry(collection, slug, frontmatter, body);
  return new Response(JSON.stringify(result), {
    status: result.success ? 200 : 500,
    headers: { 'Content-Type': 'application/json' },
  });
};
