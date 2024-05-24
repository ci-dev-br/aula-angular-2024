import { Pipe, PipeTransform } from '@angular/core';
import { Tarefa } from '@nsinova/banco-demo-api';

@Pipe({
  name: 'tarefa',
})
export class TarefaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `${value.descricao}`;
  }

}
