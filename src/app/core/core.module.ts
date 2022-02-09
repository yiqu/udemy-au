import { NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared/shared.module';
import { ComponentComponent } from './components/comp.component';
import { CoreRoutingModule } from './core-routing.module';

import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CoreRoutingModule,
    SharedBudleModule
  ],
  exports: [],
  declarations: [
    CoreComponent,
    ComponentComponent
  ],
  providers: [],
})
export class CoreModule { }
