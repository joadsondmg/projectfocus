import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExameRoutingModule } from './exame-routing.module';
import { ExameComponent } from './exame.component';


@NgModule({
  declarations: [
    ExameComponent
  ],
  imports: [
    CommonModule,
    ExameRoutingModule
  ]
})
export class ExameModule { }
