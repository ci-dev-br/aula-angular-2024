import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'nx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
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

}
