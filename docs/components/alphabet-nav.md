# Component: Alphabet Navigation

## File

`src/components/bears/alphabet-nav.astro`

## Purpose

Row of A-Z letter buttons for filtering bears by first letter of name. Only letters with bears in the current group are active.

## Props

```typescript
interface Props {
  activeLetters: string[];  // Letters that have bears (e.g., ['A', 'B', 'D', ...])
  currentLetter?: string;   // Currently selected letter (if any)
  baseUrl: string;          // URL pattern for letter links
  params: Record<string, string>; // Current query params to preserve
}
```

## Structure

```html
<nav aria-label="Filter by letter">
  <a href="/bears?group=all" class="alphabet-nav__clear">All</a>
  {alphabet.map(letter => (
    activeLetters.includes(letter)
      ? <a href={`${baseUrl}?letter=${letter}&...`}
           class={letter === currentLetter ? 'alphabet-nav__letter alphabet-nav__letter--active' : 'alphabet-nav__letter'}
           aria-current={letter === currentLetter ? 'page' : undefined}>
          {letter}
        </a>
      : <span class="alphabet-nav__letter alphabet-nav__letter--disabled" aria-disabled="true">{letter}</span>
  ))}
</nav>
```

## Behaviour

- 26 letter buttons + "All" clear button
- Active letters (with bears) are clickable links
- Inactive letters (no bears in current group) are dimmed/disabled
- Clicking a letter navigates to the filtered URL (SSR)
- "All" clears the letter filter
- Preserves current group filter in links
- Horizontal scroll on mobile if needed

## Theme Variations

Inherits from filter-tabs styling. Letters are compact buttons.

| Theme | Active style | Inactive style | Disabled style |
| ----- | ------------ | -------------- | -------------- |
| Boutique | Underlined, primary colour | Default text | Light grey, no interaction |
| Whimsical | Pill background | Default text | Very light, no interaction |
| Modern | Bold, primary background | Default text | Light grey, no interaction |
| Fun | Colourful pill | Default text | Very light, no interaction |

## Data Source

Active letters computed from the bears collection:

```typescript
// libs/alphabet.ts (migrated from old site)
export function getActiveLetters(bears: CollectionEntry<'bears'>[]): string[] {
  const letters = new Set(bears.map(b => b.data.name[0].toUpperCase()));
  return [...letters].sort();
}
```

## Accessibility

- `<nav>` with `aria-label="Filter by letter"`
- Active letter: `aria-current="page"`
- Disabled letters: `aria-disabled="true"`
- Keyboard navigable
