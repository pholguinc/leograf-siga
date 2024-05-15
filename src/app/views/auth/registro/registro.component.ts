import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  passwordVisible = false;
  password?: string;
  passwordRecoveryVisible = false;
  passwordRecovery?: string;

  constructor(
    private router: Router,
  ){

  }

  fnVisibleAvisoRegistro(){
    this.router.navigate([
      '/auth/registro/aviso',
    ]);
  }
}
