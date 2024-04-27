import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  nombreUsuario: string = 'Sebastián Olivera Leyva';
  fechaUltimoIngreso: string = '13/04/2024 17:20 pm';
}
