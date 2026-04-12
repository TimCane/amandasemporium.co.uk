# Page: Products

## Route

`/products`

## Rendering

SSR (server-rendered per request)

## Purpose

Showcase catalogue of handmade products. Visitors can browse by category. No purchasing — this drives people to the stall.

## User Stories

- As a potential customer, I want to browse products by category so I can find what interests me.
- As a visitor planning to attend a market, I want to see what's available and how much things cost.
- As a visitor, I want to see photos of the products to appreciate the craftsmanship.

## Query Parameters

| Param | Type | Default | Values |
| ----- | ---- | ------- | ------ |
| `category` | string | (none — show all) | Slug of a product category |
| `page` | number | `1` | Positive integer |

Example URLs:

- `/products` — all products, page 1
- `/products?category=bags-and-cases` — bags and cases only
- `/products?category=baby-and-children&page=2` — baby products, page 2

## Sections (top to bottom)

### 1. Page Header

- Heading: "What We Make"
- Subheading: brief description of the handmade nature (copy TBD)
- Product count for current filter

### 2. Category Filter Tabs

- Tab per category: All, Bags & Cases, Baby & Children, Knitted & Crocheted, Home & Gifts, Soaps, Rescued Bears
- Active tab highlighted per theme
- Clicking navigates to `/products?category={slug}` (resets page)
- "Rescued Bears" category links/cross-references to `/bears`

### 3. Products Grid

- Card grid of products
- Each card shows: image, name, price, category badge
- Responsive: 1 col mobile, 2 cols tablet, 3-4 cols desktop

### 4. Pagination

- Previous / Next with page numbers
- Preserves category filter

## Content Collections Used

- `products` — filtered by category, paginated
- (categories derived from Zod enum values for filter tabs)

## Components Used

- Filter tabs
- Product card
- Pagination
- Page header / banner

## Layout

Uses `page.layout.astro`

## Copy Needed

- [ ] Page heading and subheading
- [ ] Category descriptions (optional)
- [ ] Empty state message

## SEO

- Title: "Products | Amanda's Emporium" (varies by category)
- Description: "Handmade crafts by Amanda's Emporium — bags, baby items, knitted goods, and more"
- Open Graph: representative product image
- JSON-LD: `Product` schema per product (or `ItemList`)
- Pagination: `rel="prev"` / `rel="next"` links
