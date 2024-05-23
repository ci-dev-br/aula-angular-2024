import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/api/models';
import { ClienteService } from 'src/api/services';
import { AuthService } from 'src/app/auth.service';
import { DaoService } from 'src/app/core/dao.service';

@Component({
  selector: 'nx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form = this.fb.group({
    //contas: [],
    //criadoPor: [],
    dataCriacao: [],
    dataUltimaAlteracao: [],
    email: [, Validators.email],
    internalId: [],
    senha: [],
    username: [, Validators.required],
  });
  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly auth: AuthService,
    private readonly clientes: ClienteService,
    private readonly daos: DaoService
  ) { }

  ngOnInit() {
    if (this.auth.user.getValue())
      this.form.reset(this.auth.user.getValue())
  }

  async salvar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    let cliente: Cliente = this.auth.user.getValue();
    this.daos.preparar(cliente);
    //let values = this.form.getRawValue();
    Object.assign(cliente, this.form.getRawValue())
    //let to_save: Cliente = {internalId: cliente.internalId};
    /*
    Object.keys(cliente).forEach(p => {
      if(cliente[p] !== values[p]) to_save[p] = values[p];
    })
    */
    cliente = await (this.clientes.clienteSincronizar({ body: this.daos.toSave(cliente) }).toPromise());

    this.form.reset(cliente);
    this.auth.user.next(cliente);
  }

}
