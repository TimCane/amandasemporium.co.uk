import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventsEffects } from './state/events.effect';
import { eventsReducer } from './state/events.reducer';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    StoreModule.forFeature('eventsFeature', eventsReducer),
    EffectsModule.forFeature([EventsEffects]),
  ],
})
export class EventsModule {}
