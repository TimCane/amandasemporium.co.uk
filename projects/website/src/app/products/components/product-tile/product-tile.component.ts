import { Component, Input } from '@angular/core';
import { IProduct } from 'data';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss'],
})
export class ProductTileComponent {
  @Input() product: IProduct | null;

  constructor() {
    this.product = null;
  }
}
