import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BearsRoutingModule } from './bears-routing.module';
import { BearsComponent } from './bears.component';
import { BearTileModule } from './components/bear-tile/bear-tile.module';
import { BearsEffects } from './state/bears.effect';
import { bearsReducer } from './state/bears.reducer';

@NgModule({
  declarations: [BearsComponent],
  imports: [
    CommonModule,
    BearsRoutingModule,
    BearTileModule,
    StoreModule.forFeature('bearsFeature', bearsReducer),
    EffectsModule.forFeature([BearsEffects]),
  ],
})
export class BearsModule {}
