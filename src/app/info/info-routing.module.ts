import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';
import { ExameComponent } from '../exame/exame.component';

const routes: Routes = [
  { path: '', component: InfoComponent }, 
  { path: 'exame', component:ExameComponent, loadChildren: () => import('../exame/exame.module').then(m => m.ExameModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
