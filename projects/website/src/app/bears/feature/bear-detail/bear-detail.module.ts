import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BearDetailRoutingModule } from './bear-detail-routing.module';
import { BearDetailComponent } from './bear-detail.component';

@NgModule({
  declarations: [BearDetailComponent],
  imports: [CommonModule, BearDetailRoutingModule],
})
export class BearDetailModule {}
