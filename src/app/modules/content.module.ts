import { ContentRoutingModule } from './content-routing.module'
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContentComponent } from '../layout/content/content.component'
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    ContentComponent,
  ],
  imports: [
    MaterialModule,
    ContentRoutingModule,
    // StoreModule.forRoot({}, {}),
    // EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: []
})
export class ContentModule { }
