# Content Collection: Locations

## Directory

`src/content/locations/`

## Migration

**Source:** `old/src/content/locations/` — direct copy.

No transformation needed.

## Count

170+ entries (primarily UK, some international: Hong Kong, USA, Australia)

## File Structure

```text
locations/
├── guildford.md
├── woking.md
├── surbiton.md
├── hong-kong.md
└── ...
```

## Schema

```typescript
const locations = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    country: z.string().optional(),
    county: z.string().optional(),
    postcode: z.string().optional(),   // Postcode district, e.g. "KT6"
  }),
});
```

## Relationships

Referenced by:

- `bears` collection — `rescued.location` and `rehomed.location`
- `events` collection — `location.location`

## Consumed By

| Page | How |
| ---- | --- |
| `/bears/[slug]` (profile) | Location names and coordinates for journey map |
| `/bears/map` | All location coordinates for full map |
| `/bears/timeline` | Location names for timeline entries |
| `/events` (listing) | Location names for event display |

## Querying Notes

- Locations are always resolved via references from bears or events — never queried directly as a standalone listing.
- Coordinates (latitude, longitude) are used for Leaflet map markers.

## Example Entry

```markdown
---
name: Guildford
latitude: 51.2362
longitude: -0.5704
country: United Kingdom
county: Surrey
postcode: GU1
---
```
