import type { CollectionEntry } from 'astro:content';

/** The valid status filter values for the bears listing page. */
export type BearStatus = 'all' | 'looking' | 'found';

// Keep BearGroup as alias for backwards compat with other pages
export type BearGroup = BearStatus;

/** All filter params for the bears listing page. */
export interface BearFilters {
  status: BearStatus;
  species?: string;
  brand?: string;
  letter?: string;
  page?: number;
}

/** Parse and validate a status query parameter, defaulting to 'all'. */
export function parseBearStatus(value: string | null): BearStatus {
  if (value === 'looking' || value === 'found') return value;
  return 'all';
}

// Keep old name working
export const parseBearGroup = parseBearStatus;

/** Returns whether a bear is "looking for a home" (not rehomed). */
export function isLooking(bear: CollectionEntry<'bears'>): boolean {
  return !bear.data.rehomed;
}

/** Returns whether a bear has "found their home" (rehomed). */
export function isFound(bear: CollectionEntry<'bears'>): boolean {
  return !!bear.data.rehomed;
}

/** Filter bears by status. */
export function filterByStatus(
  bears: CollectionEntry<'bears'>[],
  status: BearStatus,
): CollectionEntry<'bears'>[] {
  switch (status) {
    case 'looking':
      return bears.filter(isLooking);
    case 'found':
      return bears.filter(isFound);
    default:
      return bears;
  }
}

// Keep old name working
export const filterByGroup = filterByStatus;

/** Filter bears by species slug. */
export function filterBySpecies(
  bears: CollectionEntry<'bears'>[],
  species: string,
): CollectionEntry<'bears'>[] {
  return bears.filter((b) => b.data.species === species);
}

/** Filter bears by brand slug. */
export function filterByBrand(
  bears: CollectionEntry<'bears'>[],
  brand: string,
): CollectionEntry<'bears'>[] {
  return bears.filter((b) => b.data.brand === brand);
}

/** Human-friendly label for each status. */
export function statusLabel(status: BearStatus): string {
  switch (status) {
    case 'looking':
      return 'Looking for a Home';
    case 'found':
      return 'Found Their Home';
    default:
      return 'The Bears';
  }
}

// Keep old name working
export const groupLabel = statusLabel;

/** Intro paragraph for each status. */
export function statusIntro(status: BearStatus): string {
  switch (status) {
    case 'looking':
      return 'These bears are still with me, each one cleaned up and checked over. The right person just hasn\'t come along yet.';
    case 'found':
      return 'These bears have already found new homes. Have a look through — you might spot a familiar face.';
    default:
      return 'Every bear here has been rescued from a car boot sale, charity shop, or market stall and given a proper clean-up. Some have found new homes already, and some are still waiting.';
  }
}

// Keep old name working
export const groupIntro = statusIntro;

/** Convert a slug like 'build-a-bear' to a display label like 'Build a Bear'. */
export function slugToLabel(slug: string): string {
  return slug
    .split('-')
    .map((word) => {
      // Keep short words lowercase unless they're the first word
      if (['a', 'and', 'the', 'of', 'in', 'on', 'for', 'to', 'ltd'].includes(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    // Capitalise first character regardless
    .replace(/^./, (c) => c.toUpperCase());
}

/** Build a bears URL from filter params. */
export function buildBearsUrl(params: {
  status?: string;
  group?: string; // legacy alias
  species?: string;
  brand?: string;
  letter?: string;
  page?: number;
}): string {
  const searchParams = new URLSearchParams();
  const status = params.status || params.group;
  if (status && status !== 'all') {
    searchParams.set('status', status);
  }
  if (params.species) {
    searchParams.set('species', params.species);
  }
  if (params.brand) {
    searchParams.set('brand', params.brand);
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

/** Get unique sorted values of a field from a list of bears. */
export function getUniqueValues(
  bears: CollectionEntry<'bears'>[],
  field: 'species' | 'brand',
): string[] {
  const values = new Set(bears.map((b) => b.data[field]));
  return [...values].sort();
}
