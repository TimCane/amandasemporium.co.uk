import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IBear } from 'data';

export interface BearsState extends EntityState<IBear> {
  selectedBearId: string | null;

  sortDirection: string;
  sortKey: string;

  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success'; //TODO: Enum
}

export function selectBearId(bear: IBear): string {
  return bear.Id;
}

export function sortByName(a: IBear, b: IBear): number {
  return a.Name.localeCompare(b.Name);
}

export const bearsAdapter = createEntityAdapter<IBear>({
  selectId: selectBearId,
  sortComparer: sortByName,
});

export const initialState: BearsState = bearsAdapter.getInitialState({
  selectedBearId: null,
  error: null,
  status: 'pending',

  sortDirection: 'asc',
  sortKey: 'Name',
});
