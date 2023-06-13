import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { photosReducer } from './state/photos.reducer';
import { PhotosEffects } from './state/photos.effect';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    StoreModule.forFeature('photosFeature', photosReducer),
    EffectsModule.forFeature([PhotosEffects]),
  ],
})
export class PhotosModule {}
