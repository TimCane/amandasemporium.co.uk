import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactState } from './contact.state';

const contactFeature = createFeatureSelector<ContactState>('contactFeature');
const selector = <T>(mapping: (state: ContactState) => T) =>
  createSelector(contactFeature, mapping);

export const selectIsLoading = selector((state) => state.isLoading);

export const selectSuccess = selector((state) => state.success);
