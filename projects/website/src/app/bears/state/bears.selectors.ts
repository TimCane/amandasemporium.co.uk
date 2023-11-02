import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBear } from 'data';
import { BearsState, bearsAdapter } from './bears.state';

export const bearsFeature = createFeatureSelector<BearsState>('bearsFeature');
const selector = <T>(mapping: (state: BearsState) => T) =>
  createSelector(bearsFeature, mapping);

const { selectEntities, selectAll } = bearsAdapter.getSelectors();

export const selectBearEntities = selector(selectEntities);

export const getBears = selector(selectAll);
export const getSortDirection = selector((state) => state.sortDirection);

export const getSortKey = selector((state) => state.sortKey);

export const getLetterFilter = selector((state) => state.letterFilter);
export const getFilter = selector((state) => state.filter);

export const getTypeFilteredBears = createSelector(
  getBears,
  getFilter,
  (bears, filter) => {
    let bearsToShow: IBear[] = [];

    if (filter == null) {
      bearsToShow = bears;
    } else if (filter == 'rehomed') {
      bearsToShow = bears.filter((b) => b.Rehomed);
    } else if (filter == 'rescued') {
      bearsToShow = bears.filter((b) => !b.Rehomed);
    }

    return [...bearsToShow].sort((a, b) => {
      return compare(a.Name, b.Name, 'asc');
    });
  }
);

export const getFilteredBears = createSelector(
  getTypeFilteredBears,
  getLetterFilter,
  (bears, letterFilter) => {
    if (letterFilter == null) {
      return bears;
    }

    letterFilter = letterFilter.toLowerCase();
    return bears.filter((b) => b.Name.toLowerCase().startsWith(letterFilter!));
  }
);

export const getAvailableLetters = createSelector(
  getTypeFilteredBears,
  (bears) => {
    return bears
      .map((b) => b.Name[0])
      .filter((value, index, array) => array.indexOf(value) === index)
      .sort((a, b) => {
        return compare(a, b, 'asc');
      });
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
