import { Component, OnInit } from '@angular/core';
import { TarefaService } from './tarefa.service';
import { Tarefa } from '@nsinova/banco-demo-api';

@Component({
  selector: 'nx-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {
  tarefas: Tarefa[];

  constructor(
    private service: TarefaService,
  ) {
    this.service.tarefas.subscribe(v => {
      this.tarefas = v;
    })
  }
  ngOnInit() {
  }
  add(tarefa: string) {

    this.service.adicionar({ descricao: tarefa });
  }
  remover(tarefa: Tarefa) {
    this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
  }
}
