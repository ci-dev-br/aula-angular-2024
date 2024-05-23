import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../models/Pokemon';
import { PokedexService } from 'src/app/pokedex.service';

@Component({
  selector: 'nx-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  ps: IPokemon[] = [];
  constructor(
    private pokedex: PokedexService,
  ) { }

  async ngOnInit() {
    // let a
    // 
    // 
    // this.ps = .results;
    this.carregarLista();
  }

  async carregarLista(next_or_prev_url?: string) {
    let r = (await this.pokedex.listar(next_or_prev_url));
    this.ps = [...(this.ps || []), ...r.results];
    if (r.next) {
      setTimeout(() => {
        this.carregarLista(r.next);
      })
    }
  }

  async more(p: IPokemon) {
    let info: any = await this.pokedex.getInfo(p)

  }
}


