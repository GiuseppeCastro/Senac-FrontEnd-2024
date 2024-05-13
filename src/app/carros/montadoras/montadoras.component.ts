import { Component, OnInit } from '@angular/core';
import { Montadora } from '../../shared/models/montadora.model';
import { CarrosService } from '../../shared/service/carros.service';

@Component({
  selector: 'app-montadora',
  templateUrl: 'C:\Users\giuseppe.castro\Desktop\senac-frontend-20241-matheusbarcelos-master\src\app\carros\montadoras\montadoras.component.html',
})
export class MontadoraComponent implements OnInit {
  montadoras: Montadora[] = [];
  montadoraSelecionada: Montadora = new Montadora(); 

  constructor(private carrosService: CarrosService) { }

  ngOnInit(): void {
    this.carregarMontadoras();
  }

  carregarMontadoras(): void {
    this.montadoras = this.carrosService.getMontadoras();
  }

  consultarEstoqueCarros(idMontadora: number): void {
    console.log('Consultar estoque da montadora com o ID:', idMontadora);
  }
}
