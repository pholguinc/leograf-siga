import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaestroRoutingModule } from './maestro-routing.module';
import { MaestroComponent } from './maestro.component';


@NgModule({
  declarations: [
    MaestroComponent
  ],
  imports: [
    CommonModule,
    MaestroRoutingModule
  ]
})
export class MaestroModule { }
