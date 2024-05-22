import { Injectable } from '@angular/core';
import { Tarefa } from './model/tarefa';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class TarefaService {
  tarefas: BehaviorSubject<Tarefa[]> = new BehaviorSubject([]);
  atualizarLista() {
    this.tarefas.next([...this.tarefas.value]);
  }
  constructor(
    private authService: AuthService,
  ) {
    try {
      let tarefas = authService.read(localStorage.getItem(this.authService.user.value.pass));
      tarefas;
    } catch (error) {
      console.error(error)
    }
  }

  async update() {
    let _data = this.authService.write(JSON.stringify(this.tarefas.value, null, 2));
    localStorage.setItem(this.authService.user.value.pass, _data);

    // let teste = this.authService.read(_data);
    // teste;
  }

}
