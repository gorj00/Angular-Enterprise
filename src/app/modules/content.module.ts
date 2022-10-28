import { ContentRoutingModule } from './content-routing.module'
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContentComponent } from '../layout/content/content.component'
import { MaterialModule } from './material.module';
// import { LayoutComponent } from '../layout/layout.component';
// import { HeaderComponent } from '../layout/header/header.component';
// import { FooterComponent } from '../layout/footer/footer.component';

@NgModule({
  declarations: [
    ContentComponent,
        // LayoutComponent,
    // HeaderComponent,
    // FooterComponent,
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
