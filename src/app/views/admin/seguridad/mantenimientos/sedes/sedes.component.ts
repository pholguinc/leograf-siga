import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent {

  index: number = 1;
  size: number = 100;
  isVisible: boolean = false;

  constructor(private modal: NzModalService) {}

  onGuardarAceptar(event: any) {
    if (event) {
      this.isVisible = false;
    }
  }

  onCerrarCancelar(event: any) {
    if (event) {
      this.isVisible = false;
    }
  }

  showModal(){
    this.isVisible = true;
  }

  showDesactivarConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Inactivar sede',
      nzContent:
        '<span>¿Está seguro de que desea inactivar el rol?</span><br><b>Al inactivar el rol, este ya no se mostrará en el sistema.</b>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

  showActivarConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Activar sede',
      nzContent:
        '<span>¿Está seguro de que desea activar la sede?</span><br><b>Al activar la sede, esta se volverá a mostrar en el sistema.</b>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

}
