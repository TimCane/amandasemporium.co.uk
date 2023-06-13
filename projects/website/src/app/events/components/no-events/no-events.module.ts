import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoEventsComponent } from './no-events.component';

@NgModule({
  declarations: [NoEventsComponent],
  imports: [CommonModule, RouterModule],
})
export class NoEventsModule {}
