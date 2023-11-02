import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BearsListComponent } from './bears-list.component';

const routes: Routes = [
  {
    path: 'rehomed',
    component: BearsListComponent,
    data: {
      title: 'Bears who have found their home',
      filter: 'rehomed',
    },
  },

  {
    path: 'all',
    component: BearsListComponent,
    data: {
      title: "All the bears I've cared for",
      filter: null,
    },
  },

  {
    path: 'rescued',
    component: BearsListComponent,
    data: {
      title: 'Bears looking for a home',
      filter: 'rescued',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BearsListRoutingModule {}
