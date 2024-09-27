import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { BearsHomeRoutingModule } from './bears-home-routing.module';
import { BearsHomeComponent } from './bears-home.component';

@NgModule({
  declarations: [BearsHomeComponent],
  imports: [CommonModule, BearsHomeRoutingModule, NgOptimizedImage],
})
export class BearsHomeModule {}
