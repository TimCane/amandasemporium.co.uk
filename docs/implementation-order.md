# Implementation Order

Build sequence for Amanda's Emporium. Each phase builds on the previous. Items within a phase can be worked in parallel unless noted.

## Phase 1: Project Foundation

| # | Item | Depends On |
|---|------|-----------|
| [1.1](implementation/1.1-project-setup.md) | Project Setup | — |
| [1.2](implementation/1.2-theme-system.md) | Theme System Foundation | 1.1 |
| [1.3](implementation/1.3-layout-navigation.md) | Layout & Navigation | 1.2 |
| [1.4](implementation/1.4-content-collections.md) | Content Collections Setup | 1.1 |
| [1.4b](implementation/1.4b-content-enrichment.md) | Content Enrichment | 1.4 |
| [1.5](implementation/1.5-shared-ui-components.md) | Shared UI Components | 1.2 |

## Phase 2: Admin Panel

| # | Item | Depends On |
|---|------|-----------|
| [2.1](implementation/2.1-admin-panel-core.md) | Admin Panel — Core CRUD | 1.4b |
| [2.2](implementation/2.2-admin-panel-smart-features.md) | Admin Panel — Smart Features | 2.1 |

## Phase 3: Bears Section

| # | Item | Depends On |
|---|------|-----------|
| [3.1](implementation/3.1-bear-listing.md) | Bear Listing Page (SSR) | 1.3, 1.4, 1.5 |
| [3.2](implementation/3.2-bear-profiles.md) | Bear Profile Pages (Static) | 1.3, 1.4 |
| [3.3](implementation/3.3-bear-map.md) | Bear Map | 1.3, 1.4 |
| [3.4](implementation/3.4-bear-timeline.md) | Bear Timeline | 1.3, 1.4 |

## Phase 4: Static Pages

| # | Item | Depends On |
|---|------|-----------|
| [4.1](implementation/4.1-home-page.md) | Home Page | 1.3, 1.4, 1.5, 3.1 |
| [4.2](implementation/4.2-about-page.md) | About Page | 1.3 |
| [4.3](implementation/4.3-contact-page.md) | Contact Page | 1.3, 1.4 |
| [4.4](implementation/4.4-privacy-page.md) | Privacy Policy | 1.3 |
| [4.5](implementation/4.5-404-page.md) | 404 Page | 1.3 |

## Phase 5: Products & Events

| # | Item | Depends On |
|---|------|-----------|
| [5.1](implementation/5.1-product-content.md) | Product Content Enrichment | 1.4 |
| [5.2](implementation/5.2-products-listing.md) | Products Listing Page (SSR) | 5.1, 1.5 |
| [5.2b](implementation/5.2b-product-profiles.md) | Product Profile Pages (Static) | 5.1, 5.2 |
| [5.3](implementation/5.3-events-listing.md) | Events Listing Page (SSR) | 1.4, 1.5 |
| [5.3b](implementation/5.3b-event-profiles.md) | Event Profile Pages (Static) | 5.3, 3.3 |
| [5.4](implementation/5.4-ical-export.md) | iCal Export | 5.3 |

## Phase 6: Gallery & Polish

| # | Item | Depends On |
|---|------|-----------|
| [6.1](implementation/6.1-gallery-page.md) | Gallery Page (SSR) | 1.4, 1.5 |
| [6.2](implementation/6.2-seo.md) | SEO Completion | All page phases |
| [6.3](implementation/6.3-accessibility.md) | Accessibility Audit | All page phases |
| [6.4](implementation/6.4-responsive.md) | Responsive Design Pass | All page phases |

## Phase 7: Deployment

| # | Item | Depends On |
|---|------|-----------|
| [7.1](implementation/7.1-docker.md) | Docker Setup | All previous |
| [7.2](implementation/7.2-coolify.md) | Coolify Deployment | 7.1 |

---

## Dependency Graph

