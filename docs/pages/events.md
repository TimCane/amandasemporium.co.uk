# Page: Events

## Route

`/events`

## Rendering

SSR (server-rendered per request)

## Purpose

Show where to find Amanda's Emporium at craft markets and fairs. Default view shows upcoming events. Past events available as an archive for credibility.

## User Stories

- As a potential customer, I want to see upcoming events so I know when and where to visit the stall.
- As a visitor, I want to download an event to my calendar so I don't forget.
- As a visitor, I want to see past events to understand how established the business is.
- As a visitor, I want to filter past events by year.

## Query Parameters

| Param | Type | Default | Values |
| ----- | ---- | ------- | ------ |
| `view` | string | `upcoming` | `upcoming`, `past` |
| `year` | number | (current year) | Any year with events (only for `past` view) |
| `page` | number | `1` | Positive integer (only for `past` view) |

Example URLs:

- `/events` — upcoming events
- `/events?view=past` — past events, current year
- `/events?view=past&year=2023&page=2` — past events from 2023, page 2

## Sections (top to bottom)

### 1. Page Header

- Heading: "Events"
- Subheading: "Find us at craft markets and fairs across the UK" (copy TBD)

### 2. View Tabs

- Two tabs: Upcoming / Past
- Active tab highlighted per theme

### 3a. Upcoming Events View

- List of upcoming events sorted by date (nearest first)
- Each event shows:
  - Event name
  - Date (formatted)
  - Time
  - Venue name and location
  - Tagline (auto-generated if empty)
  - Website link (external)
  - "Add to calendar" button (downloads .ics file)
- If no upcoming events: friendly message ("We're planning our next event — check back soon!")
- No pagination needed (likely only a handful of upcoming events)

### 3b. Past Events View

- Year filter: buttons for each year that has events (e.g., 2017-2025)
- Paginated list of events for selected year, sorted by date (newest first)
- Each event shows same info as upcoming (minus "add to calendar")
- Event count for the selected year

### 4. Pagination (past view only)

- Previous / Next with page numbers
- Preserves view and year filters

## Content Collections Used

- `events` — filtered by date (future/past) and year, sorted, paginated
- `locations` — resolved location references for display

## Components Used

- Filter tabs (view toggle)
- Event card
- Event list
- Pagination
- Page header / banner

## Layout

Uses `page.layout.astro`

## Copy Needed

- [ ] Page subheading
- [ ] Empty state messages (no upcoming events)
- [ ] Year filter labels

## SEO

- Title: "Events | Amanda's Emporium"
- Description: "Find Amanda's Emporium at craft markets and fairs across the UK"
- Open Graph: stall photo or generic events image
- JSON-LD: `Event` schema for upcoming events (Google can show "Events near you")
- Pagination: `rel="prev"` / `rel="next"` links (past view)
