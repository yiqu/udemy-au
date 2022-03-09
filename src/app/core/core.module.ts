import { InjectionToken, NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared/shared.module';
import { ComponentComponent } from './components/comp.component';
import { CoreRoutingModule } from './core-routing.module';

import { CoreComponent } from './core.component';
import { CssEncapChildComponent } from './css-encap/child/child.component';
import { CssEncapComponent } from './css-encap/css.component';
import { DetectionChildComponent } from './detection/child/child.component';
import { DetectionComponent } from './detection/detection.component';
import { DirectivesDisplayComponent } from './directives/directives.component';
import { HighLightDirective } from './directives/highlight/highlight.dir';
import { UnlessDirective } from './directives/ngunless/unless.dir';
import { ADDRESS2_CONFIG_TOKEN, ADDRESS_CONFIG_TOKEN, USER_CONFIG_TOKEN } from './injection-tokens';
import { NgIfComponent } from './ngif/ngif.component';
import { NgStyleComponent } from './ngstyle/ngstyle.component';
import { NgSwitchComponent } from './ngswitch/ngswitch.component';
import { ProjectionCompAComponent } from './projection/compA/user.component';
import { ProjectionComponent } from './projection/projection.component';
import { ValueDisplayComponent } from './projection/value-display/display.component';
import { ServicesAnotherComponent } from './services/another/another.component';
import { ServiceChildComponent } from './services/child/child.component';
import { Name2Service } from './services/child/name.service-2';
import { Child2Component } from './services/child2/child2.component';
import { Child3Component } from './services/child3/child3.component';
import { TestingHostDirective } from './services/dir1.directive';
import { ServicesSelfComponent } from './services/self/self.component';
import { ServicesComponent } from './services/services.component';
import { SkipSelfComponent } from './services/skip-self/skip-self.component';
import { UrlService } from './services/url.service';
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
    Child2Component,
    ServicesAnotherComponent,
    ServicesSelfComponent,
    SkipSelfComponent,
    TestingHostDirective,
    Child3Component,
    DetectionComponent,
    DetectionChildComponent
  ],
  providers: [
    Name2Service,
    {
      provide: USER_CONFIG_TOKEN,
      useFactory: () => {
        return {
          name: 'Not Kevin',
          age: 99
        }
      }
    },
    {
      provide: ADDRESS_CONFIG_TOKEN,
      useFactory: getDefaultAddress
    },
    {
      provide: ADDRESS2_CONFIG_TOKEN,
      useValue: {
        blah: 'BLAH'
      }
    },

    UrlService,
    TestingHostDirective
  ],
})
export class CoreModule { }


function getDefaultAddress() {
  console.log("default address function")
  return {
    street: '1234 Friendly',
    state: 'MD',
    time: new Date().getTime()
  }
}
