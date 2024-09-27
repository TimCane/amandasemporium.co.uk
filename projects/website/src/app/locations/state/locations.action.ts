import { createAction, props } from '@ngrx/store';
import { ILocation } from 'data';

export const selectLocation = createAction(
  '[Location Page] Select Location',
  props<{ locationId: string | null }>()
);

export const loadLocations = createAction('[Location Page] Load Locations');

export const loadLocationsSuccess = createAction(
  '[Location API] Location Load Success',
  props<{ locations: ILocation[] }>()
);

export const loadLocationsFailure = createAction(
  '[Location API] Location Load Failure',
  props<{ error: string }>()
);
