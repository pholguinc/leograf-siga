import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { ModulosComponent } from './modulos.component';
import { ModalModuloComponent } from './modal-modulo/modal-modulo.component';


@NgModule({
  declarations: [
    ModulosComponent,
    ModalModuloComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule
  ]
})
export class ModulosModule { }
