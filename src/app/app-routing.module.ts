import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'home', component: HomeComponent, loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'info', component: InfoComponent, loadChildren: () => import('./info/info.module').then(m => m.InfoModule), canActivate: [authGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
