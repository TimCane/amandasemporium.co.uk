import { createReducer, on } from '@ngrx/store';
import {
  loadBears,
  loadBearsFailure,
  loadBearsSuccess,
  selectBear,
} from './bears.action';
import { bearsAdapter, BearsState, initialState } from './bears.state';

export const bearsReducer = createReducer<BearsState>(
  initialState,

  on(selectBear, (state, { bearId }) => {
    return { ...state, selectedBearId: bearId };
  }),

  on(loadBears, (state) => ({ ...state, status: 'loading' })),

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
  })
);

export const getSelectedUserId = (state: BearsState) => state.selectedBearId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  bearsAdapter.getSelectors();

// select the array of bear ids
export const selectUserIds = selectIds;

// select the dictionary of bear entities
export const selectUserEntities = selectEntities;

// select the array of bears
export const selectAllUsers = selectAll;

// select the total bear count
export const selectUserTotal = selectTotal;
