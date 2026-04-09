# Page: Home

## Route

`/`

## Rendering

Static (pre-rendered at build time)

## Purpose

The front door to Amanda's Emporium. Communicates what the business is, what it offers, and where to find it — all at a glance. Should make visitors want to explore deeper into bears, products, or events.

## User Stories

- As a first-time visitor, I want to immediately understand what Amanda's Emporium is so I can decide if I'm interested.
- As a returning visitor, I want to quickly see the next upcoming event so I know when to visit the stall.
- As a potential customer, I want to see featured products so I know what kind of things are available.
- As a bear enthusiast, I want to see a featured bear so I'm drawn into the rescue story.
- As a visitor, I want to see impressive stats that show the scale and history of the business.
- As a visitor, I want to see recent activity so the site feels alive and current.
- As a returning visitor, I want to see a different featured bear each month to keep things fresh.

## Sections (top to bottom)

### 1. Hero

- Large, striking image or illustrated header
- Site name: "Amanda's Emporium"
- Tagline: e.g., "Handmade crafts & rescued bears" (copy TBD)
- Optional CTA button: "Find us at our next event" linking to `/events`

### 2. About Teaser

- Short paragraph introducing Amanda and the business (2-3 sentences, copy TBD)
- "Read more" link to `/about`
- Optional: small image of Amanda or the stall

### 3. Stats Section

- "400+ bears rescued, 170+ homes found, 100+ events attended, Since 2017"
- Numbers computed from content collections at build time (count of bears, count of rehomed bears, count of events)
- Each theme styles this differently:
  - **Modern:** Bold numbers, clean typography
  - **Whimsical:** Handwritten-style numbers
  - **Fun:** Bouncy, animated counters
  - **Boutique:** Gold accents, elegant presentation

### 4. Upcoming Events

- Heading: "Find Us Next At..." or similar
- Show the next 2-3 upcoming events (by date)
- Each shows: event name, date, location name
- "See all events" link to `/events`
- If no upcoming events, show a friendly message ("We're planning our next event — check back soon!")

### 5. Featured Products

- Heading: "What We Make" or similar
- Grid of 3-4 featured product cards
- Each shows: image, name, price
- "Browse all products" link to `/products`
- Selection: could be random, manually curated, or newest

### 6. Photo Strip

- Horizontal band of gallery images
- Pulls a selection from the gallery collection
- Visual richness breaking up text-heavy sections
- Each theme styles differently (full-bleed strip, polaroid row, overlapping collage, etc.)
- No heading needed — purely visual

### 7. Bear of the Month

- Heading: "Bear of the Month" or similar
- Deterministic monthly rotation using seeded-random with `YYYY-MM` seed
- Only picks from bears without `rehomed` field (still looking for a home)
- Shows: bear photo, name, tagline and body excerpt (auto-generated from structured data if empty), status
- "Meet {name}" link to `/bears/{slug}`
- "Explore all bears" link to `/bears`

### 8. Activity Feed

- Heading: "Latest from the Emporium" or similar
- Shows latest activity from content collections sorted by date:
  - "Recently rescued: {bear name}" (latest bears by rescue date)
  - "Just added: {product name}" (newest products)
  - "Next event: {event name} on {date}" (next upcoming event)
- Keeps the home page feeling alive and current
- 3-5 items shown

## Content Collections Used

- `events` — filtered to future dates, sorted by date ascending, limit 3
- `products` — selection of featured items (TBD: random, curated, or newest)
- `bears` — all bears for stats; bears without `rehomed` for Bear of the Month; latest bears for activity feed
- `gallery` — selection of images for photo strip

## Components Used

- Hero (page-specific, not reusable)
- Stats display
- Event card (compact variant)
- Product card
- Photo strip / gallery band
- Bear card (for Bear of the Month)
- Activity feed

## Layout

Uses `page.layout.astro`

## Copy Needed

- [ ] Hero tagline
- [ ] About teaser paragraph (2-3 sentences)
- [ ] Section headings
- [ ] Empty state messages
- [ ] Activity feed item templates
- [ ] Bear of the Month heading copy

## SEO

- Title: "Amanda's Emporium — Handmade Crafts & Rescued Bears"
- Description: TBD — summarising the business
- Open Graph: hero image, title, description
- JSON-LD: `WebSite` schema
