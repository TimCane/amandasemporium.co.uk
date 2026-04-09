# Custom Agents for Amanda's Emporium

## How Agents Work

Agents are reusable specialists that live as markdown files in `.claude/agents/`. Each one has a focused role, its own model, and restricted tools.

### How to invoke them

- **@mention:** Type `@agent-name` in your prompt, e.g. `@theme-validator check the whimsical theme`
- **By name:** Just mention the agent naturally, e.g. "Use the page builder agent to create the about page"
- **Automatic:** Claude may delegate to an agent automatically if the task matches its description

### When to use an agent vs asking Claude directly

| Use an agent when... | Ask Claude directly when... |
|---|---|
| The task is repeatable and well-defined | It's a one-off or exploratory question |
| You want to restrict tools (e.g. read-only for audits) | You need full tool access and flexibility |
| You want to save context in the main conversation | The task is quick and won't clutter context |
| You want a cheaper model for simple work (Haiku) | You need the best reasoning (already on Opus) |
| Multiple people on the project need the same workflow | Only you will ever do this task |

### Suggested workflow for this project

1. **Starting a new phase** — run `@phase-reviewer` to see what's done and what's next
2. **Building components** — use `@component-builder` for each component, it reads the spec for you
3. **Building pages** — use `@page-builder`, it handles layout choice and rendering strategy
4. **Migrating data** — use `@content-migrator` per collection to move data/ into src/content/
5. **After implementing a theme** — run `@theme-validator` to catch architecture violations
6. **Periodically** — run `@doc-checker` to catch drift between docs and code
7. **Before milestones** — run `@a11y-auditor` and `@bear-data-auditor` for quality checks

---

## Agent Definitions

### 1. theme-validator

- **Description:** Validate that a theme SCSS file follows the project's CSS Zen Garden architecture. Check that it defines all required grid-template-areas, uses only CSS custom properties for theming (no component-conditional logic), follows BEM naming, and includes all breakpoints. Compare against the theme creation guide in docs/theme-creation-guide.md. Flag any violations.
- **Tools:** Read-only tools
- **Model:** Sonnet
- **Color:** Purple
- **Memory:** Project scope (.claude/agent-memory/)
- **When to use:** After creating or modifying any theme SCSS file. Run before committing theme changes.

---

### 2. component-builder

- **Description:** Given a component name, read its spec from docs/components/, then implement it as an Astro component in src/components/. Ensure the component emits semantic HTML with BEM class hooks, wrapper elements, and decoration divs as described in the spec. The component must contain no theme-conditional logic — all visual differences must be CSS-only. Cross-reference docs/plan.md for any relevant decisions.
- **Tools:** All tools
- **Model:** Opus
- **Color:** Blue
- **Memory:** Project scope (.claude/agent-memory/)
- **When to use:** When implementing any of the 17 documented components. Invoke with the component name, e.g. `@component-builder build the BearCard component`.

---

### 3. content-migrator

- **Description:** Migrate raw data files from the data/ directory into Astro content collections under src/content/. Read the collection schema from docs/content/, define or update the Zod schema in src/content/config.ts, and convert the source data into properly structured markdown/JSON files. Validate all entries against the schema and report any data quality issues.
- **Tools:** All tools
- **Model:** Sonnet
- **Color:** Green
- **Memory:** Project scope (.claude/agent-memory/)
- **When to use:** During Phase 1 when setting up content collections. Run once per collection (bears, events, products, gallery, locations).

---

### 4. page-builder

- **Description:** Given a page name, read its design spec from docs/pages/ and implement it as an Astro page. Use the correct layout (base.layout or page.layout), apply the right rendering strategy (static vs SSR) as documented in docs/plan.md, and wire up any required content collections or components. Follow the implementation order in docs/implementation-order.md.
- **Tools:** All tools
- **Model:** Opus
- **Color:** Orange
- **Memory:** Project scope (.claude/agent-memory/)
- **When to use:** When implementing any of the 14 documented pages. Invoke with the page name, e.g. `@page-builder build the bears listing page`.

---

### 5. phase-reviewer

- **Description:** Review the current state of the codebase against a specific phase in docs/implementation-order.md. Check which tasks from that phase are complete, partially done, or not started. Cross-reference the dependency graph to identify blockers. Produce a status report with what's done, what's next, and any issues.
- **Tools:** Read-only tools
- **Model:** Sonnet
- **Color:** Yellow
- **Memory:** Project scope (.claude/agent-memory/)
- **When to use:** At the start of a work session to orient yourself, or when transitioning between phases. e.g. `@phase-reviewer review phase 2 status`.

---

### 6. doc-checker

- **Description:** Audit the implemented code against the project documentation in docs/. Check that component implementations match their specs, page implementations match their designs, content schemas match their definitions, and architectural decisions from docs/plan.md are being followed. Report any drift between docs and code.
- **Tools:** Read-only tools
- **Model:** Sonnet
- **Color:** Red
- **Memory:** Project scope (.claude/agent-memory/)
- **When to use:** After completing a batch of implementation work. Catches cases where you've drifted from the spec or the spec needs updating.

---

### 7. bear-data-auditor

- **Description:** Audit the bears content collection for data quality issues. Check for missing required fields (name, picture, tags, brand, species, dates), validate that all referenced locations exist in the locations collection, check for duplicate entries, validate date formats, and ensure tags use consistent values. Report issues sorted by severity.
- **Tools:** Read-only tools
- **Model:** Haiku
- **Color:** Pink
- **Memory:** Project scope (.claude/agent-memory/)
- **When to use:** After migrating bear data, or after adding/editing bear entries. Quick and cheap to run (uses Haiku).

---

### 8. a11y-auditor

- **Description:** Review Astro components and pages for accessibility issues. Check semantic HTML usage, ARIA attributes, keyboard navigation, color contrast considerations in theme CSS custom properties, alt text on images, focus management with view transitions, and screen reader compatibility. Reference WCAG 2.1 AA standards.
- **Tools:** Read-only tools
- **Model:** Sonnet
- **Color:** Cyan
- **Memory:** Project scope (.claude/agent-memory/)
- **When to use:** After completing a page or component, especially before merging. Run across all pages before launch.
