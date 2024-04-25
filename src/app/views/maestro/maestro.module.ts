import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaestroRoutingModule } from './maestro-routing.module';
import { MaestroComponent } from './maestro.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    MaestroComponent
  ],
  imports: [
    CommonModule,
    MaestroRoutingModule,
    NzLayoutModule,
    NzIconModule,
  ]
})
export class MaestroModule { }
