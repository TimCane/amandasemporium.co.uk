import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EventService } from 'data';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { AppState } from '../../app.state';
import {
  loadEvents,
  loadEventsFailure,
  loadEventsSuccess,
} from './events.action';

@Injectable()
export class EventsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private eventService: EventService
  ) {}
  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEvents),
      switchMap(() =>
        from(this.eventService.getEvents()).pipe(
          map((events) => loadEventsSuccess({ events: events })),
          catchError((error) => of(loadEventsFailure({ error })))
        )
      )
    )
  );
}
