import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../ng-zorro.module';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [AuthComponent, AdminComponent],
  imports: [CommonModule, NgZorroAntdModule, RouterModule],
})
export class LayoutModule {}
