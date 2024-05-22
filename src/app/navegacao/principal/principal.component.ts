import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/pokedex.service';
import { IPokemon } from './models/Pokemon';

@Component({
  selector: 'nx-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
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
