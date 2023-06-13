import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { IProduct } from 'data';

export interface ProductsState extends EntityState<IProduct> {
  selectedProductId: string | null;

  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success'; //TODO: Enum
}

export function selectProductId(product: IProduct): string {
  return product.Id;
}

export function sortByName(a: IProduct, b: IProduct): number {
  return a.Name.localeCompare(b.Name);
}

export const productsAdapter = createEntityAdapter<IProduct>({
  selectId: selectProductId,
  sortComparer: sortByName,
});

export const initialState: ProductsState = productsAdapter.getInitialState({
  selectedProductId: null,
  error: null,
  status: 'pending',
});
