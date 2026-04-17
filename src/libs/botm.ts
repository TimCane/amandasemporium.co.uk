/**
 * Bear of the Month — shared selection logic.
 *
 * Deterministic, seeded-random selection that accounts for which bears
 * existed (were rescued) and were still looking for a home in each month.
 *
 * Used by both the homepage (current month) and the BOTM archive page
 * (full history back to the first rescue).
 */

import { seededRandom } from './seeded-random';

interface BearEntry {
  slug: string;
  data: {
    name: string;
    rescued: { date: Date };
    rehomed?: { date: Date };
    species: string;
    brand: string;
    tags?: string[];
    [key: string]: unknown;
  };
}

export interface BotmEntry {
  /** YYYY-MM string for this month */
  month: string;
  /** The selected bear */
  bear: BearEntry;
  /** Index into the reason templates array */
  reasonIndex: number;
}

/**
 * Returns the YYYY-MM string for a Date.
 */
function toMonthKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

/**
 * Returns the next month's YYYY-MM string.
 */
function nextMonth(monthKey: string): string {
  const [y, m] = monthKey.split('-').map(Number);
  if (m === 12) return `${y + 1}-01`;
  return `${y}-${String(m + 1).padStart(2, '0')}`;
}

/**
 * Checks whether monthA <= monthB (both as YYYY-MM strings).
 */
function monthLte(a: string, b: string): boolean {
  return a <= b;
}

/**
 * Get all YYYY-MM keys from `start` up to and including `end`.
 */
function getMonthRange(start: string, end: string): string[] {
  const months: string[] = [];
  let current = start;
  while (monthLte(current, end)) {
    months.push(current);
    current = nextMonth(current);
  }
  return months;
}

/**
 * Get the eligible bears for a given month.
 *
 * A bear is eligible if they were available at the start of the month — i.e.
 * already rescued by the 1st and not yet rehomed before the 1st.
 *
 * A bear is eligible if:
 * - rescued.date <= 1st of this month (they'd arrived by the start of the month)
 * - rehomed.date is absent, OR rehomed.date >= 1st of this month (they hadn't
 *   already been rehomed before the month began)
 */
function getEligibleBears(allBears: BearEntry[], monthKey: string): BearEntry[] {
  const [y, m] = monthKey.split('-').map(Number);
  const startOfMonth = new Date(y, m - 1, 1);

  return allBears.filter((bear) => {
    if (bear.data.rescued.date > startOfMonth) return false;

    if (bear.data.rehomed) {
      if (bear.data.rehomed.date < startOfMonth) return false;
    }

    return true;
  });
}

/**
 * Select the Bear of the Month for a single month.
 */
function selectBotm(
  eligibleBears: BearEntry[],
  monthKey: string,
  reasonCount: number,
): { bear: BearEntry; reasonIndex: number } | null {
  if (eligibleBears.length === 0) return null;

  const rng = seededRandom(monthKey);
  const bearIndex = Math.floor(rng() * eligibleBears.length);
  const reasonIndex = Math.floor(rng() * reasonCount);

  return { bear: eligibleBears[bearIndex], reasonIndex };
}

/**
 * Generate the full BOTM history from the first rescue to the target month.
 *
 * Returns entries in chronological order (earliest first).
 */
export function generateBotmHistory(
  allBears: BearEntry[],
  upToMonth: Date,
  reasonCount: number,
): BotmEntry[] {
  // Find the earliest rescue date
  const rescueDates = allBears.map((b) => b.data.rescued.date);
  const earliest = new Date(Math.min(...rescueDates.map((d) => d.getTime())));

  const startMonth = toMonthKey(earliest);
  const endMonth = toMonthKey(upToMonth);
  const months = getMonthRange(startMonth, endMonth);

  const entries: BotmEntry[] = [];

  for (const monthKey of months) {
    const eligible = getEligibleBears(allBears, monthKey);
    const result = selectBotm(eligible, monthKey, reasonCount);
    if (result) {
      entries.push({
        month: monthKey,
        bear: result.bear,
        reasonIndex: result.reasonIndex,
      });
    }
  }

  return entries;
}

/**
 * Get the Bear of the Month for a specific month.
 */
export function getBotmForMonth(
  allBears: BearEntry[],
  month: Date,
  reasonCount: number,
): BotmEntry | null {
  const monthKey = toMonthKey(month);
  const eligible = getEligibleBears(allBears, monthKey);
  const result = selectBotm(eligible, monthKey, reasonCount);
  if (!result) return null;
  return { month: monthKey, bear: result.bear, reasonIndex: result.reasonIndex };
}

/**
 * Interpolate a reason template with bear data.
 * Replaces {species} placeholder.
 */
export function interpolateReason(template: string, bear: BearEntry): string {
  return template.replace(/\{species\}/g, bear.data.species);
}
