import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ProductService } from 'data';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { AppState } from '../../app.state';
import {
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
} from './products.action';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private productService: ProductService
  ) {}
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        from(this.productService.getProducts()).pipe(
          map((products) => loadProductsSuccess({ products: products })),
          catchError((error) => of(loadProductsFailure({ error })))
        )
      )
    )
  );
}
