import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BearTileModule } from '../../components/bear-tile/bear-tile.module';
import { BearsListRoutingModule } from './bears-list-routing.module';
import { BearsListComponent } from './bears-list.component';

import { AToZPaginationModule } from '../../../shared/components/a-to-z-pagination/a-to-z-pagination.module';
import { PaginationModule } from '../../../shared/components/pagination/pagination.module';

@NgModule({
  declarations: [BearsListComponent],
  imports: [
    CommonModule,
    BearsListRoutingModule,
    BearTileModule,
    PaginationModule,
    AToZPaginationModule,
  ],
})
export class BearsListModule {}
