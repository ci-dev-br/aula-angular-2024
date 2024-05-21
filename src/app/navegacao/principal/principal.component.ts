import { Component, OnInit } from '@angular/core';
import { PokedexService, Pokemon } from 'src/app/pokedex.service';

@Component({
  selector: 'nx-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  ps: Pokemon[]
  constructor(
    private pokedex: PokedexService,
  ) { }

  async ngOnInit() {
    this.ps = (await this.pokedex.listar()).results;
  }

  async more(p: Pokemon) {
    let info: any = await this.pokedex.getInfo(p)

  }

}
