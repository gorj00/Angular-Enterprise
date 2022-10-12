import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../layout/content/content.component';
const routes: Routes = [
  { path: '', component: ContentComponent, children: [
    {
      path: '',
      loadChildren: () => import('../containers/movies-list/movies-list.module').then(m => m.MoviesListModule),
  }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
