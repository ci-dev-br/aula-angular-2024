import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/api/models';
import { ClienteService } from 'src/api/services';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'nx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form = this.fb.group({
    contas: [],
    criadoPor: [],
    dataCriacao: [],
    dataUltimaAlteracao: [],
    email: [, Validators.email],
    internalId: [],
    senha: [],
    username: [, Validators.required],
  });
  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly clientes: ClienteService,
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
    Object.assign(cliente, this.form.getRawValue());

    cliente = await (this.clientes.clienteSincronizar({ body: cliente }).toPromise());

    this.form.reset(cliente);
    this.auth.user.next(cliente);
  }

}
