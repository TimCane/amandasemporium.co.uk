import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventsState, eventsAdapter } from './events.state';

export const eventsFeature =
  createFeatureSelector<EventsState>('eventsFeature');
const selector = <T>(mapping: (state: EventsState) => T) =>
  createSelector(eventsFeature, mapping);

const { selectEntities, selectAll } = eventsAdapter.getSelectors();

export const selectEventEntities = selector(selectEntities);

export const getEvents = selector(selectAll);

export const getPastEventCount = selector((state) => state.pastEventCount);

export const getFutureEvents = createSelector(getEvents, (events) => {
  const now = Date.now();
  const futureDates = events.filter((event) => {
    return event.Date && new Date(event.Date).getTime() >= now;
  });

  return [...futureDates].sort((a, b) => {
    return compare(a.Date, b.Date, 'asc');
  });
});

export const getPastEvents = createSelector(getEvents, (events) => {
  const now = Date.now();
  const futureDates = events.filter((event) => {
    return event.Date && new Date(event.Date).getTime() <= now;
  });

  return [...futureDates].sort((a, b) => {
    return compare(a.Date, b.Date, 'desc');
  });
});

export const getNextEvent = createSelector(getFutureEvents, (events) => {
  return events[0];
});

export const getUpcomingEvents = createSelector(getFutureEvents, (events) => {
  return events.slice(1);
});

export const getCanSeeMore = createSelector(
  getPastEvents,
  getPastEventCount,
  (events, count) => {
    return count < events.length;
  }
);

export const getCanSeeLess = createSelector(getPastEventCount, (count) => {
  return count != 3;
});

export const getPaginatedPastEvents = createSelector(
  getPastEvents,
  getPastEventCount,
  (events, count) => {
    return events.slice(0, count);
  }
);

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
