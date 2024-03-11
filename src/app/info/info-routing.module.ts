import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';
import { ExameComponent } from '../exame/exame.component';

const routes: Routes = [
  { path: '', component: InfoComponent , children: [
    { path: 'exame', component:ExameComponent }
  ]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
