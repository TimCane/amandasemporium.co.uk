import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { CreateLocationRoutingModule } from './create-location-routing.module';
import { CreateLocationComponent } from './create-location.component';

@NgModule({
  declarations: [CreateLocationComponent],
  imports: [
    CommonModule,
    CreateLocationRoutingModule,
    FormsModule,
    GoogleMapsModule,
    ReactiveFormsModule,
  ],
  providers: [GoogleMap],
})
export class CreateLocationModule {}
