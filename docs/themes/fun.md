# Theme: Fun & Energetic

## Design Vision

**Feel like:** A bright, joyful brand that kids and parents both love. Polished but playful — like walking into a Lego store or picking up a Haribo packet. Colourful, chunky, tactile. Everything invites you to click, tap, and explore. The bears look like they're having the best time.

**Real-world references:**

- Lego's website — bright, bold, chunky shapes, fun but well-designed
- Haribo branding — primary colours, rounded, energetic, family-friendly
- Duolingo's design system — playful illustrations, bouncy interactions, green/bright palette
- Nintendo eShop — colourful cards, rounded, playful layout, approachable

## Colour Palette

| Token | Hex | Usage |
| ----- | --- | ----- |
| `--color-primary` | `#f5a623` | Bright sunny orange — buttons, links, accents |
| `--color-primary-light` | `#ffc95c` | Hover states, light accents |
| `--color-primary-dark` | `#d4860a` | Active states, strong emphasis |
| `--color-secondary` | `#3b82f6` | Electric blue — secondary actions, tags |
| `--color-accent` | `#ef4444` | Bright red — highlights, special badges |
| `--color-tertiary` | `#10b981` | Green — success states, positive badges |
| `--color-bg` | `#ffffff` | White base with colour pops |
| `--color-bg-alt` | `#fff8ee` | Warm light yellow-tinted cards |
| `--color-bg-fun` | `#eef6ff` | Light blue tinted sections |
| `--color-text` | `#1e1e2e` | Near-black — body text |
| `--color-text-muted` | `#6b6b80` | Mid grey — secondary text |
| `--color-border` | `#fde68a` | Yellow-tinted borders |

## Typography

| Element | Font | Weight | Style |
| ------- | ---- | ------ | ----- |
| Headings | Fredoka | 600 | Chunky, rounded, playful, bouncy |
| Body | Nunito Sans | 400 | Friendly, clean, approachable |
| Captions/meta | Nunito Sans | 400 | Regular weight, smaller |
| Buttons | Fredoka | 500 | Chunky button text |

## Layout Philosophy

**Colourful, chunky, dynamic.** The grid is used but not rigidly — elements pop out, overlap slightly, have colourful backgrounds that break the mould. Sections have different background colours creating a vibrant patchwork. Nothing is grey or neutral — every section has personality.

- Content max-width: `76rem` (1216px)
- Section padding: `3.5rem` vertical on desktop, `2rem` on mobile
- Card gap: `1.25rem`
- Chunky rounded corners everywhere (12-20px)
- Colourful section backgrounds alternate (white, yellow, blue, etc.)
- Elements can overlap section boundaries slightly for dynamic feel

## Page Layout Wireframes

### Home Page

```text
┌─────────────────────────────────────────────────┐
│  🐻 Amanda's Emporium  Bears Products Events ...│  Colourful navbar
│  ════════════ rainbow/gradient bottom ══════════ │  Bold coloured bottom edge
├─────────────────────────────────────────────────┤
│                                                  │
│   ┌────────────────────────────────────────┐     │
│   │  ★ HERO - big, bold, colourful ★      │     │  Large hero with
│   │                                        │     │  colourful background
│   │   Amanda's Emporium!                   │     │  gradient or pattern
│   │   Handmade crafts &                    │     │  Fredoka heading, BIG
│   │   rescued bears 🐻                     │     │  Bouncy CTA button
│   │                                        │     │
│   │   ╭─────────────────╮                  │     │
│   │   │  Come say hi! → │  (bouncy btn)    │     │
│   │   ╰─────────────────╯                  │     │
│   └────────────────────────────────────────┘     │
│                                                  │
├──────────── yellow/warm bg section ─────────────┤
│                                                  │
│   About teaser in a BIG rounded card             │
│   ╭────────────────────────────────────╮         │  Large friendly card
│   │  Who are we?                       │         │  Rounded corners (20px)
│   │  We make things and rescue bears!  │         │  Chunky shadow
│   │  [Read more →]                     │         │
│   ╰────────────────────────────────────╯         │
│                                                  │
├──────────── blue bg section ────────────────────┤
│                                                  │
│   ★ Where to Find Us!                            │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐        │  Bright cards on
│   │ 🎪       │ │ 🎪       │ │ 🎪       │        │  coloured bg
│   │ Event 1  │ │ Event 2  │ │ Event 3  │        │  Each card slightly
│   │          │ │          │ │          │        │  different tilt
│   └──────────┘ └──────────┘ └──────────┘        │
│                                                  │
├──────────── white bg section ───────────────────┤
│                                                  │
│   ★ What We Make!                                │
│   ┌────┐ ┌────┐ ┌────┐ ┌────┐                   │  Colourful chunky cards
│   │ 🧶 │ │ 🧵 │ │ 🎒 │ │ 📚 │                   │  Solid bottom shadows
│   │    │ │    │ │    │ │    │                   │
│   └────┘ └────┘ └────┘ └────┘                   │
│                                                  │
├──────────── green bg section ───────────────────┤
│                                                  │
│   ★ Meet a Bear!                                 │
│   ┌────────────────────────────────┐             │  Featured bear in a
│   │  [BIG IMAGE]   Hi I'm Abbie!  │             │  fun colourful card
│   │                I was rescued   │             │  Star/sparkle decorations
│   │                from...         │             │
│   └────────────────────────────────┘             │
│                                                  │
├──────────── blue footer ────────────────────────┤
│  ★ Footer: links, copyright, theme switcher ★   │  Blue bg, white text
└─────────────────────────────────────────────────┘
```

### Bears Listing

