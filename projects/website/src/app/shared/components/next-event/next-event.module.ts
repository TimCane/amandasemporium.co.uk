import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NextEventComponent } from './next-event.component';

@NgModule({
  declarations: [NextEventComponent],
  imports: [CommonModule, RouterModule],
  exports: [NextEventComponent],
})
export class NextEventModule {}
