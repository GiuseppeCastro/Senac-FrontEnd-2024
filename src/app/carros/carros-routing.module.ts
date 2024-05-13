import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { MontadoraComponent } from './montadoras/montadoras.component';

const routes: Routes = [
  {path: 'lista', component: ListaComponent},
  {path: 'montadoras', component: MontadoraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }