import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarContraseniaAvisoRoutingModule } from './recuperar-contrasenia-aviso-routing.module';
import { RecuperarContraseniaAvisoComponent } from './recuperar-contrasenia-aviso.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';


@NgModule({
  declarations: [
    RecuperarContraseniaAvisoComponent
  ],
  imports: [
    CommonModule,
    RecuperarContraseniaAvisoRoutingModule,
    NgZorroAntdModule
  ]
})
export class RecuperarContraseniaAvisoModule { }
