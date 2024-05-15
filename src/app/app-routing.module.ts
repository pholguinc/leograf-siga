import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthLayoutComponent } from './layout/auth/login/login-auth-layout.component';
import { AdminComponent } from './layout/admin/admin.component';
import { RegistroLayoutComponent } from './layout/auth/registro/registro-layout-component.component';
import { HomeLayoutComponent } from './layout/home/home-layout.component';
import { HomeComponent } from './views/admin/home/home.component';
import { RecuperarContraseniaLayoutComponent } from './layout/auth/recuperar-contrasenia/recuperar-contrasenia-layout.component';


const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },



  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/admin/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },

  {
    path: 'home',
    component: LoginAuthLayoutComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('./views/admin/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },

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
    path: 'auth/recuperar-contrasenia',
    component: RecuperarContraseniaLayoutComponent,
    children:[
      {
        path: '',
        loadChildren: () =>
          import(
            './views/auth/recuperar-contrasenia/recuperar-contrasenia.module'
          ).then((m) => m.RecuperarContraseniaModule),
      },
    ]
  },


  //Módulos
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },

      {
        path: 'seguridad',
        loadChildren: () =>
          import('./views/admin/seguridad/seguridad.module').then(
            (m) => m.SeguridadModule
          ),
      },
      {
        path: 'tablas-maestras',
        loadChildren: () =>
          import('./views/admin/tablas-maestras/tablas-maestras.module').then(
            (m) => m.TablasMaestrasModule
          )
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
