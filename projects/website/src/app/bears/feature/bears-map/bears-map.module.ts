import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { BearsMapRoutingModule } from './bears-map-routing.module';
import { BearsMapComponent } from './bears-map.component';

@NgModule({
  declarations: [BearsMapComponent],
  imports: [CommonModule, BearsMapRoutingModule, GoogleMapsModule],
  providers: [GoogleMap],
})
export class BearsMapModule {}
