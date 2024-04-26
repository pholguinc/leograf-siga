import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarContraseniaAvisoComponent } from './recuperar-contrasenia-aviso.component';

const routes: Routes = [
  {
    path: '',
    component: RecuperarContraseniaAvisoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecuperarContraseniaAvisoRoutingModule { }
