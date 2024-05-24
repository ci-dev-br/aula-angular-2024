import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../tarefa.service';
import { Tarefa } from '@nsinova/banco-demo-api';

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

    })
  }

  ngOnInit() {
  }

}
