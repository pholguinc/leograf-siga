import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, NgZorroAntdModule],
  exports: [NgZorroAntdModule],
})
export class LoginModule {}
