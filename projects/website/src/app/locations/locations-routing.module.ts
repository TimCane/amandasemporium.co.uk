import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':locationId',
        loadChildren: () =>
          import('./feature/location-detail/location-detail.module').then(
            (m) => m.LocationDetailModule
          ),
        data: { title: '' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
1;
