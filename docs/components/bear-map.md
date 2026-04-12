# Component: Bear Map

## File

`src/components/bears/bear-map.astro`

## Purpose

Leaflet map wrapper. Used in two variants: full map (all bears) and profile map (single bear).

## Props

```typescript
interface Props {
  variant: 'full' | 'profile';
  bears: Array<{
    name: string;
    slug: string;
    picture: string;
    status: string;
    rescued: { lat: number; lng: number; name: string; date: string };
    event?: { lat: number; lng: number; name: string };
    rehomed?: { lat: number; lng: number; name: string; date: string };
  }>;
}
```

## Structure

```html
<div
  id="bear-map"
  class="bear-map"
  data-bears={JSON.stringify(bears)}
  data-variant={variant}
></div>

<!-- Leaflet CSS -->
<link rel="stylesheet" href="/leaflet/leaflet.css" />

<!-- Client-side initialisation -->
<script>
  // Import leaflet, read data attributes, create map
</script>
```

## Variants

### Full Map (`variant="full"`)

- Height: 70vh (most of viewport)
- Shows all bears with location data
- Marker clustering (Leaflet.markercluster)
- Default centre: UK (~51.5, -1.5), zoom 6
- Popups with bear name, thumbnail, status, link to profile

### Profile Map (`variant="profile"`)

- Height: 300-400px
- Shows 1-3 markers for a single bear
- No clustering needed
- Centred and zoomed to fit all markers
- Seeded-random wandering path between points

## Technical Details

See `features/bear-map.md` for full implementation details including:

- Seeded-random path generation
- Theme-aware marker colours
- Theme-aware tile layers
- Marker clustering configuration

## Accessibility

- Map container has `role="application"` and `aria-label`
- Non-interactive fallback text for screen readers describing the bear locations
- Map is supplementary — all location info is also available as text on the page
