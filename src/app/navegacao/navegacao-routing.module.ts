import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'registrar', loadChildren: () => import('./registrar/registrar.module').then(m => m.RegistrarModule) },
  { path: 'principal', canActivate: [AuthGuard], loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule) },
  { path: 'profile', canActivate: [AuthGuard], loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'dash', canActivate: [AuthGuard], loadChildren: () => import('./dash/dash.module').then(m => m.DashModule) },
  { path: 'contas', canActivate: [AuthGuard], loadChildren: () => import('./contas/contas.module').then(m => m.ContasModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavegacaoRoutingModule { }
