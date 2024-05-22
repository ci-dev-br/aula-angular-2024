import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import rsa from 'js-crypto-rsa'; // for npm
import { Crypt, RSA } from 'hybrid-crypto-js';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AuthService {
  user = new BehaviorSubject<any>(null);
  private _data: any;
  constructor(
    private readonly router: Router,
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
    if (!this._data.users) this._data.users = {};
    if (!this._data.users[CryptoJS.SHA1(user)]) {
      this._data.users[CryptoJS.SHA1(user)] = { pass: String(CryptoJS.SHA1(user + pass)), user };
      this.save();
      alert('Registrado com sucesso!');
      this.router.navigate(['/login']);
    }
    else {
      throw new Error("Usuário já existe...");
    }
  }
  async login(user: string, pass: string) {
    //  (await this.crypt(user, pass)).rsa;
    if (this._data && this._data.users && this._data.users[CryptoJS.SHA1(user)] && this._data.users[CryptoJS.SHA1(user)].pass === String(CryptoJS.SHA1(user + pass))) {
      this.user.next(this._data.users[CryptoJS.SHA1(user)]);
      this.router.navigate(['/principal']);
    } else {
      throw new Error('Acesso Negado!');
    }
  }

  async crypt(username: string, password: string) {
    let entropy = `${username}:${password}`;
    let crypt: RSA = new Crypt({
      rsaStandard: 'RSA-OAEP',
      entropy: entropy
    });
    let rsa: RSA = new RSA({
      entropy: entropy
    });
    return await new Promise<any>((res, rej) => {
      try {
        rsa.generateKeyPair(kp => {
          res({ crypt, rsa, kp });
        });
      } catch (error) {
        rej(error);
      }
    });
  }

}
