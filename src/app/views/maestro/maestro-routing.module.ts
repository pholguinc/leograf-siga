import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaestroComponent } from './maestro.component';

const routes: Routes = [
  {
    path:'',
    component:MaestroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaestroRoutingModule { }
