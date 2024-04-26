import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia.component';

const routes: Routes = [
  {
    path: '',
    component: RecuperarContraseniaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecuperarContraseniaRoutingModule { }
