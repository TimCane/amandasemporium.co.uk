import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReverseModule } from '../../../shared/pipes/reverse/reverse.module';
import { CreateBearRoutingModule } from './create-bear-routing.module';
import { CreateBearComponent } from './create-bear.component';

@NgModule({
  declarations: [CreateBearComponent],
  imports: [
    CommonModule,
    CreateBearRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReverseModule,
  ],
})
export class CreateBearModule {}
