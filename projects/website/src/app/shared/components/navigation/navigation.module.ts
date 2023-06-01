import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NextEventModule } from '../next-event/next-event.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [CommonModule, NextEventModule, RouterModule],
})
export class NavigationModule {}
