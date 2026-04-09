# Feature: Bear Map (Leaflet)

## Overview

Interactive map built with vanilla Leaflet (no React) showing bear rescue and rehoming journeys. Used on the full map page (`/bears/map`) and individual bear profiles (`/bears/[slug]`).

## Two Variants

### Full Map (`/bears/map`)

- Shows all bears with location data
- Multiple markers clustered by area
- Click a marker to see bear name and link to profile
- Seeded-random wandering paths between rescue/event/rehome locations

### Profile Map (`/bears/[slug]`)

- Shows one bear's journey
- 1-3 markers (rescue, event, rehome)
- Path connecting them
- Smaller map, embedded in the page

## Technical Implementation

### No React

The old site used React + Leaflet. The new site uses vanilla Leaflet with an Astro component:

```astro
---
// bear-map.astro
const { bears, variant } = Astro.props;
const mapData = JSON.stringify(bears);
---
<div id="bear-map" data-bears={mapData} data-variant={variant}></div>

<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script>
  import L from 'leaflet';
  import { seededRandom } from '../libs/seeded-random';

  const container = document.getElementById('bear-map');
  const bears = JSON.parse(container.dataset.bears);
  const variant = container.dataset.variant;

  // Initialise map
  const map = L.map('bear-map').setView([51.5, -0.5], 8); // UK centre

  // Add tile layer (themed)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors, © CARTO'
  }).addTo(map);

  // Add markers and paths...
</script>
```

### Leaflet Loading

- Leaflet CSS loaded via `<link>` tag
- Leaflet JS loaded as an npm package, imported in the client-side script
- Only loaded on pages that use the map (bear-map.astro and bear profile)

### Marker Types

| Type | Colour (themed) | Icon |
| ---- | --------------- | ---- |
| Rescued | `--color-primary-dark` | Default marker |
| Event | `--color-accent` | Default marker |
| Rehomed | `--color-secondary` | Default marker |

Marker colours read from the active theme's CSS custom properties (defined in each theme's SCSS file).

### Seeded-Random Paths

Carried over from the old site. The `seeded-random.ts` utility generates deterministic pseudo-random numbers from a seed (bear name or ID). This creates wandering polyline paths between points that look organic but are consistent between page loads.

```typescript
// libs/seeded-random.ts
export function seededRandom(seed: string): () => number {
  // Deterministic PRNG from string seed
  // Returns a function that produces the next random number
}
```

Path generation:

1. Start at rescue location
2. Generate intermediate waypoints using seeded random offsets
3. End at event location (if applicable) or rehome location
4. Repeat for event → rehome segment
5. Draw as Leaflet polyline

### Map Tiles (Themed)

| Theme | Tile Style |
| ----- | ---------- |
| Boutique | CartoDB Positron (light, neutral) |
| Whimsical | Stamen Watercolor or similar soft style |
| Modern | CartoDB Voyager or Dark Matter |
| Fun | Standard OpenStreetMap (colourful) |

Tile URL is determined by reading the active theme from the DOM.

### Marker Clustering (Full Map)

With 400+ bears, markers will overlap in dense areas. Use Leaflet.markercluster plugin:

- Clusters show count
- Click to zoom into cluster
- Styled per theme

### Popups

Each marker popup shows:

- Bear name
- Bear photo (thumbnail)
- Status badge
- Link to `/bears/{slug}`

## Data Flow

1. **Build time:** Bear data with resolved location coordinates serialised as JSON
2. **Page render:** JSON embedded as a `data-` attribute on the map container
3. **Client-side:** Script reads JSON, initialises Leaflet, creates markers and paths

## Files Involved

- `src/components/bears/bear-map.astro` — Astro wrapper component
- `src/libs/seeded-random.ts` — deterministic PRNG (migrated from old site)
- Leaflet CSS and JS (npm package)
- Leaflet.markercluster plugin (npm package, full map only)
