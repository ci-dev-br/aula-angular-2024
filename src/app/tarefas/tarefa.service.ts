import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarefa } from 'src/api/models';
import { TarefaService as APITarefaService } from 'src/api/services';

@Injectable()
export class TarefaService {
  tarefas: BehaviorSubject<Tarefa[]> = new BehaviorSubject([]);
  atualizarLista() {
    this.tarefas.next([...this.tarefas.value]);
  }
  constructor(
    private readonly tarefasservice: APITarefaService
  ) {
    this.tarefasservice.tarefaListar().subscribe(r => {
      this.tarefas.next(r)
    })
  }
}
