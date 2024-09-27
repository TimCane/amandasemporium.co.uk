import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LocationsState, locationsAdapter } from './locations.state';

export const locationsFeature =
  createFeatureSelector<LocationsState>('locationsFeature');
const selector = <T>(mapping: (state: LocationsState) => T) =>
  createSelector(locationsFeature, mapping);

const { selectEntities, selectAll } = locationsAdapter.getSelectors();

export const selectLocationEntities = selector(selectEntities);

export const getLocations = selector(selectAll);

export const getSelectedLocationId = selector(
  (state) => state.selectedLocationId
);

export const getLocation = createSelector(
  selectLocationEntities,
  getSelectedLocationId,
  (locations, selectedLocationId) => {
    if (selectedLocationId) {
      return locations[selectedLocationId];
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
