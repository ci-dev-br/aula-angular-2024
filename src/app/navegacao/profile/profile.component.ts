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
    public readonly auth: AuthService,
    private readonly clientes: ClienteService,
    private readonly daos: DaoService,
  ) { }

  ngOnInit() {
    if (this.auth.user.getValue())
    this.daos.bindForm(this.form, this.auth.user.getValue())
  }

  async salvar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    let cliente: Cliente = this.auth.user.getValue();
    this.daos.peparar(cliente)
    Object.assign(cliente, this.form.getRawValue());
    cliente = await (this.clientes.clienteSincronizar({ body: this.daos.toSave(cliente) }).toPromise());
    this.form.reset(cliente);
    this.auth.user.next(cliente);
  }

  public get username(): string {
    return this.auth.user.value.username;
  }
  public set username(value: string){
    this.auth.user.value.username = value;
  }
}




