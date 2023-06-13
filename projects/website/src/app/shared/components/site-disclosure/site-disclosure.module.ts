import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteDisclosureComponent } from './site-disclosure.component';

@NgModule({
  declarations: [SiteDisclosureComponent],
  imports: [CommonModule, RouterModule],
  exports: [SiteDisclosureComponent],
})
export class SiteDisclosureModule {}
