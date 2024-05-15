import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css']
})
export class RecuperarContraseniaComponent{

  isVisibleFormRecuperarContrasenia: boolean = true;
  isVisibleAvisoEnvioCorreo: boolean = false;
  isVisibleFormCambioContrasenia: boolean = false;
  isVisibleCorreo: boolean = false;
  isVisibleAvisoCambioExito: boolean = false;

  passwordVisible1 = false;
  password1?: string;

  passwordVisible2 = false;
  password2?: string;

  constructor(
    private router: Router,
  ){

  }

  fnEnvioCorreoConfirmacion(){
    this.isVisibleFormRecuperarContrasenia = false;
    this.isVisibleAvisoEnvioCorreo = true;
  }

  fnCambiarContrasenia(){
    this.isVisibleAvisoEnvioCorreo = false;
    this.isVisibleFormCambioContrasenia = true;
  }

  fnCambioExitoso(){
    this.isVisibleFormCambioContrasenia = false;
    this.isVisibleAvisoCambioExito = true;
  }

  regresarLogin(){
    this.router.navigate([
      'auth/login',
    ]);
  }

}
