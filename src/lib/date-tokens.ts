/**
 * Token replacement for relative dates in content.
 * Tokens like {RESCUED_DATE_AGO} are written by AI generation and replaced
 * at render time so they never go stale.
 */

const NUMBER_WORDS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen', 'twenty',
];

function toWords(n: number): string {
  if (n >= 0 && n <= 20) return NUMBER_WORDS[n];
  return String(n);
}

/** Compute a conversational relative time string from a date to now. */
export function relativeTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30.44);
  const diffYears = Math.floor(diffDays / 365.25);

  if (diffDays < 30) return 'just recently';
  if (diffMonths < 12) return 'a few months';
  if (diffYears === 1) return 'about a year';
  if (diffYears < 10) return `about ${toWords(diffYears)} years`;
  return `over ${toWords(diffYears)} years`;
}

/** Token pattern: {RESCUED_DATE_AGO} or {REHOMED_DATE_AGO} */
const TOKEN_RE = /\{(RESCUED_DATE_AGO|REHOMED_DATE_AGO)\}/g;

interface DateFields {
  rescued?: { date?: string };
  rehomed?: { date?: string };
}

/** Replace date tokens in a string using frontmatter date fields. */
export function replaceDateTokens(text: string, frontmatter: DateFields): string {
  return text.replace(TOKEN_RE, (match, token) => {
    let dateStr: string | undefined;

    if (token === 'RESCUED_DATE_AGO') {
      dateStr = frontmatter.rescued?.date;
    } else if (token === 'REHOMED_DATE_AGO') {
      dateStr = frontmatter.rehomed?.date;
    }

    if (!dateStr) return match;

    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return match;

    return relativeTimeAgo(date);
  });
}
