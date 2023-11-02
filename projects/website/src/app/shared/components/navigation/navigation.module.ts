import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EventsEffects } from '../../../events/state/events.effect';
import { eventsReducer } from '../../../events/state/events.reducer';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('eventsFeature', eventsReducer),
    EffectsModule.forFeature([EventsEffects]),
  ],
})
export class NavigationModule {}
