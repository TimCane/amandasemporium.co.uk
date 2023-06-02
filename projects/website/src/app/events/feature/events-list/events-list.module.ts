import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventTileModule } from '../../components/event-tile/event-tile.module';
import { EventsListRoutingModule } from './events-list-routing.module';
import { EventsListComponent } from './events-list.component';

@NgModule({
  declarations: [EventsListComponent],
  imports: [CommonModule, EventsListRoutingModule, EventTileModule],
})
export class EventsListModule {}
