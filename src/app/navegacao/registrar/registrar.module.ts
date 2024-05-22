import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarRoutingModule } from './registrar-routing.module';
import { RegistrarComponent } from './registrar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegistrarComponent],
  imports: [
    CommonModule,
    RegistrarRoutingModule,
    ReactiveFormsModule,
  ]
})
export class RegistrarModule { }
