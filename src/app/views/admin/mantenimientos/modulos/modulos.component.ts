import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent {

  index:number = 1;
  size:number = 100;
  isVisible:boolean = false;

  constructor(
    private modal: NzModalService
  ){

  }

  onGuardarAceptar(event:any){
    if(event){
      this.isVisible = false;
    }
  }

  onCerrarCancelar(event:any){
    if(event){
      this.isVisible = false;
    }
  }

  showModal(){
    this.isVisible = true;
  }

  showDesactivarConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Inactivar módulo',
      nzContent: '<span>¿Está seguro de que desea inactivar el módulo?</span><br><b>Al inactivar el módulo, este ya no se mostrará en el sistema.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  showActivarConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Activar módulo',
      nzContent: '<span>¿Está seguro de que desea activar el módulo?</span><br><b>Al activar el módulo, este se volverá a mostrar en el sistema.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
