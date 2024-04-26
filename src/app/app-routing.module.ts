import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { AdminComponent } from './layout/admin/admin.component';
import { MaestroComponent } from './views/maestro/maestro.component';
import { RecuperarContraseniaAvisoModule } from './views/auth/recuperar-contrasenia-aviso/recuperar-contrasenia-aviso.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/maestro' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./views/auth/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'recuperar-contrasenia',
        loadChildren: () =>
          import(
            './views/auth/recuperar-contrasenia/recuperar-contrasenia.module'
          ).then((m) => m.RecuperarContraseniaModule),
      },
      {
        path: 'recuperar-contrasenia-aviso',
        loadChildren: () =>
          import(
            './views/auth/recuperar-contrasenia-aviso/recuperar-contrasenia-aviso.module'
          ).then((m) => m.RecuperarContraseniaAvisoModule),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/admin/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: 'maestro',
    component: MaestroComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/maestro/maestro.module').then((m) => m.MaestroModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
