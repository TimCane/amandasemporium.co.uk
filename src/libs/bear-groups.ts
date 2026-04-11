import type { CollectionEntry } from 'astro:content';

/** The valid group filter values for the bears listing page. */
export type BearGroup = 'all' | 'looking' | 'found';

/** Parse and validate a group query parameter, defaulting to 'all'. */
export function parseBearGroup(value: string | null): BearGroup {
  if (value === 'looking' || value === 'found') return value;
  return 'all';
}

/** Returns whether a bear is "looking for a home" (not rehomed). */
export function isLooking(bear: CollectionEntry<'bears'>): boolean {
  return !bear.data.rehomed;
}

/** Returns whether a bear has "found their home" (rehomed). */
export function isFound(bear: CollectionEntry<'bears'>): boolean {
  return !!bear.data.rehomed;
}

/** Filter bears by group. */
export function filterByGroup(
  bears: CollectionEntry<'bears'>[],
  group: BearGroup,
): CollectionEntry<'bears'>[] {
  switch (group) {
    case 'looking':
      return bears.filter(isLooking);
    case 'found':
      return bears.filter(isFound);
    default:
      return bears;
  }
}

/** Human-friendly label for each group. */
export function groupLabel(group: BearGroup): string {
  switch (group) {
    case 'looking':
      return 'Looking for a Home';
    case 'found':
      return 'Found Their Home';
    default:
      return 'The Bears';
  }
}

/** Intro paragraph for each group. */
export function groupIntro(group: BearGroup): string {
  switch (group) {
    case 'looking':
      return 'These bears are still with me, each one cleaned up and checked over. The right person just hasn\'t come along yet.';
    case 'found':
      return 'These bears have already found new homes. Have a look through — you might spot a familiar face.';
    default:
      return 'Every bear here has been rescued from a car boot sale, charity shop, or market stall and given a proper clean-up. Some have found new homes already, and some are still waiting.';
  }
}

/** Build a URL preserving group (and optionally letter) params. */
export function buildBearsUrl(params: {
  group?: string;
  letter?: string;
  page?: number;
}): string {
  const searchParams = new URLSearchParams();
  if (params.group && params.group !== 'all') {
    searchParams.set('group', params.group);
  }
  if (params.letter) {
    searchParams.set('letter', params.letter);
  }
  if (params.page && params.page > 1) {
    searchParams.set('page', String(params.page));
  }
  const qs = searchParams.toString();
  return qs ? `/bears?${qs}` : '/bears';
}
