import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionalidadeComponent } from './funcionalidade.component';

const routes: Routes = [{path: 'git', component:FuncionalidadeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionalidadeRoutingModule { }
