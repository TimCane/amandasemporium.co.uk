import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductTileModule } from '../../components/product-tile/product-tile.module';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductsListRoutingModule,
    ProductTileModule,
  ],
})
export class ProductsListModule {}
