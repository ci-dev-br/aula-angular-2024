import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'nx-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.scss']
})
export class EditarTarefaComponent implements OnInit {
  tarefa?: Tarefa;
  constructor(
    router: Router,
    route: ActivatedRoute,
    tarefas: TarefaService
  ) {
    route.params.subscribe(parametros => {

      this.tarefa = tarefas.tarefas.value.find(t => t.numero == parametros.num);

      if (!this.tarefa)
        setTimeout(() => router.navigate(['/tarefa']), 0);
    })
  }

  ngOnInit() {
  }

}
