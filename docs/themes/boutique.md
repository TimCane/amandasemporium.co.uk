# Theme: Boutique & Crafted (DEFAULT)

## Design Vision

**Feel like:** Walking into a well-curated independent boutique shop. Warm lighting, carefully arranged displays, everything has its place. Quality is communicated through restraint, good typography, and letting the items speak for themselves.

**Real-world references:**

- Independent boutique shopfronts — warm cream/gold tones, elegant signage
- High-end craft market programme booklets — editorial typography, generous whitespace
- Aesop product pages — refined simplicity, warm neutrals
- Liberty London's website — curated, warm, premium but approachable

## Colour Palette

| Token | Hex | Usage |
| ----- | --- | ----- |
| `--color-primary` | `#b8786d` | Dusty rose — buttons, links, accents |
| `--color-primary-light` | `#d4a59a` | Hover states, light accents |
| `--color-primary-dark` | `#8c564b` | Active states, strong emphasis |
| `--color-secondary` | `#8fae8b` | Sage green — secondary actions, tags |
| `--color-accent` | `#c9a84c` | Gold/champagne — highlights, special badges |
| `--color-bg` | `#faf7f2` | Warm cream background |
| `--color-bg-alt` | `#f0ebe3` | Card backgrounds, alternating sections |
| `--color-text` | `#3d3229` | Dark warm brown — body text |
| `--color-text-muted` | `#7a6e63` | Secondary text, captions |
| `--color-border` | `#e0d6cb` | Subtle warm borders |

## Typography

| Element | Font | Weight | Style |
| ------- | ---- | ------ | ----- |
| Headings | Playfair Display | 600-700 | Elegant serif, classic boutique signage |
| Body | Lora | 400 | Warm readable serif, like a quality print catalogue |
| Captions/meta | Lora | 400 italic | Italic for secondary info |

## Layout Philosophy

**Centred, spacious, editorial.** Content sits in a comfortable reading width with generous margins. Sections breathe. The layout draws from print catalogues — clean columns, clear hierarchy, whitespace as a design element.

- Content max-width: `72rem` (1152px), centred
- Section padding: `5rem` vertical on desktop, `2.5rem` on mobile
- Card gap: `2rem`
- Everything feels unhurried — room to browse

## Page Layout Wireframes

### Home Page

```text
┌─────────────────────────────────────────────────┐
│  [Logo]     Bears  Products  Events  Gallery ... │  Thin top bar
├─────────────────────────────────────────────────┤
│                                                  │
│          ┌──────────────────────────┐            │
│          │      HERO IMAGE          │            │
│          │                          │            │
│          │   Amanda's Emporium      │            │  Centred, elegant
│          │   Handmade crafts &      │            │  Text overlaid or below
│          │   rescued bears          │            │
│          └──────────────────────────┘            │
│                                                  │
│  ─ ─ ─ ─ ─ ─ ─ thin gold line ─ ─ ─ ─ ─ ─ ─   │
│                                                  │
│          About teaser paragraph                  │  Centred single column
│          [Read more →]                           │
│                                                  │
│  ─ ─ ─ ─ ─ ─ ─ thin gold line ─ ─ ─ ─ ─ ─ ─   │
│                                                  │
│       Upcoming Events                            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐         │  3-col cards
│  │ Event 1  │ │ Event 2  │ │ Event 3  │         │
│  └──────────┘ └──────────┘ └──────────┘         │
│                                                  │
│  ─ ─ ─ ─ ─ ─ ─ thin gold line ─ ─ ─ ─ ─ ─ ─   │
│                                                  │
│     Featured Products                            │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐               │  4-col grid
│  │     │ │     │ │     │ │     │               │
│  └─────┘ └─────┘ └─────┘ └─────┘               │
│                                                  │
│  ─ ─ ─ ─ ─ ─ ─ thin gold line ─ ─ ─ ─ ─ ─ ─   │
│                                                  │
│     Bear Spotlight                               │
│  ┌────────────────────────────────┐              │  Large feature card
│  │  [Image]    Bear name          │              │
│  │             Story excerpt...   │              │
│  └────────────────────────────────┘              │
│                                                  │
├─────────────────────────────────────────────────┤
│  Footer: links, copyright, [theme switcher]      │
└─────────────────────────────────────────────────┘
```

### Bears Listing

```text
Centred content column. Filter tabs as elegant underlined text.
Alphabet nav as small spaced letters (like a book index).
Cards in a 3-column grid with generous gaps.
Each card: image top, name below in serif, subtle status badge.
Pagination: simple "← Previous  1 2 3  Next →" text.
```

### Bear Profile

```text
Large hero image centred (not full-bleed).
Bear name in large Playfair Display below image.
Details in a two-column layout: info on left, map on right.
Thin gold dividers between sections.
```

## Decorative Elements

- **Section dividers:** Thin horizontal lines in gold (`--color-accent`), with optional small diamond ornament at centre
- **Background textures:** Subtle cream linen texture on `body` (CSS `background-image`, very faint)
- **Card styling:** Thin borders, subtle warm shadows, barely rounded corners (4px)
- **Image treatment:** Subtle warm colour overlay on hover (mix-blend-mode or opacity)
- **No heavy decorations** — the boutique feel comes from restraint and quality typography

## Animations & Interactions

- **Page transitions:** Gentle crossfade, 300ms ease
- **Card hover:** Subtle lift (translateY -2px), shadow deepens slightly
- **Link hover:** Thin underline slides in from left
- **Button hover:** Slight darken, smooth 200ms transition
- **Scroll:** No scroll animations — content is simply there, like a printed page
- **Overall tempo:** Slow, smooth, unhurried. Nothing sudden.

## Component Specifics

### Navbar

- Background: warm cream with thin bottom border in gold
- Logo: Playfair Display, elegant, regular weight
- Links: Lora, spaced, thin underline on hover slides in from left
- Mobile: Clean slide-down panel, not hamburger drawer

### Cards

- Border-radius: `4px`
- Shadow: `0 1px 3px rgba(61, 50, 41, 0.1)`
- Border: 1px solid `--color-border`
- Background: `--color-bg-alt`
- Hover: gentle lift, shadow deepens
- Image: slightly warm filter on hover

### Buttons

- Primary: `--color-primary` background, white text, 4px radius
- Secondary: transparent with `--color-primary` border
- Generous padding, Lora font
- Hover: smooth darken

### Footer

- Background: `--color-bg-alt`
- Thin top border in gold
- Theme switcher: small text labels in a row

### Bear Map

- Tiles: CartoDB Positron (light, neutral, warm grey)
- Markers: styled circles in theme colours
- Popups: cream background, Playfair heading, thin border

### Timeline

- Thin vertical line in gold
- Date markers: small gold circles
- Content cards alternate left/right
- Editorial, museum-exhibit feel

## Spacing & Rhythm

| Element | Value |
| ------- | ----- |
| Content max-width | 72rem (1152px) |
| Section padding (desktop) | 5rem vertical |
| Section padding (mobile) | 2.5rem vertical |
| Card gap | 2rem |
| Heading margin-bottom | 1.5rem |
| Paragraph margin-bottom | 1.25rem |
| Base line-height | 1.75 (generous for serif body) |

## SCSS Structure

```scss
// themes/boutique.scss
@use '../shared';

[data-theme="boutique"] {
  // Tokens
  --color-primary: #b8786d;
  --color-primary-light: #d4a59a;
  --color-primary-dark: #8c564b;
  --color-secondary: #8fae8b;
  --color-accent: #c9a84c;
  --color-bg: #faf7f2;
  --color-bg-alt: #f0ebe3;
  --color-text: #3d3229;
  --color-text-muted: #7a6e63;
  --color-border: #e0d6cb;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Lora', serif;

  // Page layout — home page grid areas
  .home {
    &__hero {
      grid-area: hero;
      text-align: center;
    }

    &__about {
      grid-area: about;
      border-top: 1px solid var(--color-accent);
      border-bottom: 1px solid var(--color-accent);
    }

    &__events {
      grid-area: events;
    }

    &__products {
      grid-area: products;
    }

    &__bear-spotlight {
      grid-area: spotlight;
    }
  }

  // Component overrides
  .card {
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(61, 50, 41, 0.1);
    border: 1px solid var(--color-border);
  }

  .navbar {
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-accent);
  }

  // Responsive
  @media (min-width: 768px) {
    .home {
      display: grid;
      grid-template-areas:
        "hero"
        "about"
        "events"
        "products"
        "spotlight";
    }
  }

  @media (min-width: 1024px) {
    .home__events .card-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .home__products .card-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
```
