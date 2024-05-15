import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css']
})
export class RecuperarContraseniaComponent {

  isVisibleFormRecuperarContrasenia: boolean = true;
  isVisibleEnvioCorreo: boolean = false;

  fnEnvioCorreoConfirmacion(){
    this.isVisibleFormRecuperarContrasenia = false;
    this.isVisibleEnvioCorreo = true;
  }

}
