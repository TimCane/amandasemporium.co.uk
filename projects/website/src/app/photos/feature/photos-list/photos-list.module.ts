import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosListRoutingModule } from './photos-list-routing.module';
import { PhotosListComponent } from './photos-list.component';

import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [PhotosListComponent],
  imports: [CommonModule, PhotosListRoutingModule, NgOptimizedImage],
})
export class PhotosListModule {}
