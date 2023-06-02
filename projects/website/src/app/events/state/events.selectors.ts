import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventsState, eventsAdapter } from './events.state';

export const eventsFeature =
  createFeatureSelector<EventsState>('eventsFeature');
const selector = <T>(mapping: (state: EventsState) => T) =>
  createSelector(eventsFeature, mapping);

const { selectEntities, selectAll } = eventsAdapter.getSelectors();

export const selectEventEntities = selector(selectEntities);

export const getEvents = selector(selectAll);

export const getUpcomingEvents = createSelector(getEvents, (events) => {
  const now = Date.now();
  const futureDates = events.filter((event) => {
    return event.Date && new Date(event.Date).getTime() > now;
  });

  return [...futureDates].sort((a, b) => {
    return compare(a.Date, b.Date, 'asc');
  });
});

export const getNextEvent = createSelector(getUpcomingEvents, (events) => {
  console.log(events);
  return events[0];
});

export const getSelectedEventId = selector((state) => state.selectedEventId);

export const getEvent = createSelector(
  selectEventEntities,
  getSelectedEventId,
  (events, selectedEventId) => {
    if (selectedEventId) {
      return events[selectedEventId];
    }
    return null;
  }
);

// Utils
export function compare(a: any, b: any, sortDirection: string): number {
  if (a > b) {
    return sortDirection === 'asc' ? 1 : -1;
  }
  if (a < b) {
    return sortDirection === 'desc' ? 1 : -1;
  }
  return 0;
}
