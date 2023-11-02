import { createReducer, on } from '@ngrx/store';
import {
  loadLocations,
  loadLocationsFailure,
  loadLocationsSuccess,
  selectLocation,
} from './locations.action';
import {
  LocationsState,
  initialState,
  locationsAdapter,
} from './locations.state';

export const locationsReducer = createReducer<LocationsState>(
  initialState,

  on(selectLocation, (state, { locationId }) => {
    return { ...state, selectedLocationId: locationId };
  }),

  on(loadLocations, (state) => ({
    ...state,
    status: 'loading',
    selectedLocationId: null,
  })),

  on(loadLocationsSuccess, (state, { locations }) => {
    return locationsAdapter.setAll(locations, {
      ...state,
      error: null,
      status: 'success',
    });
  }),

  on(loadLocationsFailure, (state, { error }) => {
    return locationsAdapter.removeAll({
      ...state,
      selectedLocationId: null,
      error: error,
      status: 'error',
    });
  })
);

export const getSelectedLocationId = (state: LocationsState) =>
  state.selectedLocationId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  locationsAdapter.getSelectors();

// select the array of location ids
export const selectLocationIds = selectIds;

// select the dictionary of location entities
export const selectLocationEntities = selectEntities;

// select the array of locations
export const selectAllLocations = selectAll;

// select the total location count
export const selectLocationTotal = selectTotal;
