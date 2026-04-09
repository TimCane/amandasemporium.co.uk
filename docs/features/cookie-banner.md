# Feature: Cookie Banner

## Overview

Simple GDPR-compliant cookie/privacy banner. The site uses no tracking cookies — the banner informs visitors about map tile requests and cookie-free analytics.

## What the Site Uses

| Technology | Data Concern | Cookie? |
| ---------- | ------------ | ------- |
| Theme preference | Stored in localStorage | No |
| Plausible/Umami analytics | Cookie-free, self-hosted | No |
| Leaflet map tiles | Browser requests to OpenStreetMap/CARTO tile servers (may log IP) | No |
| Contact form | Collects name, email, subject, message | No cookies, but collects PII |

## Banner Content

Brief, honest message:

> "This site uses cookie-free analytics and loads map tiles from external servers. We don't use tracking cookies. [Privacy Policy](/privacy)"

With a dismiss button: "Got it" or "OK"

## Behaviour

1. Banner appears at bottom of page on first visit
2. Visitor clicks "Got it" to dismiss
3. Dismissal saved to localStorage (key: `ae-cookie-banner-dismissed`)
4. Banner does not appear again for that visitor

## Implementation

```astro
---
// components/layout/cookie-banner.astro
---
<div id="cookie-banner" class="hidden">
  <p>
    This site uses cookie-free analytics and loads map tiles from external servers.
    We don't use tracking cookies.
    <a href="/privacy">Privacy Policy</a>
  </p>
  <button id="cookie-banner-dismiss">Got it</button>
</div>

<script>
  const banner = document.getElementById('cookie-banner');
  const dismiss = document.getElementById('cookie-banner-dismiss');

  if (!localStorage.getItem('ae-cookie-banner-dismissed')) {
    banner?.classList.remove('hidden');
  }

  dismiss?.addEventListener('click', () => {
    localStorage.setItem('ae-cookie-banner-dismissed', 'true');
    banner?.classList.add('hidden');
  });
</script>
```

## Styling

- Fixed to bottom of viewport
- Semi-transparent background matching theme
- Compact — one line of text plus dismiss button on desktop
- Stacks on mobile
- Subtle but visible — not aggressive

## No Consent Gate

Since we don't use tracking cookies, the banner is informational only. No need to block functionality until consent is given. Analytics and map tiles load regardless — they're cookie-free.

## Files Involved

- `src/components/layout/cookie-banner.astro`
- `src/layouts/base.layout.astro` — includes the cookie banner
