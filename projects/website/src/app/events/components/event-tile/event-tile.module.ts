import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OutgoingLinkModule } from '../../../shared/components/outgoing-link/outgoing-link.module';
import { EventTileComponent } from './event-tile.component';

@NgModule({
  declarations: [EventTileComponent],
  imports: [CommonModule, FontAwesomeModule, OutgoingLinkModule],
  exports: [EventTileComponent],
})
export class EventTileModule {}
