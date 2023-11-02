import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateBearSpeciesRoutingModule } from './create-bear-species-routing.module';
import { CreateBearSpeciesComponent } from './create-bear-species.component';

@NgModule({
  declarations: [CreateBearSpeciesComponent],
  imports: [
    CommonModule,
    CreateBearSpeciesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CreateBearSpeciesModule {}
