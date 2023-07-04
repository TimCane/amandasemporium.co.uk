import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { MultilineStringToHtmlModule } from '../../../shared/pipes/multiline-string-to-html/multiline-string-to-html.module';
import { BearDetailRoutingModule } from './bear-detail-routing.module';
import { BearDetailComponent } from './bear-detail.component';

@NgModule({
  declarations: [BearDetailComponent],
  imports: [
    CommonModule,
    BearDetailRoutingModule,
    NgOptimizedImage,
    MultilineStringToHtmlModule,
  ],
})
export class BearDetailModule {}
