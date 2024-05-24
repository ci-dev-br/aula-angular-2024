import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
/* Core Grid CSS */
/* Quartz Theme Specific CSS */
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import { Conta } from '@nsinova/banco-demo-api';
import { ContaService } from '@nsinova/banco-demo-api';
import { EditarContaComponent } from './editar-conta/editar-conta.component';

@Component({
  selector: 'nx-contas',
  templateUrl: './contas.component.html',
  styleUrl: './contas.component.scss'
})
export class ContasComponent {
  constructor(
    private readonly dialog: MatDialog,
    private readonly contaService?: ContaService,

  ) {
    this.listar();
  }
  // Row Data: The data to be displayed.
  rowData: Conta[] = [

  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "dataCriacao" },
    { field: "numero" },
    { field: "saldoCorrente" },
  ];

  async listar() {
    this.rowData = await this.contaService.contaListar().toPromise();
  }

  async novo() {
    this.abrir({});
  }

  async abrir(conta: Conta) {
    this.dialog.open(EditarContaComponent, { data: conta }).afterClosed().subscribe(() => this.listar());
  }
}
