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
          import('./feature/bears-home/bears-home.module').then(
            (m) => m.BearsHomeModule
          ),
        data: { title: 'Bears' },
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
        path: 'profile/:bearId',
        loadChildren: () =>
          import('./feature/bear-detail/bear-detail.module').then(
            (m) => m.BearDetailModule
          ),
        data: { title: '' },
      },
      {
        path: 'my-story',
        loadChildren: () =>
          import('./feature/bears-story/bears-story.module').then(
            (m) => m.BearsStoryModule
          ),
        data: { title: 'My Bear Story' },
      },
      {
        path: '',
        loadChildren: () =>
          import('./feature/bears-list/bears-list.module').then(
            (m) => m.BearsListModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BearsRoutingModule {}
