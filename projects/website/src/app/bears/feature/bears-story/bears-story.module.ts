import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { BearsStoryRoutingModule } from './bears-story-routing.module';
import { BearsStoryComponent } from './bears-story.component';

@NgModule({
  declarations: [BearsStoryComponent],
  imports: [CommonModule, BearsStoryRoutingModule, NgOptimizedImage],
})
export class BearsStoryModule {}
