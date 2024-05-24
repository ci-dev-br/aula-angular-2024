import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TraducaoModule } from '@nsinova/traducao';
export interface IColuna {
  headerName: string;
  field: string;
}

/**
 * Componente de Data Grid para Visualização de Dados em forma de Tabela projetada com colunas
 * 
 * 
 */
@Component({
  selector: 'nx-data-grid',
  standalone: true,
  imports: [
    TraducaoModule
  ],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss'
})
export class DataGridComponent<E> {
  @Input()
  colunas?: IColuna[];
  @Input()
  data?: E[];

  // @ViewChild('tete')
  // co: ElementRef<HTMLInputElement>
}
