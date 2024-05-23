import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ContasRoutingModule } from './contas-routing.module';
import { ContasComponent } from './contas.component';
import { AgGridAngular } from 'ag-grid-angular';
import { EditarContaComponent } from './editar-conta/editar-conta.component'; // Angular Data Grid Component
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ContasComponent,
    EditarContaComponent,
  ],
  imports: [
    CommonModule,
    ContasRoutingModule,
    AgGridAngular,
    MatDialogModule,
    // MatDiaMo
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})
export class ContasModule { }
