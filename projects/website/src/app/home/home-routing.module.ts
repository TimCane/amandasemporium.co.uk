import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./feature/homepage/homepage.module').then(
            (m) => m.HomepageModule
          ),
        data: { title: "Welcome to Amanda's Emporium" },
      },
      {
        path: 'friends',
        loadChildren: () =>
          import('./feature/friends/friends.module').then(
            (m) => m.FriendsModule
          ),
        data: { title: 'People I trade with' },
      },
      {
        path: 'privacy',
        loadChildren: () =>
          import('./feature/privacy/privacy.module').then(
            (m) => m.PrivacyModule
          ),
        data: { title: 'Privacy Policy' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
