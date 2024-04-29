import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  sidebarItems = [
    {
      title: 'Mantenimientos',
      icon: 'setting',
      isSubMenu: true,
      children: [
        { title: 'Roles', routerLink: '/basic-form' },
        { title: 'Sedes', routerLink: '/basic-form' },
        { title: 'Módulos', routerLink: '/basic-form' },
        { title: 'Menus', routerLink: '/basic-form' },
        { title: 'Submenús', routerLink: '/basic-form' },
        { title: 'Asignación de roles', routerLink: '/basic-form' },
        { title: 'Usuarios', routerLink: '/basic-form' },
      ],
    },
  ];
}
