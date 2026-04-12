/**
 * Shared date formatting utilities.
 * All formatters use the 'en-GB' locale for consistency across the site.
 */

const locale = 'en-GB';

/** e.g. "Sat, 12 April 2025" */
export function formatDate(date: Date): string {
  return date.toLocaleDateString(locale, {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** e.g. "12 Apr" */
export function formatShortDate(date: Date): string {
  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
  });
}

/** e.g. "Saturday, 12 April 2025" */
export function formatLongDate(date: Date): string {
  return date.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** e.g. "12 April 2025" — no weekday */
export function formatMediumDate(date: Date): string {
  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Returns ISO date string (YYYY-MM-DD) for use in datetime attributes. */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
