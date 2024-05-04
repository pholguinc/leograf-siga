import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablasMaestrasComponent } from './tablas-maestras.component';
import { ArticulosComponent } from './archivos-maestros/articulos/articulos.component';
import { ClientesProveedoresComponent } from './archivos-maestros/clientes-proveedores/clientes-proveedores.component';
import { MaquinasComponent } from './archivos-maestros/maquinas/maquinas.component';
import { UnidadMedidasComponent } from './archivos-maestros/unidad-medidas/unidad-medidas.component';
import { DetallesArticulosComponent } from './archivos-maestros/articulos/detalles-articulos/detalles-articulos.component';

const routes: Routes = [

  {
    path:'',
    component: TablasMaestrasComponent
  },
  {
    path: 'archivos-maestros',
    children: [
      {
        path: 'articulos',
        component: ArticulosComponent,
      },
      {
        path: 'articulos/detalles-articulos',
        component: DetallesArticulosComponent,
      },
      {
        path: 'clientes-proveedores',
        component: ClientesProveedoresComponent,
      },
      {
        path: 'maquinas',
        component: MaquinasComponent,
      },
      {
        path: 'unidad-medidas',
        component: UnidadMedidasComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablasMaestrasRoutingModule { }
