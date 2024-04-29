import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../ng-zorro.module';
import { LoginAuthLayoutComponent } from './auth/login/login-auth-layout.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ModulosComponent } from './modulos/modulos.component';
import { RegistroLayoutComponent } from './auth/registro/registro-layout-component.component';
import { HomeLayoutComponent } from './home/home-layout.component';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [LoginAuthLayoutComponent, AdminComponent, ModulosComponent, RegistroLayoutComponent, HomeLayoutComponent],
  imports: [CommonModule, NgZorroAntdModule, RouterModule, NzIconModule,],
})
export class LayoutModule {}
