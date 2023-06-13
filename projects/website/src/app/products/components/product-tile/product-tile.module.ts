import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductTileComponent } from './product-tile.component';

@NgModule({
  declarations: [ProductTileComponent],
  imports: [CommonModule],
  exports: [ProductTileComponent],
})
export class ProductTileModule {}
