import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasComponent } from '../tarefas/tarefas.component';
import { ItemTarefaComponent } from './item-tarefa/item-tarefa.component';
import { PintarDeRedDirective } from '../pintar-de-red.directive';
import { TarefaPipe } from './tarefa.pipe';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { FormsModule } from '@angular/forms';
import { TarefaService } from './tarefa.service';


@NgModule({
  declarations: [
    TarefasComponent,
    ItemTarefaComponent,
    PintarDeRedDirective,
    TarefaPipe,
    EditarTarefaComponent,
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    FormsModule,
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
