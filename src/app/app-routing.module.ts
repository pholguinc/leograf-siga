import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthLayoutComponent } from './layout/auth/login/login-auth-layout.component';
import { AdminComponent } from './layout/admin/admin.component';
import { RegistroLayoutComponent } from './layout/auth/registro/registro-layout-component.component';
import { HomeLayoutComponent } from './layout/home/home-layout.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/admin',
  },

  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren:() => import('./views/admin/home/home.module').then((m)=>m.HomeModule)
      }
    ]
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
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./views/admin/home/home.module').then((m) => m.HomeModule),
  //     },
  //     {
  //       path: 'mantenimientos',
  //       children: [
  //         {
  //           path: 'roles',
  //           loadChildren: () =>
  //             import('./views/admin/mantenimientos/roles/roles.module').then(
  //               (m) => m.RolesModule
  //             ),
  //         },
  //         {
  //           path: 'modulos',
  //           loadChildren: () =>
  //             import(
  //               './views/admin/mantenimientos/modulos/modulos.module'
  //             ).then((m) => m.ModulosModule),
  //         },
  //         {
  //           path: 'usuarios',
  //           loadChildren: () =>
  //             import(
  //               './views/admin/mantenimientos/usuarios/usuarios.module'
  //             ).then((m) => m.UsuariosModule),
  //         },
  //       ],
  //     },
  //   ],
  // },

  //Módulos
  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {
        path: 'seguridad',
        loadChildren:()=> import('./views/admin/seguridad/seguridad.module').then((m)=>m.SeguridadModule),

      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
