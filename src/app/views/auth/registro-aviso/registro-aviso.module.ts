import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroAvisoRoutingModule } from './registro-aviso-routing.module';
import { RegistroAvisoComponent } from './registro-aviso.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';


@NgModule({
  declarations: [
    RegistroAvisoComponent
  ],
  imports: [
    CommonModule,
    RegistroAvisoRoutingModule,
    NgZorroAntdModule
  ]
})
export class RegistroAvisoModule { }
