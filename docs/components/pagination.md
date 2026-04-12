# Component: Pagination

## File

`src/components/ui/pagination.astro`

## Purpose

Reusable pagination control for SSR listing pages. Shows page numbers with previous/next navigation.

## Props

```typescript
interface Props {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  params: Record<string, string>; // Current query params to preserve
}
```

## Structure

```html
<nav aria-label="Pagination">
  <a href="?page=1&..." aria-label="Previous page">Previous</a>

  <a href="?page=1&...">1</a>
  <span>...</span>
  <a href="?page=4&..." aria-current="page">4</a>
  <a href="?page=5&...">5</a>
  <span>...</span>
  <a href="?page=10&...">10</a>

  <a href="?page=5&..." aria-label="Next page">Next</a>
</nav>
```

## Behaviour

- Previous button disabled on page 1
- Next button disabled on last page
- Shows first page, last page, and pages around current
- Ellipsis for gaps
- All links preserve current filter params (group, letter, category, etc.)
- Hidden when totalPages <= 1

## Theme Variations

Defined in each theme's SCSS file:

| Theme | Style |
| ----- | ----- |
| Boutique | Understated, primary text colour for active |
| Whimsical | Rounded pill buttons, primary background for active |
| Modern | Compact sharp buttons, primary background for active |
| Fun | Chunky rounded buttons with solid shadow |

## Accessibility

- `<nav>` with `aria-label="Pagination"`
- Active page: `aria-current="page"`
- Previous/Next: `aria-label` for screen readers
- Disabled buttons: `aria-disabled="true"`
