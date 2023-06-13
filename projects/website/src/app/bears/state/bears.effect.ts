import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BearService } from 'data';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { AppState } from '../../app.state';
import { loadBears, loadBearsFailure, loadBearsSuccess } from './bears.action';

@Injectable()
export class BearsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private bearService: BearService
  ) {}
  loadBears$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBears),
      switchMap(() =>
        from(this.bearService.getBears()).pipe(
          map((bears) => loadBearsSuccess({ bears: bears })),
          catchError((error) => of(loadBearsFailure({ error })))
        )
      )
    )
  );
}
