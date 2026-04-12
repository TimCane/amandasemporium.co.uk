# Theme: Warm & Whimsical

## Design Vision

**Feel like:** A cozy cottage, a handwritten letter, a warm blanket. Soft, nostalgic, and gentle. The bears feel like they've found a safe, loving home. Everything has a handmade, personal quality — as if the website itself was crafted with care.

**Real-world references:**

- Cottagecore aesthetic — dried flowers, soft linens, muted pastels, warm nostalgia
- Handwritten recipe cards and journals — personal, imperfect, charming
- Anthropologie's website — warm, layered, textured, curated but not sterile
- Pressed flower art — delicate, natural, preserved beauty

## Colour Palette

| Token | Hex | Usage |
| ----- | --- | ----- |
| `--color-primary` | `#9b8ec4` | Soft lavender — buttons, links, accents |
| `--color-primary-light` | `#c4b8e8` | Hover states, light accents |
| `--color-primary-dark` | `#6f5fa0` | Active states, strong emphasis |
| `--color-secondary` | `#7ec8a4` | Sage mint — secondary actions, tags |
| `--color-accent` | `#e8a0b4` | Soft pink — highlights, special badges |
| `--color-bg` | `#faf5f0` | Warm parchment background |
| `--color-bg-alt` | `#f3ece4` | Card backgrounds, slightly warmer |
| `--color-text` | `#4a3f5c` | Deep purple-brown — body text |
| `--color-text-muted` | `#8a7e96` | Secondary text, captions |
| `--color-border` | `#e0d8cc` | Soft warm borders |

## Typography

| Element | Font | Weight | Style |
| ------- | ---- | ------ | ----- |
| Headings | Nunito | 700 | Rounded, friendly, warm |
| Body | Quicksand | 400 | Soft, slightly rounded, inviting |
| Captions/meta | Quicksand | 300 | Light weight, gentle |

## Layout Philosophy

**Soft, organic, layered.** Things don't snap to a rigid grid — they feel placed by hand. Sections overlap slightly, edges are rounded or wavy, content feels like it's resting on a soft surface. Wider reading column than Boutique to feel more relaxed and open.

- Content max-width: `68rem` (1088px), centred
- Section padding: `4rem` vertical on desktop, `2rem` on mobile
- Card gap: `1.5rem`
- Rounded corners everywhere — nothing sharp
- Sections can have wavy/curved edges (CSS clip-path or SVG borders)

## Page Layout Wireframes

### Home Page

```text
┌─────────────────────────────────────────────────┐
│  ☁ Amanda's Emporium    Bears Products Events ...│  Rounded navbar, soft bg
├────────────────────╮                             │
│                    ╰─── wavy edge ───────────────┤
│                                                  │
│   ┌────────────────────────────────────────┐     │
│   │          HERO IMAGE                    │     │  Rounded corners, large
│   │    (possibly with illustrated frame)   │     │  Decorative border or
│   │                                        │     │  pressed-flower frame
│   │      Amanda's Emporium                 │     │
│   │      ~ handmade with love ~            │     │
│   └────────────────────────────────────────┘     │
│                                                  │
│    ╭─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ╮       │
│    │  About teaser in a soft card with   │       │  Parchment-coloured card
│    │  rounded edges, like a note pinned  │       │  Slightly rotated (1-2deg)
│    │  to a board. [Read more →]          │       │
│    ╰─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ╯       │
│                                                  │
│   ✿ Upcoming Events                             │
│   ┌──────────┐ ┌──────────┐                      │  2-col, larger cards
│   │ soft     │ │ soft     │                      │  Rounded, with soft
│   │ card     │ │ card     │                      │  shadows
│   └──────────┘ └──────────┘                      │
│                                                  │
│   ✿ What We Make                                │
│   ┌────┐ ┌────┐ ┌────┐ ┌────┐                   │  4-col, rounded cards
│   │    │ │    │ │    │ │    │                   │
│   └────┘ └────┘ └────┘ └────┘                   │
│                                                  │
│   ✿ Meet Our Bears                              │
│   ┌────────────────────────────────┐             │  Featured bear in a
│   │  [Image]     Name              │             │  soft, rounded card
│   │              A cozy story...   │             │  Like a scrapbook entry
│   └────────────────────────────────┘             │
│                                                  │
├────────────────────╮                             │
│                    ╰─── wavy edge ───────────────┤
│  Footer with soft colours, theme switcher        │
└─────────────────────────────────────────────────┘
```

### Bears Listing

```text
Filter tabs as rounded pills with soft fill.
Alphabet nav as friendly circular buttons.
Cards in a 2-3 column grid with generous rounded corners.
Each card: rounded image, name in Nunito, soft colour status badge.
Cards feel slightly scattered — not pixel-perfect aligned.
Subtle rotation on cards (CSS transform: rotate(±0.5deg)) for handmade feel.
Pagination: rounded pill buttons, soft colours.
```

