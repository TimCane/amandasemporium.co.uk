# Page: Bears Listing

## Route

`/bears`

## Rendering

SSR (server-rendered per request)

## Purpose

Browse all rescued bears with filtering by group, alphabet, and pagination. The main entry point to the bears section.

## User Stories

- As a visitor, I want to browse all rescued bears so I can see the full collection.
- As a visitor, I want to filter bears by status (looking for home / found their home) so I can find bears available for rehoming.
- As a visitor, I want to jump to bears starting with a specific letter so I can find a bear by name.
- As a visitor, I want paginated results so the page loads quickly with 400+ bears.
- As a visitor, I want to share a filtered view (e.g., all bears starting with "B") via URL.

## Query Parameters

| Param | Type | Default | Values |
| ----- | ---- | ------- | ------ |
| `group` | string | `all` | `all`, `looking`, `found` |
| `letter` | string | (none) | `A`-`Z` |
| `page` | number | `1` | Positive integer |

Example URLs:

- `/bears` — all bears, page 1
- `/bears?group=looking` — bears looking for a home
- `/bears?group=found&letter=B&page=2` — rehomed bears starting with B, page 2

## Sections (top to bottom)

### 1. Page Header

- Heading: changes based on group filter
  - `all`: "Our Bears"
  - `looking`: "Bears Looking for a Home"
  - `found`: "Bears Who Found Their Home"
- Subheading: bear count for current filter (e.g., "127 bears")

### 2. Group Filter Tabs

- Three tabs: All / Looking for a Home / Found Their Home
- Active tab highlighted per theme
- Clicking a tab navigates to `/bears?group={value}` (resets letter and page)

### 3. Alphabet Navigation

- Row of letter buttons A-Z
- Only letters with bears in the current group are active/clickable
- Inactive letters are dimmed/disabled
- Clicking navigates to `/bears?group={current}&letter={letter}`
- A "clear" option to remove the letter filter

### 4. Bears Grid

- Card grid of bears (~24 per page)
- Each card shows: image, name, status badge, species
- Cards link to `/bears/{slug}`
- Responsive: 1 col mobile, 2 cols tablet, 3-4 cols desktop

### 5. Pagination

- Previous / Next buttons
- Page numbers
- Shows current page and total pages
- Preserves current group and letter filters in pagination links

### 6. Section Links

- Links to related pages: "View on Map" → `/bears/map`, "View Timeline" → `/bears/timeline`

## Content Collections Used

- `bears` — filtered by group and letter, paginated
- (species is a Zod enum value on each bear, not a separate collection)

## Components Used

- Filter tabs
- Alphabet nav
- Bear card
- Pagination
- Page header / banner

## Layout

Uses `page.layout.astro`

## Copy Needed

- [ ] Group headings and descriptions
- [ ] Empty state message (no bears match filter)

## SEO

- Title: "Our Bears | Amanda's Emporium" (varies by filter)
- Description: "Browse over 400 rescued bears at Amanda's Emporium"
- Open Graph: representative bear image
- Pagination: `rel="prev"` / `rel="next"` links
