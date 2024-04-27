import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguridadComponent } from './seguridad.component';
import { RolesComponent } from './mantenimientos/roles/roles.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { ModulosComponent } from './mantenimientos/modulos/modulos.component';

const routes: Routes = [
  {
    path: '',
    component: SeguridadComponent,
  },
  {
    path: 'roles',
    component: RolesComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'modulos',
    component: ModulosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {}
