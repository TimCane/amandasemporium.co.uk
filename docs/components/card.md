# Component: Card (Base)

## File

`src/components/ui/card.astro`

## Purpose

Base card wrapper providing the shared visual container (background, border, shadow, border-radius) that bear cards, product cards, and other card-type components build upon.

## Props

```typescript
interface Props {
  href?: string;    // If provided, entire card is a link
  class?: string;   // Additional CSS classes
}
```

## Structure

```html
<!-- When href is provided -->
<a href={href} class="card">
  <slot />
</a>

<!-- When no href -->
<div class="card">
  <slot />
</div>
```

## Styling

Card styling is defined per-theme in SCSS. The base provides grid-area assignments and hidden decorations. Each theme's SCSS file defines the visual appearance (radius, shadow, border, hover effects).

## Theme Variations

| Theme | Radius | Shadow | Border | Hover |
| ----- | ------ | ------ | ------ | ----- |
| Boutique | 0.5rem | Subtle warm | 1px solid | Gentle lift |
| Whimsical | 1rem | Soft diffused | None | Scale 1.02 |
| Modern | 0.25rem | Minimal | 1px solid | Coloured border |
| Fun | 0.75rem | Solid bottom | 2px solid | Scale 1.03, bounce |

## Usage

This is a building block. Specific card types (bear, product, gallery) compose this with their own content:

```astro
<Card href={`/bears/${bear.slug}`}>
  <Image src={bear.data.picture} alt={bear.data.name} />
  <h3>{bear.data.name}</h3>
  <span>{status}</span>
</Card>
```
