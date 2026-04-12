# Component: Navbar

## File

`src/components/layout/navbar.astro`

## Purpose

Main site navigation. Shows text logo and navigation links. Persists across page transitions.

## Props

None — static component.

## Structure

```html
<nav>
  <a href="/">Amanda's Emporium</a> <!-- Text logo -->
  <ul>
    <li><a href="/bears">Bears</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/events">Events</a></li>
    <li><a href="/gallery">Gallery</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  <button class="navbar__hamburger">Menu</button> <!-- Mobile only -->
</nav>
```

## Behaviour

- **Desktop (lg+):** Full horizontal nav with all links visible
- **Mobile:** Hamburger button toggles a dropdown/slide-out menu
- **Active state:** Current page link is highlighted
- **View transitions:** Uses `transition:persist` to avoid re-rendering on navigation

## Theme Variations

| Theme | Logo style | Link hover | Background |
| ----- | ---------- | ---------- | ---------- |
| Boutique | Playfair Display, elegant | Thin underline | Warm cream, subtle bottom border |
| Whimsical | Nunito, friendly | Colour transition | Light lavender, soft shadow |
| Modern | Montserrat, bold uppercase | Colour change, no underline | White, thin border |
| Fun | Fredoka, large | Chunky colour change | White, colourful bottom border |

All variations defined in each theme's SCSS file — no conditional logic in the component.

## Accessibility

- `<nav>` landmark with `aria-label="Main navigation"`
- Hamburger button: `aria-expanded`, `aria-controls`
- Mobile menu: focus trap when open
- Skip-to-content link before nav (in base layout)
