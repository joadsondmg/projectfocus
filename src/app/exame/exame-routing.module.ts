import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExameComponent } from './exame.component';

const routes: Routes = [
  { path: '', component: ExameComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExameRoutingModule { }
