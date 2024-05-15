import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css'],
})
export class ModulosComponent {
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
      nzTitle: 'Inactivar módulo',
      nzContent:
        '<span>¿Está seguro de que desea inactivar el módulo?</span><br><b>Al inactivar el módulo, éste ya no se mostrará como opción al momento de realizar nuevos registros en el sistema.</b>',
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
      nzTitle: 'Activar módulo',
      nzContent:
        '<span>¿Está seguro de que desea activar el módulo?</span><br><b>Al activar el módulo, ésta opción volverá a mostrarse en los nuevos registros en el sistema.</b>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
    });
  }
}
