# Theme: Modern & Vibrant

## Design Vision

**Feel like:** A well-designed charity or rescue organisation's website. Professional, bold, confident. The bears and products are presented with impact — strong imagery, clear calls to action, and data that demonstrates the rescue mission's scope. Takes the content seriously.

**Real-world references:**

- RSPCA / Battersea Dogs Home modern redesigns — bold imagery, strong CTAs, professional with heart
- charity:water website — clean, data-driven storytelling, bold stats
- Modern NGO annual reports — infographic style, strong visual hierarchy
- Stripe's website — clean sections, alternating layouts, subtle animations, precise

## Colour Palette

| Token | Hex | Usage |
| ----- | --- | ----- |
| `--color-primary` | `#e05575` | Bold coral/magenta — buttons, links, accents |
| `--color-primary-light` | `#f08098` | Hover states, light accents |
| `--color-primary-dark` | `#b83355` | Active states, strong emphasis |
| `--color-secondary` | `#1a7a6e` | Deep teal — secondary actions, tags |
| `--color-accent` | `#f5a623` | Warm amber — highlights, stats, badges |
| `--color-bg` | `#ffffff` | Clean white background |
| `--color-bg-alt` | `#f7f7f8` | Light grey cards, alternating sections |
| `--color-bg-dark` | `#1a1a2e` | Dark sections (footer, feature blocks) |
| `--color-text` | `#1a1a2e` | Near-black — body text |
| `--color-text-muted` | `#6b6b80` | Mid grey — secondary text |
| `--color-border` | `#e5e5ea` | Light grey borders |

## Typography

| Element | Font | Weight | Style |
| ------- | ---- | ------ | ----- |
| Headings | Montserrat | 700-800 | Geometric, bold, confident uppercase option |
| Body | Source Sans 3 | 400 | Clean, neutral, highly readable |
| Captions/meta | Source Sans 3 | 400 | Regular weight, smaller size |
| Stats/numbers | Montserrat | 800 | Extra bold for impact numbers |

## Layout Philosophy

**Bold, asymmetric, data-driven.** Content uses the full width. Sections alternate between light and dark backgrounds. Layouts are asymmetric — image on one side, content on the other, then swap. Stats and numbers are prominently displayed. Strong visual hierarchy directs the eye.

- Content max-width: `80rem` (1280px)
- Section padding: `4rem` vertical on desktop, `2rem` on mobile
- Card gap: `1.5rem`
- Full-bleed sections with contained content
- Alternating light/dark section backgrounds
- Uses the width — not narrow-column like Boutique

## Page Layout Wireframes

### Home Page

```text
┌─────────────────────────────────────────────────┐
│  AMANDA'S EMPORIUM   BEARS  PRODUCTS  EVENTS ...│  Clean bar, uppercase
├─────────────────────────────────────────────────┤
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓ FULL BLEED HERO ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  Full-width hero
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  Bold headline left-aligned
│▓▓  Handmade Crafts &    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  CTA button prominent
│▓▓  Rescued Bears         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓  [Find us →]           ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌────────┐  ┌────────┐  ┌────────┐             │  Impact stats bar
│  │  400+  │  │  170+  │  │   8+   │             │  Large Montserrat numbers
│  │ Bears  │  │ Homes  │  │ Years  │             │  Amber accent colour
│  │Rescued │  │ Found  │  │ Active │             │
│  └────────┘  └────────┘  └────────┘             │
│                                                  │
├─────────────────────────────────────────────────┤
│ About teaser                                     │
│ ┌──────────────┐  ┌──────────────────────────┐   │  Asymmetric: image left,
│ │              │  │  The story behind the     │   │  text right
│ │   [IMAGE]    │  │  emporium. We rescue...   │   │
│ │              │  │  [Read more →]             │   │
│ └──────────────┘  └──────────────────────────┘   │
│                                                  │
├─────────────── dark bg section ─────────────────┤
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓  UPCOMING EVENTS                    white text ▓│  Dark section, white text
│▓  ┌──────────┐ ┌──────────┐ ┌──────────┐       ▓│  Cards with coral accent
│▓  │ Event 1  │ │ Event 2  │ │ Event 3  │       ▓│
│▓  └──────────┘ └──────────┘ └──────────┘       ▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
├─────────────────────────────────────────────────┤
│                                                  │
│  FEATURED PRODUCTS                               │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐               │  Tight 4-col grid
│  │     │ │     │ │     │ │     │               │  Sharp corners
│  │     │ │     │ │     │ │     │               │  Price prominent
│  └─────┘ └─────┘ └─────┘ └─────┘               │
│                                                  │
│  ┌──────────────────────────┐  ┌──────────────┐  │  Asymmetric: text left,
│  │  BEAR SPOTLIGHT           │  │              │  │  image right (flipped)
│  │  Meet our latest rescue   │  │   [IMAGE]    │  │
│  │  [View profile →]         │  │              │  │
│  └──────────────────────────┘  └──────────────┘  │
│                                                  │
├─────────────── dark bg footer ──────────────────┤
│▓▓  Footer: links, copyright, theme switcher    ▓│  Dark footer, white text
└─────────────────────────────────────────────────┘
```

