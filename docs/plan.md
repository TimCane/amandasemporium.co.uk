# Amanda's Emporium — Website Rebuild Plan

## Overview

A complete rebuild of amandasemporium.co.uk — a showcase website for a craft market stall business that also rescues teddy bears. The site serves as a portfolio/catalogue: "here's who we are, here's what we make, here's where to find us."

The bears section is the heart and personality of the site, but products, events, gallery, and about pages round out the full picture of the business.

---

## Tech Stack

| Technology | Choice | Notes |
|-----------|--------|-------|
| Framework | Astro 5 | Hybrid output mode (static + SSR) |
| Styling | SCSS + CSS Grid | BEM naming, CSS custom properties for theming |
| Maps | Leaflet (vanilla JS) | No React — plain JS with Astro component |
| Date formatting | Native `Intl.DateTimeFormat` | Replaces moment.js |
| Calendar export | `ics` library | Kept from old site |
| Image optimisation | Astro built-in (`astro:assets`) | Sharp under the hood, WebP/AVIF |
| Node adapter | `@astrojs/node` (standalone) | For hybrid SSR |
| Deployment | Docker on Coolify (self-hosted VPS) | Multi-stage Dockerfile |
| Analytics | Plausible or Umami (self-hosted) | Cookie-free, on same Coolify VPS |

### Removed from old stack
- React (was only used for the map)
- moment.js (deprecated, replaced by native APIs)
- Decap CMS (removed — content managed via markdown files)

---

## Theme System (CSS Zen Garden Approach)

Four selectable themes that make the site feel like **4 completely different websites**. Inspired by CSS Zen Garden: same HTML markup, radically different visual presentations through CSS.

Each theme transforms:

- **Layout** — grid structures, content flow, section arrangements, asymmetry
- **Decoration** — backgrounds, patterns, borders, illustrations (all CSS)
- **Typography** — unique heading AND body fonts per theme
- **Colours** — distinct palette per theme
- **Animation** — hover effects, transitions, page transitions, timing
- **Component styling** — completely different card, button, nav appearances

Components emit semantic HTML with plenty of class hooks, wrapper elements, and decoration divs. The HTML is a superset of what all 4 themes need. No theme-conditional logic in components.

### Themes

| Theme | Role | Heading / Body Font | Visual Reference |
| ----- | ---- | ------------------- | ---------------- |
| **Boutique & Crafted** | DEFAULT | Playfair Display / Lora | Independent boutique shopfront |
| **Warm & Whimsical** | Alt | Nunito / Quicksand | Cottagecore / cozy indie |
| **Modern & Vibrant** | Alt | Montserrat / Source Sans 3 | Charity/NGO modern redesign |
| **Fun & Energetic** | Alt | Fredoka / Nunito Sans | Modern kids brand (Lego, Haribo) |

### Theme switching

- Small, subtle switcher in the footer
- Persisted in localStorage
- Active theme CSS loaded in `<head>`, other 3 prefetched for instant switching
- No brand colour constraint — the text logo provides brand continuity
- Logo styled with each theme's heading font and colours

---

## Content Collections

### Migrated from old site

| Collection | Count | Source | Schema |
| ---------- | ----- | ------ | ------ |
| `bears` | 307 | V3 (direct copy) | name, picture, description, narrative?, photos?, tags[], brand (enum), species (enum), rescued, rehomed?, event?, notes? |
| `events` | 103 | V3 (direct copy) | name, date, description, narrative?, recap?, recapPhotos?, location, website, time |
| `locations` | 179 | V3 (direct copy) | name, latitude, longitude |
| `products` | 25 | V2 (converted TS→MD) | name, description, narrative?, howItsMade?, category (enum), price, photos[] |
| `gallery` | 17 | V2 (converted TS→MD) | image, caption, category? |

**Simplified (enums instead of collections):**

- `bearBrands` — 33 values as Zod enum (was a collection, now validated string)
- `bearSpecies` — 9 values as Zod enum (was a collection, now validated string)
- `productCategories` — 6 values as Zod enum

### Data location

All extracted content lives in `/data/` at the project root, ready to be copied into `src/content/` when the Astro project is initialised.

### Product Categories

