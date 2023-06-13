import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ContactFormComponent } from './contact-form.component';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactFormRoutingModule,
  ],
})
export class ContactFormModule {}
