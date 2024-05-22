import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'nx-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  form = this.fb.group({
    email: [],
    username: [],
    celular: [],
    senha: [],
    saldoInicial: [],
  });
  constructor(
    private readonly auth: AuthService,
    private fb: FormBuilder,
  ) { }
  ngOnInit() {
  }
  async registrar() {
    if (this.form.invalid) return;
    try {
      // await this.auth.registrar(user, pass);
    } catch (error) {
      alert(error);
    }
  }
}
