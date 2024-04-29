import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PaisesService } from 'src/app/services/paises/paises.service';

@Component({
  selector: 'app-modal-usuarios',
  templateUrl: './modal-usuarios.component.html',
  styleUrls: ['./modal-usuarios.component.css'],
})
export class ModalUsuariosComponent implements OnInit {
  isVisible: boolean = true;
  titleModal: string = 'Nuevo Usuario';
  date = null;
  countries!: any[];
  @Output() onGuardarAceptar: EventEmitter<any>;
  @Output() onCerrarCancelar: EventEmitter<any>;
  constructor(private paisesService: PaisesService, private modalAlerta:NzModalService) {
    this.onGuardarAceptar = new EventEmitter<any>();
    this.onCerrarCancelar = new EventEmitter<any>();
  }
  ngOnInit(): void {
    this.paisesService.getAllCountries().subscribe((data) => {
      this.countries = data;
      console.log(this.countries);
    });
  }

  getCallingCode(country: any): string {
    if (country.idd && country.idd.root && country.idd.suffixes) {
      return country.idd.root + country.idd.suffixes[0];
    } else {
      return '';
    }
  }

  showConfirm() {
    this.modalAlerta.confirm({
      nzTitle: 'Confirmar nuevo usuario',
      nzContent:
        '<span>¿Está seguro de que desea crear al nuevo usuario?</span><br><b>Al aceptar, este usuario recibirá un correo para completar su registro en el sistema.</b>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'Cancelar',
      nzOnCancel: () => console.log('Cancel'),
      nzWidth: '600px',
    });
  }

  handleCancel() {
    this.isVisible = false;
    this.onCerrarCancelar.emit(true);
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
