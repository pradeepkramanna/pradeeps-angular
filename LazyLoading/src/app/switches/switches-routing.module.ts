import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchesListComponent } from '../switches/switches-list/switches-list.component';

const routes: Routes = [
  { path: '',
    component: SwitchesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchesRoutingModule { }
