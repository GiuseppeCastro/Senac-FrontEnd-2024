import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartasRoutingModule } from './cartas-routing.module';
import { CartaListagemComponent } from './carta-listagem/carta-listagem.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartaListagemComponent
  ],
  imports: [
    CommonModule,
    CartasRoutingModule,
    HttpClientModule,
    FormsModule // Modulo de formularios
  ]
})
export class CartasModule { }
