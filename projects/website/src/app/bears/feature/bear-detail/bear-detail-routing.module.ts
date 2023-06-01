import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BearDetailComponent } from './bear-detail.component';

const routes: Routes = [{ path: '', component: BearDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BearDetailRoutingModule {}
