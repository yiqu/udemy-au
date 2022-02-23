import { NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared/shared.module';
import { ComponentComponent } from './components/comp.component';
import { CoreRoutingModule } from './core-routing.module';

import { CoreComponent } from './core.component';
import { NgIfComponent } from './ngif/ngif.component';
import { NgStyleComponent } from './ngstyle/ngstyle.component';
import { NgSwitchComponent } from './ngswitch/ngswitch.component';
import { ProjectionCompAComponent } from './projection/compA/user.component';
import { ProjectionComponent } from './projection/projection.component';
import { ValueDisplayComponent } from './projection/value-display/display.component';
import { ChildOneComponent } from './viewchild/child/child1.component';
import { ChildTwoComponent } from './viewchild/child2/child2.component';
import { ViewChildComponent } from './viewchild/viewchild.component';

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
    NgStyleComponent,
    ViewChildComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ProjectionComponent,
    ProjectionCompAComponent,
    ValueDisplayComponent
  ],
  providers: [],
})
export class CoreModule { }
