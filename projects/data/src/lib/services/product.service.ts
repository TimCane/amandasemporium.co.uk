import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../arrays/products.array';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = Products;
  constructor() {}

  getProducts(): Observable<IProduct[]> {
    return of(Object.values(this.products));
  }

  getProductById(id: string): Observable<IProduct | null> {
    var product = this.products.find((b) => b.Id == id);

    if (product) {
      return of(product);
    }

    return of(null);
  }
}
