# Theme Creation Guide

How to add a new theme to Amanda's Emporium. No component, layout, or page changes required.

## Quick Start

1. Create `src/styles/themes/yourtheme.scss` (or copy an existing theme)
2. Add `@use '../shared';` at the top
3. Wrap all styles in `[data-theme="yourtheme"] { ... }`
4. Override CSS custom properties, `grid-template-areas`, and any component styles you want
5. Install your chosen fonts: `npm install @fontsource/your-font`
6. Add an entry to the `themes` array in `src/libs/themes.ts`
7. Done — the theme switcher picks it up automatically

**Note:** Grid-area assignments (e.g., `.bear-profile__photo { grid-area: photo; }`) are already defined in `_grid-areas.scss` and loaded globally. You never need to set these. Your theme only needs to declare `grid-template-areas` for layout and add visual styling.

## Minimal Theme Example

```scss
// themes/mytheme.scss
@use '../shared';

[data-theme="mytheme"] {
  --color-primary: #...;
  --font-heading: '...', serif;
  --font-body: '...', sans-serif;

  // Override layouts (grid-template-areas)
  .bear-profile {
    grid-template-areas:
      "photo narrative"
      "details details"
      "map map"
      "related related";
    grid-template-columns: 300px 1fr;
  }

  // Visual overrides
  .card {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
}
```

## CSS Custom Properties (Tokens)

These are the minimum tokens every theme should define. The base theme (`_base.scss`) provides defaults, so you only need to override what you want to change. All tokens are set inside the `[data-theme="yourtheme"]` block using SCSS nesting.

### Colours

```scss
[data-theme="yourtheme"] {
  // Primary action colour (buttons, links, accents)
  --color-primary: #...;
  --color-primary-light: #...;
  --color-primary-dark: #...;

  // Secondary colour (secondary actions, tags)
  --color-secondary: #...;

  // Accent colour (highlights, badges, special elements)
  --color-accent: #...;

  // Backgrounds
  --color-bg: #...;          // Main page background
  --color-bg-alt: #...;      // Cards, alternating sections

  // Text
  --color-text: #...;        // Body text
  --color-text-muted: #...;  // Secondary text, captions

  // Borders
  --color-border: #...;
}
```

### Typography

```scss
[data-theme="yourtheme"] {
  --font-heading: 'Your Heading Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

### Component Tokens

```scss
[data-theme="yourtheme"] {
  // Cards
  --radius-card: 8px;
  --shadow-card: 0 1px 3px rgba(0,0,0,0.1);

  // Buttons
  --radius-button: 4px;

  // Content layout
  --content-max-width: 72rem;
  --section-padding: 4rem;
  --card-gap: 1.5rem;
}
```

## HTML Hooks Reference

Every component emits stable HTML with BEM class hooks. Your theme SCSS can target any of them. Grid-area names (e.g., `photo`, `narrative`, `details`) are pre-assigned in `_grid-areas.scss` -- your theme never needs to set `grid-area` on elements, only `grid-template-areas` on the parent grid container.

### Layout

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.page-wrapper` | `<div>` | Outermost content container — use for full-bleed section backgrounds |
| `.page-content` | `<div>` | Inner container with max-width |
| `.section-{name}` | `<section>` | Page sections (e.g., `.section-events`, `.section-products`) — use for per-section backgrounds |

### Navbar

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.navbar` | `<nav>` | Navbar container |
| `.navbar-wrapper` | `<div>` | Inner wrapper (for positioning) |
| `.navbar-logo` | `<a>` | Text logo link |
| `.navbar-links` | `<ul>` | Navigation links list |
| `.navbar-link` | `<a>` | Individual nav link |
| `.navbar-link[aria-current]` | `<a>` | Active page link |
| `.navbar-hamburger` | `<button>` | Mobile menu toggle |
| `.navbar-mobile-menu` | `<div>` | Mobile menu panel |
| `.navbar-decoration` | `<div>` | Empty div for decorative elements |

### Footer

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.footer` | `<footer>` | Footer container |
| `.footer-content` | `<div>` | Inner wrapper |
| `.footer-links` | `<div>` | Footer navigation links |
| `.footer-copyright` | `<div>` | Copyright text |
| `.theme-switcher` | `<div>` | Theme switcher container |
| `.theme-switcher-btn` | `<button>` | Individual theme button |
| `.theme-switcher-btn[aria-current]` | `<button>` | Active theme button |
| `.footer-decoration` | `<div>` | Empty div for decorations |

### Cards (Base)

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.card` | `<article>` or `<a>` | Card container (link if clickable) |
| `.card[data-variant]` | attribute | Card type: `"bear"`, `"product"`, `"event"`, `"gallery"` |
| `.card-media` | `<div>` | Image area wrapper |
| `.card-image-wrapper` | `<div>` | Inner image wrapper (for transforms, clipping) |
| `.card-media-overlay` | `<div>` | Empty div overlaying the image (for gradients, tints) |
| `.card-body` | `<div>` | Text content area |
| `.card-header` | `<div>` | Title + badge area |
| `.card-title` | `<h3>` | Card heading |
| `.card-badge` | `<span>` | Status/category badge |
| `.card-content` | `<div>` | Description/details |
| `.card-footer` | `<div>` | Bottom area (actions, metadata) |
| `.card-decoration` | `<div>` | Empty div for decorations (hidden by default) |

### Bear-Specific

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.bear-status-badge` | `<span>` | "Looking for home" / "Found their home" |
| `.bear-species` | `<span>` | Species label |
| `.bear-profile-hero` | `<div>` | Profile page hero image section |
| `.bear-profile-details` | `<div>` | Profile facts section |
| `.bear-profile-story` | `<div>` | Rescue/rehome narrative |

