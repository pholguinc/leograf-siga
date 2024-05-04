import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';

import { TablasMaestrasRoutingModule } from './tablas-maestras-routing.module';
import { TablasMaestrasComponent } from './tablas-maestras.component';
import { ArticulosComponent } from './archivos-maestros/articulos/articulos.component';
import { ClientesProveedoresComponent } from './archivos-maestros/clientes-proveedores/clientes-proveedores.component';
import { UnidadMedidasComponent } from './archivos-maestros/unidad-medidas/unidad-medidas.component';
import { MaquinasComponent } from './archivos-maestros/maquinas/maquinas.component';
import { RouterModule, Routes } from '@angular/router';
import { DetallesArticulosComponent } from './archivos-maestros/articulos/detalles-articulos/detalles-articulos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [
    TablasMaestrasComponent,
    ArticulosComponent,
    ClientesProveedoresComponent,
    UnidadMedidasComponent,
    MaquinasComponent,
    DetallesArticulosComponent,
  ],
  imports: [
    CommonModule,
    TablasMaestrasRoutingModule,
    NgZorroAntdModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,

  ]
})
export class TablasMaestrasModule { }
