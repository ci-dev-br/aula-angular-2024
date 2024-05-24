import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { LibGabrielApiComponent } from 'lib-gabriel-api';

@Component({
  selector: 'nx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  text?: any[]

  constructor(
    private auth: AuthService,
    private servico: LibGabrielApiComponent
  ) { }

  ngOnInit() {
  }

  async login(user: string, pass: string) {
    try {
      await this.auth.login(user, pass)
    } catch (error) {
      alert(error)
    }
  }

  async getData(url: string){
    this.text = await this.servico.chamarApi(url)
  }

}
