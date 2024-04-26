import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaestroRoutingModule } from './maestro-routing.module';
import { MaestroComponent } from './maestro.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [
    MaestroComponent
  ],
  imports: [
    CommonModule,
    MaestroRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzAvatarModule,
    NzPageHeaderModule,
    NzFormModule,
  ]
})
export class MaestroModule { }
