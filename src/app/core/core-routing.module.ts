import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { HomeComponent } from './home/home.component';
import { ComponentComponent } from './components/comp.component';

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
