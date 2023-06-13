import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OutgoingLinkModule } from '../../../shared/components/outgoing-link/outgoing-link.module';
import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './friends.component';

@NgModule({
  declarations: [FriendsComponent],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    FontAwesomeModule,
    OutgoingLinkModule,
  ],
})
export class FriendsModule {}
