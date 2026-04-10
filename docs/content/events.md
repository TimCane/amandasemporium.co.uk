# Content Collection: Events

## Directory

`src/content/events/`

## Migration

**Source:** `old/src/content/events/` — direct copy.

No transformation needed.

## Count

100+ entries (spanning 2017-2025)

## File Structure

```text
events/
├── 2017-06-24-surbiton-festival.md
├── 2023-12-02-farnborough-christmas-market.md
├── 2025-03-15-horley-spring-fair.md
└── ...
```

File naming convention: `YYYY-MM-DD-event-slug.md`

## Schema

```typescript
const events = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    info: z.string().optional(),            // Visitor info (parking, tickets, etc.)
    date: z.date(),
    recapPhotos: z.array(image()).optional(),
    location: z.object({
      name: z.string(),
      location: reference('locations'),
    }),
    website: z.string(),
    time: z.string(),
  }),
  // Markdown body = event narrative + optional ## Recap section (for past events)
});
```

## Relationships

| Field | References | Cardinality |
| ----- | ---------- | ----------- |
| `location.location` | `locations` | Many-to-one |

- Also referenced by `bears` collection via the optional `event` field.

## Consumed By

| Page | How |
| ---- | --- |
| `/events` (listing) | Filtered by upcoming/past and year, paginated |
| `/events/[slug]` (profile) | Single event detail page with full description, map, recap |
| `/events/calendar/[slug].ics` | Single event exported as iCalendar |
| `/` (home) | Next upcoming events |
| `/bears/[slug]` (profile) | Event where bear was shown (if applicable) |
| `/bears/map` | Event locations on map |

## Querying Notes

- **Upcoming vs past:** Compare `date` field against current date at request time (SSR).
- **Year filter:** Extract year from `date` field.
- **Upcoming sort:** Ascending by date (nearest first).
- **Past sort:** Descending by date (most recent first).
- **Available years:** Derive from distinct years in past events for year filter buttons.
- **Empty info:** No visitor info shown — this is optional practical detail (parking, tickets, etc.).
- **Empty body:** Event page shows structured data only, no narrative section rendered.
- **Missing `## Recap`:** Recap section hidden on past event profile. `description`, `narrative`, and `recap` have been removed from frontmatter and moved to the markdown body.

## Example Entry

### Upcoming event (no recap)

```markdown
---
name: Horley Spring Fair
info: "Free entry, parking available on site"
date: 2025-03-15
location:
  name: Horley Community Centre
  location: horley
website: https://horleyspringfair.co.uk
time: 10am - 4pm
---

The Horley Spring Fair is one of Amanda's favourite events of the year.
Expect a wide range of handmade crafts, rescued bears looking for homes,
and plenty of friendly faces.
```

### Past event (with recap)

```markdown
---
name: Surbiton Festival
info: ""
date: 2024-06-22
recapPhotos:
  - ./surbiton-2024-stall.jpg
  - ./surbiton-2024-bears.jpg
location:
  name: Surbiton Town Centre
  location: surbiton
website: https://surbitonfestival.co.uk
time: 10am - 5pm
---

One of the biggest events in the calendar. The Surbiton Festival takes
over the whole town centre with hundreds of stalls and activities.

## Recap

What an amazing day! The weather held out and we had a fantastic turnout.
We rehomed three bears and sold out of tote bags by 2pm.
```
