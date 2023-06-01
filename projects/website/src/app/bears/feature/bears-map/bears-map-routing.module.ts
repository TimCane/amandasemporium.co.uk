import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BearsMapComponent } from './bears-map.component';

const routes: Routes = [{ path: '', component: BearsMapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BearsMapRoutingModule { }
