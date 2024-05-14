import { Component, EventEmitter, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrls: ['./modal-menu.component.css']
})
export class ModalMenuComponent {

  @Output() onGuardarAceptar: EventEmitter<any>;
  @Output() onCerrarCancelar: EventEmitter<any>;

  public isVisible: boolean = true;
  public titleModal: string = 'Agregar menu';

  constructor(
    private modal: NzModalService
  ) {
    this.onGuardarAceptar = new EventEmitter<any>();
    this.onCerrarCancelar = new EventEmitter<any>();
  }

  handleCancel() {
    this.isVisible = false;
    this.onCerrarCancelar.emit(true);
  }

  showConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Confirmar edición',
      nzContent:
        '<span>¿Está seguro de que desea editar el menú?</span><br><b>Todos los datos asociados, serán modifcados a la nueva descripción.</b>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOnOk: () => this.handleCancel(),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

}