### Bears Listing

```text
Filter tabs as sharp-cornered solid buttons. Active tab: coral bg, white text.
Alphabet nav as compact letter buttons, sharp, efficient.
Cards in a tight 4-column grid (uses the full width).
Each card: image fills top, sharp corners, name in bold Montserrat, coloured left border indicating status.
Pagination: compact numbered buttons, sharp corners.
Overall: information-dense but clean. Lots of content visible at once.
```

### Bear Profile

```text
Full-bleed hero image at top (or large, edge-to-edge within content).
Bear name overlaid on image in bold Montserrat.
Details below in a structured grid: left column for facts (species, brand, dates), right for narrative.
Stats/dates displayed prominently.
Map full-width with dark styling.
Feels like a professional rescue case file.
```

## Decorative Elements

- **Section dividers:** Full-width colour block transitions (light → dark → light)
- **Background textures:** None — clean flat colours. White and dark navy alternate.
- **Card styling:** Minimal shadow, sharp corners (2-4px max), coloured accent borders (left edge or top edge)
- **Stat numbers:** Extra-large Montserrat in amber `--color-accent`, with subtle count-up animation
- **Geometric accents:** Diagonal clip-paths on section backgrounds, angled image crops
- **No organic shapes** — everything is geometric, precise, intentional

## Animations & Interactions

- **Page transitions:** Sharp slide from right, 200ms ease-in-out
- **Card hover:** Coloured border appears (left or top edge), no lift — feels like selection
- **Link hover:** Colour snaps to `--color-primary`, sharp underline appears
- **Button hover:** Darken to `--color-primary-dark`, fast 150ms transition
- **Scroll:** Elements slide up and fade in as they enter viewport (staggered, subtle)
- **Stats:** Number count-up animation on first view
- **Overall tempo:** Quick, precise, confident. Snappy but not frantic.

## Component Specifics

### Navbar

- Background: white with thin bottom border
- Logo: Montserrat, bold, possibly uppercase, letter-spaced
- Links: Source Sans 3, uppercase small text, letter-spaced, colour change on hover
- Active link: coral underline, 2px solid
- Mobile: Sharp slide-in drawer from right

### Cards

- Border-radius: `2px` (barely rounded)
- Shadow: `0 1px 2px rgba(0, 0, 0, 0.05)` (minimal)
- Border: 1px solid `--color-border`, with coloured left accent border on hover
- Background: `--color-bg-alt`
- Hover: coloured border accent appears, no lift

### Buttons

- Primary: `--color-primary` background, white text, 2px radius, uppercase, letter-spaced
- Secondary: transparent with 2px `--color-primary` border
- Compact padding, Source Sans 3 font
- Hover: sharp darken, fast transition

### Footer

- Background: `--color-bg-dark` (dark navy)
- White text, clean links
- Theme switcher: minimal text or icon buttons

### Bear Map

- Tiles: CartoDB Dark Matter (dark) or Voyager (clean light)
- Markers: bold coloured circles with sharp outlines
- Popups: white, sharp corners, Montserrat headings

### Timeline

- Vertical line: light grey
- Date markers: small squares in coral
- Content in a tight list format (not cards — more data-table feel)
- Minimal, efficient — like a log or case record

## Spacing & Rhythm

| Element | Value |
| ------- | ----- |
| Content max-width | 80rem (1280px) |
| Section padding (desktop) | 4rem vertical |
| Section padding (mobile) | 2rem vertical |
| Card gap | 1.5rem |
| Heading margin-bottom | 1rem |
| Paragraph margin-bottom | 1rem |
| Base line-height | 1.6 (tighter, efficient) |

## SCSS Structure

```scss
// themes/modern.scss
@use '../shared';

[data-theme="modern"] {
  // Tokens
  --color-primary: #e05575;
  --color-primary-light: #f08098;
  --color-primary-dark: #b83355;
  --color-secondary: #1a7a6e;
  --color-accent: #f5a623;
  --color-bg: #ffffff;
  --color-bg-alt: #f7f7f8;
  --color-bg-dark: #1a1a2e;
  --color-text: #1a1a2e;
  --color-text-muted: #6b6b80;
  --color-border: #e5e5ea;
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Source Sans 3', sans-serif;

  // Page layout — home page grid areas
  .home {
    &__hero {
      grid-area: hero;
      width: 100vw;
      margin-left: calc(-50vw + 50%);
    }

    &__stats {
      grid-area: stats;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    &__about {
      grid-area: about;
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 2rem;
    }

    &__events {
      grid-area: events;
      background: var(--color-bg-dark);
      color: #ffffff;
    }

    &__products {
      grid-area: products;
    }

    &__bear-spotlight {
      grid-area: spotlight;
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 2rem;
    }
  }

  // Component overrides
  .card {
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--color-border);
  }

  .navbar {
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
  }

  // Responsive
  @media (min-width: 768px) {
    .home {
      display: grid;
      grid-template-areas:
        "hero"
        "stats"
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
