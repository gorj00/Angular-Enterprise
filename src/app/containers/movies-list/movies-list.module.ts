import { NgModule } from '@angular/core';
import { MaterialModule } from '../../modules/material.module'
import { MoviesListRoutingModule } from './movies-list-routing.module'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ListComponent } from './/list/list.component';

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    MoviesListRoutingModule,
    MaterialModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: []
})
export class MoviesListModule { }
