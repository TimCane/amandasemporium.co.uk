# Component: Filter Tabs

## File

`src/components/ui/filter-tabs.astro`

## Purpose

Reusable tab/button row for filtering content on SSR listing pages. Used for bear groups, product categories, event views, and gallery categories.

## Props

```typescript
interface Props {
  tabs: Array<{
    label: string;
    value: string;
    href: string;
  }>;
  activeValue: string;
}
```

## Structure

```html
<div role="tablist" aria-label="Filter">
  <a href="/bears?group=all" role="tab" aria-selected="true">All</a>
  <a href="/bears?group=looking" role="tab" aria-selected="false">Looking for a Home</a>
  <a href="/bears?group=found" role="tab" aria-selected="false">Found Their Home</a>
</div>
```

## Behaviour

- Each tab is a standard `<a>` link (works with view transitions)
- Active tab determined by matching `activeValue` prop
- Clicking a tab navigates to the specified `href` (SSR handles the filtering)
- Horizontal scroll on mobile if tabs overflow

## Usage Examples

### Bear Groups

```astro
<FilterTabs
  tabs={[
    { label: 'All', value: 'all', href: '/bears?group=all' },
    { label: 'Looking for a Home', value: 'looking', href: '/bears?group=looking' },
    { label: 'Found Their Home', value: 'found', href: '/bears?group=found' },
  ]}
  activeValue={currentGroup}
/>
```

### Product Categories

```astro
<FilterTabs
  tabs={categories.map(cat => ({
    label: cat.data.name,
    value: cat.slug,
    href: `/products?category=${cat.slug}`,
  }))}
  activeValue={currentCategory}
/>
```

## Theme Variations

| Theme | Active style | Inactive style |
| ----- | ------------ | -------------- |
| Boutique | Underline accent | Muted text |
| Whimsical | Pill background fill | Muted text, rounded hover |
| Modern | Solid background, white text | Text only |
| Fun | Colourful pill, bold | Outlined pill |

## Accessibility

- `role="tablist"` on container
- `role="tab"` on each tab
- `aria-selected` on active tab
- Keyboard navigation between tabs
