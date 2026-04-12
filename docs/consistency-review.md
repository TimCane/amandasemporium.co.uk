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

- [ ] `padding: 5rem 1.5rem 4rem` (hero, line ~10) — replace with tokens
- [ ] `1.5rem` horizontal padding used 7+ times (lines ~91, 139, 203, 307, 404, 438, 564) — should be a consistent token
- [ ] Mixed token/hardcoded padding: `var(--section-gap) 1.5rem` (line ~91)
- [ ] Hardcoded margins: `2.5rem`, `1.25rem`, `0.75rem`, `0.375rem` throughout
- [ ] Home page doesn't use `page-header`, `listing-page`, or `content-page` mixins like other pages

### Contact Page (`_contact.scss`)

- [ ] Form input padding `0.65rem 0.85rem` (line ~102) — inconsistent with `var(--spacing-md)` used elsewhere
- [ ] Button padding `0.75rem var(--spacing-lg)` (line ~129) — mixed hardcoded + token
- [ ] Form gap `1.25rem` (line ~70) — hardcoded

### Components

- [ ] `bear-timeline.astro`: `margin-bottom: 2rem`, `padding: 1rem`, `gap: 0.75rem` — all hardcoded
- [ ] `bear-card.astro`: `margin: 0 0 0.35rem` — hardcoded micro-spacing
- [ ] `event-card.astro`: `gap: 0.2rem` between meta items — hardcoded
- [ ] `gallery-item.astro`: `padding: 0.75rem var(--spacing-md)` — mixed

### About Page (`_about.scss`)

- [ ] `margin: 0 0 0.75rem` (line ~99) — should use `var(--spacing-sm)` or similar
- [ ] `gap: 0.75rem` (line ~97) — hardcoded

---

## High Priority: Font Size Inconsistencies

Hardcoded font sizes that don't map to `--text-*` tokens.

- [ ] `0.75rem` used in 5+ components (bear-map, bear-timeline, event-card, gallery-item) but `--text-xs` is `0.8rem` — decide which is correct and standardise
- [ ] Home page heading sizes: `1.75rem` hardcoded in multiple places (lines ~109, 316) instead of `var(--text-xl)` (which is `1.5rem`) — mismatch
- [ ] Event card day font: `1.75rem` hardcoded vs other headings using tokens
- [ ] Home event card name: `1.15rem` hardcoded (line ~257)
- [ ] Navbar padding `0.75rem 1.5rem` (line ~81) — hardcoded instead of spacing tokens
- [ ] Consider adding a `--text-2xl` token if `1.75rem` is an intentional size

---

## Medium Priority: Inconsistent Link Underline Styles

No single approach chosen across the site.

- [ ] Some links use `border-bottom: 1px solid` with hover color change (home page links)
- [ ] Others use `text-decoration: underline` with `text-underline-offset: 2px` (contact page)
- [ ] Some use `border-bottom: 1px solid transparent` with hover transition
- [ ] Pick one approach and apply consistently

---

## Medium Priority: Badge/Tag Pattern Divergence

Different components style badges/tags differently.

- [ ] Bear status badges: use dedicated `--color-badge-looking-bg/text` and `--color-badge-found-bg/text` tokens
- [ ] Product categories: reuse `--color-badge-found-bg` — should have dedicated product tokens
- [ ] Gallery tags: use `--color-text-muted` on `--color-bg-alt` — completely different pattern from badges
- [ ] Timeline badges: hardcoded `rgba(184, 120, 109, 0.15)` and `rgba(143, 174, 139, 0.15)` — should be CSS custom properties
- [ ] Standardise badge styling: shared base mixin/component + contextual color tokens

---

## Medium Priority: Shadow Inconsistencies

- [ ] Cookie banner: hardcoded `0 -2px 8px rgba(61, 50, 41, 0.12)` instead of `var(--shadow-md)`
- [ ] Cards use `var(--shadow-card)` and hover to `var(--shadow-md)` — good pattern, apply elsewhere
- [ ] Gallery item hover shadow doesn't elevate like cards — inconsistent hover feedback

---

## Low Priority: Transition Timing

- [ ] Most transitions use `0.2s ease` — good
- [ ] Card images and gallery items use `0.3s ease` — intentional or inconsistent?
- [ ] Consider a `--transition-fast` / `--transition-normal` token if not already present

---

## Low Priority: Missing Design Tokens

Tokens that would help standardise the codebase.

- [ ] No token for `0.75rem` spacing (used frequently as gaps/margins)
- [ ] No token for `1.25rem` spacing (contact form, other gaps)
- [ ] No micro-spacing tokens (`0.15rem`, `0.2rem`, `0.35rem`) for badge padding, inline gaps
- [ ] No dedicated product badge color tokens
- [ ] No tokens for timeline badge RGBA colours
- [ ] Consider `--text-2xl` for the `1.75rem` heading size

---

## Out of Scope (Separate Components)

These were identified but are separate work items, not part of the consistency cleanup:

- Home page full-width bands (home-stats, home-photos, home-activity) — separate band/stripe component
- Admin layout styling — not public-facing
