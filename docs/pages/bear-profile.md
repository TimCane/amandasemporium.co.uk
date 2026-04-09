# Page: Bear Profile

## Route

`/bears/[slug]`

## Rendering

Static (pre-rendered at build time via `getStaticPaths`)

## Purpose

Individual bear detail page. Tells the full story of one rescued bear — where it came from, its details, and where it ended up (if rehomed).

## User Stories

- As a visitor, I want to see a bear's full story including its rescue and rehoming journey.
- As a visitor, I want to see a large photo of the bear.
- As a visitor, I want to browse additional photos of the bear if available.
- As a visitor, I want to see where the bear was rescued from and rehomed to on a map.
- As a visitor, I want to discover related bears from the same location, event, or species.
- As a visitor, I want to navigate to other bears easily.

## Sections (top to bottom)

### 1. Bear Header / Photos

- Large hero photo from `picture` field (optimised, responsive)
- Bear name as heading
- Status badge: "Looking for a Home" or "Found Their Home"
- **Multiple photos:** If the bear has additional `photos`, the theme decides how to display them — hero + thumbnail gallery, carousel, scattered layout, etc. This is a theme concern.
- **Single-photo bears** should look intentionally complete, not like something is missing. The design should not imply a gallery is expected when there is only one photo.

### 2. Narrative

- If the bear's markdown body is present, render it as the full narrative (2-3 paragraphs telling the bear's story)
- If the body is empty, auto-generate a summary from structured data (species, rescue location, status, etc.)
- The `tagline` frontmatter field is used for cards and SEO (short one-liner); it is not displayed in this section
- Notes field displayed separately if present (optional fun fact)

### 3. Bear Details

| Field | Display |
| ----- | ------- |
| Species | e.g., "Bear", "Cat", "Dog" |
| Brand | e.g., "Ty", "Build-A-Bear" |
| Tags | List of tags |
| Notes | Optional fun fact (if present) |

### 4. Rescue Story

- **Rescued from:** location name, date (formatted with `Intl.DateTimeFormat`)
- **Event:** event name (if applicable), with link to event
- **Rehomed to:** location name, date (if rehomed)

### 5. Journey Map

- Small Leaflet map showing this bear's journey
- Markers: rescue location, event location (if applicable), rehome location (if applicable)
- Seeded-random wandering path between points
- See `features/bear-map.md` for technical details

### 6. Related Bears

- Bears sharing the same rescue location, event, or species
- Displayed as a small card row (photo, name, status)
- Links to each related bear's profile page
- If no related bears found, section is hidden

### 7. Navigation

- "Back to bears" link → `/bears`
- Optional: previous/next bear links

## Content Collections Used

- `bears` — the specific bear entry
- (brand and species are Zod enum values, not collection references)
- `locations` — resolved location references (rescue, rehome)
- `events` — resolved event reference (if applicable)

## Components Used

- Bear map (single-bear variant)
- Status badge
- Page header / banner
- Image gallery / photo display (theme-dependent)
- Bear card (compact, for related bears row)

## Layout

Uses `page.layout.astro`

## Copy Needed

- [ ] Status badge labels
- [ ] Section headings

## SEO

- Title: "{Bear Name} | Amanda's Emporium"
- Description: uses `tagline` if present, otherwise auto-generated from structured data ("{Bear Name} — a rescued {species} from {rescue location}")
- Open Graph: bear photo, name, tagline
- JSON-LD: could use `Thing` or custom schema
