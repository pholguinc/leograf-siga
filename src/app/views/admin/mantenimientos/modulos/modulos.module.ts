import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { ModulosComponent } from './modulos.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';


@NgModule({
  declarations: [
    ModulosComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    NgZorroAntdModule
  ]
})
export class ModulosModule { }
