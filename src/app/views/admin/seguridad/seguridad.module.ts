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
import { MenusComponent } from './mantenimientos/menus/menus.component';
import { ModalMenusComponent } from './mantenimientos/menus/modal-menus/modal-menus.component';
import { SubmenuComponent } from './mantenimientos/submenu/submenu.component';
import { ModalSubmenuComponent } from './mantenimientos/submenu/modal-submenu/modal-submenu.component';
import { AsignacionRolesComponent } from './mantenimientos/asignacion-roles/asignacion-roles.component';


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
    MenusComponent,
    ModalMenusComponent,
    SubmenuComponent,
    ModalSubmenuComponent,
    AsignacionRolesComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    NgZorroAntdModule
  ]
})
export class SeguridadModule { }
