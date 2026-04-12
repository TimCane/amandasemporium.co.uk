# Component: Text Logo

## File

`src/components/layout/text-logo.astro`

## Purpose

The site's text-based logo — "Amanda's Emporium" styled with the active theme's heading font and colours. Used in the navbar.

## Props

```typescript
interface Props {
  size?: 'sm' | 'md' | 'lg';  // Default: 'md'
}
```

## Structure

```html
<a href="/" class="text-logo" aria-label="Amanda's Emporium — Home">
  Amanda's Emporium
</a>
```

## Styling

```scss
.text-logo {
  font-family: var(--font-heading);
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 700;
}
```

Sizes:

| Size | Desktop | Mobile |
| ---- | ------- | ------ |
| sm | 1.25rem | 1rem |
| md | 1.5rem | 1.25rem |
| lg | 2rem | 1.5rem |

## Theme Variations

The logo automatically adapts to each theme because it uses `--font-heading` and `--color-primary`:

| Theme | Font | Feel |
| ----- | ---- | ---- |
| Boutique | Playfair Display | Elegant, refined |
| Whimsical | Nunito | Friendly, rounded |
| Modern | Montserrat | Bold, geometric |
| Fun | Fredoka | Chunky, playful |

## Accessibility

- Wraps in `<a>` linking to home
- `aria-label` for screen readers
