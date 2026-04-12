# Feature: SEO

## Overview

Comprehensive SEO setup including meta tags, Open Graph, JSON-LD structured data, sitemap, and robots.txt.

## Meta Tags

Every page gets:

```html
<title>{Page Title} | Amanda's Emporium</title>
<meta name="description" content="{Page-specific description}" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="canonical" href="{canonical URL}" />
```

Pages that should not be indexed (privacy policy, 404):

```html
<meta name="robots" content="noindex" />
```

## Open Graph Tags

For rich link previews when URLs are shared on messaging apps, social media, etc.

```html
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="{image URL}" />
<meta property="og:url" content="{canonical URL}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Amanda's Emporium" />
```

### Per-Page OG Images

| Page | OG Image |
| ---- | -------- |
| Home | Hero image or brand image |
| Bear profile | Bear's photo |
| Products | Representative product photo |
| Events | Stall photo or generic |
| Gallery | Featured gallery image |
| Other pages | Default brand image |

## JSON-LD Structured Data

### Events (`/events` — upcoming)

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Surbiton Festival",
  "startDate": "2024-06-22",
  "location": {
    "@type": "Place",
    "name": "Surbiton Town Centre",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.394,
      "longitude": -0.307
    }
  },
  "description": "...(uses tagline, or auto-generated from structured data)",
  "url": "https://surbitonfestival.co.uk",
  "organizer": {
    "@type": "Organization",
    "name": "Amanda's Emporium",
    "url": "https://amandasemporium.co.uk"
  }
}
```

### Products (`/products`)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Tote Bag",
  "description": "Handmade cotton tote bag (from tagline)",
  "image": "https://amandasemporium.co.uk/images/tote-bag.jpg",
  "offers": {
    "@type": "Offer",
    "price": "8.00",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  }
}
```

### Home Page

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Amanda's Emporium",
  "url": "https://amandasemporium.co.uk",
  "description": "Handmade crafts and rescued bears"
}
```

## Sitemap

Generated automatically by `@astrojs/sitemap` integration.

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://amandasemporium.co.uk',
  integrations: [sitemap()],
});
```

Excludes:

- `/404`
- `/privacy` (optional — could include)
- `/admin/*` (if any admin routes exist)

## Robots.txt

```typescript
// pages/robots.txt.ts
export const GET: APIRoute = () => {
  return new Response(`
User-agent: *
Allow: /
Sitemap: https://amandasemporium.co.uk/sitemap-index.xml
  `.trim());
};
```

## Pagination SEO

SSR listing pages include:

```html
<link rel="prev" href="/bears?page=1" />
<link rel="next" href="/bears?page=3" />
```

## Components

### OpenGraph Meta Component

Reusable component that generates OG tags from props:

```astro
---
interface Props {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: string;
}
---
```

### JSON-LD Component

Reusable component that generates `<script type="application/ld+json">` from a data object.

## Files Involved

- `src/components/seo/opengraph-meta.astro`
- `src/components/seo/json-ld.astro`
- `src/pages/robots.txt.ts`
- `astro.config.mjs` — sitemap integration
- `src/layouts/base.layout.astro` — meta tags in `<head>`
