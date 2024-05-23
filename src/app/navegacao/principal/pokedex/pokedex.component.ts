import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../models/Pokemon';
import { PokedexService } from 'src/app/pokedex.service';

@Component({
  selector: 'nx-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  ps: IPokemon[]
  constructor(
    private pokedex: PokedexService,
  ) { }

  async ngOnInit() {
    this.ps = (await this.pokedex.listar()).results;
  }

  async more(p: IPokemon) {
    let info: any = await this.pokedex.getInfo(p)

  }
}
