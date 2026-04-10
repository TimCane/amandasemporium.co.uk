# Component: Event Card

## File

`src/components/events/event-card.astro`

## Purpose

Displays a single event with key details. Used in the events listing. Links to the individual event profile page at `/events/[slug]`.

## Props

```typescript
interface Props {
  event: CollectionEntry<'events'>;
  showCalendarButton?: boolean; // true for upcoming, false for past
}
```

## Structure

```html
<Card>
  <div class="event-card__date">
    <span class="event-card__day">{day}</span>
    <span class="event-card__month">{month}</span>
    <span class="event-card__year">{year}</span>
  </div>
  <div class="event-card__body">
    <h3>{event.data.name}</h3>
    <p class="event-card__meta">
      <span class="event-card__time">{event.data.time}</span>
      <span class="event-card__location">{event.data.location.name}</span>
    </p>
    {event.data.info && <p class="event-card__info">{event.data.info}</p>}
    <div class="event-card__actions">
      <a href={event.data.website} target="_blank" rel="noopener">Website</a>
      {showCalendarButton && (
        <a href={`/events/calendar/${event.slug}.ics`}>Add to Calendar</a>
      )}
    </div>
  </div>
</Card>
```

## Date Display

Formatted using `Intl.DateTimeFormat`:

```typescript
const date = new Date(event.data.date);
const day = date.getDate();
const month = new Intl.DateTimeFormat('en-GB', { month: 'short' }).format(date);
const year = date.getFullYear();
```

## Calendar Button

- Only shown for upcoming events (`showCalendarButton` prop)
- Links to the `.ics` endpoint for download
- See `features/ical-export.md`

## Accessibility

- Date is readable as text
- External website link has `rel="noopener"` and indicates it opens in a new tab
- Calendar download link is clearly labelled
