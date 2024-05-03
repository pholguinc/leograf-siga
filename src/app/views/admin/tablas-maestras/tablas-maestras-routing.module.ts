import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablasMaestrasComponent } from './tablas-maestras.component';

const routes: Routes = [

  {
    path:'',
    component: TablasMaestrasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablasMaestrasRoutingModule { }
