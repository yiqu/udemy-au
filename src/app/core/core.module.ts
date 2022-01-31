import { NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CoreRoutingModule,
    SharedBudleModule
  ],
  exports: [],
  declarations: [CoreComponent],
  providers: [],
})
export class CoreModule { }
