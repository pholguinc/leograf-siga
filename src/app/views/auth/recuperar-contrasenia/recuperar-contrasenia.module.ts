import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarContraseniaRoutingModule } from './recuperar-contrasenia-routing.module';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';


@NgModule({
  declarations: [
    RecuperarContraseniaComponent
  ],
  imports: [
    CommonModule,
    RecuperarContraseniaRoutingModule,
    NgZorroAntdModule
  ]
})
export class RecuperarContraseniaModule { }
