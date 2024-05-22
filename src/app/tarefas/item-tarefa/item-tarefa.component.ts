import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TarefaService } from '../tarefa.service';
import { Tarefa } from 'src/api/models';

@Component({
  selector: 'nx-item-tarefa',
  templateUrl: './item-tarefa.component.html',
  styleUrls: ['./item-tarefa.component.scss']
})
export class ItemTarefaComponent implements OnInit {

  @Output('remover')
  removerEmitter = new EventEmitter<Tarefa>();
  private _tarefa?: Tarefa;
  public get tarefa(): Tarefa {
    return this._tarefa;
  }
  @Input()
  public set tarefa(value: Tarefa) {
    this._tarefa = value;
    /*  this._tarefa.change.subscribe(t => {
       this.tarefas.atualizarLista();
       this._tarefa = null;
       setTimeout(() =>
         this._tarefa = t
       )
     }) */
  }
  constructor(
    private router: Router,
    private tarefas: TarefaService
  ) { }
  ngOnInit() {
  }
  remover() {
    this.removerEmitter.emit(this.tarefa);
  }
  editar() {
    // this.router.navigate(['/tarefa/editar/' + this.tarefa.numero])
  }
}
