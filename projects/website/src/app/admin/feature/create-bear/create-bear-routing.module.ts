import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBearComponent } from './create-bear.component';

const routes: Routes = [{ path: '', component: CreateBearComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBearRoutingModule { }
