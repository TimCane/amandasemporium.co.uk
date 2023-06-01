import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BearsMapRoutingModule } from './bears-map-routing.module';
import { BearsMapComponent } from './bears-map.component';


@NgModule({
  declarations: [
    BearsMapComponent
  ],
  imports: [
    CommonModule,
    BearsMapRoutingModule
  ]
})
export class BearsMapModule { }
