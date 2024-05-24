import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarefa } from '@nsinova/banco-demo-api';
import { TarefaService as APITarefaService } from '@nsinova/banco-demo-api';
import { LibzinhaComponent } from '@nsinova/libzinha'

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

  soma(n1, n2) {
    return n1 + n2
  }
}
