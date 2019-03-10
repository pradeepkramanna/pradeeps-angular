import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchesRoutingModule } from './switches-routing.module';
import { SwitchesListComponent } from './switches-list/switches-list.component';

@NgModule({
  declarations: [SwitchesListComponent],
  imports: [
    CommonModule,
    SwitchesRoutingModule
  ]
})
export class SwitchesModule { }
