import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BearsListComponent } from './bears-list.component';

const routes: Routes = [{ path: '', component: BearsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BearsListRoutingModule {}
