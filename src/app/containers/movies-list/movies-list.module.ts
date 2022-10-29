import { NgModule } from '@angular/core';
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
    MoviesListRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: []
})
export class MoviesListModule { }
