import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LibGabrielApiComponent } from 'lib-gabriel-api';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LibGabrielApiComponent
  ],
  providers: [
    LibGabrielApiComponent
  ]
})
export class LoginModule { }


