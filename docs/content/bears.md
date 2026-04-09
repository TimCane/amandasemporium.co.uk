# Content Collection: Bears

## Directory

`src/content/bears/`

## Migration

**Source:** `old/src/content/bears/` — direct copy. Each bear is a subdirectory containing `index.md` + an image file (e.g., `bear-name.jpg`).

No transformation needed — copy the entire directory as-is.

## Count

400+ entries

## File Structure

```text
bears/
├── abbie/
│   ├── index.md
│   └── abbie.jpg
├── ace/
│   ├── index.md
│   └── ace.jpg
└── ...
```

## Schema

```typescript
import { defineCollection, z, reference } from 'astro:content';

const bearBrands = z.enum([
  'as-watson', 'baby-gund', 'barnes-and-noble', 'beam-feature-ltd',
  'bear-factory', 'birthdays', 'build-a-bear', 'cuddles-collection',
  'disney-store', 'funtastic', 'giorgio', 'glorious-britain-jointed',
  'glorious-britain', 'i-love-fancy-dress', 'infinite-designs',
  'john-lewis', 'keel-cubby', 'keel-teddy', 'lbi-ltd', 'morrisons',
  'plush-company', 'russ', 'sainsburys', 'teddy-tastic', 'tesco',
  'the-christmas-magical-adventure-bear', 'the-works', 'ty',
  'unknown', 'valentine-heart', 'wh-smith', 'wilkinson', 'with-love',
]);

const bearSpecies = z.enum([
  'bear', 'cat', 'dog', 'frog', 'hippo', 'koala', 'monkey', 'rabbit', 'sheep',
]);

const bears = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    tagline: z.string().optional(),        // Short one-liner for cards/SEO
    uploadedOn: z.date(),
    picture: image(),
    photos: z.array(image()).optional(),   // Additional photos beyond main picture
    featured: z.boolean().optional(),      // Manual override for featuring
    tags: z.array(z.string()),
    brand: bearBrands,
    species: bearSpecies,
    rescued: z.object({
      location: reference('locations'),
      date: z.date(),
    }),
    event: reference('events').optional(),
    rehomed: z.object({
      location: reference('locations'),
      date: z.date(),
    }).optional(),
    notes: z.string().optional(),
  }),
  // Markdown body = narrative (optional, full story in markdown)
});
```

### Computed Fields

- **status**: derived from whether `rehomed` is present — `"rehomed"` if yes, `"rescued"` if no. Not stored in frontmatter, computed at query time.

## Relationships

| Field | Type | Notes |
| ----- | ---- | ----- |
| `brand` | Zod enum | Validated string, not a collection reference |
| `species` | Zod enum | Validated string, not a collection reference |
| `rescued.location` | `reference('locations')` | Many-to-one |
| `rehomed.location` | `reference('locations')` | Many-to-one |
| `event` | `reference('events')` | Many-to-one (optional) |

## Consumed By

| Page | How |
| ---- | --- |
| `/bears` (listing) | Filtered by group/letter, paginated |
| `/bears/[slug]` (profile) | Single entry with resolved references |
| `/bears/map` | All bears with location data |
| `/bears/timeline` | All bears, sorted by rescue/rehome dates |
| `/` (home) | Featured/random bear for spotlight |

## Querying Notes

- **Listing page (SSR):** Filter by status (computed from `rehomed` presence), then by first letter of `name`, paginate. Sort alphabetically by name.
- **Map page:** Need all bears with their location coordinates resolved. Serialise as JSON for client-side Leaflet.
- **Timeline page:** Extract rescue dates and rehome dates from all bears, merge into single chronological list.
- **Bear of the Month:** Uses seeded-random with `YYYY-MM` seed to deterministically pick from bears without `rehomed` field (i.e., still looking for a home). Changes once per month automatically, no manual intervention needed.
- **Related Bears:** At query time, find bears sharing the same rescue location, event, or species. Used on bear profile pages to show related bears.
- **Empty tagline:** Component auto-generates from structured data ("A {species} by {brand} from {location}") at render time.
- **Empty body:** Profile page shows structured data only, no narrative section rendered.

## Example Entry

```markdown
---
name: Aaron
tagline: "A cheeky football-loving bear from Southsea"
uploadedOn: 2018-11-12
picture: ./aaron.jpg
tags:
  - football
  - arsenal
brand: build-a-bear
species: bear
rescued:
  location: southsea
  date: 2018-10-13
event: 2019-05-25-burnham-donkey-derby
rehomed:
  location: eton-wick
  date: 2019-05-25
notes: Limited Edition Build-a-Bear
---

Aaron is a lovable teddy bear with a passion for football. A die-hard
Arsenal fan, his favourite players are Aubameyang and Saka. When he's
not cheering on the Gunners, Aaron loves to cuddle and play with his
friends.

He was found at a car boot sale in Southsea, looking a bit lonely among
a pile of old toys. After a good wash and brush-up, he was ready for
his new adventure. Aaron found his forever home at the Burnham Donkey
Derby in May 2019.
```
