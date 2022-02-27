import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { HomeComponent } from './home/home.component';
import { ComponentComponent } from './components/comp.component';
import { NgIfComponent } from './ngif/ngif.component';
import { NgSwitchComponent } from './ngswitch/ngswitch.component';
import { NgStyleComponent } from './ngstyle/ngstyle.component';
import { ViewChildComponent } from './viewchild/viewchild.component';
import { ProjectionComponent } from './projection/projection.component';
import { TemplateComponent } from './template/template.component';

export const routes: Routes = [
  { path: "", component: CoreComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component:  HomeComponent,
        data: {
          pageTitle: 'Overview'
        }
      },
      { path: 'component', component:  ComponentComponent,
        data: {
          pageTitle: 'Components'
        }
      },
      { path: 'ngif', component:  NgIfComponent,
        data: {
          pageTitle: 'Ng If'
        }
      },
      { path: 'ngswitch', component:  NgSwitchComponent,
        data: {
          pageTitle: 'Ng Switch'
        }
      },
      { path: 'ngstylengclass', component:  NgStyleComponent,
        data: {
          pageTitle: 'Ng Style'
        }
      },
      { path: 'viewchild', component:  ViewChildComponent,
        data: {
          pageTitle: 'View Child'
        }
      },
      { path: 'projection', component:  ProjectionComponent,
        data: {
          pageTitle: 'Projection'
        }
      },
      { path: 'template', component:  TemplateComponent,
        data: {
          pageTitle: 'Template'
        }
      },
    ],
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {}
