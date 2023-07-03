import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BearTileModule } from '../../components/bear-tile/bear-tile.module';
import { BearsListRoutingModule } from './bears-list-routing.module';
import { BearsListComponent } from './bears-list.component';

import { AToZPaginationModule } from '../../../shared/components/a-to-z-pagination/a-to-z-pagination.module';

@NgModule({
  declarations: [BearsListComponent],
  imports: [
    CommonModule,
    BearsListRoutingModule,
    BearTileModule,
    AToZPaginationModule,
  ],
})
export class BearsListModule {}
