# Component: Event List

## File

`src/components/events/event-list.astro`

## Purpose

Renders a list of event cards. Handles the layout and empty state for events.

## Props

```typescript
interface Props {
  events: CollectionEntry<'events'>[];
  showCalendarButtons?: boolean;
  emptyMessage?: string;
}
```

## Structure

```html
{events.length > 0 ? (
  <div class="event-list__grid">
    {events.map(event => (
      <EventCard event={event} showCalendarButton={showCalendarButtons} />
    ))}
  </div>
) : (
  <p class="event-list__empty">{emptyMessage}</p>
)}
```

## Layout

- Vertical stack of event cards
- Gap between cards
- Single column (events are wide, not a grid)

## Usage

```astro
<!-- Upcoming events -->
<EventList
  events={upcomingEvents}
  showCalendarButtons={true}
  emptyMessage="We're planning our next event — check back soon!"
/>

<!-- Past events -->
<EventList
  events={pastEvents}
  showCalendarButtons={false}
  emptyMessage="No events found for this year."
/>
```