1. Bags & Cases
2. Baby & Children
3. Knitted & Crocheted
4. Home & Gifts
5. Soaps
6. Rescued Bears (cross-links to bears section)

---

## Pages & Routes

### Static pages (pre-rendered at build time)

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, about teaser, upcoming events, featured products, bear spotlight |
| `/about` | Full story — Amanda, the stall, how bear rescue started |
| `/contact` | Email address, contact form (POST is SSR), FAQ, next event callout |
| `/privacy` | Privacy policy — stubbed with sections, filled in later |
| `/bears/[slug]` | Bear profile — narrative, photos, details, journey map, related bears |
| `/bears/map` | Interactive Leaflet map of all bear journeys |
| `/bears/timeline` | Chronological timeline of rescues/rehoming |
| `/products/[slug]` | Individual product page — photos, narrative, "how it's made", related products |
| `/events/[slug]` | Individual event page — upcoming: details + map; past: recap + photos |
| `/robots.txt` | SEO |
| `/sitemap.xml` | SEO (via Astro sitemap integration) |

### SSR pages (server-rendered with query params)

| Route | Query Params | Purpose |
|-------|-------------|---------|
| `/bears` | `?group=all\|looking\|found&letter=A&page=1` | Bear listing with group/alphabet/pagination filters |
| `/products` | `?category=bags&page=1` | Product catalogue with category filter |
| `/events` | `?view=upcoming\|past&year=2024` | Events listing — upcoming (default) or past with year filter |
| `/gallery` | `?category=bears&page=1` | Curated photo highlights with category filter |

### API endpoints (SSR)

| Route | Method | Purpose |
|-------|--------|---------|
| `/contact` | POST | Contact form submission — stub that logs notification (destination TBD) |
| `/events/calendar/[slug].ics` | GET | iCalendar file download per event |

---

## Navigation

Navbar: **Bears** | **Products** | **Events** | **Gallery** | **About** | **Contact**

Home accessed via text logo / site name.

---

## Home Page Sections

1. **Hero** — strong brand image, tagline (e.g., "Handmade crafts & rescued bears")
2. **About teaser** — brief intro with "Read more" link to `/about`
3. **Stats** — "400+ bears rescued, 170+ homes found, 100+ events" (computed from collections)
4. **Upcoming events** — "Find us next at..." with nearest events
5. **Featured products** — curated product showcase
6. **Photo strip** — horizontal gallery image band for visual richness
7. **Bear of the Month** — seeded-random monthly pick from bears looking for a home
8. **Activity feed** — latest rescues, products, next event
5. **Bear spotlight** — featured/latest rescued bear

---

## Key Features

### Bear section
- SSR listing with group filter (all / looking for home / found their home)
- Alphabet navigation
- Paginated grid (~24 per page)
- Individual profile pages (static) with photo, details, rescue/rehome story
- Interactive Leaflet map showing rescue/rehome journeys with seeded-random wandering paths
- Timeline view of all rescues/rehoming events

### Products section
- SSR listing with category filter
- Showcase catalogue — no cart/checkout
- Each product: name, photo(s), description, category, price, materials

### Events section
- SSR listing — "Upcoming" (default) and "Past" tabs
- Past events filterable by year
- iCal export per event
- Shows venue name, location, date, time, description, website link

### Gallery
- SSR curated highlights grid
- Images with captions
- Optional category filtering
- Optional cross-links to related bears/products/events

### Contact
- Email address displayed
- Contact form (POST to SSR endpoint — stub for now, logging destination TBD)
- FAQ section (common questions, expandable)
- Next event callout ("Find us at...")

### SEO
- Sitemap.xml (via @astrojs/sitemap)
- robots.txt
- `<title>` and `<meta description>` per page
- Open Graph tags for link previews
- JSON-LD structured data for events and products

### Other
- View transitions (Astro built-in) for smooth SSR navigation
- Cookie banner (simple — no tracking cookies, just notes map tile requests and cookie-free analytics)
- Privacy policy page (stubbed)
- Responsive design — mobile-first

---

## Deployment

### Docker setup
- Multi-stage Dockerfile
- Stage 1: Install deps + build Astro site
- Stage 2: Minimal Node image running `dist/server/entry.mjs`
- `@astrojs/node` adapter in standalone mode

### Coolify
- Deploy from Git repo
- Coolify manages container lifecycle
- Self-hosted analytics (Plausible/Umami) as separate Coolify service

---

## Implementation Phases

### Phase 1: Foundation
- [ ] Initialise Astro 5 project with SCSS + CSS Grid
- [ ] Configure hybrid output mode with Node adapter
- [ ] Set up project structure (layouts, components dirs)
- [ ] Copy content collections from old site
- [ ] Define content collection schemas and Zod enums in config.ts
- [ ] Create base layout with view transitions
- [ ] Implement theme system (CSS custom properties, 4 theme configs, localStorage switcher)
- [ ] Create text logo component
- [ ] Create navbar and footer (with theme switcher)

### Phase 2: Bears Section
- [ ] Bear listing page (SSR with group/alphabet/pagination filters)
- [ ] Bear profile pages (static — narrative, multiple photos, related bears)
- [ ] Bear map page (vanilla Leaflet with seeded-random paths)
- [ ] Bear timeline page

### Phase 3: Static Pages
- [ ] Home page (hero, about teaser, stats, events, products, photo strip, bear of the month, activity feed)
- [ ] About page (story, bear rescue, craft, stall, milestones)
- [ ] Contact page with form (SSR POST stub), FAQ, next event callout
- [ ] Privacy policy page (stubbed)
- [ ] 404 page

### Phase 4: Products & Events
- [ ] Create product content files (migrate from old TS files to markdown)
- [ ] Product listing page (SSR with category filter)
- [ ] Product profile pages (static — narrative, how it's made, related products)
- [ ] Events listing page (SSR with upcoming/past + year filter)
- [ ] Event profile pages (static — narrative, venue map, recaps, photos)
- [ ] iCal export endpoint

### Phase 5: Gallery & Polish
- [ ] Gallery listing page (SSR with category filter)
- [ ] Create initial gallery content
- [ ] SEO: Open Graph tags, JSON-LD structured data, sitemap, robots.txt
- [ ] Cookie banner
- [ ] Responsive design pass (all pages x all themes x all breakpoints)
- [ ] Accessibility audit (semantic HTML, alt text, keyboard nav, contrast x all themes)

### Phase 6: Deployment
- [ ] Create Dockerfile (multi-stage)
- [ ] Test Docker build locally
- [ ] Deploy to Coolify
- [ ] Set up analytics (Plausible/Umami on Coolify)
- [ ] DNS / domain setup

---

## File Structure (Planned)

```
src/
├── components/
│   ├── bears/           # Bear-specific components (card, map, timeline)
│   ├── events/          # Event list, event card
│   ├── gallery/         # Gallery grid, gallery item
│   ├── layout/          # Navbar, footer, banner, cookie-banner
│   ├── products/        # Product card, category filter
│   ├── seo/             # OpenGraph, JSON-LD components
│   └── ui/              # Headings, container, pagination, filter-tabs
├── content/
│   ├── bears/           # 307 bears (from V3, enums for brand/species)
│   ├── events/          # 103 events (from V3)
│   ├── gallery/         # 17 gallery items (from V2)
│   ├── locations/       # 179 locations (from V3)
│   ├── products/        # 25 products (from V2, converted)
│   └── config.ts        # Schemas + Zod enums for brands/species/categories
├── layouts/
│   ├── base.layout.astro
│   └── page.layout.astro
├── libs/
│   ├── alphabet.ts
│   ├── bear-groups.ts
│   ├── class-name.ts
│   ├── consts.ts
│   ├── seeded-random.ts
│   └── themes.ts        # Theme definitions and utilities
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── privacy.astro
│   ├── 404.astro
│   ├── bears/
│   │   ├── index.astro          # SSR listing
│   │   ├── [slug].astro         # Static profile
│   │   ├── map.astro
│   │   └── timeline.astro
│   ├── products/
│   │   ├── index.astro          # SSR listing
│   │   └── [slug].astro         # Static profile
│   ├── events/
│   │   ├── index.astro          # SSR listing
│   │   ├── [slug].astro         # Static profile
│   │   └── calendar/[...slug].ics.ts
│   ├── gallery/
│   │   └── index.astro          # SSR listing
│   ├── admin/                   # Dev-only admin panel (excluded from prod)
│   │   ├── index.astro          # Dashboard
│   │   ├── bears/               # Bear CRUD routes
│   │   ├── events/              # Event CRUD routes
│   │   ├── products/            # Product CRUD routes
│   │   ├── gallery/             # Gallery CRUD routes
│   │   └── locations/           # Location CRUD routes
│   ├── robots.txt.ts
│   └── sitemap.xml (via integration)
├── styles/
│   ├── _reset.scss              # CSS reset / normalize
│   ├── _accessibility.scss      # Skip links, focus styles, screen reader utilities
│   ├── _grid-areas.scss         # Base grid-area name assignments for all components
│   ├── _base.scss               # Single-column mobile-first default layout
│   ├── _mixins.scss             # Shared SCSS mixins
│   ├── _shared.scss             # Shared variables and design tokens
│   ├── global.scss              # Main entry point — imports all partials above
│   └── themes/
│       ├── boutique.scss
│       ├── whimsical.scss
│       ├── modern.scss
│       └── fun.scss
└── images/
    └── logo.svg (or removed if text-only)
```

---

## Decisions Log

| # | Question | Decision |
|---|----------|----------|
| 1 | Why rebuild? | Full overhaul: tech upgrade, visual redesign, feature rethink |
| 2 | Design problem? | Feels dated/amateur AND too plain — want polished + personality |
| 3 | Design direction? | All four vibes via theme system |
| 4 | Theme depth? | CSS Zen Garden approach — 4 completely different websites from same HTML. Layout, decoration, animation, interaction, typography all unique per theme. |
| 5 | Theme UI? | Subtle switcher in footer, localStorage, owner picks default |
| 6 | Default theme? | Boutique & Crafted |
| 7 | Features? | Keep all except Decap CMS. Products page is a showcase catalogue. |
| 8 | Site purpose? | Showcase/portfolio for craft market stall + bear rescue |
| 9 | Product data? | Name, photo(s), description, category, price, materials |
| 10 | Product categories? | 6 categories including Rescued Bears (cross-links to bears) |
| 11 | Gallery purpose? | Curated highlights reel — not from social media |
| 12 | Gallery data? | Image, caption, optional category, optional cross-link |
| 13 | Home page? | Balanced: hero, about teaser, upcoming events, products, bear spotlight |
| 14 | Contact? | Email + form, no social media |
| 15 | Contact form? | SSR POST endpoint, stub for now |
| 16 | Rendering mode? | Hybrid — static default, SSR for filtered listings + contact POST |
| 17 | Hosting? | Self-hosted VPS with Coolify |
| 18 | Deployment? | Docker with multi-stage Dockerfile |
| 19 | Map? | Vanilla Leaflet (drop React) |
| 20 | Date library? | Native Intl.DateTimeFormat (drop moment.js), keep ics |
| 21 | Fonts? | Different body AND heading font per theme (Zen Garden approach) |
| 22 | Colours? | Distinct palette per theme, no fixed brand colour |
| 23 | Brand colour? | None — free to pick per theme |
| 24 | Logo? | Text-only, styled per theme |
| 25 | Nav? | Bears, Products, Events, Gallery, About, Contact |
| 26 | Bear URLs? | Simplified: /bears (SSR listing), /bears/[slug], /bears/map, /bears/timeline |
| 27 | Bear filtering? | SSR with query params, paginated ~24 per page |
| 28 | Products page? | SSR with category filter (consistency) |
| 29 | Events page? | SSR with upcoming/past tabs + year filter |
| 30 | Gallery page? | SSR with pagination (consistency) |
| 31 | Images? | Astro built-in astro:assets |
| 32 | View transitions? | Yes |
| 33 | SEO? | Full: sitemap, robots, OG tags, JSON-LD for events + products |
| 34 | About page? | Short teaser on home + full /about page |
| 35 | Cookie banner? | Simple — cookie-free analytics, just note map tiles |
| 36 | Analytics? | Self-hosted Plausible/Umami on Coolify (cookie-free) |
| 37 | Privacy policy? | Stubbed /privacy page with sections |
| 38 | Zen Garden approach? | Yes — 4 themes that feel like 4 different websites. Same HTML, radically different CSS. |
| 39 | Theme architecture? | SCSS + CSS Grid for base structure, per-theme SCSS override layers for layout/decoration/animation |
| 40 | Theme build order? | All 4 in parallel — HTML needs to support all themes, discovered together |
| 41 | Component HTML? | Superset HTML with hooks (wrappers, overlays, decoration divs, data attrs) for all themes |
| 42 | Theme CSS loading? | Active theme CSS + critical inline. Other 3 prefetched for instant switching. |
| 43 | Theme design depth? | Full design language + wireframes + real-world visual references per theme |
| 44 | Boutique reference? | Independent boutique shopfront — warm, curated, approachable |
| 45 | Whimsical reference? | Cottagecore / cozy indie — soft pastels, warm nostalgia, handwritten feel |
| 46 | Modern reference? | Charity/NGO modern — bold imagery, stats, professional with heart |
| 47 | Fun reference? | Modern kids brand (Lego, Haribo) — bright, chunky, polished but playful |
| 48 | Per-theme body fonts? | Yes — each theme has unique body + heading fonts for fully distinct reading experience |
| 49 | Theme extensibility? | Base theme CSS + registry pattern. Adding a new theme = 1 CSS file + 1 registry entry. No component changes. |
| 50 | Bears: richer content? | Longer narratives, multiple photos (optional, backwards-compatible), related bears |
| 51 | Bear photo display? | Theme decides how to show single vs multiple photos — not structural |
| 52 | Products: richer content? | Individual profile pages, narratives, "how it's made" section, multiple photos |
| 53 | Events: richer content? | Individual profile pages, richer narratives, post-event recaps with photos |
| 54 | Home page: fuller? | Added stats section, photo strip, bear of the month, activity feed |
| 55 | Bear of the month? | Seeded-random with YYYY-MM seed, only bears without rehomed, no manual maintenance |
| 56 | About page: fuller? | Multi-section: Amanda's story, bear rescue mission, the craft, the stall, milestones |
| 57 | Gallery role? | Curated "best of" showreel — photos can exist on source pages AND in gallery |
| 58 | Contact page: fuller? | Added FAQ section and next event callout |
| 59 | Drop Tailwind? | Yes — themes need full layout control, Tailwind was dead weight. Pure SCSS + CSS Grid. |
| 60 | CSS Grid depth? | Grids all the way down — page, section, component, sub-component. Maximum theme flexibility. |
| 61 | Grid-area strategy? | Base CSS sets grid-area names once. Themes only declare grid-template-areas. |
| 62 | CSS naming? | BEM (.block__element). Maps cleanly to grid-area names. |
| 63 | Responsive approach? | No shared breakpoints. Each theme picks its own breakpoints via its own @media queries. |
| 64 | SCSS? | Yes — nesting, variables, mixins, partials. Compiled via Astro's built-in sass support. |
| 65 | Base CSS default? | Single-column stack (mobile, accessible order). Themes progressively enhance from there. |
| 66 | Bear brands/species? | Zod enums instead of content collections. Validates at build time, no extra files. |
| 67 | Data extraction? | V3 for bears/events/locations (direct copy). V2 for products/gallery (converted TS→MD). All in /data/. |
| 68 | Product categories? | Zod enum (6 values) instead of content collection. |
| 69 | description → tagline? | Yes — `description` renamed to `tagline` (optional one-liner). Narratives moved to markdown body. |
| 70 | Prose in body? | Yes — frontmatter for structured data, markdown body for all prose. `## How It's Made` and `## Recap` as body headings. |
| 71 | Content enrichment blocking? | No — pages handle empty taglines/bodies gracefully. Content enrichment is ongoing, not a blocker. |
| 72 | Admin panel? | Yes — dev-only `/admin` routes in Astro. Full CRUD for all collections. Phase 1.6. |
| 73 | Admin panel scope? | Full: CRUD + AI generation (`claude -p`) + photo processing + Nominatim geocoding + validation dashboard. |
| 74 | Admin panel styling? | Minimal clean UI. Not themed. Dev tool, not customer-facing. |
| 75 | Admin panel editor? | Plain markdown textarea with preview toggle. |
| 76 | AI content generation? | Via `claude -p` CLI. Generates `{ tagline, narrative }` JSON from structured data + optional user context. |
| 77 | Location geocoding? | OpenStreetMap Nominatim. Free, no API key, rate-limited (fine for local use). |
