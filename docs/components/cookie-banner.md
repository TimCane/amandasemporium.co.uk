# Component: Cookie Banner

## File

`src/components/layout/cookie-banner.astro`

## Purpose

Informational privacy banner shown on first visit. Dismissible, persisted via localStorage.

## Props

None — static component.

## Structure

```html
<div id="cookie-banner" class="cookie-banner cookie-banner--hidden">
  <p class="cookie-banner__text">
    This site uses cookie-free analytics and loads map tiles from external servers.
    We don't use tracking cookies.
    <a href="/privacy">Privacy Policy</a>
  </p>
  <button id="cookie-banner-dismiss" class="cookie-banner__dismiss">Got it</button>
</div>
```

## Behaviour

1. Hidden by default (`class="cookie-banner--hidden"`)
2. Client-side script checks `localStorage.getItem('ae-cookie-banner-dismissed')`
3. If not dismissed, removes `cookie-banner--hidden` modifier class
4. Click "Got it" → sets localStorage key → hides banner

## Styling

- Fixed to bottom of viewport (`position: fixed; bottom: 0`)
- Full width with padding
- Semi-transparent background matching theme's bg-alt colour
- One line on desktop, stacks on mobile
- Z-index above page content, below modals

## Accessibility

- `role="banner"` or `role="complementary"`
- Dismiss button is keyboard accessible
- Banner doesn't block page interaction (informational only)
