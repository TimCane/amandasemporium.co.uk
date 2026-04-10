/**
 * API: GET /api/admin/[collection]/[slug] — get single entry
 * API: PUT /api/admin/[collection]/[slug] — update entry
 * API: DELETE /api/admin/[collection]/[slug] — delete entry
 */
export const prerender = false;
import type { APIRoute } from 'astro';
import {
  getEntry,
  saveEntry,
  deleteEntryFiles,
  findReferences,
  slugify,
  type CollectionName,
} from '@/lib/admin/content-manager';

const VALID_COLLECTIONS: CollectionName[] = ['bears', 'events', 'products', 'gallery', 'locations'];

export const GET: APIRoute = async ({ params }) => {
  if (!import.meta.env.DEV) {
    return new Response('Not found', { status: 404 });
  }

  const collection = params.collection as CollectionName;
  const slug = params.slug!;

  if (!VALID_COLLECTIONS.includes(collection)) {
    return new Response(JSON.stringify({ error: 'Invalid collection' }), { status: 400 });
  }

  const entry = await getEntry(collection, slug);
  if (!entry) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }

  return new Response(JSON.stringify(entry), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const PUT: APIRoute = async ({ params, request }) => {
  if (!import.meta.env.DEV) {
    return new Response('Not found', { status: 404 });
  }

  const collection = params.collection as CollectionName;
  const oldSlug = params.slug!;

  if (!VALID_COLLECTIONS.includes(collection)) {
    return new Response(JSON.stringify({ error: 'Invalid collection' }), { status: 400 });
  }

  const data = await request.json();
  const { frontmatter, body = '' } = data;
  const newSlug = data.slug || slugify(frontmatter.name || frontmatter.caption || oldSlug);

  const result = await saveEntry(collection, newSlug, frontmatter, body, oldSlug);
  return new Response(JSON.stringify(result), {
    status: result.success ? 200 : 500,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const DELETE: APIRoute = async ({ params, request }) => {
  if (!import.meta.env.DEV) {
    return new Response('Not found', { status: 404 });
  }

  const collection = params.collection as CollectionName;
  const slug = params.slug!;

  if (!VALID_COLLECTIONS.includes(collection)) {
    return new Response(JSON.stringify({ error: 'Invalid collection' }), { status: 400 });
  }

  // Check for references
  const refs = await findReferences(collection, slug);

  // If force=true in body, delete anyway; otherwise return refs as warning
  let force = false;
  try {
    const body = await request.json();
    force = body.force === true;
  } catch {
    // no body is fine
  }

  if (refs.length > 0 && !force) {
    return new Response(JSON.stringify({
      warning: true,
      references: refs,
      message: `This entry is referenced by ${refs.length} other entries. Send { "force": true } to delete anyway.`,
    }), {
      status: 409,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  await deleteEntryFiles(collection, slug);
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
