import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IPokemon, Pokemon } from './navegacao/principal/models/Pokemon';


export interface Result {
  count: number;
  next?: string;
  preious?: string;
  results: IPokemon[];
}
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(
    @Inject('API_URL')
    private URL: string,
    private http: HttpClient,
  ) { }


  async listar(next_or_prev_url?: string) {
    return (this.http.get<Result>(next_or_prev_url || (this.URL + 'pokemon/'))
      .pipe(map(v => {
        v.results.map(p => {
          this.getInfo(p).then((info: any) => {
            p.front_default = info.sprites.front_default;
          })
          return p;
        })
        v.results.map(p => new Pokemon(p));
        return v;
      }))
      .toPromise())
  }


  async getInfo(poke: Pokemon | IPokemon) {
    return this.http.get<Result>(poke.url).toPromise()

  }
}
