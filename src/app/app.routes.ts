import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

  {path: '', redirectTo: 'carros', pathMatch: 'full'},
  {
     path: 'carros', 
    loadChildren: () => import('./carros/carros.module').then(m => m.CarrosModule)
 },
  {
    path: 'cartas',
    loadChildren: () => import('./cartas/cartas.module').then(m=> m.CartasModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
