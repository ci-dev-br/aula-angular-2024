import { Pipe, PipeTransform } from '@angular/core';
import { Tarefa } from 'src/api/models';

@Pipe({
  name: 'tarefa',
})
export class TarefaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `${value.descricao}`;
  }

}
