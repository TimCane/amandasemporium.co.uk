/**
 * API: POST /api/admin/[collection]/upload — upload and process image
 * Expects multipart form data with fields: slug, image (File), suffix (optional)
 */
export const prerender = false;
import type { APIRoute } from 'astro';
import { processAndSaveImage, type CollectionName } from '@/lib/admin/content-manager';

const VALID_COLLECTIONS: CollectionName[] = ['bears', 'events', 'products', 'gallery', 'locations'];

export const POST: APIRoute = async ({ params, request }) => {
  if (!import.meta.env.DEV) {
    return new Response('Not found', { status: 404 });
  }

  const collection = params.collection as CollectionName;
  if (!VALID_COLLECTIONS.includes(collection)) {
    return new Response(JSON.stringify({ error: 'Invalid collection' }), { status: 400 });
  }

  const formData = await request.formData();
  const slug = formData.get('slug') as string;
  const image = formData.get('image') as File;
  const suffix = formData.get('suffix') as string | null;

  if (!slug || !image) {
    return new Response(JSON.stringify({ error: 'Missing slug or image' }), { status: 400 });
  }

  const buffer = Buffer.from(await image.arrayBuffer());
  const relativePath = await processAndSaveImage(collection, slug, buffer, image.name, suffix || undefined);

  return new Response(JSON.stringify({ success: true, path: relativePath }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
