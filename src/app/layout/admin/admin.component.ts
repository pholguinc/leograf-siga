import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  NavigationStart,
} from '@angular/router';
import { filter } from 'rxjs';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  isCollapsed = false;
  routeNameStorage: string = '';

  fechaUltimoRegistro: string = "13/04/2024 - 17:20pm";
  usuario: string = "Sebastián Olivera Leyva";
  rolUsuario: string = "Administrador";
  sedeUsuario: string = "Comas";
  moduloSeleccionado: string = "Seguridad";

  sidebarItems!: any[];

  showSidebar: boolean = false;

  constructor(
    private sidebarService: SidebarService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.updateRouteName();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateRouteName();
      }
    });

    const currentUrl = this.router.url;
    if (
      currentUrl === '/admin/seguridad' ||
      currentUrl.startsWith('/admin/seguridad/mantenimientos')
    ) {
      this.sidebarItems = this.sidebarService.sidebarItems;
    } else {
      this.sidebarItems = [];
    }
  }

  updateRouteName(): void {
    const currentUrl = this.router.url;
    const segments = currentUrl.split('/');
    let routeName = segments[segments.length - 1];
    routeName = routeName.charAt(0).toUpperCase() + routeName.slice(1);

    console.log('Último parámetro de la ruta:', routeName);
    localStorage.setItem('routeName', routeName);
    this.routeNameStorage = routeName;
  }

  cerrarSeccion(){
    this.router.navigate([
      'auth/login'
    ])
  }

  regresarModulos(){
    this.router.navigate([
      'home',
    ])
  }

  shouldShowContainerDate(): boolean {
    return !this.isCollapsed;
  }

  change(value: boolean): void {
    console.log(value);
  }

  showUser(){
    this.showSidebar = true;
  }

  close(){
    this.showSidebar = false;
  }

}
