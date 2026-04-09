# Feature: View Transitions

## Overview

Astro's built-in view transitions intercept link clicks and swap page content with smooth animations, making the site feel like a single-page app while remaining a multi-page architecture.

## Why

- SSR pages (bears, products, events, gallery) involve server round-trips on every filter change
- Without transitions, each click is a full page flash — feels clunky
- View transitions make navigation feel instant and polished

## Implementation

Add Astro's `<ViewTransitions />` component to the base layout:

```astro
---
// base.layout.astro
import { ViewTransitions } from 'astro:transitions';
---
<html>
<head>
  <ViewTransitions />
</head>
<body>
  <slot />
</body>
</html>
```

This automatically:

- Intercepts all internal link clicks
- Fetches the new page in the background
- Swaps content with a crossfade animation
- Updates the URL in the browser

## Transition Behaviour

- **Default:** crossfade between pages
- **Persistent elements:** navbar and footer should persist across navigations (use `transition:persist`)
- **Theme:** the `data-theme` attribute persists across transitions (no flash)

```astro
<nav transition:persist>...</nav>
<footer transition:persist>...</footer>
```

## Considerations

- **Forms:** The contact form POST should work correctly — Astro handles form submissions within view transitions
- **Leaflet map:** Map pages may need `transition:persist` on the map container to avoid re-initialisation, or accept a brief re-render
- **Scroll position:** Astro resets scroll to top on navigation by default — correct behaviour for page changes
- **Filter changes:** When clicking filter tabs or pagination on SSR pages, view transitions make the update feel smooth rather than a full reload

## Files Involved

- `src/layouts/base.layout.astro` — `<ViewTransitions />` component
