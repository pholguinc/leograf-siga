import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

  index:number = 1
  size:number = 100
  isVisible:boolean = false;

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

}
