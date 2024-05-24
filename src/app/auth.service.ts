import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from '@nsinova/banco-demo-api';
import { ClienteService } from '@nsinova/banco-demo-api';

@Injectable()
export class AuthService {
  user = new BehaviorSubject<Cliente>(null);
  private _data: any;
  constructor(
    private readonly router: Router,
    private readonly clientes: ClienteService
  ) {
    this.load();
    this.user.subscribe(user => {
      this.save({ ...this._data, logado: user });
      if (!user) {
        router.navigate(['/login'])
      }
    })
  }
  private save(data: any = this._data) {
    localStorage.setItem('_data', JSON.stringify(data, null, 2));
  }
  private load() {
    this._data = localStorage.getItem('_data') ? JSON.parse(localStorage.getItem('_data')) : {};

    this.user.next(
      this._data.logado
    );
  }

  async registrar(user: string, pass: string) {

    let u = await this.clientes.clienteSincronizar({ body: { username: user, senha: pass } }).toPromise();
    if (!!u) {
      alert('Registrado com sucesso!');
      this.router.navigate(['/login']);
    }
    // if (!this._data.users) this._data.users = {};
    // if (!this._data.users[user]) {
    //   this._data.users[user] = { pass, user };
    //   this.save();
    //   alert('Registrado com sucesso!');
    //   this.router.navigate(['/login']);
    // }
    // else {
    //   throw new Error("Usuário já existe...");
    // }
  }
  async login(user: string, pass: string) {
    // if (this._data && this._data.users && this._data.users[user] && this._data.users[user].pass === pass) {
    let u = await this.clientes.clienteAutenticar({ body: { username: user, senha: pass } }).toPromise();


    this.user.next(u);
    this.router.navigate(['/principal']);
    // } else {
    //   throw new Error('Acesso Negado!');
    // }
  }

}
