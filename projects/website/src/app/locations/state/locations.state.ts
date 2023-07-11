import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ILocation } from 'data';

export interface LocationsState extends EntityState<ILocation> {
  selectedLocationId: string | null;

  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success'; //TODO: Enum
}

export function selectLocationId(location: ILocation): string {
  return location.Id;
}

export function sortByName(a: ILocation, b: ILocation): number {
  return a.Name.localeCompare(b.Name);
}

export const locationsAdapter = createEntityAdapter<ILocation>({
  selectId: selectLocationId,
  sortComparer: sortByName,
});

export const initialState: LocationsState = locationsAdapter.getInitialState({
  pastLocationCount: 3,
  selectedLocationId: null,
  error: null,
  status: 'pending',
});
