import { createReducer, on } from '@ngrx/store';
import {
  loadBears,
  loadBearsFailure,
  loadBearsSuccess,
  selectBear,
  setLetterFilter,
} from './bears.action';
import { BearsState, bearsAdapter, initialState } from './bears.state';

export const bearsReducer = createReducer<BearsState>(
  initialState,

  on(selectBear, (state, { bearId }) => {
    return { ...state, selectedBearId: bearId };
  }),

  on(loadBears, (state) => ({
    ...state,
    status: 'loading',
    selectedBearId: null,
  })),

  on(loadBearsSuccess, (state, { bears }) => {
    return bearsAdapter.setAll(bears, {
      ...state,
      error: null,
      status: 'success',
    });
  }),

  on(loadBearsFailure, (state, { error }) => {
    return bearsAdapter.removeAll({
      ...state,
      selectedBearId: null,
      error: error,
      status: 'error',
    });
  }),

  on(setLetterFilter, (state, { letter }) => ({
    ...state,
    letterFilter: letter,
  }))
);

export const getSelectedBearId = (state: BearsState) => state.selectedBearId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  bearsAdapter.getSelectors();

// select the array of bear ids
export const selectBearIds = selectIds;

// select the dictionary of bear entities
export const selectBearEntities = selectEntities;

// select the array of bears
export const selectAllBears = selectAll;

// select the total bear count
export const selectBearTotal = selectTotal;
