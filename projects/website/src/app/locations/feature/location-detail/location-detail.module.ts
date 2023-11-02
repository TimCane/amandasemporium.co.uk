import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LocationDetailRoutingModule } from './location-detail-routing.module';
import { LocationDetailComponent } from './location-detail.component';

@NgModule({
  declarations: [LocationDetailComponent],
  imports: [CommonModule, LocationDetailRoutingModule],
  exports: [LocationDetailComponent],
})
export class LocationDetailModule {}
