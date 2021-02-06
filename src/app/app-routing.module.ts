import { Child2Component } from './child2/child2.component';
import { EagerModuleModule } from './eager-module/eager-module.module';
import { Child1Component } from './child1/child1.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Eagarchild1Component } from './eager-module/eagarchild1/eagarchild1.component'
const routes: Routes = [
  {
    path: 'lazychild',
    loadChildren: () => import('./lazy1/lazy1.module').then(m => m.Lazy1Module)
  },
  {
    path: 'lazychild2',
    loadChildren: () => import('./lazy2/lazy2.module').then(m => m.Lazy2Module)
  },
  {
    path: 'child1',
    component: Child1Component
  },
  {
    path: 'eagarchild',
    component: Eagarchild1Component
  },
  {
    path: '',
    component: Child2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
