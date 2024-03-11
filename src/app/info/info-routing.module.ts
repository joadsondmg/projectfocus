import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';

const routes: Routes = [
  { path: '', component: InfoComponent }, 
  { path: 'exame', loadChildren: () => import('../exame/exame.module').then(m => m.ExameModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
