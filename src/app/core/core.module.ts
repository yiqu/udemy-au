import { NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared/shared.module';
import { ComponentComponent } from './components/comp.component';
import { CoreRoutingModule } from './core-routing.module';

import { CoreComponent } from './core.component';
import { CssEncapChildComponent } from './css-encap/child/child.component';
import { CssEncapComponent } from './css-encap/css.component';
import { DirectivesDisplayComponent } from './directives/directives.component';
import { HighLightDirective } from './directives/highlight/highlight.dir';
import { UnlessDirective } from './directives/ngunless/unless.dir';
import { NgIfComponent } from './ngif/ngif.component';
import { NgStyleComponent } from './ngstyle/ngstyle.component';
import { NgSwitchComponent } from './ngswitch/ngswitch.component';
import { ProjectionCompAComponent } from './projection/compA/user.component';
import { ProjectionComponent } from './projection/projection.component';
import { ValueDisplayComponent } from './projection/value-display/display.component';
import { ServiceChildComponent } from './services/child/child.component';
import { Name2Service } from './services/child/name.service-2';
import { Child2Component } from './services/child2/child2.component';
import { ServicesComponent } from './services/services.component';
import { TemplateDescComponent } from './template/profile-desc/desc.component';
import { TemplatePicComponent } from './template/profile-pic/pic.component';
import { TemplateComponent } from './template/template.component';
import { TemplateUserComponent } from './template/user/user.component';
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
    ValueDisplayComponent,
    TemplateComponent,
    TemplatePicComponent,
    TemplateDescComponent,
    TemplateUserComponent,
    DirectivesDisplayComponent,
    HighLightDirective,
    UnlessDirective,
    CssEncapComponent,
    CssEncapChildComponent,
    ServicesComponent,
    ServiceChildComponent,
    Child2Component

  ],
  providers: [
    Name2Service
  ],
})
export class CoreModule { }
