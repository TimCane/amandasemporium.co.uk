import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./feature/photos-list/photos-list.module').then(
            (m) => m.PhotosListModule
          ),
        data: { title: 'Gallery' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
