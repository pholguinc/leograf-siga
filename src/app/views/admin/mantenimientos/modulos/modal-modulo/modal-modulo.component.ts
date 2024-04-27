import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-modulo',
  templateUrl: './modal-modulo.component.html',
  styleUrls: ['./modal-modulo.component.css']
})
export class ModalModuloComponent implements OnInit {

  @Output() onGuardarAceptar: EventEmitter<any>;
  @Output() onCerrarCancelar: EventEmitter<any>;
  public isVisible: boolean = true;
  public titleModal: string = 'Agregar modulo';
  public subDescargas: string = '(Imagen: Tipo .jpeg o .jpg. Peso 1 MB)';

  constructor(
    private modal: NzModalService
  ){
    this.onGuardarAceptar = new EventEmitter<any>();
    this.onCerrarCancelar = new EventEmitter<any>();
  }

  ngOnInit(): void {

  }

  handleCancel(){
    this.isVisible = false;
    this.onCerrarCancelar.emit(true);
  }

  showConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Confirmar edición',
      nzContent: '<span>¿Está seguro de que desea editar el módulo?</span><br><b>Todos los datos asociados, serán modifcados a la nueva descripción.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOnOk: () => this.handleCancel(),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
