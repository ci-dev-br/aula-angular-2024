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
import { DataGridComponent } from '@nsinova/data-grid';
import { TRADUCAO, TraducaoModule } from '@nsinova/traducao';

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
    DataGridComponent,
  ], providers: [
    {
      provide: TRADUCAO, useValue: {
        dataCriacao: 'Data de Criação',
        numero: 'Número',
        saldoCorrente: 'Saldo Corrente',
      }
    }
  ]
})
export class ContasModule { }
