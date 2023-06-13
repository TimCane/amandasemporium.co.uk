import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PhotoService } from 'data';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { AppState } from '../../app.state';
import {
  loadCategories,
  loadCategoriesFailure,
  loadCategoriesSuccess,
  loadPhotos,
  loadPhotosFailure,
  loadPhotosSuccess,
} from './photos.action';

@Injectable()
export class PhotosEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private photoService: PhotoService
  ) {}
  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPhotos),
      switchMap(() =>
        from(this.photoService.getPhotos()).pipe(
          map((photos) => loadPhotosSuccess({ photos: photos })),
          catchError((error) => of(loadPhotosFailure({ error })))
        )
      )
    )
  );

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      switchMap(() =>
        from(this.photoService.getCategories()).pipe(
          map((categories) => loadCategoriesSuccess({ categories })),
          catchError((error) => of(loadCategoriesFailure({ error })))
        )
      )
    )
  );
}