```text
Phase 1: Foundation
  1.1 Project Setup
    └─> 1.2 Theme System
        └─> 1.3 Layout & Navigation
    └─> 1.4 Content Collections ──> 1.4b Content Enrichment
    └─> 1.5 Shared UI Components (depends on 1.2)

Phase 2: Admin Panel (depends on 1.4b)
  2.1 Admin Core ──> 2.2 Admin Smart

Phase 3: Bears (depends on 1.3, 1.4, 1.5)
  3.1 Bear Listing ──> 3.2 Bear Profiles
  3.3 Bear Map ────────┘
  3.4 Bear Timeline

Phase 4: Static Pages (depends on 1.3)
  4.1 Home (also depends on 3.1, 1.4)
  4.2 About
  4.3 Contact
  4.4 Privacy
  4.5 404 Page

Phase 5: Products & Events (depends on 1.4, 1.5)
  5.1 Product Content ──> 5.2 Products Listing ──> 5.2b Product Profiles
  5.3 Events Listing ──> 5.3b Event Profiles
                    └──> 5.4 iCal Export

Phase 6: Gallery & Polish (depends on all pages)
  6.1 Gallery
  6.2 SEO
  6.3 Accessibility
  6.4 Responsive Pass

Phase 7: Deployment (depends on all)
  7.1 Docker ──> 7.2 Coolify
```

## Parallelisation Opportunities

Within each phase, many tasks can run in parallel:

- **Phase 1:** 1.4 (content) can run alongside 1.2/1.3 (theme/layout)
- **Phase 2:** 2.1 and 2.2 are sequential (2.2 depends on 2.1)
- **Phase 3:** 3.3 (map) and 3.4 (timeline) can run alongside 3.1/3.2 (listing/profiles)
- **Phase 4:** All static pages (4.2-4.5) can run in parallel once layout exists
- **Phase 5:** Products (5.1/5.2) and Events (5.3/5.4) can run in parallel
- **Phase 6:** SEO, accessibility, and responsive pass can overlap

## Theme Development Pattern (CSS Zen Garden Approach)

**Critical:** All 4 themes are developed in parallel with every component and page. The workflow for each component/page is:

1. **Build the HTML** — structural markup with class hooks, wrappers, decoration divs, data attributes
2. **Style Boutique** — the default theme, serves as the baseline
3. **Style Whimsical** — immediately after, while the HTML structure is fresh
4. **Style Modern** — test that the HTML hooks are sufficient
5. **Style Fun** — if the HTML needs another wrapper or hook, add it now (it's available to all themes)
6. **Cross-check** — verify all 4 themes at all breakpoints for this component

This ensures the HTML evolves to support all 4 themes, rather than retrofitting hooks later. If a theme needs an HTML change, it's caught early while the component is being built.

## Agent Usage by Phase

Custom agents (defined in `.claude/agents/`) automate repeatable workflows. Use `@agent-name` to invoke them. Each implementation doc lists its recommended agents — here's the phase-level summary.

| Phase | Agents | When to Run |
|-------|--------|-------------|
| **1 — Foundation** | `@content-migrator`, `@bear-data-auditor`, `@component-builder`, `@theme-validator`, `@amandas-voice` | Migrator for 1.4/1.4b, amandas-voice for bear narratives/taglines in 1.4b, component-builder for 1.3/1.5, theme-validator after each theme skeleton |
| **2 — Admin Panel** | `@component-builder`, `@doc-checker` | Component-builder for admin forms/views, doc-checker after smart features |
| **3 — Bears** | `@page-builder`, `@component-builder`, `@theme-validator`, `@amandas-voice` | Page-builder for each page (3.1–3.4), amandas-voice for auto-generated bear summaries, theme-validator after styling |
| **4 — Static Pages** | `@page-builder`, `@theme-validator`, `@amandas-voice` | Page-builder for each page (4.1–4.5), amandas-voice for all page copy (home hero, about page, 404 message, contact intro), theme-validator after styling |
| **5 — Products & Events** | `@page-builder`, `@component-builder`, `@content-migrator`, `@theme-validator`, `@amandas-voice` | Content-migrator for 5.1, amandas-voice for product descriptions and event recaps, page-builder for listings/profiles, theme-validator after styling |
| **6 — Gallery & Polish** | `@a11y-auditor`, `@theme-validator`, `@component-builder`, `@doc-checker`, `@amandas-voice` | Amandas-voice for SEO meta descriptions across all pages, a11y-auditor for 6.3, theme-validator for 6.4, doc-checker across all |
| **7 — Deployment** | `@phase-reviewer`, `@doc-checker` | Phase-reviewer to confirm readiness, doc-checker to verify config matches spec |

**Cross-cutting agents** (run at any phase boundary):
- **`@phase-reviewer`** — Run at the start of each phase to see status, or when transitioning between phases
- **`@doc-checker`** — Run after completing a batch of work to catch drift between docs and implementation
- **`@amandas-voice`** — Use whenever any website copy needs to be written or rewritten to maintain consistent brand voice
