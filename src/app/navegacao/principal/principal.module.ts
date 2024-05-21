import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';


@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
