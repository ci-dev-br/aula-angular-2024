import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavegacaoRoutingModule } from './navegacao-routing.module';
import { EditarContaComponent } from './editar-conta/editar-conta.component';


@NgModule({
  declarations: [
    EditarContaComponent
  ],
  imports: [
    CommonModule,
    NavegacaoRoutingModule
  ]
})
export class NavegacaoModule { }
