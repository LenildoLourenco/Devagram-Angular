import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';



@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CompartilhadoModule
  ],
  exports: [
    CabecalhoComponent
  ]
})
export class LayoutModule { }