### Bear Profile

```text
Bear image in a decorative rounded frame (CSS border with rounded pattern).
Name in large Nunito heading.
Details in a single flowing column (not two-column — more like reading a story).
Rescue journey as a gentle flowing narrative with soft location cards.
Map in a rounded container with soft shadow.
Feels like reading a page from a scrapbook.
```

## Decorative Elements

- **Section edges:** Wavy/curved borders between sections (CSS `clip-path` or SVG)
- **Background textures:** Subtle parchment/paper texture, very faint watercolour wash
- **Card styling:** Large rounded corners (16px+), soft diffused shadows, no hard borders
- **Decorative accents:** Small CSS floral/leaf motifs (✿) or dots as section dividers
- **Image frames:** Rounded with possible subtle decorative border (double-line or dotted)
- **Slight rotations:** Cards and feature elements slightly rotated (0.5-1deg) for handmade feel
- **Background shapes:** Soft pastel blobs behind sections (CSS gradients or pseudo-elements)

## Animations & Interactions

- **Page transitions:** Soft fade with gentle scale (400ms ease-out)
- **Card hover:** Gentle float upward with growing soft shadow, slight rotation correction (back to 0deg)
- **Link hover:** Colour transitions smoothly over 300ms, underline fades in
- **Button hover:** Soft scale (1.02), colour lightens
- **Scroll:** Subtle parallax on hero image, elements gently fade in as they enter viewport
- **Overall tempo:** Slow, gentle, dreamy. Like turning pages in a picture book.

## Component Specifics

### Navbar

- Background: warm parchment with rounded bottom edge (or wavy)
- Logo: Nunito, friendly, possibly with a small decorative flourish
- Links: Quicksand, rounded pill hover backgrounds
- Mobile: Rounded slide-down panel with soft animation

### Cards

- Border-radius: `16px` (very rounded)
- Shadow: `0 4px 16px rgba(74, 63, 92, 0.08)` (soft, diffused)
- Border: none — shadow provides separation
- Background: `--color-bg-alt` with subtle warm gradient
- Hover: float up, shadow expands, slight rotation corrects
- Slight random rotation applied per card for handmade feel

### Buttons

- Primary: `--color-primary` background, white text, fully rounded (pill shape, 9999px)
- Secondary: soft fill with `--color-bg-alt`, primary text
- Generous padding, Quicksand font
- Hover: gentle scale, colour lightens

### Footer

- Background: warm parchment, darker shade
- Wavy top edge
- Theme switcher: small labelled buttons with soft styling

### Bear Map

- Tiles: Stamen Watercolor or similar soft/artistic style
- Markers: soft rounded circles with subtle glow
- Popups: parchment background, rounded corners, Nunito headings

### Timeline

- Vertical line: soft lavender, slightly wavy (CSS)
- Date markers: rounded circles with soft glow
- Content cards: rounded, slight rotation, scrapbook feel
- Feels like a personal journal or scrapbook

## Spacing & Rhythm

| Element | Value |
| ------- | ----- |
| Content max-width | 68rem (1088px) |
| Section padding (desktop) | 4rem vertical |
| Section padding (mobile) | 2rem vertical |
| Card gap | 1.5rem |
| Heading margin-bottom | 1.25rem |
| Paragraph margin-bottom | 1.1rem |
| Base line-height | 1.7 |

## SCSS Structure

```scss
// themes/whimsical.scss
@use '../shared';

[data-theme="whimsical"] {
  // Tokens
  --color-primary: #9b8ec4;
  --color-primary-light: #c4b8e8;
  --color-primary-dark: #6f5fa0;
  --color-secondary: #7ec8a4;
  --color-accent: #e8a0b4;
  --color-bg: #faf5f0;
  --color-bg-alt: #f3ece4;
  --color-text: #4a3f5c;
  --color-text-muted: #8a7e96;
  --color-border: #e0d8cc;
  --font-heading: 'Nunito', sans-serif;
  --font-body: 'Quicksand', sans-serif;

  // Page layout — home page grid areas
  .home {
    &__hero {
      grid-area: hero;
      border-radius: 16px;
    }

    &__about {
      grid-area: about;
      transform: rotate(-0.5deg);
    }

    &__events {
      grid-area: events;
    }

    &__products {
      grid-area: products;
    }

    &__bear-spotlight {
      grid-area: spotlight;
      border-radius: 16px;
    }
  }

  // Component overrides
  .card {
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(74, 63, 92, 0.08);
    border: none;
  }

  .navbar {
    background: var(--color-bg);
    border-radius: 0 0 24px 24px;
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
      grid-template-columns: repeat(2, 1fr);
    }

    .home__products .card-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
```
