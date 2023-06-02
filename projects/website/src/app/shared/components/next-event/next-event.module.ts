import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NextEventComponent } from './next-event.component';

@NgModule({
  declarations: [NextEventComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [NextEventComponent],
})
export class NextEventModule {}
