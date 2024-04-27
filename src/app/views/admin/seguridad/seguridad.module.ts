import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { SeguridadComponent } from './seguridad.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';
import { RolesComponent } from './mantenimientos/roles/roles.component';
import { ModalRolesComponent } from './mantenimientos/roles/modal-roles/modal-roles.component';


@NgModule({
  declarations: [
    SeguridadComponent,
    RolesComponent,
    ModalRolesComponent,
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    NgZorroAntdModule
  ]
})
export class SeguridadModule { }
