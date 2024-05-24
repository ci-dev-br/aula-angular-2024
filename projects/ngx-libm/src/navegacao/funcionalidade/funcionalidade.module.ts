import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionalidadeRoutingModule } from './funcionalidade-routing.module';
import { MatButton } from '@angular/material/button';
import { FuncionalidadeComponent } from './funcionalidade.component';


@NgModule({
  declarations: [FuncionalidadeComponent],
  imports: [
    CommonModule,
    FuncionalidadeRoutingModule,
    
  ]
})
export class FuncionalidadeModule { }
