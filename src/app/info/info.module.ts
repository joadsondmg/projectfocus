import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [
    InfoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
    
  ]
})
export class InfoModule { }
