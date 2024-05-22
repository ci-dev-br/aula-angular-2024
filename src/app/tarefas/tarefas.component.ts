import { Component, OnInit } from '@angular/core';
import { Tarefa } from './model/tarefa';
import { TarefaService } from './tarefa.service';

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
    this.tarefas.push(
      new Tarefa({ numero: this.tarefas.length, descricao: tarefa })
    );
    this.service.update();
  }
  remover(tarefa: Tarefa) {
    this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
  }
}
