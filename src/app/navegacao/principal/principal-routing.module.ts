import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal.component';


const routes: Routes = [
  {
    path: '', component: PrincipalComponent, children: [
      { path: 'pokedex', loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule) },
      { path: 'capturar', loadChildren: () => import('./capturar/capturar.module').then(m => m.CapturarModule) },
      { path: 'mapa', loadChildren: () => import('./mapa/mapa.module').then(m => m.MapaModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
