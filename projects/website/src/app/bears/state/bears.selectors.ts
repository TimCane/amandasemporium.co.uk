import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BearsState, bearsAdapter } from './bears.state';

export const bearsFeature = createFeatureSelector<BearsState>('bearsFeature');
const selector = <T>(mapping: (state: BearsState) => T) =>
  createSelector(bearsFeature, mapping);

const { selectEntities, selectAll } = bearsAdapter.getSelectors();

export const selectBearEntities = selector(selectEntities);

export const getBears = selector(selectAll);
export const getSortDirection = selector((state) => state.sortDirection);

export const getSortKey = selector((state) => state.sortKey);

export const getRescuedBears = createSelector(getBears, (bears) => {
  let rescued = bears.filter((b) => !b.Rehomed);
  return [...rescued].sort((a, b) => {
    return compare(a.Name, b.Name, 'asc');
  });
});

export const getRehomedBears = createSelector(getBears, (bears) => {
  let rehomed = bears.filter((b) => b.Rehomed);
  return [...rehomed].sort((a, b) => {
    return compare(a.Name, b.Name, 'asc');
  });
});

export const getCountOfBears = createSelector(getBears, (bears) => {
  return bears.length;
});

export const getCountOfRehomedBears = createSelector(getBears, (bears) => {
  return bears.filter((b) => b.Rehomed).length;
});

export const getSelectedBearId = selector((state) => state.selectedBearId);

export const getBear = createSelector(
  selectBearEntities,
  getSelectedBearId,
  (bears, selectedBearId) => {
    if (selectedBearId) {
      return bears[selectedBearId];
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
