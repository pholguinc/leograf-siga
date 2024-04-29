import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
interface ItemData {
  id: number;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-asignacion-roles',
  templateUrl: './asignacion-roles.component.html',
  styleUrls: ['./asignacion-roles.component.css'],
})
export class AsignacionRolesComponent {
  size: NzButtonSize = 'large';
  index: number = 1;
  sizePagination: number = 10;
}
