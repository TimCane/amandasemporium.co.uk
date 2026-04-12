# Tech Stack

## Core Framework

| Technology | Version | Purpose |
| ---------- | ------- | ------- |
| Astro | 5.x | Static site generator with hybrid SSR |
| TypeScript | 5.x | Type safety across the project |
| SCSS | via sass | Styling with CSS Grid + BEM naming |
| Node.js | 22 LTS | Runtime for SSR and build |

## Output Mode

**Hybrid** — static pages pre-rendered at build time, specific routes opted into SSR.

- Static: home, about, privacy, bear profiles, map, timeline, 404
- SSR: bear listing, products, events, gallery, contact POST

## Key Libraries

| Library | Purpose | Replaces |
| ------- | ------- | -------- |
| Leaflet | Interactive maps (vanilla JS, no React) | React + Leaflet |
| Preact | Admin panel UI (dev-only, not in production build) | New |
| ics | iCalendar file generation | Kept from old site |
| sass | SCSS compilation (via Astro built-in support) | New |
| sharp | Image optimisation (via Astro) + admin photo processing | Automatic |

## Removed Dependencies

| Library | Reason |
| ------- | ------ |
| React / react-dom | Only used for map — replaced with vanilla Leaflet |
| moment.js | Deprecated — replaced with native `Intl.DateTimeFormat` |
| Decap CMS | Removed — replaced with custom dev-only admin panel (local `/admin` routes) |
| lucide-react | React dependency removed — use SVG icons or alternative |
| Tailwind CSS | Replaced with SCSS + CSS Grid. Themes need full layout control, Tailwind was dead weight. |
| tailwind-merge | No longer needed without Tailwind |

## Date Handling

All date formatting uses the native `Intl.DateTimeFormat` API. No date library required.

```typescript
// Example usage
const formatted = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(date);
// "9 April 2026"
```

## Astro Integrations

| Integration | Purpose |
| ----------- | ------- |
| `@astrojs/sitemap` | Automatic sitemap.xml generation |
| `@astrojs/node` | Node.js adapter for hybrid SSR (standalone mode) |
| `@astrojs/preact` | Preact integration for admin panel interactive islands (dev-only) |

## Fonts

Loaded via `@fontsource` packages for self-hosting (no Google Fonts external requests).

Each theme has its own body AND heading font for a fully distinct reading experience (CSS Zen Garden approach):

| Theme | Heading Font | Body Font |
| ----- | ------------ | --------- |
| Boutique | Playfair Display (serif) | Lora (serif) |
| Whimsical | Nunito (rounded sans) | Quicksand (soft sans) |
| Modern | Montserrat (geometric sans) | Source Sans 3 (neutral sans) |
| Fun | Fredoka (chunky display) | Nunito Sans (friendly sans) |

Active theme fonts loaded eagerly. Other theme fonts prefetched in background.

## Image Pipeline

Astro's built-in `astro:assets` with Sharp:

- Automatic WebP/AVIF generation
- Responsive `srcset` generation
- Lazy loading
- Images stored alongside content in collection directories

## Deployment

| Component | Technology |
| --------- | ---------- |
| Adapter | `@astrojs/node` (standalone mode) |
| Container | Docker (multi-stage build) |
| Hosting | Self-hosted VPS via Coolify |
| Analytics | Plausible or Umami (self-hosted on Coolify, cookie-free) |

See `features/docker-deployment.md` for Dockerfile details.
