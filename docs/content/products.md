# Content Collection: Products

## Directory

`src/content/products/`

## Migration

**Source:** Old `.product.ts` files from a previous Angular version of the site (not in the current `old/` directory — from the GitHub repo `TimCane/amandasemporium.co.uk` at `projects/data/src/_products/`).

**Action required:** Convert from TypeScript data files to markdown frontmatter format. This is a manual migration or scripted conversion.

### Products to migrate (25 items)

1. anything-bag
2. apron
3. baby-bag
4. bookmarks
5. bunting
6. cot-tidy
7. crocheted-blanket-with-ribbon-trim
8. crocheted-blanket
9. crocheted-dress-set
10. dummy-taggy
11. fleece-blanket
12. glasses-case
13. hand-knitted-cardigans
14. handmade-cards
15. hats
16. key-fobs
17. makeup-bag
18. pair-of-burp-cloths
19. poncho-and-hat
20. quilted-play-mat
21. rescued-bears
22. soap-bunnies
23. taggy
24. tooth-pocket
25. tote-bag

## Count

25 entries (expected to grow)

## File Structure

```text
products/
├── anything-bag/
│   ├── index.md
│   └── anything-bag.jpg
├── apron/
│   ├── index.md
│   └── apron.jpg
└── ...
```

Each product gets a subdirectory (like bears) to co-locate images with content.

## Schema

```typescript
const productCategories = z.enum([
  'bags-and-cases', 'baby-and-children', 'knitted-and-crocheted',
  'home-and-gifts', 'soaps', 'rescued-bears',
]);

const products = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    tagline: z.string().optional(),        // Short one-liner for cards/SEO
    category: productCategories,
    price: z.string(),
    materials: z.string().optional(),
    photos: z.array(image()),
    hidden: z.boolean().optional(),
  }),
  // Markdown body = product narrative + optional ## How It's Made section
});
```

### Field Notes

- **tagline:** Optional short one-liner for cards and SEO. If empty, component can auto-generate from structured data.
- **price:** String type rather than number to support ranges ("from £5") and formatted values ("£3.50").
- **photos:** Array of images to support multiple angles/variants.
- **materials:** Optional free-text field for materials, dimensions, or other details.
- **hidden:** Optional boolean to hide a product from listings without deleting it.
- **Markdown body:** Contains the product narrative (optional) and an optional `## How It's Made` section. Both `narrative` and `howItsMade` have been removed from frontmatter and moved to the markdown body. `description` has been renamed to `tagline`.

## Relationships

| Field | Type | Notes |
| ----- | ---- | ----- |
| `category` | Zod enum | Validated string, not a collection reference |

## Consumed By

| Page | How |
| ---- | --- |
| `/products` (listing) | Filtered by category, paginated |
| `/products/[slug]` (profile) | Single product with full details and related products |
| `/` (home) | Featured products on home page |

## Querying Notes

- **Listing page (SSR):** Filter by category reference, paginate. Sort alphabetically by name.
- **Home page:** Select featured products (TBD: random, manual flag, or newest).

## Example Entry

```markdown
---
name: Tote Bag
tagline: "One of a kind tote bags made from repurposed fabrics"
category: bags-and-cases
price: "£8"
materials: Cotton fabric, lined
photos:
  - ./tote-bag.jpg
---

Each tote bag is individually cut and sewn by Amanda using carefully
chosen cotton fabrics. No two are exactly alike — the fabric
combinations are picked to complement each other.

These bags are one of Amanda's most popular items at craft fairs.
They're sturdy enough for a full shop and pretty enough to use as
an everyday bag.

## How It's Made

Cut from cotton fabric and fully lined. Each bag takes about 2 hours
to make from cutting to finished product. The handles are double-stitched
for strength. Fabrics are sourced from local fabric shops and online
suppliers.
```
