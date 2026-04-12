# Page: Bear Map

## Route

`/bears/map`

## Rendering

Static (pre-rendered at build time)

## Purpose

An interactive full-page map showing all bear journeys — rescue locations, event locations, and rehoming locations with paths connecting them.

## User Stories

- As a visitor, I want to see all bear locations on a map to understand the geographic spread of rescues.
- As a visitor, I want to click on a marker to see which bear it represents and link to their profile.
- As a visitor, I want to see the journey paths between rescue and rehome locations.

## Sections (top to bottom)

### 1. Page Header

- Heading: "Bear Map"
- Brief description: "See where our bears have been rescued from and rehomed to"

### 2. Map

- Full-width Leaflet map (takes up most of the viewport)
- Shows all bears with location data
- Marker types (colour-coded per theme):
  - Rescue location marker
  - Event location marker
  - Rehome location marker
- Click a marker cluster or individual marker to see bear name(s)
- Popup links to `/bears/{slug}`
- Seeded-random wandering paths between points (carried over from old site)
- Map centred on UK by default (most locations are UK-based)

### 3. Legend

- Colour key explaining marker types
- Could be an overlay on the map or below it

## Content Collections Used

- `bears` — all bears with location data
- `locations` — lat/lng for rescue and rehome locations
- `events` — lat/lng for event locations

## Components Used

- Bear map (full-map variant — all bears)

## Layout

Uses `page.layout.astro`

## Technical Notes

- All bear/location data is serialised as JSON at build time and embedded in the page
- Leaflet initialised client-side via `<script>` tag
- See `features/bear-map.md` for implementation details
- Consider marker clustering for areas with many bears (Leaflet.markercluster)

## Copy Needed

- [ ] Page description
- [ ] Legend labels

## SEO

- Title: "Bear Map | Amanda's Emporium"
- Description: "Interactive map of all rescued bear journeys"
- Open Graph: screenshot of map or generic bears image
