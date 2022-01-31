import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404/404.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
    data: {
      pageTitle: 'Home'
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
