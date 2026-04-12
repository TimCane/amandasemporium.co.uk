# Layout System

## Layout Hierarchy

```text
base.layout.astro
└── page.layout.astro
```

- **base.layout.astro** — the root HTML shell. Every page uses this.
- **page.layout.astro** — extends base, adds navbar + footer + content wrapper. Most pages use this.

## Base Layout (`base.layout.astro`)

Provides the HTML document shell. Responsible for:

- `<!DOCTYPE html>` and `<html>` tag with `lang="en"` and `data-theme`
- `<head>` with meta tags, fonts, theme CSS, global styles
- Theme loading (active theme CSS + prefetch others)
- View transitions (`<ViewTransitions />`)
- Cookie banner (rendered at body level)

### HTML Skeleton

```html
<!DOCTYPE html>
<html lang="en" data-theme="boutique">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title} | Amanda's Emporium</title>
  <meta name="description" content="{description}" />

  <!-- Flash prevention: set theme before any paint -->
  <script is:inline>
    const theme = localStorage.getItem('ae-theme') || 'boutique';
    document.documentElement.setAttribute('data-theme', theme);
  </script>

  <!-- Open Graph -->
  <slot name="og-meta" />

  <!-- Fonts: active theme fonts loaded eagerly, others prefetched -->
  <!-- Body + heading fonts per theme (see theme-system feature doc) -->

  <!-- Global styles (reset, accessibility, grid-areas, base layout) -->
  <link rel="stylesheet" href="/styles/global.scss" />

  <!-- Active theme CSS -->
  <link rel="stylesheet" href="/styles/themes/{active-theme}.scss" id="theme-css" />

  <!-- Prefetch other theme CSS for instant switching -->
  <link rel="prefetch" href="/styles/themes/whimsical.scss" />
  <link rel="prefetch" href="/styles/themes/modern.scss" />
  <link rel="prefetch" href="/styles/themes/fun.scss" />

  <!-- View Transitions -->
  <ViewTransitions />
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <slot />
  <CookieBanner />
</body>
</html>
```

### Props

| Prop | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| title | string | Yes | Page title (appended with " \| Amanda's Emporium") |
| description | string | Yes | Meta description |

## Page Layout (`page.layout.astro`)

Wraps base layout. Adds the standard page chrome:

```html
<BaseLayout title={title} description={description}>
  <Navbar transition:persist />
  <main id="main-content">
    <div class="page-wrapper">
      <div class="page-content">
        <slot />
      </div>
    </div>
  </main>
  <Footer transition:persist />
</BaseLayout>
```

### HTML Hooks for Themes

The page layout includes structural wrappers that themes can target:

- **`.page-wrapper`** — outermost content container. Themes use this for full-bleed backgrounds (Modern uses alternating dark sections, Fun uses colourful sections).
- **`.page-content`** — inner container with max-width. Each theme sets different max-widths (Boutique: 72rem, Modern: 80rem, etc.).

### Props

Passes through all base layout props.

## Responsive Breakpoints

Each theme defines its own responsive breakpoints via `@media` queries in its SCSS file. The base CSS provides a single-column mobile-first default. No shared breakpoint system — themes have total freedom over when and how layout changes.

### Typical Layout Behaviour

**Mobile (small viewports):**

- Hamburger menu navigation
- Single column content
- Cards stack vertically
- Filter tabs scroll horizontally
- Bear map is full width

**Tablet (medium viewports):**

- Hamburger menu or condensed navbar
- 2-column card grids
- Filter tabs wrap or scroll
- Map and timeline get more space

**Desktop (large viewports):**

- Full horizontal navbar with all links visible
- 3-4 column card grids (exact count varies by theme)
- Max content width varies by theme (68-80rem)

Themes implement these transitions at whatever breakpoints suit their design.

### Theme-Specific Layout Notes

Responsive behaviour varies by theme. Each theme's SCSS controls its own grid-template-areas and breakpoints:

- **Boutique:** 3-column grids on desktop, generous gaps, centred narrow content
- **Whimsical:** 2-3 column grids, wider gaps, slight card rotations removed on mobile
- **Modern:** 4-column grids, tight gaps, full-width sections with contained content
- **Fun:** 3-4 column grids, alternating section background colours on all breakpoints

## Theme Application (Zen Garden Approach)

The `<html>` element gets a `data-theme` attribute. Each theme's SCSS file uses this as a root selector, defining CSS custom properties and grid-template-areas:

```scss
/* Each theme file scopes ALL its styles under the attribute */
[data-theme="boutique"] {
  /* CSS custom properties for colours, spacing, etc. */
  --color-primary: #8b6f5e;
  --color-bg: #faf8f5;

  /* Complete visual design for Boutique */
}

[data-theme="boutique"] .navbar { ... }
[data-theme="boutique"] .card { ... }
/* etc. */
```

This means:

1. All 4 themes target the same BEM classes
2. Only the active theme's styles apply (others not loaded or scoped out)
3. Components emit structural HTML with BEM class hooks — themes do all visual work via CSS custom properties and grid-template-areas
4. No theme-conditional logic in any component

### HTML Hook Conventions

Components include extra structural elements all themes can target. All classes follow BEM naming (`.block__element--modifier`):

| Convention | Purpose | Example |
| ---------- | ------- | ------- |
| BEM block classes | Component root elements | `.card`, `.navbar`, `.hero` |
| BEM element classes | Child elements within a block | `.card__image`, `.card__title`, `.card__body` |
| BEM modifier classes | Variants of blocks/elements | `.card--bear`, `.card--product` |
| `__wrapper` elements | Extra nesting for transforms, clipping | `.card__image-wrapper` |
| `__overlay` elements | Gradient overlays, colour tints | `.card__media-overlay` |
| `__decoration` elements | Empty elements for CSS pseudo-element decorations | `.card__decoration` |
| `data-*` attributes | Theme-specific variant selectors | `data-variant="bear"` |
| Section landmark classes | Full-width section backgrounds | `.section-events`, `.section-products` |

### Flash Prevention

The inline `<script>` in `<head>` runs synchronously before any rendering:

```html
<script is:inline>
  const theme = localStorage.getItem('ae-theme') || 'boutique';
  document.documentElement.setAttribute('data-theme', theme);
</script>
```

Combined with the active theme's CSS being loaded in `<head>`, this ensures the correct theme renders on first paint with no flash.

## Slots

Base layout supports named slots for page-specific head content:

| Slot | Purpose |
| ---- | ------- |
| `og-meta` | Open Graph and JSON-LD tags |
| (default) | Page body content |
