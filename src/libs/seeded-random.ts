/**
 * Seeded pseudo-random number generator.
 *
 * Uses a simple hash-based PRNG seeded from a string.
 * Produces deterministic sequences — the same seed always yields the
 * same series of numbers.  Used for bear-map wandering paths so they
 * look organic yet stay consistent between page loads.
 */

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return Math.abs(hash);
}

/**
 * Returns a function that, on each call, produces the next
 * pseudo-random number in [0, 1).
 */
export function seededRandom(seed: string): () => number {
  let state = hashString(seed);
  return () => {
    // xorshift32
    state ^= state << 13;
    state ^= state >> 17;
    state ^= state << 5;
    return Math.abs(state % 1_000_000) / 1_000_000;
  };
}

/**
 * Returns a new array with items shuffled using a seeded PRNG.
 * Deterministic — the same seed always produces the same order.
 */
export function seededShuffle<T>(items: T[], seed: string): T[] {
  const rng = seededRandom(seed);
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
