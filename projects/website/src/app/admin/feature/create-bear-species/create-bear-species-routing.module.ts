import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBearSpeciesComponent } from './create-bear-species.component';

const routes: Routes = [{ path: '', component: CreateBearSpeciesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBearSpeciesRoutingModule { }
