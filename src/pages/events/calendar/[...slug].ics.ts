import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, getEntry } from 'astro:content';
import { createEvent } from 'ics';

/**
 * Parse a 12-hour time string like "2pm", "10:30am", "12pm" into 24-hour { hours, minutes }.
 * Returns null if parsing fails.
 */
function parseTime(raw: string): { hours: number; minutes: number } | null {
  const match = raw.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/i);
  if (!match) return null;

  let hours = parseInt(match[1], 10);
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const period = match[3].toLowerCase();

  if (period === 'am' && hours === 12) hours = 0;
  if (period === 'pm' && hours !== 12) hours += 12;

  return { hours, minutes };
}

/**
 * Parse the free-text time field (e.g. "12pm - 5pm", "10am - 4pm", "All Day", "").
 * Returns start/end times or null for all-day / unparseable.
 */
function parseTimeRange(time: string): {
  start: { hours: number; minutes: number };
  end: { hours: number; minutes: number } | null;
} | null {
  if (!time || time.trim().toLowerCase() === 'all day') return null;

  // Split on common separators: " - ", "-", " to "
  const parts = time.split(/\s*[-–]\s*|\s+to\s+/i).map(s => s.trim());
  if (parts.length < 1) return null;

  const start = parseTime(parts[0]);
  if (!start) return null;

  const end = parts.length >= 2 ? parseTime(parts[1]) : null;
  return { start, end };
}

/**
 * Calculate duration in hours between two time objects, minimum 1 hour.
 */
function durationHours(
  start: { hours: number; minutes: number },
  end: { hours: number; minutes: number },
): number {
  const diff = (end.hours * 60 + end.minutes) - (start.hours * 60 + start.minutes);
  return diff > 0 ? Math.ceil(diff / 60) : 5; // fallback 5 hours if nonsensical
}

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getCollection('events');
  return events.map(event => ({
    params: { slug: event.slug },
    props: { event },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const event = (props as any).event;
  if (!event) {
    return new Response('Not found', { status: 404 });
  }

  const location = await getEntry(event.data.location.location);
  const date = new Date(event.data.date);

  const timeRange = parseTimeRange(event.data.time);

  const eventData: Parameters<typeof createEvent>[0] = {
    title: event.data.name,
    description: event.data.info || `${event.data.name} at ${event.data.location.name}`,
    location: event.data.location.name,
    url: event.data.website || undefined,
    geo: location
      ? { lat: location.data.latitude, lon: location.data.longitude }
      : undefined,
    start: timeRange
      ? [date.getFullYear(), date.getMonth() + 1, date.getDate(), timeRange.start.hours, timeRange.start.minutes]
      : [date.getFullYear(), date.getMonth() + 1, date.getDate()],
    duration: timeRange
      ? timeRange.end
        ? { hours: durationHours(timeRange.start, timeRange.end) }
        : { hours: 5 }
      : { days: 1 },
  };

  const { error, value } = createEvent(eventData);
  if (error || !value) {
    return new Response('Error generating calendar event', { status: 500 });
  }

  return new Response(value, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="${event.slug}.ics"`,
    },
  });
};
