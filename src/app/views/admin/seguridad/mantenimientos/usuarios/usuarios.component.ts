import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';

interface DataItem {
  name: string;
  age: number;
  address: string;
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
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
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
}
