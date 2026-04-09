# Feature: SSR Filtering & Pagination

## Overview

A shared pattern used across bears, products, events, and gallery pages. Each page reads query parameters from the URL, queries the relevant content collection, and returns a filtered, paginated result.

## Pattern

Every SSR listing page follows the same structure:

```typescript
// Generic pattern for any listing page
export const prerender = false; // Opt into SSR

const url = new URL(Astro.request.url);
const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'));
const perPage = 24;

// 1. Get all entries from the collection
let entries = await getCollection('collectionName');

// 2. Apply filters based on query params
// (specific to each page)

// 3. Sort
entries.sort(/* ... */);

// 4. Paginate
const total = entries.length;
const totalPages = Math.ceil(total / perPage);
const paginated = entries.slice((page - 1) * perPage, page * perPage);
```

## Per-Page Filters

### Bears (`/bears`)

| Param | Filter Logic |
| ----- | ------------ |
| `group` | `all`: no filter. `looking`: exclude entries with `rehomed`. `found`: only entries with `rehomed`. |
| `letter` | Filter where `name` starts with the given letter (case-insensitive) |
| `page` | Paginate at 24 per page |

Sort: alphabetically by `name`.

### Products (`/products`)

| Param | Filter Logic |
| ----- | ------------ |
| `category` | Filter by `category` reference matching the slug |
| `page` | Paginate at 24 per page |

Sort: alphabetically by `name`.

### Events (`/events`)

| Param | Filter Logic |
| ----- | ------------ |
| `view` | `upcoming`: `date >= today`. `past`: `date < today`. |
| `year` | (past only) Filter by year extracted from `date` |
| `page` | (past only) Paginate at 24 per page |

Sort: upcoming = ascending by date. Past = descending by date.

### Gallery (`/gallery`)

| Param | Filter Logic |
| ----- | ------------ |
| `category` | Filter by `category` string field |
| `page` | Paginate at 24 per page |

Sort: by `date` descending (if present), then alphabetically by `caption`.

## URL Construction

Filter controls (tabs, buttons, pagination) generate URLs by updating query parameters:

```typescript
// Helper to build filter URLs
function buildUrl(baseUrl: string, params: Record<string, string | number | undefined>) {
  const url = new URL(baseUrl);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  }
  return url.pathname + url.search;
}
```

## Pagination Component Data

The pagination component needs:

```typescript
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;          // Current URL path
  preserveParams: string[]; // Query params to keep when changing page
}
```

## View Transitions

All filter and pagination links are standard `<a>` tags. Astro's view transitions intercept them, making the experience feel like client-side filtering without any JavaScript framework.

## Edge Cases

- **Invalid page number:** Clamp to valid range (1 to totalPages). If page > totalPages, show last page.
- **Invalid filter values:** Ignore invalid params, fall back to defaults.
- **Empty results:** Show a friendly empty state message.
- **Single page:** Hide pagination entirely.

## Files Involved

- `src/pages/bears/index.astro`
- `src/pages/products/index.astro`
- `src/pages/events/index.astro`
- `src/pages/gallery/index.astro`
- `src/components/ui/pagination.astro`
- `src/components/ui/filter-tabs.astro`
