import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/api/services';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'nx-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  constructor(
    private readonly auth: AuthService,
  ) { }
  ngOnInit() {
  }
  async registrar(user: string, pass: string) {
    try {
      await this.auth.registrar(user, pass);
    } catch (error) {
      alert(error);
    }
  }
}
