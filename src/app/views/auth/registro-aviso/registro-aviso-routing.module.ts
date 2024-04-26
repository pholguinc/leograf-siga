import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAvisoComponent } from './registro-aviso.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroAvisoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroAvisoRoutingModule { }
