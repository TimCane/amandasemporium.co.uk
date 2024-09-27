import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'create-bear',
        loadChildren: () =>
          import('./feature/create-bear/create-bear.module').then(
            (m) => m.CreateBearModule
          ),
        data: {
          title: 'Create Bear',
        },
      },
      {
        path: 'create-location',
        loadChildren: () =>
          import('./feature/create-location/create-location.module').then(
            (m) => m.CreateLocationModule
          ),
        data: {
          title: 'Create Location',
        },
      },
      {
        path: 'create-bear-brand',
        loadChildren: () =>
          import('./feature/create-bear-brand/create-bear-brand.module').then(
            (m) => m.CreateBearBrandModule
          ),
        data: {
          title: 'Create Bear Brand',
        },
      },
      {
        path: 'create-bear-species',
        loadChildren: () =>
          import(
            './feature/create-bear-species/create-bear-species.module'
          ).then((m) => m.CreateBearSpeciesModule),
        data: {
          title: 'Create Bear Species',
        },
      },
      {
        path: 'create-event',
        loadChildren: () =>
          import('./feature/create-event/create-event.module').then(
            (m) => m.CreateEventModule
          ),
        data: {
          title: 'Create Event',
        },
      },
      {
        path: 'create-product',
        loadChildren: () =>
          import('./feature/create-product/create-product.module').then(
            (m) => m.CreateProductModule
          ),
        data: {
          title: 'Create Product',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
