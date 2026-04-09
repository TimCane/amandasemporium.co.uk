# Feature: Theme System (CSS Zen Garden Approach)

## Overview

Four selectable themes that make the site feel like **4 completely different websites**. Inspired by CSS Zen Garden: same HTML markup, radically different visual presentations achieved entirely through CSS.

Each theme has its own:

- Layout arrangements (grid structures, content flow, asymmetry)
- Decorative elements (backgrounds, patterns, borders, illustrations via CSS)
- Typography (both heading AND body fonts)
- Colour palette
- Animation and interaction patterns (hover effects, transitions, timing)
- Spacing rhythm and visual density
- Component styling (cards, buttons, nav — all visually distinct)

## Architecture

### Same HTML, Different CSS

Components emit clean semantic HTML with plenty of class hooks, wrapper elements, and data attributes. The HTML is a **superset** of what all 4 themes need — if one theme needs a wrapper div for a decorative border, that div exists in the markup for all themes (other themes' CSS simply ignores it).

No theme-conditional logic in components. No `{theme === 'whimsical' && ...}`. The HTML is the contract all themes agree on.

### CSS Layers

```
1. global.scss — reset, accessibility, grid-area assignments, base theme defaults
2. Active theme SCSS — complete visual design (grid-template-areas, colours, typography, decorations, animations)
```

`global.scss` imports all shared partials (reset, accessibility, grid-area assignments, base defaults). Each theme has a **substantial standalone SCSS file** that transforms the entire visual presentation.

### CSS Grid + BEM Architecture

All component classes follow the **BEM naming convention** (Block, Element, Modifier). Grid-area assignments are set once in `_grid-areas.scss` (part of the global layer) and never need to be repeated by themes.

Themes only need to declare `grid-template-areas` to control layout. The base CSS provides a single-column stack as the default layout for all grid components.

```scss
// _grid-areas.scss (loaded globally, set once)
.bear-profile__photo { grid-area: photo; }
.bear-profile__narrative { grid-area: narrative; }
.bear-profile__details { grid-area: details; }
.bear-profile__map { grid-area: map; }
.bear-profile__related { grid-area: related; }

// _base.scss (default single-column layout)
.bear-profile {
  display: grid;
  grid-template-areas:
    "photo"
    "narrative"
    "details"
    "map"
    "related";
}

// themes/boutique.scss (overrides layout)
[data-theme="boutique"] {
  .bear-profile {
    grid-template-areas:
      "photo narrative"
      "photo details"
      "map   map"
      "related related";
    grid-template-columns: 1fr 1fr;
  }
}
```

### Theme Stylesheet Scope

Each theme SCSS file targets shared HTML classes/IDs and can:

- Override layouts (`grid-template-areas`, `grid-template-columns`, positioning)
- Add decorative pseudo-elements (`::before`, `::after` for patterns, borders, illustrations)
- Define background images and textures
- Set unique animation keyframes and transitions
- Control spacing, sizing, and visual rhythm
- Style every component distinctly

```scss
// themes/boutique.scss
@use '../shared';

[data-theme="boutique"] {
  // CSS custom properties
  --color-primary: #b8786d;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Lora', serif;

  // Component layouts
  .navbar { ... }
  .card { ... }
  .bear-profile {
    grid-template-areas: ...;
    &__photo { ... }
  }

  // Responsive
  @media (max-width: 768px) {
    .bear-profile {
      grid-template-areas: "photo" "narrative" "details" "map" "related";
      grid-template-columns: 1fr;
    }
  }
}
```

### File Structure

```text
src/styles/
├── _reset.scss          # Modern normalize, box-sizing
├── _accessibility.scss  # sr-only, skip-link, focus-visible
├── _grid-areas.scss     # All grid-area assignments (set once)
├── _base.scss           # Base theme defaults (decoration hidden, single-col grids)
├── _mixins.scss         # Shared mixins
├── global.scss          # Imports all partials above
└── themes/
    ├── _shared.scss     # Imports mixins, shared theme helpers
    ├── boutique.scss
    ├── whimsical.scss
    ├── modern.scss
    └── fun.scss
```

## CSS Loading Strategy

With Zen Garden-level stylesheets, loading all 4 compiled CSS files upfront is wasteful. Strategy:

### 1. Active Theme: Critical CSS Inlined

The active theme's critical CSS (above-the-fold styles) is inlined in `<head>` to prevent flash and ensure instant render:

```html
<head>
  <style id="theme-critical">
    /* Inlined critical CSS for active theme */
  </style>
  <link rel="stylesheet" href="/styles/themes/{active-theme}.css" />
</head>
```

### 2. Other Themes: Lazy-Loaded in Background

After the page loads, prefetch the other 3 theme stylesheets so switching is instant:

```html
<link rel="prefetch" href="/styles/themes/whimsical.css" />
<link rel="prefetch" href="/styles/themes/modern.css" />
<link rel="prefetch" href="/styles/themes/fun.css" />
```

### 3. Theme Switching

When the visitor switches theme:

1. Load the new theme's stylesheet (likely already cached from prefetch)
2. Swap the active `<link>` tag's `href`
3. Update `data-theme` attribute on `<html>`
4. Save to localStorage

After the first page load, all themes are cached and switching is instant.

## Flash Prevention

An inline script in `<head>` runs before any paint:

```html
<script is:inline>
  const theme = localStorage.getItem('ae-theme') || 'boutique';
  document.documentElement.setAttribute('data-theme', theme);
</script>
```

The server renders with the default theme. The inline script sets the correct `data-theme` attribute synchronously, and the active theme's CSS is either inlined or loads immediately.

## SSR Consideration

SSR pages don't know the visitor's theme (stored in localStorage). The server always renders with default Boutique theme classes. The client-side script corrects this before paint. Since layout differs per theme, consider storing theme in a cookie so the server can include the correct theme stylesheet in the initial HTML response.

## Theme Switcher Component

Located in the footer. Small but discoverable. Shows 4 options — could be:

- Named text links with a small visual preview (colour dot or icon)
- Small thumbnail previews of each theme
- Labelled buttons styled per the active theme

Clicking triggers the stylesheet swap and localStorage save.

## Font Loading

Each theme has its own body AND heading font. All loaded via `@fontsource` (self-hosted):

| Theme | Heading Font | Body Font |
| ----- | ------------ | --------- |
| Boutique | Playfair Display (serif) | Lora (serif) |
| Whimsical | Nunito (rounded sans) | Quicksand (soft sans) |
| Modern | Montserrat (geometric sans) | Source Sans 3 (neutral sans) |
| Fun | Fredoka (chunky display) | Nunito Sans (friendly sans) |

**Loading strategy:** Active theme's fonts loaded eagerly. Other theme fonts prefetched in background (they're only needed if the visitor switches themes).

