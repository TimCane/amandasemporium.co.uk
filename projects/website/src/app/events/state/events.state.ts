import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IEvent } from 'data';

export interface EventsState extends EntityState<IEvent> {
  selectedEventId: string | null;

  pastEventCount: number;

  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success'; //TODO: Enum
}

export function selectEventId(event: IEvent): string {
  return event.Id;
}

export function sortByName(a: IEvent, b: IEvent): number {
  return a.Name.localeCompare(b.Name);
}

export const eventsAdapter = createEntityAdapter<IEvent>({
  selectId: selectEventId,
  sortComparer: sortByName,
});

export const initialState: EventsState = eventsAdapter.getInitialState({
  pastEventCount: 3,
  selectedEventId: null,
  error: null,
  status: 'pending',
});
