import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBearBrandComponent } from './create-bear-brand.component';

const routes: Routes = [{ path: '', component: CreateBearBrandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBearBrandRoutingModule { }
