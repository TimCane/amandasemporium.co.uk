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

export const getBearsFiltered = createSelector(
  getBears,
  getSortDirection,
  getSortKey,
  (bears, sortDirection, sortKey) => {
    const sortedData = [...bears].sort((a, b) => {
      const paramA = (a as any)[sortKey];
      const paramB = (b as any)[sortKey];
      return compare(paramA, paramB, sortDirection);
    });
    return sortedData;
  }
);

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
