import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablasMaestrasRoutingModule } from './tablas-maestras-routing.module';
import { TablasMaestrasComponent } from './tablas-maestras.component';
import { ArticulosComponent } from './archivos-maestros/articulos/articulos.component';
import { ClientesProveedoresComponent } from './archivos-maestros/clientes-proveedores/clientes-proveedores.component';
import { UnidadMedidasComponent } from './archivos-maestros/unidad-medidas/unidad-medidas.component';
import { MaquinasComponent } from './archivos-maestros/maquinas/maquinas.component';


@NgModule({
  declarations: [
    TablasMaestrasComponent,
    ArticulosComponent,
    ClientesProveedoresComponent,
    UnidadMedidasComponent,
    MaquinasComponent
  ],
  imports: [
    CommonModule,
    TablasMaestrasRoutingModule
  ]
})
export class TablasMaestrasModule { }
