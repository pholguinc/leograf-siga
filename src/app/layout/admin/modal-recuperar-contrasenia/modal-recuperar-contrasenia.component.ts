import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-recuperar-contrasenia',
  templateUrl: './modal-recuperar-contrasenia.component.html',
  styleUrls: ['./modal-recuperar-contrasenia.component.css']
})
export class ModalRecuperarContraseniaComponent {

  @Output() onGuardarAceptar: EventEmitter<any>;
  @Output() onCerrarCancelar: EventEmitter<any>;

  isVisibleFormRecuperarContrasenia: boolean = true;
  isVisbleAvisoReinicioSeccion: boolean = false;

  public isVisible: boolean = true;

  passwordVisible1 = false;
  password1?: string;

  passwordVisible2 = false;
  password2?: string;

  constructor(
    private router: Router,
  ) {
    this.onGuardarAceptar = new EventEmitter<any>();
    this.onCerrarCancelar = new EventEmitter<any>();
  }

  handleCancel() {
    this.isVisible = false;
    this.onCerrarCancelar.emit(true);
  }

  fnVisibleAvisoContraseniaCambiada(){
    this.isVisibleFormRecuperarContrasenia = false;
    this.isVisbleAvisoReinicioSeccion = true;
  }

  regresarLogin(){
    this.router.navigate([
      'auth/login',
    ]);
  }

}
