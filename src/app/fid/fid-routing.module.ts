import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsInDepthComponent } from './fid.component';
import { FidReactiveComponent } from './reactive/reactive.component';

export const routes: Routes = [
  { path: "", component: FormsInDepthComponent,
    children: [
      { path: '', redirectTo: 'reactive', pathMatch: 'full' },
      { path: 'reactive', component:  FidReactiveComponent,
        data: {
          pageTitle: 'Reactive Forms'
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
export class FideRoutingModule {}
