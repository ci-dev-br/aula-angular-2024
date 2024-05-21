import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'registrar', canActivate: [], loadChildren: () => import('./registrar/registrar.module').then(m => m.RegistrarModule) },
  { path: 'principal', canActivate: [AuthGuard], loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavegacaoRoutingModule { }
