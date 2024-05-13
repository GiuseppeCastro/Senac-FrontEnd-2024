import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { MontadoraComponent } from './montadoras/montadoras.component';
import { CarrosRoutingModule } from './carros-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListaComponent,
    MontadoraComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CarrosRoutingModule,
  ],
  exports: [RouterModule]
})
export class CarrosModule { }