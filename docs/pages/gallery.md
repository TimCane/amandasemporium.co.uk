# Page: Gallery

## Route

`/gallery`

## Rendering

SSR (server-rendered per request)

## Purpose

A curated highlights reel — best bears, best products, best market moments. Not pulled from social media. Managed as content entries with optional cross-links to related bears, products, or events.

## User Stories

- As a visitor, I want to browse beautiful photos of bears, products, and market moments.
- As a visitor, I want to click on a gallery image to see the related bear or product page.
- As a visitor, I want to filter gallery items by category (bears, products, markets, etc.).

## Query Parameters

| Param | Type | Default | Values |
| ----- | ---- | ------- | ------ |
| `category` | string | (none — show all) | Category tag slug |
| `page` | number | `1` | Positive integer |

Example URLs:

- `/gallery` — all gallery items
- `/gallery?category=bears` — bear photos only
- `/gallery?category=markets&page=2` — market photos, page 2

## Sections (top to bottom)

### 1. Page Header

- Heading: "Gallery"
- Subheading (copy TBD)

### 2. Category Filter

- Filter buttons/tabs for available categories (derived from gallery entries)
- "All" plus each category that has entries

### 3. Gallery Grid

- Responsive image grid
- Each item shows:
  - Image (optimised, responsive)
  - Caption overlay or below
  - Category badge (optional)
  - Click: if linked to a bear/product/event, navigate there. Otherwise, enlarge image.
- Responsive: 1-2 cols mobile, 2-3 cols tablet, 3-4 cols desktop

### 4. Pagination

- Previous / Next with page numbers
- Preserves category filter

## Content Collections Used

- `gallery` — filtered by category, paginated

## Components Used

- Filter tabs
- Gallery item
- Pagination
- Page header / banner

## Layout

Uses `page.layout.astro`

## Copy Needed

- [ ] Page subheading
- [ ] Category labels

## SEO

- Title: "Gallery | Amanda's Emporium"
- Description: "Photos from Amanda's Emporium — bears, products, and market moments"
- Open Graph: featured gallery image
