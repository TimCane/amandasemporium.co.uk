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
