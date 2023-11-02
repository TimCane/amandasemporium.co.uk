import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BearsStoryComponent } from './bears-story.component';

const routes: Routes = [{ path: '', component: BearsStoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BearsStoryRoutingModule { }
