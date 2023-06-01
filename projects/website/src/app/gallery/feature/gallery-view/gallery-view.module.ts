import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryViewRoutingModule } from './gallery-view-routing.module';
import { GalleryViewComponent } from './gallery-view.component';


@NgModule({
  declarations: [
    GalleryViewComponent
  ],
  imports: [
    CommonModule,
    GalleryViewRoutingModule
  ]
})
export class GalleryViewModule { }