## HTML Hook Conventions

Components include extra structural elements to support all themes:

```html
<!-- Example: card component with plenty of hooks -->
<article class="card" data-variant="bear">
  <div class="card-media">
    <div class="card-image-wrapper">
      <img ... />
    </div>
    <div class="card-media-overlay"></div>
  </div>
  <div class="card-body">
    <div class="card-header">
      <h3 class="card-title">...</h3>
      <span class="card-badge">...</span>
    </div>
    <div class="card-content">...</div>
    <div class="card-footer">...</div>
  </div>
  <div class="card-decoration"></div> <!-- Empty div for theme decorations -->
</article>
```

Key conventions:

- **`-wrapper`** divs: provide extra nesting for transforms, clipping, positioning
- **`-overlay`** divs: for gradient overlays, colour tints, etc.
- **`-decoration`** divs: empty elements themes can use for pseudo-element decorations
- **`data-*`** attributes: for theme-specific selectors (e.g., `data-variant="bear"`)

## View Transitions per Theme

Each theme defines its own page transition animation:

| Theme | Transition Style |
| ----- | ---------------- |
| Boutique | Gentle crossfade (300ms ease) |
| Whimsical | Soft fade with slight scale (400ms ease-out) |
| Modern | Sharp slide-in from right (200ms ease-in-out) |
| Fun | Bouncy scale-up (350ms cubic-bezier bounce) |

Implemented via Astro's `transition:animate` with custom CSS animations per theme.

## Extensibility: Adding New Themes

The theme system is designed so **adding a new theme requires no changes to components, layouts, or page logic**. A new theme is: one SCSS file + one entry in a registry.

### Architecture for Extensibility

#### 1. Base Theme SCSS (`_base.scss`)

A shared base partial provides sensible defaults for every HTML hook, including single-column grid layouts for all grid components. Grid-area assignments are handled separately in `_grid-areas.scss`. New themes only need to override `grid-template-areas` and visual styles:

```scss
// styles/_base.scss

// Default values for all theme tokens
[data-theme] {
  --color-primary: #666;
  --color-bg: #fff;
  --font-heading: sans-serif;
  --font-body: sans-serif;
  --radius-card: 8px;
  --shadow-card: 0 1px 3px rgba(0,0,0,0.1);
  // ... all tokens with safe defaults
}

// Default styling for all components
[data-theme] {
  .card { ... }
  .navbar { ... }
  .card-decoration { display: none; } // Hidden by default
  // ... every hook has a base style
}
```

#### 2. Theme SCSS Structure

Each theme SCSS file follows a consistent pattern using nesting:

