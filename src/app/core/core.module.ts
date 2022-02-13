import { NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared/shared.module';
import { ComponentComponent } from './components/comp.component';
import { CoreRoutingModule } from './core-routing.module';

import { CoreComponent } from './core.component';
import { NgIfComponent } from './ngif/ngif.component';
import { NgStyleComponent } from './ngstyle/ngstyle.component';
import { NgSwitchComponent } from './ngswitch/ngswitch.component';

@NgModule({
  imports: [
    CoreRoutingModule,
    SharedBudleModule
  ],
  exports: [],
  declarations: [
    CoreComponent,
    ComponentComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgStyleComponent
  ],
  providers: [],
})
export class CoreModule { }
