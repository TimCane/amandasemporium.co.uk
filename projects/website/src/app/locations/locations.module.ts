import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { LocationsEffects } from './state/locations.effect';
import { locationsReducer } from './state/locations.reducer';

@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    StoreModule.forFeature('locationsFeature', locationsReducer),
    EffectsModule.forFeature([LocationsEffects]),
  ],
})
export class LocationsModule {}
