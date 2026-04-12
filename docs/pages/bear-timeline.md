# Page: Bear Timeline

## Route

`/bears/timeline`

## Rendering

Static (pre-rendered at build time)

## Purpose

A chronological view of all bear rescues and rehoming events. Tells the story of Amanda's bear rescue journey over time.

## User Stories

- As a visitor, I want to see the history of bear rescues in order to understand the scope of the mission.
- As a visitor, I want to click on a bear in the timeline to see their full profile.
- As a visitor, I want to see both rescue and rehoming events interleaved chronologically.

## Sections (top to bottom)

### 1. Page Header

- Heading: "Bear Timeline"
- Subheading: "The story of our rescues" or similar (copy TBD)
- Stats: total bears rescued, total rehomed, date range

### 2. Timeline

- Vertical timeline layout
- Each entry shows:
  - Date (formatted)
  - Bear name (linked to profile)
  - Bear photo (thumbnail)
  - Event type: "Rescued" or "Rehomed" (badge)
  - Location name
- Sorted chronologically (newest first, or oldest first — TBD)
- Visual timeline line connecting entries (styled per theme)

### 3. Navigation

- "Back to bears" link → `/bears`
- "View on map" link → `/bears/map`

## Content Collections Used

- `bears` — all bears, extracting rescue dates and rehome dates
- `locations` — location names for display

## Components Used

- Bear timeline (page-specific component)

## Layout

Uses `page.layout.astro`

## Technical Notes

- Timeline entries are generated from bears collection:
  - Each bear produces a "rescued" entry (with rescue date and location)
  - If rehomed, also produces a "rehomed" entry (with rehome date and location)
  - Both sorted into a single chronological list
- With 400+ bears producing 500+ timeline entries, consider pagination or lazy loading
- Alternatively, group by month/year for a more compact view

## Copy Needed

- [ ] Page description
- [ ] Timeline entry labels

## SEO

- Title: "Bear Timeline | Amanda's Emporium"
- Description: "Chronological timeline of all bear rescues and rehoming"
