import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/pokedex.service';
import { IPokemon } from './models/Pokemon';

@Component({
  selector: 'nx-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  ngOnInit() {

  }

}
