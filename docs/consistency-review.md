# Styling Consistency Review

Tracked issues from the full styling audit. Items are grouped by category and priority.

## Status Key

- [ ] Not started
- [x] Complete

---

## Separator Component

- [x] Create `src/components/ui/separator.astro` (`<hr>` with `.separator` class)
- [x] Migrate `@include section-separator` usages in bear-profile, product-profile
- [x] Migrate page header bottom borders (about, contact, privacy, timeline, bear-map, event-profile, bears)
- [x] Migrate event-profile section borders
- [x] Migrate PageHeader component border (removed from component, added Separator to all 4 listing pages)
- [x] Migrate privacy page section borders
- [x] Remove `section-separator` / `section-separator-bottom` mixins from `_mixins.scss`
- [x] Remove border from `page-header` mixin in `_mixins.scss`
- [x] Remove CSS Grid page layout system (grid-template-areas, grid-area assignments)
- [x] Replace with standard document flow + targeted flexbox for multi-column layouts
- [x] Clear `_grid-areas.scss` (all page-level grid-area assignments removed)
- [x] Remove `display: grid` from listing-page, profile-page, content-page mixins
- [x] Rebuild bear-profile hero (image+header) and details-rescue as flex wrappers
- [x] Rebuild product-profile hero-header as flex wrapper

---

## High Priority: Hardcoded Spacing

30+ hardcoded spacing values should use design tokens (`--spacing-*`).

### Home Page (`_home.scss`) — worst offender

- [x] `padding: 5rem 1.5rem 4rem` (hero, line ~10) — replace with tokens
- [x] `1.5rem` horizontal padding used 7+ times (lines ~91, 139, 203, 307, 404, 438, 564) — uses `var(--section-pad-x)` token
- [x] Mixed token/hardcoded padding: `var(--section-gap) 1.5rem` (line ~91)
- [x] Hardcoded margins: `2.5rem`, `1.25rem`, `0.75rem`, `0.375rem` throughout — replaced with `--page-pad-top`, `--spacing-ml`, `--spacing-ms`, `--spacing-xs`
- [ ] Home page doesn't use `page-header`, `listing-page`, or `content-page` mixins like other pages

### Contact Page (`_contact.scss`)

- [x] Form input padding `0.65rem 0.85rem` (line ~102) — now uses `var(--spacing-ms)`
- [x] Button padding `0.75rem var(--spacing-lg)` (line ~129) — now uses `var(--spacing-ms) var(--spacing-lg)`
- [x] Form gap `1.25rem` (line ~70) — now uses `var(--spacing-ml)`

### Components

- [x] `bear-timeline.astro`: `margin-bottom: 2rem`, `padding: 1rem`, `gap: 0.75rem` — all replaced with tokens
- [x] `bear-card.astro`: `margin: 0 0 0.35rem` — now uses `var(--spacing-xs)`
- [x] `event-card.astro`: `gap: 0.2rem` between meta items — now uses `var(--spacing-xs)`
- [x] `gallery-item.astro`: `padding: 0.75rem var(--spacing-md)` — now uses `var(--spacing-ms) var(--spacing-md)`

### About Page (`_about.scss`)

- [x] `margin: 0 0 0.75rem` (line ~99) — now uses `var(--spacing-ms)`
- [x] `gap: 0.75rem` (line ~97) — now uses `var(--spacing-ms)`

---

## High Priority: Font Size Inconsistencies

Hardcoded font sizes that don't map to `--text-*` tokens.

- [x] `0.75rem` used in 5+ components (bear-map, bear-timeline, event-card, gallery-item) — standardised to `var(--text-xs)` (adjusted from `0.8rem` to `0.75rem`)
- [x] Home page heading sizes: `1.75rem` hardcoded in multiple places — replaced with `var(--text-xl)`
- [x] Event card day font: `1.75rem` hardcoded — replaced with `var(--text-xl)`
- [x] Home event card name: `1.15rem` hardcoded — replaced with `var(--text-md)`
- [x] Navbar padding `0.75rem 1.5rem` (line ~81) — replaced with `var(--spacing-ms) var(--section-pad-x)`
- [x] `--text-xs` token adjusted from `0.8rem` to `0.75rem` to match widespread usage

---

## Medium Priority: Inconsistent Link Underline Styles

No single approach chosen across the site.

- [x] Standardised on `border-bottom: 1px solid transparent` with hover colour change
- [x] Converted `text-decoration: underline` in contact, privacy, bear-profile, cookie-banner, bear-map
- [x] All links now use consistent border-bottom approach

---

## Medium Priority: Badge/Tag Pattern Divergence

Different components style badges/tags differently.

- [x] Bear status badges: use dedicated `--color-badge-looking-bg/text` and `--color-badge-found-bg/text` tokens
- [x] Product categories: now use dedicated `--color-badge-product-bg/text` tokens (no longer reuses found-bg)
- [x] Gallery tags: use `--color-text-muted` on `--color-bg-alt` — kept as distinct visual pattern (tags vs badges)
- [x] Timeline badges: replaced hardcoded `rgba()` values with `--color-badge-rescued-bg/text` and `--color-badge-rehomed-bg/text` tokens
- [x] Badge padding standardised to `2px var(--spacing-sm)` across all badge types

---

## Medium Priority: Shadow Inconsistencies

- [x] Cookie banner: replaced hardcoded shadow with `var(--shadow-md-up)` token
- [x] Cards use `var(--shadow-card)` and hover to `var(--shadow-md)` — consistent pattern
- [x] Gallery item hover shadow now matches card pattern (shadow-card → shadow-md)

---

## Low Priority: Transition Timing

- [x] All `0.2s ease` transitions now use `var(--transition-fast)`
- [x] All `0.3s ease` transitions now use `var(--transition-normal)`
- [x] Added `--transition-fast` and `--transition-normal` tokens to `_variables.scss` and `_base.scss`

---

## Low Priority: Missing Design Tokens

Tokens that would help standardise the codebase.

- [x] `--spacing-ms: 0.75rem` added (used frequently as gaps/margins)
- [x] `--spacing-ml: 1.25rem` added (contact form, other gaps)
- [x] Micro-spacing (`0.15rem`, `0.2rem`) standardised to `2px` for badge padding
- [x] Dedicated product badge colour tokens added (`--color-badge-product-bg/text`)
- [x] Dedicated timeline badge tokens added (`--color-badge-rescued-bg/text`, `--color-badge-rehomed-bg/text`)
- [x] `--text-xs` adjusted to `0.75rem` to cover that common size
- [x] `--section-pad-x: 1.5rem` added for section horizontal padding
- [x] `--shadow-md-up` added for upward-facing shadows
- [x] `--transition-fast` and `--transition-normal` tokens added

---

## Out of Scope (Separate Components)

These were identified but are separate work items, not part of the consistency cleanup:

- Home page full-width bands (home-stats, home-photos, home-activity) — separate band/stripe component
- Admin layout styling — not public-facing
- Home page doesn't use `page-header`, `listing-page`, or `content-page` mixins (intentional — unique layout)
