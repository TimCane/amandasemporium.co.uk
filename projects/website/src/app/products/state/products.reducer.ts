import { createReducer, on } from '@ngrx/store';
import {
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
  selectProduct,
} from './products.action';
import { ProductsState, initialState, productsAdapter } from './products.state';

export const productsReducer = createReducer<ProductsState>(
  initialState,

  on(selectProduct, (state, { productId }) => {
    return { ...state, selectedProductId: productId };
  }),

  on(loadProducts, (state) => ({ ...state, status: 'loading' })),

  on(loadProductsSuccess, (state, { products }) => {
    return productsAdapter.setAll(products, {
      ...state,
      error: null,
      status: 'success',
    });
  }),

  on(loadProductsFailure, (state, { error }) => {
    return productsAdapter.removeAll({
      ...state,
      selectedProductId: null,
      error: error,
      status: 'error',
    });
  })
);

export const getSelectedProductId = (state: ProductsState) =>
  state.selectedProductId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  productsAdapter.getSelectors();

// select the array of product ids
export const selectProductIds = selectIds;

// select the dictionary of product entities
export const selectProductEntities = selectEntities;

// select the array of products
export const selectAllProducts = selectAll;

// select the total product count
export const selectProductTotal = selectTotal;
