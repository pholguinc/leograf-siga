import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles-articulos',
  templateUrl: './detalles-articulos.component.html',
  styleUrls: ['./detalles-articulos.component.css']
})
export class DetallesArticulosComponent {

  index: number = 1;
  size: number = 100;

  isVisibleTabla1:boolean = true;
  isVisibleTabla2:boolean = false;

  isVisibleArea1:boolean = true;
  isVisibleArea2:boolean = false;

  isVisibleInsumos:boolean = true;
  isVisibleRequerimiento:boolean = false;
  isVisibleProceso: boolean = false;
  isVisibleAcabado:boolean = false;

  fnCambioVista(mod: number){
    switch(mod){
      case 1:
        this.isVisibleTabla1 = true;
        this.isVisibleTabla2 = false;

        this.isVisibleArea1 = true;
        this.isVisibleArea2 = false;

        this.isVisibleInsumos = true;
        this.isVisibleRequerimiento = false;
        this.isVisibleProceso = false;
        this.isVisibleAcabado = false;
        break;

      case 2:
        this.isVisibleTabla1 = true;
        this.isVisibleTabla2 = false;

        this.isVisibleArea1 = true;
        this.isVisibleArea2 = false;

        this.isVisibleInsumos = false;
        this.isVisibleRequerimiento = true;
        this.isVisibleProceso = false;
        this.isVisibleAcabado = false;
        break;

      case 3:
        this.isVisibleTabla1 = true;
        this.isVisibleTabla2 = false;

        this.isVisibleArea1 = false;
        this.isVisibleArea2 = true;

        this.isVisibleInsumos = false;
        this.isVisibleRequerimiento = false;
        this.isVisibleProceso = true;
        this.isVisibleAcabado = false;
        break;

      case 4:
        this.isVisibleTabla1 = true;
        this.isVisibleTabla2 = false;

        this.isVisibleArea1 = false;
        this.isVisibleArea2 = true;

        this.isVisibleInsumos = false;
        this.isVisibleRequerimiento = false;
        this.isVisibleProceso = false;
        this.isVisibleAcabado = true;
        break;

      case 5:
        this.isVisibleTabla1 = false;
        this.isVisibleTabla2 = true;

        this.isVisibleArea1 = false;
        this.isVisibleArea2 = false;

        this.isVisibleInsumos = false;
        this.isVisibleRequerimiento = false;
        this.isVisibleProceso = false;
        this.isVisibleAcabado = false;
        break;

    }
  }

}
