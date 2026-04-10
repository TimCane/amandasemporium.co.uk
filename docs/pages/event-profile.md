# Page: Event Profile

## Route

`/events/[slug]`

## Rendering

Static (pre-rendered at build time via `getStaticPaths`)

## Purpose

Individual event detail page. Upcoming events show a rich description of what to expect, a map showing the venue, and an "Add to calendar" button. Past events show a recap, photos, and what happened. The distinction between upcoming and past is computed from the event date vs the current date.

## User Stories

- As a visitor, I want to see full details about an upcoming event so I can decide whether to attend.
- As a visitor, I want to see the event location on a map so I can find my way there.
- As a visitor, I want to add an upcoming event to my calendar so I don't forget.
- As a visitor, I want to see how a past event went, including photos and a recap.
- As a visitor, I want to see which bears were shown at a particular event.

## Sections (top to bottom)

### 1. Event Header

- Event name as heading
- Date (formatted with `Intl.DateTimeFormat`)
- Time
- Location name

### 2. Event Description (upcoming events)

- Rendered from the markdown body if present
- Rich description of what to expect at this event
- If the body is empty, no narrative section is shown
- The `info` frontmatter field (visitor info like parking, tickets) is displayed in the event header, not in this section

### 3. Venue Map (upcoming events)

- Leaflet map with a single marker showing the venue location
- Location resolved from the `location.location` reference
- Zoom level appropriate for finding the venue

### 4. Event Links (upcoming events)

- Website link (external, opens in new tab)
- "Add to calendar" button — links to `/events/calendar/[slug].ics`

### 5. Event Recap (past events)

- Rendered from a `## Recap` heading in the markdown body, if present
- Write-up of how the event went, highlights, stories
- If no `## Recap` heading in the body, show the main body content instead with a note that it's a past event

### 6. Event Photos (past events)

- Photos from the `recapPhotos` field if present
- Theme decides display format (gallery, grid, carousel, etc.)

### 7. Bears at This Event

- Bears whose `event` field references this event
- Displayed as a small card row (photo, name, status)
- Heading: "Bears at this event" or similar
- If no bears linked, section is hidden

### 8. Location Details

- Full location name and address
- Map (same as venue map above, or combined into one map section)

## Content Collections Used

- `events` — the specific event entry
- `locations` — resolved location reference (for map coordinates)
- `bears` — filtered by `event` reference matching this event
- `gallery` — filtered by `relatedEvent` matching this event

## Components Used

- Leaflet map (single marker variant)
- Bear card (compact, for bears at this event)
- Image gallery (for recap photos)
- Page header / banner
- "Add to calendar" button

## Layout

Uses `page.layout.astro`

## Copy Needed

None — all content comes from the content collection.

## Notes

- Whether an event is upcoming or past is computed from `date` vs the current date at build time. Events near the boundary may need a rebuild after the event passes, or SSR can handle the transition.
- The page layout should adapt gracefully: upcoming events emphasise the preview/planning sections, past events emphasise the recap/retrospective sections.

## SEO

- Title: "{Event Name} | Amanda's Emporium"
- Description: "{Event Name} — {date} at {location name}"
- Open Graph: event photo (if available from recap or gallery), name, info
- JSON-LD: `Event` schema for upcoming events (with startDate, location, name)
