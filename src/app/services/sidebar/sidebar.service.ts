import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  sidebarItems = [
    //* Rutas de Seguridad
    {
      title: 'Mantenimientos',
      icon: 'setting',
      isSubMenu: true,
      children: [
        {
          title: 'Roles',
          routerLink: '/admin/seguridad/mantenimientos/roles'
        },
        {
            title: 'Sedes',
            routerLink: '/admin/seguridad/mantenimientos/sedes'
        },
        {
          title: 'Módulos',
          routerLink: '/admin/seguridad/mantenimientos/modulos',
        },
        {
          title: 'Menus',
          routerLink: '/admin/seguridad/mantenimientos/menu'
        },
        {
          title: 'Submenús',
          routerLink: '/admin/seguridad/mantenimientos/submenu',
        },
        {
          title: 'Asignación de roles',
          routerLink: '/admin/seguridad/mantenimientos/asignar-roles',
        },
        {
          title: 'Usuarios',
          routerLink: '/admin/seguridad/mantenimientos/usuarios',
        },
      ],
    },
    //! rutas de tablas maestras
    // {
    //   title: 'Archivos Maestros',
    //   icon: 'setting',
    //   isSubMenu: true,
    //   children: [
    //     {
    //       title: 'Articulos',
    //       routerLink: '/admin/tablas-maestras/archivos-maestros/articulos'
    //     },
    //     {
    //       title: 'Clientes y Proveedores',
    //       routerLink: '/admin/tablas-maestras/archivos-maestros/clientes-proveedores'
    //     },
    //     {
    //       title: 'Maquinas', routerLink: '/admin/tablas-maestras/archivos-maestros/maquinas'
    //     },
    //     {
    //       title: 'Unidad de medidas',
    //       routerLink: '/admin/tablas-maestras/archivos-maestros/unidad-medidas'
    //     },

    //   ],
    // },

  ];


}
