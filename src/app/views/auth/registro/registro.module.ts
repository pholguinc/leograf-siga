import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';
import { FormControl, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    NgZorroAntdModule,
    FormsModule

  ]
})
export class RegistroModule { }
