# Page: Product Profile

## Route

`/products/[slug]`

## Rendering

Static (pre-rendered at build time via `getStaticPaths`)

## Purpose

Individual product detail page with rich description, multiple photos, "How it's made" section, category, price, and materials. Links to other products in the same category.

## User Stories

- As a visitor, I want to see detailed information about a product including its full description and price.
- As a visitor, I want to see multiple photos of the product from different angles.
- As a visitor, I want to understand how the product is made and what materials are used.
- As a visitor, I want to discover other products in the same category.

## Sections (top to bottom)

### 1. Product Hero Image(s)

- Main product photo (first from `photos` array)
- If multiple photos, display as gallery (theme decides: carousel, grid, thumbnails, etc.)
- Optimised, responsive images

### 2. Product Name + Price

- Product name as heading
- Price displayed prominently
- Category label/link

### 3. Product Story (Narrative)

- Rendered from the markdown body if present (the craft story)
- If the body is empty, no narrative section is shown
- The `tagline` frontmatter field is used for cards and SEO (short one-liner); it is not displayed in this section

### 4. How It's Made

- Rendered from a `## How It's Made` heading in the markdown body, if present
- Describes the crafting process, materials sourcing, time to make
- If the heading is not present in the body, section is hidden

### 5. Materials / Details

- Materials field displayed if present
- Any other product details

### 6. More in This Category

- Other products sharing the same `category` reference
- Displayed as a small card row (photo, name, price)
- Links to each related product's profile page
- Heading: "More {category name}" or similar

## Content Collections Used

- `products` — the specific product entry, plus other products in same category
- (category is a Zod enum value, not a separate collection)

## Components Used

- Image gallery
- Product card (compact, for related products row)
- Page header / banner

## Layout

Uses `page.layout.astro`

## Copy Needed

None — all content comes from the content collection.

## SEO

- Title: "{Product Name} | Amanda's Emporium"
- Description: "{Product Name} — {tagline}" (auto-generated if tagline empty)
- Open Graph: product photo, name, tagline
- JSON-LD: `Product` schema with name, tagline (as description), image, offers (price)
