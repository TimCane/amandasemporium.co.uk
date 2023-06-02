import { createReducer, on } from '@ngrx/store';
import {
  loadEvents,
  loadEventsFailure,
  loadEventsSuccess,
  selectEvent,
} from './events.action';
import { EventsState, eventsAdapter, initialState } from './events.state';

export const eventsReducer = createReducer<EventsState>(
  initialState,

  on(selectEvent, (state, { eventId }) => {
    return { ...state, selectedEventId: eventId };
  }),

  on(loadEvents, (state) => ({ ...state, status: 'loading' })),

  on(loadEventsSuccess, (state, { events }) => {
    return eventsAdapter.setAll(events, {
      ...state,
      error: null,
      status: 'success',
    });
  }),

  on(loadEventsFailure, (state, { error }) => {
    return eventsAdapter.removeAll({
      ...state,
      selectedEventId: null,
      error: error,
      status: 'error',
    });
  })
);

export const getSelectedUserId = (state: EventsState) => state.selectedEventId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  eventsAdapter.getSelectors();

// select the array of event ids
export const selectUserIds = selectIds;

// select the dictionary of event entities
export const selectUserEntities = selectEntities;

// select the array of events
export const selectAllUsers = selectAll;

// select the total event count
export const selectUserTotal = selectTotal;
