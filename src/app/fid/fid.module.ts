import { NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared/shared.module';
import { FideRoutingModule } from './fid-routing.module';
import { FormsInDepthComponent } from './fid.component';


@NgModule({
  imports: [
    SharedBudleModule,
    FideRoutingModule
  ],

  exports: [],

  declarations: [
    FormsInDepthComponent
  ],

  providers: [],
})
export class FormsInDepthModule { }
