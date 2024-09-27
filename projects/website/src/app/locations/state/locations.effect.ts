import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EventService, LocationService } from 'data';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { AppState } from '../../app.state';
import {
  loadLocations,
  loadLocationsFailure,
  loadLocationsSuccess,
} from './locations.action';

@Injectable()
export class LocationsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private locationService: LocationService,
    private eventService: EventService
  ) {}
  loadLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLocations),
      switchMap(() =>
        from(this.locationService.getLocations()).pipe(
          map((locations) => loadLocationsSuccess({ locations: locations })),
          catchError((error) => of(loadLocationsFailure({ error })))
        )
      )
    )
  );
}
