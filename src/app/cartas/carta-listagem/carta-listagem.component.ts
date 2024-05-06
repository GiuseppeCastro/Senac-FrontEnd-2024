import { Component } from '@angular/core';
import { Carta } from '../../shared/model/carta';
import { CartaSeletor } from '../../shared/model/seletor/carta.seletor';
import { CartasService } from '../../shared/service/cartas.service';

//Entidade Carta
//Depois sera substituido por arquivo com a entidade


@Component({
  selector: 'app-carta-listagem',
  templateUrl: './carta-listagem.component.html',
  styleUrl: './carta-listagem.component.scss'
})
export class CartaListagemComponent {

  public cartas: Carta[] = [];
  public seletor: CartaSeletor = new CartaSeletor();

  constructor(private cartaService: CartasService) { }

  ngOnInit(): void {
  }

  pesquisar(){
    this.cartaService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.cartas = resultado;
      },
      erro => {
        console.error('Erro ao consultar cartas', erro);
      }
    );
  }

  public limpar(){
    this.seletor = new CartaSeletor
  }
}
