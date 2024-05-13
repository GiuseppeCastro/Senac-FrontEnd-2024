import { Component, OnInit } from '@angular/core';
import { CarrosService } from '../../shared/service/carros.service';



@Component({
  selector: 'app-lista',
  //standalone: true,
  //imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit{
  filtroMarca: any;
  filtroModelo: any;
  filtroAnoFinal: any;
  filtroAnoInicial: any;

  constructor(private carrosService: CarrosService) { }

  ngOnInit(): void {
    this.consultarCarros({});
  }

  carros: any[] = [];

  consultarCarros(filtros: any): void {
    this.carrosService.getCarrosFiltrados(filtros)
      .subscribe((data: any[]) => {
        this.carros = data; 
      });
  }

  aplicarFiltros(): void {
    const filtros = {
      marca: this.filtroMarca,
      modelo: this.filtroModelo,
      anoInicial: this.filtroAnoInicial,
      anoFinal: this.filtroAnoFinal
    };
    this.consultarCarros(filtros);
  }

}
