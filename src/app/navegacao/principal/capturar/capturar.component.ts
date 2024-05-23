import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-capturar',
  standalone: true,
  imports: [],
  templateUrl: './capturar.component.html',
  styleUrl: './capturar.component.scss'
})
export class CapturarComponent {
  @Input() pokemonName: string;
  @Input() pokemonImage: string;

  isPokemonCaptured = false;

  toggleOpen() {
    // Animação para abrir ou fechar a Pokébola (opcional)
  }

  capturePokemon() {
    // Lógica para capturar o Pokémon (por exemplo, chamar um serviço HTTP)
    this.isPokemonCaptured = true;
  }
}
