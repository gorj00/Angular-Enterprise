import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module'
import { MoviesListRoutingModule } from './movies-list-routing.module'
import { ListComponent } from './/list/list.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    ListComponent,
    SidebarComponent,
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
