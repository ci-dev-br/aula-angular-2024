import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal.component';


const routes: Routes = [
  {
    path: '', component: PrincipalComponent, children: [
      { path: 'pokedex', loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule) },
      { path: 'mapa', loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
