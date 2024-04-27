import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguridadComponent } from './seguridad.component';
import { RolesComponent } from './mantenimientos/roles/roles.component';

const routes: Routes = [
  {
    path: '',
    component: SeguridadComponent,
    children: [

      {
        path: 'mantenimientos',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'roles',
          },
          {
            path: 'roles',
            component: RolesComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {}
