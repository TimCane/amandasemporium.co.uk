import { createAction, props } from '@ngrx/store';
import { IEvent } from 'data';

export const selectEvent = createAction(
  '[Event Page] Select Event',
  props<{ eventId: string | null }>()
);

export const loadEvents = createAction('[Event Page] Load Events');

export const getMorePastEvents = createAction(
  '[Event Page] Get More Past Events',
  props<{ count: number }>()
);

export const getLessPastEvents = createAction(
  '[Event Page] Get Less Past Events',
  props<{ count: number }>()
);

export const loadEventsSuccess = createAction(
  '[Event API] Event Load Success',
  props<{ events: IEvent[] }>()
);

export const loadEventsFailure = createAction(
  '[Event API] Event Load Failure',
  props<{ error: string }>()
);
