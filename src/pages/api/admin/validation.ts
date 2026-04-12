/**
 * API: GET /api/admin/validation — content validation scan
 * Returns completeness data for all collections
 */
export const prerender = false;
import type { APIRoute } from 'astro';
import { listEntries, type CollectionName } from '@/lib/admin/content-manager';

interface ValidationCheck {
  label: string;
  collection: CollectionName;
  total: number;
  missing: number;
  items: { slug: string; name: string }[];
}

interface CollectionSummary {
  collection: string;
  label: string;
  total: number;
  checks: ValidationCheck[];
  completeness: number; // 0-100
}

export const GET: APIRoute = async () => {
  if (!import.meta.env.DEV) {
    return new Response('Not found', { status: 404 });
  }

  try {
    const [bears, events, products, gallery] = await Promise.all([
      listEntries('bears'),
      listEntries('events'),
      listEntries('products'),
      listEntries('gallery'),
    ]);

    const summaries: CollectionSummary[] = [];

    // Bears checks
    const bearChecks: ValidationCheck[] = [
      buildCheck('Missing tagline', 'bears', bears, (e) => !e.frontmatter.tagline),
      buildCheck('Empty body (no narrative)', 'bears', bears, (e) => !e.body || e.body.trim().length === 0),
      buildCheck('Empty tags', 'bears', bears, (e) => !e.frontmatter.tags || e.frontmatter.tags.length === 0),
      buildCheck('No notes', 'bears', bears, (e) => !e.frontmatter.notes),
    ];
    summaries.push({
      collection: 'bears',
      label: 'Bears',
      total: bears.length,
      checks: bearChecks,
      completeness: calcCompleteness(bearChecks),
    });

    // Products checks
    const productChecks: ValidationCheck[] = [
      buildCheck('Missing tagline', 'products', products, (e) => !e.frontmatter.tagline),
      buildCheck('Empty body', 'products', products, (e) => !e.body || e.body.trim().length === 0),
      buildCheck('Missing "How It\'s Made"', 'products', products, (e) => !e.body || !e.body.includes('## How It\'s Made')),
      buildCheck('Missing materials', 'products', products, (e) => !e.frontmatter.materials),
    ];
    summaries.push({
      collection: 'products',
      label: 'Products',
      total: products.length,
      checks: productChecks,
      completeness: calcCompleteness(productChecks),
    });

    // Events checks
    const now = new Date();
    const pastEvents = events.filter((e) => {
      const d = e.frontmatter.date;
      return d && new Date(d) < now;
    });
    const eventChecks: ValidationCheck[] = [
      buildCheck('Missing tagline', 'events', events, (e) => !e.frontmatter.tagline),
      buildCheck('Empty body', 'events', events, (e) => !e.body || e.body.trim().length === 0),
      buildCheck('Past events missing recap', 'events', pastEvents, (e) => !e.body || !e.body.includes('## Recap')),
    ];
    summaries.push({
      collection: 'events',
      label: 'Events',
      total: events.length,
      checks: eventChecks,
      completeness: calcCompleteness(eventChecks),
    });

    // Gallery checks
    const galleryChecks: ValidationCheck[] = [
      buildCheck('Missing category', 'gallery', gallery, (e) => !e.frontmatter.category),
    ];
    summaries.push({
      collection: 'gallery',
      label: 'Gallery',
      total: gallery.length,
      checks: galleryChecks,
      completeness: calcCompleteness(galleryChecks),
    });

    // Overall completeness
    const allChecks = summaries.flatMap((s) => s.checks);
    const overallCompleteness = calcCompleteness(allChecks);

    return new Response(JSON.stringify({
      summaries,
      overallCompleteness,
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

function buildCheck(
  label: string,
  collection: CollectionName,
  entries: Array<{ slug: string; frontmatter: Record<string, any>; body: string }>,
  predicate: (entry: { slug: string; frontmatter: Record<string, any>; body: string }) => boolean,
): ValidationCheck {
  const missing = entries.filter(predicate);
  return {
    label,
    collection,
    total: entries.length,
    missing: missing.length,
    items: missing.map((e) => ({
      slug: e.slug,
      name: e.frontmatter.name || e.frontmatter.caption || e.slug,
    })),
  };
}

function calcCompleteness(checks: ValidationCheck[]): number {
  if (checks.length === 0) return 100;
  const totalFields = checks.reduce((acc, c) => acc + c.total, 0);
  if (totalFields === 0) return 100;
  const totalMissing = checks.reduce((acc, c) => acc + c.missing, 0);
  return Math.round(((totalFields - totalMissing) / totalFields) * 100);
}
