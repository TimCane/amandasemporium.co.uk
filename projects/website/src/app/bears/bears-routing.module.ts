import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BearsComponent } from './bears.component';

const routes: Routes = [
  {
    path: '',
    component: BearsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./feature/bears-list/bears-list.module').then(
            (m) => m.BearsListModule
          ),
        data: { title: 'Rescued Bears' },
      },
      {
        path: 'map',
        loadChildren: () =>
          import('./feature/bears-map/bears-map.module').then(
            (m) => m.BearsMapModule
          ),
        data: { title: 'A Bears Journey' },
      },
      {
        path: ':bearId',
        loadChildren: () =>
          import('./feature/bear-detail/bear-detail.module').then(
            (m) => m.BearDetailModule
          ),
        data: { title: 'Rescued Bears' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BearsRoutingModule {}
