import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Conta } from 'src/api/models';
import { ContaService } from 'src/api/services';
import { DaoService } from 'src/app/core/dao.service';

@Component({
  selector: 'nx-editar-conta',
  templateUrl: './editar-conta.component.html',
  styleUrl: './editar-conta.component.scss'
})
export class EditarContaComponent implements OnInit {
  form = this.fb.group({
    numero: [],
    saldoCorrente: [],
  });
  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly dialogRef?: MatDialogRef<EditarContaComponent>,
    @Inject(MAT_DIALOG_DATA)
    private readonly conta?: Conta,
    private readonly daos?: DaoService,
    private readonly contaService?: ContaService,
  ) { }

  ngOnInit(): void {
    if (this.conta) this.daos.bindForm(this.form, this.conta)
  }

  async confirmar() {
    if (this.conta) {
      // if (this.conta.internalId === null) this.conta.internalId = undefined;
      await this.contaService.contaSincronizar({ body: this.conta }).toPromise();
    }
    this.dialogRef.close();
  }

}
