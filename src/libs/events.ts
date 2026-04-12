/**
 * Shared event filtering helpers.
 * Encodes the business rules for what "upcoming" and "past" mean.
 */

import type { CollectionEntry } from 'astro:content';

/** Returns upcoming events sorted by date ascending (soonest first). */
export function getUpcomingEvents(
  events: CollectionEntry<'events'>[],
  now: Date = new Date(),
): CollectionEntry<'events'>[] {
  return events
    .filter((e) => e.data.date >= now)
    .sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
}

/** Returns past events sorted by date descending (most recent first). */
export function getPastEvents(
  events: CollectionEntry<'events'>[],
  now: Date = new Date(),
): CollectionEntry<'events'>[] {
  return events
    .filter((e) => e.data.date < now)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
