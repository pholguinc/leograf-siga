import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguridadComponent } from './seguridad.component';
import { RolesComponent } from './mantenimientos/roles/roles.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { ModulosComponent } from './mantenimientos/modulos/modulos.component';
import { SedesComponent } from './mantenimientos/sedes/sedes.component';
import { MenuComponent } from './mantenimientos/menu/menu.component';
import { SubmenuComponent } from './mantenimientos/submenu/submenu.component';
import { AsignacionRolesComponent } from './mantenimientos/asignacion-roles/asignacion-roles.component';
import { AsignarPermisosComponent } from './mantenimientos/asignacion-roles/asignar-permisos/asignar-permisos.component';

const routes: Routes = [
  {
    path: '',
    component: SeguridadComponent,
  },
  {
    path: 'mantenimientos',
    children: [
      {
        path: 'roles',
        component: RolesComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
      },
      {
        path: 'modulos',
        component: ModulosComponent,
      },
      {
        path: 'sedes',
        component: SedesComponent,
      },
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'submenu',
        component: SubmenuComponent,
      },
      {
        path: 'asignar-roles',
        component: AsignacionRolesComponent,
      },
      {
        path: 'asignar-permisos',
        component: AsignarPermisosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {}
