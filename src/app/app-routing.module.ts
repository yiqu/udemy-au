import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404/404.component';

const routes: Routes = [
  { path: "", redirectTo: "au", pathMatch: "full" },
  { path: 'au',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
    data: {
      pageTitle: 'Home'
    }
  },
  { path: 'fid',
    loadChildren: () => import('./fid/fid.module').then(m => m.FormsInDepthModule),
    data: {
      pageTitle: 'Forms In Depth'
    }
  },
  { path: '**', component: NotFoundComponent,
    data: {
      pageTitle: 'Not Found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
