import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GearesRoutingModule } from './geares-routing.module';
import { GearListComponent } from './gear-list/gear-list.component';

@NgModule({
  declarations: [GearListComponent],
  imports: [
    CommonModule,
    GearesRoutingModule
  ]
})
export class GearesModule { }
