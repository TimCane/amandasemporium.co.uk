# Component: Footer

## File

`src/components/layout/footer.astro`

## Purpose

Site footer with secondary navigation, copyright, and the theme switcher. Persists across page transitions.

## Props

None — static component.

## Structure

```html
<footer>
  <div class="footer__content">
    <div class="footer__links">
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/privacy">Privacy Policy</a>
    </div>
    <div class="footer__copyright">
      &copy; {currentYear} Amanda's Emporium
    </div>
    <div class="footer__theme-switcher">
      <!-- See theme switcher section -->
    </div>
  </div>
</footer>
```

## Theme Switcher

Subtle control to switch between themes. Options:

- Small text links: "Boutique | Whimsical | Modern | Fun"
- Or colour swatch dots
- Active theme indicated visually

```html
<div class="footer__theme-switcher">
  <span>Theme:</span>
  <button data-theme="boutique" aria-label="Boutique theme">...</button>
  <button data-theme="whimsical" aria-label="Whimsical theme">...</button>
  <button data-theme="modern" aria-label="Modern theme">...</button>
  <button data-theme="fun" aria-label="Fun theme">...</button>
</div>
```

Client-side script:

```javascript
document.querySelectorAll('[data-theme]').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ae-theme', theme);
  });
});
```

## Theme Variations

| Theme | Background | Text | Switcher style |
| ----- | ---------- | ---- | -------------- |
| Boutique | Warm cream alt | Warm brown | Small text links |
| Whimsical | Light lavender | Purple-grey | Small text links |
| Modern | Dark (near-black) | White | Minimal icon buttons |
| Fun | Electric blue | White | Colourful icon buttons |

## View Transitions

Uses `transition:persist` to avoid re-rendering.

## Accessibility

- `<footer>` landmark
- Theme switcher buttons have `aria-label`
- Active theme indicated with `aria-current="true"`
