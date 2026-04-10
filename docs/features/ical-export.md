# Feature: iCalendar Export

## Overview

Each event can be downloaded as an `.ics` file for adding to a calendar app (Google Calendar, Apple Calendar, Outlook, etc.).

## Route

`GET /events/calendar/[...slug].ics`

## Rendering

SSR (or could be static via `getStaticPaths` — either works)

## Implementation

Uses the `ics` npm library to generate valid iCalendar format:

```typescript
// pages/events/calendar/[...slug].ics.ts
import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { createEvent } from 'ics';

export const GET: APIRoute = async ({ params }) => {
  const event = await getEntry('events', params.slug);
  if (!event) return new Response('Not found', { status: 404 });

  const location = await getEntry('locations', event.data.location.location);
  const date = new Date(event.data.date);

  const { value } = createEvent({
    title: event.data.name,
    description: event.data.info || getBodyExcerpt(event),
    location: `${event.data.location.name}`,
    start: [date.getFullYear(), date.getMonth() + 1, date.getDate()],
    url: event.data.website,
    // Duration based on time field parsing, or default to all-day
  });

  return new Response(value, {
    headers: {
      'Content-Type': 'text/calendar',
      'Content-Disposition': `attachment; filename="${params.slug}.ics"`,
    },
  });
};
```

## UI

On the events listing page, each upcoming event card has an "Add to calendar" button/link that points to `/events/calendar/{event-slug}.ics`.

## Edge Cases

- **Time parsing:** The `time` field in events is a free-text string (e.g., "12pm - 5pm"). Parse start/end times if possible, otherwise create an all-day event.
- **Missing event:** Return 404.

## Files Involved

- `src/pages/events/calendar/[...slug].ics.ts` — API endpoint
- `src/components/events/event-card.astro` — "Add to calendar" button
