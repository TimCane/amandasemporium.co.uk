import type { CollectionEntry } from 'astro:content';

/** Full A-Z alphabet as an array of uppercase single characters. */
export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/**
 * Returns a sorted array of uppercase letters that have at least one bear
 * whose name starts with that letter.
 */
export function getActiveLetters(bears: CollectionEntry<'bears'>[]): string[] {
  const letters = new Set(bears.map((b) => b.data.name[0].toUpperCase()));
  return [...letters].sort();
}

/**
 * Filters bears whose name starts with the given letter (case-insensitive).
 */
export function filterByLetter(
  bears: CollectionEntry<'bears'>[],
  letter: string,
): CollectionEntry<'bears'>[] {
  const upper = letter.toUpperCase();
  return bears.filter((b) => b.data.name[0].toUpperCase() === upper);
}
