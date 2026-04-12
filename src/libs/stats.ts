/**
 * Compute site-wide stats from content collections.
 * Used by the homepage and about page.
 */

import type { CollectionEntry } from 'astro:content';

export interface SiteStats {
  totalBears: number;
  rehomedBears: number;
  totalEvents: number;
  startYear: number;
}

export function computeStats(
  bears: CollectionEntry<'bears'>[],
  events: CollectionEntry<'events'>[],
): SiteStats {
  return {
    totalBears: bears.length,
    rehomedBears: bears.filter((b) => b.data.rehomed).length,
    totalEvents: events.length,
    startYear: 2017,
  };
}
