import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthLayoutComponent } from './layout/auth/login/login-auth-layout.component';
import { AdminComponent } from './layout/admin/admin.component';
import { MaestroComponent } from './views/maestro/maestro.component';
import { RecuperarContraseniaAvisoModule } from './views/auth/recuperar-contrasenia-aviso/recuperar-contrasenia-aviso.module';
import { RegistroLayoutComponent } from './layout/auth/registro/registro-layout-component.component';
import { HomeComponent } from './views/admin/home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/maestro' },
  {
    path: 'auth',
    component: LoginAuthLayoutComponent,
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
      {
        path: 'registro/aviso',
        loadChildren: () =>
              import('./views/auth/registro-aviso/registro-aviso.module').then(
                (m) => m.RegistroAvisoModule
              ),
      },
    ],
  },
  {
    path: 'auth/registro',
    component: RegistroLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/auth/registro/registro.module').then(
            (m) => m.RegistroModule
          ),
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
      {
        path: 'mantenimientos',
        children: [
          {
            path: 'roles',
            loadChildren: () =>
              import('./views/admin/mantenimientos/roles/roles.module').then(
                (m) => m.RolesModule
              ),
          },
        ],
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
