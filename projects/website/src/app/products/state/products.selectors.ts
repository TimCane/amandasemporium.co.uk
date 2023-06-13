import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState, productsAdapter } from './products.state';

export const productsFeature =
  createFeatureSelector<ProductsState>('productsFeature');
const selector = <T>(mapping: (state: ProductsState) => T) =>
  createSelector(productsFeature, mapping);

const { selectEntities, selectAll } = productsAdapter.getSelectors();

export const selectProductEntities = selector(selectEntities);

export const getProducts = selector(selectAll);

export const getVisibleProducts = createSelector(getProducts, (products) => {
  return products.filter((p) => !p.Hidden);
});

export const getSelectedProductId = selector(
  (state) => state.selectedProductId
);

export const getProduct = createSelector(
  selectProductEntities,
  getSelectedProductId,
  (products, selectedProductId) => {
    if (selectedProductId) {
      return products[selectedProductId];
    }
    return null;
  }
);
