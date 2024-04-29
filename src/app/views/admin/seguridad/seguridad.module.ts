import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { SeguridadComponent } from './seguridad.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';
import { RolesComponent } from './mantenimientos/roles/roles.component';
import { ModalRolesComponent } from './mantenimientos/roles/modal-roles/modal-roles.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { ModulosComponent } from './mantenimientos/modulos/modulos.component';
import { ModalModuloComponent } from './mantenimientos/modulos/modal-modulo/modal-modulo.component';
import { SedesComponent } from './mantenimientos/sedes/sedes.component';
import { ModalSedesComponent } from './mantenimientos/sedes/modal-sedes/modal-sedes.component';
import { SubmenuComponent } from './mantenimientos/submenu/submenu.component';
import { ModalSubmenuComponent } from './mantenimientos/submenu/modal-submenu/modal-submenu.component';
import { AsignacionRolesComponent } from './mantenimientos/asignacion-roles/asignacion-roles.component';
import { MenuComponent } from './mantenimientos/menu/menu.component';
import { ModalMenuComponent } from './mantenimientos/menu/modal-menu/modal-menu.component';
import { ModalUsuariosComponent } from './mantenimientos/usuarios/modal-usuarios/modal-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalAsignarPermisosComponent } from './mantenimientos/usuarios/modal-asignar-permisos/modal-asignar-permisos.component';


@NgModule({
  declarations: [
    SeguridadComponent,
    RolesComponent,
    UsuariosComponent,
    ModalRolesComponent,
    ModulosComponent,
    ModalModuloComponent,
    SedesComponent,
    ModalSedesComponent,
    SubmenuComponent,
    ModalSubmenuComponent,
    AsignacionRolesComponent,
    MenuComponent,
    ModalMenuComponent,
    ModalUsuariosComponent,
    ModalAsignarPermisosComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
