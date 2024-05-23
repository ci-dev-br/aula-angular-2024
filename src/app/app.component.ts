import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  valorCep = {
    valor: 1
  };
  v = 3;
  user = this.auth.user;
  @ViewChild('tarefaInput', { static: true })
  el: ElementRef<HTMLInputElement>;
  private _title = 'BancoDemo';

  public get title() {
    return this._title;
  }
  public set title(value) {
    this._title = value;
  }
  constructor(
    private auth: AuthService,
  ) {
    console.log('[AppComponent]')

    let add = () => {
      this.valorCep.valor += 1;
      setTimeout(() => add(), 500);
    }
    add();
  }
}