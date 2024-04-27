import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent {
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

  showModal() {
    this.isVisible = true;
  }

  showDesactivarConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Inactivar rol',
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
      nzTitle: 'Activar rol',
      nzContent:
        '<span>¿Está seguro de que desea activar el rol?</span><br><b>Al activar el rol, este se volverá a mostrar en el sistema.</b>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
}
