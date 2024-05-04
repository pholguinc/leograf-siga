import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent {

  index: number = 1;
  size: number = 100;
  selectedValue:any;

  isVisibleCodigoArticulo:boolean = false;
  isVisibleCodigoCliente:boolean = false;

  constructor(
    private router: Router,
  ){
  }

  filtroBusqueda = [
    {codigo : 2, descripcion: 'Código del Artículo'},
    {codigo : 3, descripcion: 'Código de Cliente'},
  ]

  cambioFiltro(event: any){
    switch(event){
      case 2:
        this.isVisibleCodigoArticulo = true;
        this.isVisibleCodigoCliente = false;
        break;
      case 3:
        this.isVisibleCodigoArticulo = false;
        this.isVisibleCodigoCliente = true;
        break;
      default:
        this.isVisibleCodigoArticulo = false;
        this.isVisibleCodigoCliente = false;
        break;
    }
  }

  showModal(){
    this.router.navigate([
      '/admin/tablas-maestras/archivos-maestros/articulos/detalles-articulos'
    ])
  }

}
