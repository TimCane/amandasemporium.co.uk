import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BearTileComponent } from './bear-tile.component';

@NgModule({
  declarations: [BearTileComponent],
  exports: [BearTileComponent],
  imports: [CommonModule, RouterModule],
})
export class BearTileModule {}
