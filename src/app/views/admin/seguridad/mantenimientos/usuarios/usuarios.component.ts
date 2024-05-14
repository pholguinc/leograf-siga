import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';

interface DataItem {
  document: string;
  numberOfDocument: number;
  name: string;
  registerComplete: string;
  statusDescription: string;
  active: number;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  size: NzButtonSize = 'large';
  visible = false;
  searchValue = '';
  index: number = 1;
  sizePagination: number = 100;
  isVisible: boolean = false;
  isVisibleAsignarPermisos: boolean = false;
  listOfData: DataItem[] = [
    {
      document: 'DNI',
      numberOfDocument: 95786425,
      name:'John Brown',
      registerComplete: 'Si',
      statusDescription: 'Activo',
      active: 1,
    },
    {
      document: 'RUC',
      numberOfDocument: 4785236554351,
      name:'Jim Green',
      registerComplete: 'No',
      statusDescription: 'Por confirmar',
      active: 0,
    },
    {
      document: 'DNI',
      numberOfDocument: 48653297,
      name:'Joe Black',
      registerComplete: 'Si',
      statusDescription: 'Inactivo',
      active: 2,
    },
    {
      document: 'Carnet de Extranjeria',
      numberOfDocument: 542119381234,
      name:'Jim Red',
      registerComplete: 'No',
      statusDescription: 'Expirado',
      active: 3,
    },
  ];
  listOfDisplayData = [...this.listOfData];

  constructor(private modalAlerta: NzModalService) {}

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

  onGuardarAceptarAsignarPermisos(event: any) {
    if (event) {
      this.isVisibleAsignarPermisos = false;
    }
  }

  onCerrarCancelarAsignarPermisos(event: any) {
    if (event) {
      this.isVisibleAsignarPermisos = false;
    }
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter(
      (item: DataItem) => item.name.indexOf(this.searchValue) !== -1
    );
  }
  asignarPermisos() {
    this.isVisibleAsignarPermisos = true;
  }

  reenviarCorreo() {
    this.modalAlerta.confirm({
      nzTitle: 'Reenviar correo a usuario',
      nzContent:
        '<span>¿Está seguro de que desea reenviar el correo al usuario? Al aceptar, este usuario recibirá un nuevo enlace para completar su registro en el sistema.</span>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
      nzWidth: '600px',
      nzClassName: 'custom-modal'
    });
  }

  DesactivarConfirm():void{
    this.modalAlerta.confirm({
      nzTitle: 'Inactivar usuario',
      nzContent:
        '<span>¿Estás seguro de que desea inactivar al usuario?</span><br><b>Al inactivar al usuario, este ya no tendrá acceso al sistema.</b>',
        nzOkText: 'Si',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => console.log('OK'),
        nzCancelText: 'Cancelar',
        nzOnCancel: () => console.log('Cancel'),
    });
  }

  ActivarConfirm():void{
    this.modalAlerta.confirm({
      nzTitle: 'Activar usuario',
      nzContent:
        '<span>¿Estás seguro de que desea activar al usuario?</span><br><b>Al activar al usuario, este volverá a tener acceso al sistema.</b>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

}
