import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventTileComponent } from './event-tile.component';

@NgModule({
  declarations: [EventTileComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [EventTileComponent],
})
export class EventTileModule {}
