import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OutgoingLinkComponent } from './outgoing-link.component';

@NgModule({
  declarations: [OutgoingLinkComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [OutgoingLinkComponent],
})
export class OutgoingLinkModule {}
