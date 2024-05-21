import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefasComponent } from './tarefas.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';


const routes: Routes = [
  {
    path: '', component: TarefasComponent, children: [
      { path: 'editar/:num', component: EditarTarefaComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
