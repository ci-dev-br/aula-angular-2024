import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class PrincipalModule { }
