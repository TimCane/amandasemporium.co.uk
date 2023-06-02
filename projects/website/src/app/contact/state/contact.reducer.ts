import { createReducer, on } from '@ngrx/store';
import {
  submitForm,
  submitFormFailure,
  submitFormSuccess,
} from './contact.actions';
import { initialState } from './contact.state';

export const contactReducer = createReducer(
  initialState,

  on(submitForm, (state) => ({ ...state, isLoading: true })),
  on(submitFormSuccess, (state, { success }) => {
    return {
      ...state,
      isLoading: false,
      errorMessage: null,
      success: success,
    };
  }),
  on(submitFormFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    errorMessage: error,
    success: false,
  }))
);