```text
Filter tabs as colourful chunky pill buttons (orange active, blue/green inactive).
Alphabet nav as circular colourful buttons — like a toy alphabet.
Cards in a 3-4 column grid with chunky rounded corners and solid shadows.
Each card: rounded image, name in Fredoka, colourful status pill badge.
Cards have subtle random tilts and different coloured borders.
Pagination: big chunky numbered buttons, orange active.
Background sections alternate colours.
```

### Bear Profile

```text
Bear image in a fun colourful frame (thick rounded border, maybe multi-coloured).
Name in BIG Fredoka heading with a star or sparkle.
Details in chunky labelled badges (Species: Bear 🐻, Brand: Ty ⭐).
Rescue story in a large rounded card with colourful background.
Map in a rounded container with colourful border.
Fun badges and icons scattered around.
Feels like a character profile in a game or collectible card.
```

## Decorative Elements

- **Section backgrounds:** Alternating solid colours (white, light yellow, light blue, light green) — creates a vibrant patchwork
- **Background patterns:** Subtle confetti dots, stars, or zigzag patterns (CSS `background-image` repeating SVG)
- **Card styling:** Thick rounded corners (16-20px), solid bottom shadows (3-4px, like a 3D block), coloured borders
- **Star/sparkle accents:** CSS pseudo-element stars or sparkles near headings
- **Emoji-style icons:** Decorative emoji-like motifs (CSS or SVG) for section markers
- **Colourful borders:** Multi-colour or gradient borders on feature elements
- **Random tilts:** Slight CSS `transform: rotate(±1-2deg)` on cards for energy

## Animations & Interactions

- **Page transitions:** Bouncy scale up, 350ms with cubic-bezier overshoot
- **Card hover:** Scale 1.05 with a bounce easing, shadow grows, slight rotation corrects
- **Link hover:** Colour pops to bright orange, underline bounces in
- **Button hover:** Scale 1.08, colour brightens, subtle bounce
- **Scroll:** Elements bounce/pop in as they enter viewport (scale from 0.9 to 1.0 with overshoot)
- **Idle:** Subtle wiggle/pulse on featured elements (very gentle, not distracting)
- **Overall tempo:** Fast, bouncy, energetic. Everything has spring and pop.

## Component Specifics

### Navbar

- Background: white with thick colourful bottom border (gradient: orange → blue → green)
- Logo: Fredoka, large, colourful (orange or multi-colour)
- Links: Nunito Sans, chunky, colour change on hover with bounce
- Active link: colourful pill background
- Mobile: Colourful slide-down panel with fun animation

### Cards

- Border-radius: `16-20px`
- Shadow: `0 4px 0 rgba(0, 0, 0, 0.1)` (solid bottom shadow, 3D block feel)
- Border: 2px solid, colour varies (yellow, blue, orange)
- Background: `--color-bg-alt` or section-appropriate colour
- Hover: bounce scale, shadow grows, rotation corrects
- Some cards have different coloured borders for variety

### Buttons

- Primary: `--color-primary` (orange) bg, dark text, 12px radius, Fredoka font
- Secondary: `--color-secondary` (blue) bg, white text
- BIG padding — buttons are chunky and inviting
- Hover: scale up with bounce, colour brightens

### Footer

- Background: `--color-secondary` (electric blue)
- White text, Fredoka headings
- Theme switcher: colourful round buttons
- Stars or confetti pattern in background

### Bear Map

- Tiles: Standard OpenStreetMap (colourful) or Stamen Toner Lite with colourful overlay
- Markers: large, colourful, possibly custom marker icons (bear face?)
- Popups: rounded, colourful border, Fredoka headings, chunky

### Timeline

- Vertical line: thick, multi-coloured gradient (or alternating colours)
- Date markers: large colourful circles (different colours alternating)
- Content as chunky rounded cards with colourful accents
- Feels like a board game path or adventure trail

## Spacing & Rhythm

| Element | Value |
| ------- | ----- |
| Content max-width | 76rem (1216px) |
| Section padding (desktop) | 3.5rem vertical |
| Section padding (mobile) | 2rem vertical |
| Card gap | 1.25rem |
| Heading margin-bottom | 1rem |
| Paragraph margin-bottom | 1rem |
| Base line-height | 1.65 |

## SCSS Structure

```scss
// themes/fun.scss
@use '../shared';

[data-theme="fun"] {
  // Tokens
  --color-primary: #f5a623;
  --color-primary-light: #ffc95c;
  --color-primary-dark: #d4860a;
  --color-secondary: #3b82f6;
  --color-accent: #ef4444;
  --color-tertiary: #10b981;
  --color-bg: #ffffff;
  --color-bg-alt: #fff8ee;
  --color-bg-fun: #eef6ff;
  --color-text: #1e1e2e;
  --color-text-muted: #6b6b80;
  --color-border: #fde68a;
  --font-heading: 'Fredoka', sans-serif;
  --font-body: 'Nunito Sans', sans-serif;

  // Page layout — home page grid areas
  .home {
    &__hero {
      grid-area: hero;
      background: linear-gradient(135deg, var(--color-primary-light), var(--color-bg-fun));
      border-radius: 20px;
    }

    &__about {
      grid-area: about;
      background: var(--color-bg-alt);
      border-radius: 20px;
    }

    &__events {
      grid-area: events;
      background: var(--color-bg-fun);
    }

    &__products {
      grid-area: products;
    }

    &__bear-spotlight {
      grid-area: spotlight;
      background: #ecfdf5;
      border-radius: 20px;
    }
  }

  // Component overrides
  .card {
    border-radius: 16px;
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.1);
    border: 2px solid var(--color-border);
  }

  .navbar {
    background: var(--color-bg);
    border-bottom: 4px solid;
    border-image: linear-gradient(to right, #f5a623, #3b82f6, #10b981) 1;
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
