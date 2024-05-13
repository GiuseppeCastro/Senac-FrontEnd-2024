import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Montadora } from '../models/montadora.model';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  
  CarroService: any;
  carros: any[];

  constructor(private http: HttpClient) { 
  }

  getCarrosFiltrados(filtros: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/senac-20241-backend-exemplos/rest/carro/filtro', filtros);
  }

  consultarCarros(filtros: any): void {
    this.CarroService.getCarrosFiltrados(filtros)
      .subscribe((data: any[]) => {
        this.carros = data;
      });
  }

  getMontadoras(): Montadora[] {
    // Lógica para buscar e retornar a lista de montadoras
    return [
      { id: 1, nome: 'Montadora 1', paisFundacao: 'País 1' },
      { id: 2, nome: 'Montadora 2', paisFundacao: 'País 2' },
      { id: 3, nome: 'Montadora 3', paisFundacao: 'País 3' }
    ];
  }
  

}
