import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-asignar-permisos',
  templateUrl: './modal-asignar-permisos.component.html',
  styleUrls: ['./modal-asignar-permisos.component.css'],
})
export class ModalAsignarPermisosComponent {
  titleModal: string = 'Asignar Permisos a usuario';
  @Input() isVisibleAsignarPermisos: boolean = true;
  @Output() onGuardarAceptar: EventEmitter<any>;
  @Output() onCerrarCancelar: EventEmitter<any>;
  @Output() onGuardarAceptarAsignarPermisos:EventEmitter<any>;

  constructor(private modalAlerta: NzModalService) {
    this.onGuardarAceptar = new EventEmitter<any>();
    this.onCerrarCancelar = new EventEmitter<any>();
    this.onGuardarAceptarAsignarPermisos = new EventEmitter<any>();
  }

  handleCancel() {
    this.onGuardarAceptarAsignarPermisos.emit(true);
  }

  showActivar() {
    this.modalAlerta.confirm({
      nzTitle: 'Activar asignación',
      nzContent:
        '<span>¿Está seguro de que desea activar la asignación?</span>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
      nzWidth: '600px',
    });
  }

  showDesactivar() {
    this.modalAlerta.confirm({
      nzTitle: 'Desactivar asignación',
      nzContent:
        '<span>¿Está seguro de que desea desactivar la asignación?</span>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
      nzWidth: '600px',
    });
  }

  showConfirm() {
    this.modalAlerta.confirm({
      nzTitle: 'Desactivar asignación',
      nzContent:
        '<span>¿Está seguro de que desea asignar permisos al nuevo usuario?</span>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
      nzWidth: '600px',
    });
  }
}
