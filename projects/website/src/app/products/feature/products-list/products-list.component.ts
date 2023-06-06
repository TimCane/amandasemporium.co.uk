import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { loadProducts } from '../../state/products.action';
import { getVisibleProducts } from '../../state/products.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public visibleProducts$ = this.store.select(getVisibleProducts);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
}
