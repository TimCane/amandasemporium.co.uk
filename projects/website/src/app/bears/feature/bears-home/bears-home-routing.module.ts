import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BearsHomeComponent } from './bears-home.component';

const routes: Routes = [{ path: '', component: BearsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BearsHomeRoutingModule { }
