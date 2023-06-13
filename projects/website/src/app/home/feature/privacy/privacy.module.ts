import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OutgoingLinkModule } from '../../../shared/components/outgoing-link/outgoing-link.module';
import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';

@NgModule({
  declarations: [PrivacyComponent],
  imports: [CommonModule, PrivacyRoutingModule, OutgoingLinkModule],
})
export class PrivacyModule {}
