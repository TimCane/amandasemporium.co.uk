# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Amanda's Emporium — a showcase website for a craft market stall business that rescues teddy bears. The site is a portfolio/catalogue: bears, products, events, gallery, and about pages. The bears section is the heart of the site.

**Status:** Pre-implementation. Comprehensive documentation exists in `docs/`, content data is in `data/`, but the Astro project has not been initialized yet (no `src/` or `package.json`). Implementation follows a 7-phase plan in `docs/implementation-order.md`.

## Tech Stack

- **Framework:** Astro 5 (hybrid output — static + SSR)
- **Language:** TypeScript 5
- **Styling:** SCSS + CSS Grid, BEM naming, CSS custom properties
- **Node:** 22 LTS
- **Adapter:** `@astrojs/node` (standalone mode) for hybrid SSR
- **Maps:** Leaflet (vanilla JS, no React)
- **Dates:** Native `Intl.DateTimeFormat` (no moment.js)
- **Calendar:** `ics` library for iCal export
- **Images:** Astro built-in (`astro:assets`, Sharp)
- **Deployment:** Docker (multi-stage) on Coolify (self-hosted VPS)

## Commands

Once the project is initialized:

```bash
npm install          # Install dependencies
npm run dev          # Dev server on port 4321
npm run build        # Production build
npm run preview      # Preview production build
```

## Architecture

### Theme System (CSS Zen Garden Approach)

The defining architectural pattern. Four themes make the site look like four different websites — same HTML, radically different CSS.

- Themes: **Boutique & Crafted** (default), **Warm & Whimsical**, **Modern & Vibrant**, **Fun & Energetic**
- Scoped via `[data-theme="theme-name"]` on `<html>`
- Theme files: `src/styles/themes/{boutique,whimsical,modern,fun}.scss`
- Persisted in localStorage (key: `ae-theme`), read before first paint to prevent flash
- Theme registry: `src/libs/themes.ts`
- Grid-area assignments are global (`_grid-areas.scss`); themes only declare `grid-template-areas`
- **Components must never contain theme-conditional logic** — all visual differences are CSS-only
- Adding a new theme requires no component changes. See `docs/theme-creation-guide.md`

### Rendering Strategy

- **Static (build-time):** Home, about, privacy, bear profiles, product profiles, event profiles, bear map, timeline, 404
- **SSR (server-rendered):** `/bears`, `/products`, `/events`, `/gallery` (filtered/paginated), `/contact` POST

### Layout System

Two layouts in `src/layouts/`:
- `base.layout.astro` — HTML shell (head, meta, theme loading, view transitions)
- `page.layout.astro` — extends base, adds navbar + footer + content wrapper

### Content Collections

Data lives in `data/` (to be migrated into `src/content/`). Schemas defined in `src/content/config.ts`.

| Collection | Count | Notes |
|-----------|-------|-------|
| bears | 307 | name, picture, tags[], brand, species, rescued/rehomed dates+locations |
| events | 103 | name, date, location (with lat/lng ref), time |
| products | 25 | name, category, price, photos[] |
| gallery | 17 | image, caption, category |
| locations | 179 | name, latitude, longitude |

### CSS Architecture

Layered approach:
1. `global.scss` — reset, accessibility, grid-area assignments, base defaults
2. Active theme SCSS — layout, decorations, animations, visual design
3. `_shared.scss` — mixins/functions available to all themes via `@use '../shared'`

All breakpoints are theme-specific (no shared breakpoint system). Each theme has unique fonts self-hosted via `@fontsource`.

### Key Conventions

- **BEM naming** for all CSS classes (`.block__element--modifier`)
- Components emit semantic HTML with class hooks, wrapper elements, and decoration divs — the HTML is a superset of what all themes need
- Enums (bear brands, species, product categories) are defined in code, not as collections
- "Bear of the Month" uses seeded-random selection (YYYY-MM seed), no manual curation
- Bear map uses seeded-random "wandering" paths for visual interest

## Documentation

Extensive specs exist in `docs/`:
- `plan.md` — 77 documented decisions
- `stack.md` — full tech stack details
- `layout.md` — layout system spec
- `implementation-order.md` — 7-phase build plan with dependency graph
- `theme-creation-guide.md` — how to add themes
- `components/` — 17 component specs
- `content/` — collection schemas
- `features/` — 11 feature specs (docker, SSR, SEO, etc.)
- `pages/` — 14 page designs
- `themes/` — 4 theme design docs
- `implementation/` — per-phase task breakdowns

Always consult the relevant doc before implementing a feature.

## Build Workflow (Agent Teams)

This project uses agent teams (`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`, tmux mode). The main conversation acts as **team lead** — it coordinates teammates and delegates implementation work.

### How to start a phase

When the user says something like "implement phase 2" or "let's build the bears section":

1. **Read the phase** — Open `docs/implementation-order.md` and the relevant `docs/implementation/*.md` files
2. **Check status** — Spawn `@phase-progress-reviewer` to assess what's already done
3. **Plan the work** — Identify parallelisable tasks from the dependency graph
4. **Spawn teammates** — Create one teammate per independent task (3-5 max)
5. **Monitor and unblock** — Track shared task list, resolve dependencies as tasks complete

### Teammate assignment patterns

Each implementation doc has a `## Recommended Agents` section listing which agents to use. When spawning teammates:

- **Component + page tasks** → Teammate reads the spec, builds HTML, then styles all 4 themes
- **Content migration tasks** → Teammate uses `@content-collection-migrator` workflow
- **Validation/audit tasks** → Teammate runs read-only agents (`@theme-scss-validator`, `@bears-data-auditor`, `@astro-a11y-reviewer`)
- **Cross-cutting tasks** (SEO, a11y, responsive) → One teammate per concern, runs after page work completes

### Parallelisation rules

Follow the dependency graph in `docs/implementation-order.md`:
- Tasks within a phase can run in parallel **unless** one depends on another
- A teammate working on a page should build its components first if they don't exist yet
- Theme styling happens immediately after HTML — never deferred to a later phase
- Run validation agents (theme-validator, a11y-auditor, doc-checker) after implementation, not during

### Team size guidelines

- **1-2 teammates** for Phase 2 (admin panel — sequential tasks)
- **2-3 teammates** for small phases (Phase 4: static pages, Phase 7: deployment)
- **3-4 teammates** for medium phases (Phase 3: bears, Phase 5: products & events)
- **4-5 teammates** for Phase 1 (foundation has the most parallel tracks)
- Never exceed 5 — coordination overhead outweighs parallelism gains

### Available agents

Custom agents live in `.claude/agents/`. Teammates can use them via `@agent-name`:

| Agent | Role | Model |
|-------|------|-------|
| `@astro-component-builder` | Build components from specs in `docs/components/` | Opus |
| `@astro-page-builder` | Build pages from specs in `docs/pages/` | Opus |
| `@content-collection-migrator` | Migrate data from `data/` to `src/content/` | Sonnet |
| `@theme-scss-validator` | Validate theme SCSS against CSS Zen Garden architecture | Sonnet |
| `@phase-progress-reviewer` | Assess phase completion status | Sonnet |
| `@docs-code-drift-auditor` | Check code matches documentation specs | Sonnet |
| `@bears-data-auditor` | Audit bear data quality | Haiku |
| `@astro-a11y-reviewer` | WCAG AA accessibility audit | Sonnet |
