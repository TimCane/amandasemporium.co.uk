# Page: Privacy Policy

## Route

`/privacy`

## Rendering

Static (pre-rendered at build time)

## Purpose

GDPR-compliant privacy policy. Stubbed with the right sections — legal text to be filled in later.

## User Stories

- As a visitor, I want to know how my data is handled when I use the contact form.
- As a visitor, I want to understand what external services the site uses.

## Sections (top to bottom)

### 1. Page Header

- Heading: "Privacy Policy"
- Last updated date

### 2. What Data We Collect (stub)

- Contact form submissions: name, email, subject, message
- Note: stored where TBD

### 3. Cookies & Local Storage (stub)

- Theme preference stored in localStorage (not a cookie)
- No tracking cookies
- Cookie-free analytics (Plausible/Umami) — note what it collects (page views, referrer, no personal data)

### 4. Third-Party Services (stub)

- **Map tiles**: Leaflet loads map tiles from OpenStreetMap tile servers. This means the visitor's browser makes requests to OpenStreetMap servers, which may log IP addresses per their own privacy policy.
- **Analytics**: Self-hosted Plausible/Umami — no data sent to third parties.

### 5. Your Rights (stub)

- GDPR rights placeholder: access, rectification, erasure, etc.
- Contact email for data requests

### 6. Contact

- Email address for privacy-related enquiries

## Content Collections Used

None — static copy

## Components Used

- Page header / banner
- Container / content block

## Layout

Uses `page.layout.astro`

## Copy Needed

- [ ] All section content (currently stubbed)
- [ ] Legal review recommended

## SEO

- Title: "Privacy Policy | Amanda's Emporium"
- Description: "Privacy policy for Amanda's Emporium"
- `noindex` meta tag — no need for this to appear in search results
