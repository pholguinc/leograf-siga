import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro.module';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    RouterLink
  ]
})
export class HomeModule { }
