# Page: About

## Route

`/about`

## Rendering

Static (pre-rendered at build time)

## Purpose

Tell the full story of Amanda's Emporium — who Amanda is, how the bear rescue started, what she makes, and why she does it. This page builds trust and emotional connection with visitors.

## User Stories

- As a curious visitor, I want to learn the story behind the business so I feel a personal connection.
- As a potential customer at a market, I want to understand the craftsmanship behind the products.
- As someone who found a bear profile, I want to understand the bear rescue mission.
- As a visitor, I want to see what visiting the stall at a market is like.
- As a visitor, I want to see how much Amanda has accomplished (milestones/stats).
- As a visitor, I want easy links to explore bears, products, and events from the about page.

## Sections (top to bottom)

### 1. Page Header

- Heading: "About Amanda's Emporium"
- Subheading or introductory sentence (copy TBD)

### 2. Amanda's Story

- Personal journey — how it all started
- The path from hobby to craft fairs to a full emporium
- Copy TBD — this is Amanda's story to tell

### 3. The Bear Rescue Mission

- Why bears are rescued — the philosophy behind it
- What happens to a bear: finding, cleaning, photographing, rehoming
- The process from car boot sale to forever home
- Copy TBD
- Link to `/bears`

### 4. The Craft

- What Amanda makes — the range of handmade products
- Her approach to crafting, favourite materials, what inspires her
- Copy TBD
- Link to `/products`

### 5. The Stall

- What it's like visiting Amanda at a market
- Photos from the gallery collection cross-linked (pull gallery items with category "markets")
- The experience of browsing in person
- Copy TBD
- Link to `/events`

### 6. Milestones / By the Numbers

- Stats computed from content collections (same data as home page stats, presented differently)
- "Started in 2017", "400+ bears rescued", "170+ homes found", "100+ events attended"
- Could be a timeline or milestone markers rather than just numbers
- Numbers are computed at build time, not hardcoded

### 7. Explore More

- Links to other main sections:
  - "Meet the bears" → `/bears`
  - "See what we make" → `/products`
  - "Find us at an event" → `/events`
  - "Get in touch" → `/contact`

## Content Collections Used

- `bears` — count for stats (total rescued, total rehomed)
- `events` — count for stats (total events attended)
- `gallery` — photos for "The Stall" section (filtered by category "markets")

## Components Used

- Page header / banner
- Container / content block
- Stats display (shared with home page, different presentation)
- Gallery image strip / photos (for "The Stall" section)
- Section navigation links

## Layout

Uses `page.layout.astro`

## Copy Needed

- [ ] Amanda's Story narrative
- [ ] The Bear Rescue Mission narrative
- [ ] The Craft narrative
- [ ] The Stall narrative
- [ ] Section headings

## SEO

- Title: "About | Amanda's Emporium"
- Description: TBD — the story of Amanda's Emporium
- Open Graph: photo of Amanda/stall if available, title, description
