import { Injectable } from '@angular/core';
import { Tarefa } from './model/tarefa';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TarefaService {
  tarefas: BehaviorSubject<Tarefa[]> = new BehaviorSubject([]);
  atualizarLista() {
    this.tarefas.next([...this.tarefas.value]);
  }
  constructor() { }
}
