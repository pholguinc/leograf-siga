import { Component } from '@angular/core';
import { NzSelectSizeType } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  nombreUsuario: string = 'Sebastián Olivera Leyva';
  fechaUltimoIngreso: string = '13/04/2024 17:20 pm';
  size: NzSelectSizeType = 'small';
}
