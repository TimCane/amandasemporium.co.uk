# Styling Consistency Fixes

Tracking document for resolving cross-page styling inconsistencies identified in the full-site audit (2026-04-12).

## Status Key

- [ ] Not started
- [x] Complete

---

## 1. Unify Shadow System

**Problem:** Three competing shadow systems — `--shadow-card` variable, `_shared.scss` mixin (uses `rgba(0,0,0,...)`), and ~20 hardcoded values per-page (uses `rgba(61,50,41,...)`).

**Fix:** Define `--shadow-sm`, `--shadow-md`, `--shadow-lg` in `_variables.scss` using theme brown. Update `_shared.scss` mixin. Replace all hardcoded shadows.

- [x] Add shadow variables to `_variables.scss`
- [x] Update `_shared.scss` shadow mixin to use variables
- [x] Replace hardcoded shadows in page SCSS files
- [x] Replace hardcoded shadows in component SCSS

---

## 2. Standardise Line-Heights

**Problem:** Body line-height varies per page (1.5, 1.6, 1.75, 1.8, 1.85) with no rationale.

**Fix:** Two line-heights: `--leading-body: 1.7` for body/reading text, `--leading-compact: 1.4` for compact UI elements.

- [x] Add `--leading-body` and `--leading-compact` to `_variables.scss`
- [x] Update `_base.scss` body default
- [x] Update `_mixins.scss` (profile-body-text etc.)
- [x] Standardise across all page SCSS files

---

## 3. Page Width Variables

**Problem:** Five different max-width values hardcoded across pages (38rem, 44rem, 52rem, 56rem, 72rem).

**Fix:** Define `--page-width: 72rem` as primary variable. Define `--page-width-content: 56rem` for text-heavy/profile pages. Apply via variables everywhere.

- [x] Add `--page-width` and `--page-width-content` to `_variables.scss`
- [x] Update `_mixins.scss` listing-page and profile-page mixins
- [x] Update about, contact, privacy page max-widths
- [x] Update navbar and footer max-widths

---

## 4. Standardise Section Spacing

**Problem:** Vertical rhythm between sections varies per page (2.5rem, 3rem, 3.5rem, 4rem, 5rem top padding).

**Fix:** Define consistent values: `--section-gap: 3rem`, `--page-pad-top: 2.5rem`, `--page-pad-bottom: 3rem`. Update all pages.

- [x] Add section spacing variables to `_variables.scss`
- [x] Update `_mixins.scss` mixins
- [x] Standardise home page section padding
- [x] Standardise profile page padding
- [x] Standardise text page padding (about, contact, privacy)

---

## 5. Unify Hover States

**Problem:** Cards, links, and buttons each use different hover patterns — some use scale, some translateY, some opacity, some shadow, with no consistent vocabulary.

**Fix:** Cards = shadow elevation (`--shadow-md`), text links = colour change, buttons = `filter: brightness(0.9)`.

- [x] Standardise card hover across home page cards
- [x] Standardise card hover in bear-card, product-card, event-card components
- [x] Standardise button hover states (opacity → filter: brightness)
- [x] Standardise link hover states
- [x] Remove one-off hover patterns (error page translateY, opacity buttons)

---

## 6. Use Spacing Variables in Components

**Problem:** `--spacing-xs` through `--spacing-xl` are defined but only 3/21 components use them. Everything else hardcodes.

**Fix:** Extended spacing scale (`--spacing-2xl: 4rem`), refactored all components and pages.

- [x] Audit and extend spacing scale (added `--spacing-2xl`)
- [x] Refactor component SCSS to use spacing variables
- [x] Refactor page SCSS to use spacing variables

---

## 7. Consolidate Font Sizes to Type Scale

**Problem:** 25+ distinct font sizes in use, many nearly identical (0.8/0.85/0.9rem, 1/1.05/1.1rem).

**Fix:** 8-step type scale: `--text-xs` (0.8rem), `--text-sm` (0.875rem), `--text-base` (1rem), `--text-md` (1.125rem), `--text-lg` (1.25rem), `--text-xl` (1.5rem), `--text-2xl` (2rem), `--text-3xl` (2.5rem).

- [x] Add type scale variables to `_variables.scss`
- [x] Update `_mixins.scss` to use type scale
- [x] Update component SCSS to use type scale
- [x] Update page SCSS to use type scale

---

## 8. Rationalise Letter-Spacing

**Problem:** Eight different letter-spacing values scattered with no system.

**Fix:** Three values: `--tracking-tight: -0.01em`, `--tracking-normal: 0.01em`, `--tracking-wide: 0.06em`.

- [x] Add letter-spacing variables to `_variables.scss`
- [x] Update all SCSS files to use the three values

---

## 9. Fix Border Radius Inconsistency

**Problem:** Badges hardcode `2px`, bear-map hardcodes `6px`, while everything else uses `var(--radius-card): 4px`.

**Fix:** Added `--radius-sm: 2px` for badges/small elements. Replaced hardcoded `6px` on bear-map.

- [x] Add `--radius-sm` to `_variables.scss`
- [x] Update badge border-radius in `_mixins.scss`
- [x] Fix bear-map hardcoded 6px radius

---

## 10. Unify Focus States

**Problem:** `--color-focus` defined but form inputs use `--color-primary-light` instead. Bear-filters use `--color-primary`.

**Fix:** Use `--color-focus` everywhere for keyboard and form focus rings.

- [x] Update contact form focus to use `--color-focus`
- [x] Update bear-filters focus to use `--color-focus` with consistent `3px solid` + `2px offset`

---

## 11. Standardise Grid Markup

**Problem:** Products/gallery/events use `<ul role="list">` but bears listing and bear-profile related use plain `<div>`.

**Fix:** Updated both to use `<ul role="list">` with `<li>` children.

- [x] Update bears listing page grid markup
- [x] Update bear-profile related bears grid markup
- [x] Add `list-style: none; margin: 0; padding: 0` to SCSS

---

## 12. Standardise Section Heading Class Names

**Problem:** About/contact use `__section-title`, profiles use `__section-heading`.

**Fix:** Standardised on `__section-heading` everywhere.

- [x] Rename in about page (HTML + SCSS)
- [x] Rename in contact page (HTML + SCSS)

---

## 13. Add Missing Decoration Hooks

**Problem:** Some pages lack `__decoration` divs that themes need to style consistently.

**Fix:** Added header decoration divs to pages missing them.

- [x] Add decoration div to privacy page header
- [x] Add decoration div to error page header
