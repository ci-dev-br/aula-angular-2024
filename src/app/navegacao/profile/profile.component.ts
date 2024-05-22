import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    email: [],
    internalId: [],
    senha: [, Validators.required],
    username: [],

  });
  constructor(
    private readonly fb: FormBuilder,
    private auth: AuthService,
    private clientes: ClienteService
  ) { }

  ngOnInit() {
    this.form.reset(this.auth.user.value);
  }

  async salvar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let cliente = this.auth.user.getValue();
    Object.assign(cliente, this.form.getRawValue());

    cliente = await this.clientes.clienteSincronizar({
      body: cliente
    }).toPromise();
    this.form.reset(cliente);
    this.auth.user.next(cliente);
  }
}
