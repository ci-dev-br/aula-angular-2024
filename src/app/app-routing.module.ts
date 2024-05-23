import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'tarefa', canActivate: [AuthGuard], loadChildren: () => import('./tarefas/tarefas.module').then(m => m.TarefasModule) },
  { path: '', loadChildren: () => import('./navegacao/navegacao.module').then(m => m.NavegacaoModule) },
  // { path: '**', pathMatch: 'full', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
