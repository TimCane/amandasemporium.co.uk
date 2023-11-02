import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateBearBrandRoutingModule } from './create-bear-brand-routing.module';
import { CreateBearBrandComponent } from './create-bear-brand.component';

@NgModule({
  declarations: [CreateBearBrandComponent],
  imports: [
    CommonModule,
    CreateBearBrandRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CreateBearBrandModule {}
