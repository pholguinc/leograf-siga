import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';
import { ModalRolesComponent } from './modal-roles/modal-roles.component';


@NgModule({
  declarations: [
    RolesComponent,
    ModalRolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    NgZorroAntdModule
  ]
})
export class RolesModule { }
