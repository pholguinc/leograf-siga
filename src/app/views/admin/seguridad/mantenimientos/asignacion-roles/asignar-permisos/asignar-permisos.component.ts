import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-asignar-permisos',
  templateUrl: './asignar-permisos.component.html',
  styleUrls: ['./asignar-permisos.component.css'],
})
export class AsignarPermisosComponent {
  size: NzButtonSize = 'large';

  constructor(
    private router: Router,
  ){

  }

  volver(){
    this.router.navigate([
      '/../admin/seguridad/mantenimientos/asignar-roles'
    ]);
  }

  guardar(){
    this.router.navigate([
      '/../admin/seguridad/mantenimientos/asignar-roles'
    ]);

  }

}
