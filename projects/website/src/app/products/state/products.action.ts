import { createAction, props } from '@ngrx/store';
import { IProduct } from 'data';

export const selectProduct = createAction(
  '[Product Page] Select Product',
  props<{ productId: string | null }>()
);

export const loadProducts = createAction('[Product Page] Load Products');

export const loadProductsSuccess = createAction(
  '[Product API] Product Load Success',
  props<{ products: IProduct[] }>()
);

export const loadProductsFailure = createAction(
  '[Product API] Product Load Failure',
  props<{ error: string }>()
);
