import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { authGuard } from './auth.guard';
import { routeAnalysisGuard } from './route-analysis.guard';
import { routeAdminGuard } from './route-admin.guard';
const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'info', loadChildren: () => import('./info/info.module').then(m => m.InfoModule), canActivate: [authGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'analysis', loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule), canActivate: [routeAnalysisGuard] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [routeAdminGuard] },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
