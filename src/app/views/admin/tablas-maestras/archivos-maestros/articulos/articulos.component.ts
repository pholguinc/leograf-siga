import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent {

  isVisibleCodigoArticulo:boolean = false;
  isVisibleDetallesArticulo:boolean = false;
  isVisibleCodigoCliente:boolean = false;

  cambioFiltro(event: any){
    switch(event){
      case '1':
        this.isVisibleCodigoArticulo = false;
        this.isVisibleDetallesArticulo = false;
        this.isVisibleCodigoCliente = false;
        break;
      case '2':
        this.isVisibleCodigoArticulo = true;
        this.isVisibleDetallesArticulo = false;
        this.isVisibleCodigoCliente = false;
        break;
      case '3':
        this.isVisibleCodigoArticulo = false;
        this.isVisibleDetallesArticulo = true;
        this.isVisibleCodigoCliente = false;
        break;
      case '4':
        this.isVisibleCodigoArticulo = false;
        this.isVisibleDetallesArticulo = false;
        this.isVisibleCodigoCliente = true;
        break;
    }
  }

  showModal(){

  }

}