```scss
// styles/themes/mytheme.scss
@use '../shared';

[data-theme="mytheme"] {
  // 1. Override tokens
  --color-primary: #...;
  --color-bg: #...;
  --font-heading: '...', serif;
  --font-body: '...', sans-serif;
  --radius-card: ...;

  // 2. Override component styles (only where different from base)
  .card { ... }
  .navbar { ... }

  // 3. Activate decoration elements (hidden by default in base)
  .card-decoration {
    display: block;
    // decorative styling
  }

  // 4. Define animations
  .card:hover { ... }

  // 5. Layout overrides (grid-template-areas only — grid-area assignments are global)
  .bear-profile {
    grid-template-areas:
      "photo narrative"
      "details details"
      "map map"
      "related related";
    grid-template-columns: 300px 1fr;
  }

  .page-content { max-width: 72rem; }
  .bears-grid { grid-template-columns: repeat(3, 1fr); }
}
```

A minimal new theme only needs to override tokens in section 1 — the base styles handle everything else. A full Zen Garden theme overrides everything.

#### 3. Theme Registry (`src/libs/themes.ts`)

Adding a theme means adding one entry:

```typescript
export interface ThemeConfig {
  id: string;
  name: string;
  description: string;
  headingFont: string;   // @fontsource package name
  bodyFont: string;      // @fontsource package name
  cssFile: string;       // Path to compiled theme CSS (from SCSS)
}

export const themes: ThemeConfig[] = [
  {
    id: 'boutique',
    name: 'Boutique & Crafted',
    description: 'Elegant, curated, warm',
    headingFont: 'Playfair Display',
    bodyFont: 'Lora',
    cssFile: '/styles/themes/boutique.scss',
  },
  // ... other themes
  // ADD NEW THEME HERE
];

export const defaultTheme = 'boutique';
```

The theme switcher, CSS loader, and font loader all read from this registry. No other files need changes.

#### 4. Steps to Add a New Theme

1. **Create SCSS file:** Copy an existing theme to `styles/themes/newtheme.scss` and `@use '../shared'`
2. **Override tokens:** Set colours, fonts, radii, shadows as CSS custom properties
3. **Override layouts:** Declare `grid-template-areas` for any grid components you want to rearrange (grid-area assignments are already global)
4. **Override components:** Customise any component visual styles you want to change
5. **Install fonts:** `npm install @fontsource/your-heading-font @fontsource/your-body-font`
6. **Register:** Add entry to `themes` array in `src/libs/themes.ts`
7. **Done.** Theme switcher, CSS loading, font loading, localStorage all work automatically.

No component changes. No layout changes. No page changes.

#### 5. HTML Hook Documentation

A `docs/theme-creation-guide.md` documents every available BEM class, grid-area name, and hook across all components, so theme authors know exactly what they can target. Grid-area assignments from `_grid-areas.scss` are listed there. This is generated/maintained alongside the components.

### Levels of Theme Customisation

| Level | Effort | What Changes |
| ----- | ------ | ------------ |
| **Token-only** | ~30 min | Override CSS custom properties (colours, fonts, radii) in SCSS. Base styles handle everything else. Looks like a colour/font reskin. |
| **Component overrides** | ~2-4 hours | Override specific component styles and `grid-template-areas` in SCSS. Use `_shared.scss` mixins. Looks like a distinct theme. |
| **Full Zen Garden** | ~1-2 days | Override everything: grid layouts, decorations, animations, component styles in SCSS. Feels like a different website. |

The initial 4 themes are full Zen Garden level. Future themes can be any level.

## Files Involved

- `src/styles/global.scss` — imports reset, accessibility, grid-areas, base defaults
- `src/styles/_reset.scss` — modern normalize, box-sizing
- `src/styles/_accessibility.scss` — sr-only, skip-link, focus-visible
- `src/styles/_grid-areas.scss` — all grid-area assignments (set once)
- `src/styles/_base.scss` — base theme defaults for all hooks, single-column grid layouts
- `src/styles/_mixins.scss` — shared SCSS mixins
- `src/styles/themes/_shared.scss` — imports mixins and shared theme helpers
- `src/styles/themes/boutique.scss` — complete Boutique visual design
- `src/styles/themes/whimsical.scss` — complete Whimsical visual design
- `src/styles/themes/modern.scss` — complete Modern visual design
- `src/styles/themes/fun.scss` — complete Fun visual design
- `src/libs/themes.ts` — theme registry (add new themes here)
- `src/components/layout/footer.astro` — theme switcher UI (reads registry)
- `src/layouts/base.layout.astro` — theme loading, inline script, font loading (reads registry)
- All components — HTML with sufficient BEM class hooks for all themes
- `docs/theme-creation-guide.md` — documents all available BEM classes, grid-area names, and HTML hooks for theme authors
