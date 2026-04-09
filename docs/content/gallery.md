# Content Collection: Gallery

## Directory

`src/content/gallery/`

## Migration

**Source:** None — create from scratch. Gallery content needs to be curated and added manually.

## Count

0 initially (to be populated)

## File Structure

```text
gallery/
├── market-day-surbiton/
│   ├── index.md
│   └── market-day-surbiton.jpg
├── best-bears-2024/
│   ├── index.md
│   └── best-bears-2024.jpg
└── ...
```

Each gallery item gets a subdirectory to co-locate image with content.

## Schema

```typescript
const gallery = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    image: image(),
    caption: z.string(),
    category: z.string().optional(),       // Free-text tag: "bears", "products", "markets", "crafting"
    relatedBear: reference('bears').optional(),
    relatedProduct: reference('products').optional(),
    relatedEvent: reference('events').optional(),
    date: z.date().optional(),             // When the photo was taken
  }),
});
```

### Field Notes

- **category:** Free-text string rather than a reference collection — gallery categories are lightweight tags, not a managed taxonomy. Common values: "bears", "products", "markets", "crafting".
- **relatedBear/relatedProduct/relatedEvent:** Optional cross-links. At most one should be set. Clicking the gallery item navigates to the related page.
- **date:** Optional, for sorting purposes.
- **Cross-referencing:** Gallery items can be referenced from bear profiles, product pages, event pages, and the about page. The gallery is the curated "best of" showreel — photos can exist both on their source page (e.g., a bear's `photos` array or an event's `recapPhotos`) AND in the gallery as highlights. The gallery serves as a central collection of the best imagery across the whole site.

## Relationships

| Field | References | Cardinality |
| ----- | ---------- | ----------- |
| `relatedBear` | `bears` | Optional, one |
| `relatedProduct` | `products` | Optional, one |
| `relatedEvent` | `events` | Optional, one |

## Consumed By

| Page | How |
| ---- | --- |
| `/gallery` (listing) | Filtered by category, paginated |
| `/` (home) | Photo strip section — selection of gallery images |
| `/about` | "The Stall" section — gallery items with category "markets" |
| `/bears/[slug]` (profile) | Gallery items related to a specific bear |
| `/products/[slug]` (profile) | Gallery items related to a specific product |
| `/events/[slug]` (profile) | Gallery items related to a specific event |

## Querying Notes

- **Category filter:** Match on the `category` string field.
- **Available categories:** Derive from distinct `category` values across all gallery entries.
- **Sorting:** By date descending (if present), then alphabetically by caption.

## Example Entry

```markdown
---
image: ./market-day-surbiton.jpg
caption: Our stall at Surbiton Festival 2024
category: markets
relatedEvent: 2024-06-22-surbiton-festival
date: 2024-06-22
---
```