### Filter Tabs

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.filter-tabs` | `<div>` | Container |
| `.filter-tab` | `<a>` | Individual tab |
| `.filter-tab[aria-selected="true"]` | `<a>` | Active tab |

### Alphabet Nav

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.alphabet-nav` | `<nav>` | Container |
| `.alphabet-letter` | `<a>` | Active letter button |
| `.alphabet-letter[aria-current]` | `<a>` | Selected letter |
| `.alphabet-letter-disabled` | `<span>` | Inactive letter |
| `.alphabet-clear` | `<a>` | "All" clear button |

### Pagination

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.pagination` | `<nav>` | Container |
| `.pagination-prev` | `<a>` | Previous button |
| `.pagination-next` | `<a>` | Next button |
| `.pagination-page` | `<a>` | Page number |
| `.pagination-page[aria-current]` | `<a>` | Active page |
| `.pagination-ellipsis` | `<span>` | Gap indicator |

### Bear Map

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.bear-map` | `<div>` | Map container |
| `.bear-map[data-variant]` | attribute | `"full"` or `"profile"` |
| `.bear-map-legend` | `<div>` | Legend overlay/section |

### Timeline

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.timeline` | `<div>` | Timeline container |
| `.timeline-line` | `<div>` | Vertical line element |
| `.timeline-entry` | `<div>` | Individual entry |
| `.timeline-date` | `<div>` | Date display |
| `.timeline-marker` | `<div>` | Dot/shape on the timeline line |
| `.timeline-content` | `<div>` | Entry content card |
| `.timeline-badge` | `<span>` | "Rescued" / "Rehomed" badge |

### Events

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.event-date-display` | `<div>` | Formatted date block |
| `.event-meta` | `<p>` | Time + location |
| `.event-actions` | `<div>` | Website link + calendar button |

### Gallery

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.gallery-grid` | `<div>` | Grid container |
| `.gallery-item` | `<a>` or `<div>` | Individual item |
| `.gallery-caption` | `<div>` | Caption overlay/text |
| `.gallery-category-tag` | `<span>` | Category label |

### Cookie Banner

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.cookie-banner` | `<div>` | Banner container |
| `.cookie-banner-text` | `<p>` | Message text |
| `.cookie-banner-dismiss` | `<button>` | Dismiss button |

### Home Page Sections

| Class | Element | Purpose |
| ----- | ------- | ------- |
| `.hero` | `<section>` | Hero section |
| `.hero-image-wrapper` | `<div>` | Hero image container |
| `.hero-overlay` | `<div>` | Hero overlay for text contrast |
| `.hero-content` | `<div>` | Hero text + CTA |
| `.hero-decoration` | `<div>` | Decorative elements |
| `.about-teaser` | `<section>` | About preview section |
| `.featured-products` | `<section>` | Products section |
| `.bear-spotlight` | `<section>` | Bear feature section |
| `.upcoming-events` | `<section>` | Events section |

## Tips for Theme Authors

### Start Small

Override tokens first. See how the base styles look with your colours and fonts. Then progressively override `grid-template-areas` and component styles where you want something different.

### Use SCSS Mixins from `_shared.scss`

The `_shared.scss` partial provides mixins for common patterns (responsive breakpoints, card styles, etc.). Import it with `@use '../shared';` at the top of your theme file and use its helpers to keep your SCSS DRY.

### Use Decoration Divs

Many components have empty `.{name}-decoration` divs. These are hidden by default in `_base.scss`. Activate them with `display: block` and use `::before` / `::after` pseudo-elements for decorative patterns, borders, or illustrations.

### Grid Layouts

Grid-area assignments are global (defined in `_grid-areas.scss`). Your theme only needs to set `grid-template-areas` and `grid-template-columns` on the parent container to rearrange content. The base provides single-column stacks as defaults.

### Background Patterns

Use CSS `background-image` with repeating SVGs or gradients for textures and patterns. Keep file sizes small by using CSS-generated patterns where possible.

### Section Backgrounds

Target `.section-{name}` classes to give different page sections their own background colours, creating visual rhythm.

### Map Tiles

The map component reads a `data-tile-url` attribute that can be set per theme. Override the Leaflet tile layer URL to match your theme's visual style.

### Respect Accessibility

- Ensure WCAG AA contrast ratios (4.5:1 for body text, 3:1 for large text)
- Don't hide interactive elements
- Ensure focus indicators are visible in your palette
- Test with a screen reader — decorative elements should be `aria-hidden`

## Theme Registry Entry

```typescript
// src/libs/themes.ts
{
  id: 'yourtheme',              // Used in data-theme attribute and localStorage
  name: 'Your Theme Name',      // Displayed in theme switcher
  description: 'Brief tagline', // Optional tooltip/description
  headingFont: 'Font Name',     // Must match @fontsource package
  bodyFont: 'Font Name',        // Must match @fontsource package
  cssFile: '/styles/themes/yourtheme.scss',
}
```
