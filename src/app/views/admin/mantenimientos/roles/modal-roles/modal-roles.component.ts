import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-roles',
  templateUrl: './modal-roles.component.html',
  styleUrls: ['./modal-roles.component.css']
})
export class ModalRolesComponent implements OnInit{

  @Output() onGuardarAceptar: EventEmitter<any>;
  @Output() onCerrarCancelar: EventEmitter<any>;
  public isVisible: boolean = true;
  public titleModal: string = 'Agregar rol';

  constructor(
    private modal: NzModalService
  ){
    this.onGuardarAceptar = new EventEmitter<any>();
    this.onCerrarCancelar = new EventEmitter<any>();
  }

  ngOnInit(

  ): void {


  }

  handleCancel(){
    this.isVisible = false;
    this.onCerrarCancelar.emit(true);
  }

  showConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Confirmar edición',
      nzContent: '<span>¿Está seguro de que desea editar el rol?</span><br><b>Todos los datos asociados, serán modifcados a la nueva descripción.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOnOk: () => this.handleCancel(),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
