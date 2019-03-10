import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GearListComponent } from './gear-list/gear-list.component';

const routes: Routes = [
  {
    path: '',
    component: GearListComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GearesRoutingModule { }
