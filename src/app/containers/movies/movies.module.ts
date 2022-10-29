import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module'
import { MoviesListRoutingModule } from './movies-routing.module'
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesSidebarComponent } from './movies-sidebar/movies-sidebar.component';

@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesSidebarComponent,
  ],
  imports: [
    CommonModule,
    MoviesListRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: []
})
export class MoviesListModule { }
