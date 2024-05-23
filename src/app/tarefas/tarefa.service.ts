import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarefa } from 'src/api/models';
import { TarefaService as APITarefaService } from 'src/api/services';

@Injectable()
export class TarefaService {
  tarefas: BehaviorSubject<Tarefa[]> = new BehaviorSubject([]);
  constructor(
    private readonly apiService: APITarefaService
  ) {
    this.apiService.tarefaListar().subscribe(r => {
      this.tarefas.next(r)
    })
  }
  atualizarLista() {
    this.tarefas.next([...this.tarefas.value]);
  }

  async adicionar(tarefa: Tarefa) {
    let tarefa_saved = await this.apiService.tarefaSincronizar({ body: tarefa }).toPromise();
    this.tarefas.getValue().push(tarefa_saved);
    return tarefa_saved;
  }
}
