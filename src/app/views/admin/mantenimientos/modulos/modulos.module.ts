import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { ModulosComponent } from './modulos.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';
import { ModalModuloComponent } from './modal-modulo/modal-modulo.component';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [
    ModulosComponent,
    ModalModuloComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    NgZorroAntdModule,
    NzModalModule
  ]
})
export class ModulosModule { }
