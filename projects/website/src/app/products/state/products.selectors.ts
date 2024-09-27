import { createFeatureSelector, createSelector } from '@ngrx/store';
import { compare } from '../../bears/state/bears.selectors';
import { ProductsState, productsAdapter } from './products.state';

export const productsFeature =
  createFeatureSelector<ProductsState>('productsFeature');
const selector = <T>(mapping: (state: ProductsState) => T) =>
  createSelector(productsFeature, mapping);

const { selectEntities, selectAll } = productsAdapter.getSelectors();

export const selectProductEntities = selector(selectEntities);

export const getProducts = selector(selectAll);

export const getVisibleProducts = createSelector(getProducts, (products) => {
  let visibleProducts = products.filter((p) => !p.Hidden);

  return [...visibleProducts].sort((a, b) => {
    return compare(a.Order, b.Order, 'asc');
  });
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
