import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {

  index: number = 1;
  size: number = 100;
  isVisible: boolean = false;

  constructor(private modal: NzModalService) {}

  showModal() {
    this.isVisible = true;
  }

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

  showDesactivarConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Inactivar submenú',
      nzContent:
        '<span>¿Está seguro de que desea inactivar el submenú?</span><br><b>Al inactivar el submenú, éste ya no se mostrará como opción al momento de realizar nuevos registros en el sistema.</b>',
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
      nzTitle: 'Activar submenú',
      nzContent:
        '<span>¿Está seguro de que desea activar el submenú?</span><br><b>Al activar el submenú, ésta opción volverá a mostrarse en los nuevos registros en el sistema.</b>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

}
