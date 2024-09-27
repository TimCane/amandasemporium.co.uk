import { createAction, props } from '@ngrx/store';
import { IBear } from 'data';

export const selectBear = createAction(
  '[Bear Page] Select Bear',
  props<{ bearId: string | null }>()
);

export const setLetterFilter = createAction(
  '[Bear Page] Set Letter Filter',
  props<{ letter: string | null }>()
);

export const loadBears = createAction('[Bear Page] Load Bears');

export const setFilter = createAction(
  '[Bear Page] Set Filter',
  props<{ filter: string | null }>()
);

export const loadBearsSuccess = createAction(
  '[Bear API] Bear Load Success',
  props<{ bears: IBear[] }>()
);

export const loadBearsFailure = createAction(
  '[Bear API] Bear Load Failure',
  props<{ error: string }>()
);
