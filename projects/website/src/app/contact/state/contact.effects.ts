import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, map, of, switchMap, take } from 'rxjs';
import { ContactService } from '../services/contact.service';
import {
  submitForm,
  submitFormFailure,
  submitFormSuccess,
} from './contact.actions';
import { ContactState } from './contact.state';

@Injectable({
  providedIn: 'root',
})
export class ContactEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store<ContactState>,
    private service: ContactService
  ) {}

  submitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(submitForm),
      switchMap(({ name, email, message }) =>
        from(this.service.submitForm(name, email, message)).pipe(
          take(1),
          map((success) => submitFormSuccess({ success })),
          catchError((error) => of(submitFormFailure({ error })))
        )
      )
    )
  );
}
