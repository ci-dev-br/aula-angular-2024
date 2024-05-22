import { Pipe, PipeTransform } from '@angular/core';
import { Tarefa } from './model/tarefa';

@Pipe({
  name: 'tarefa',
})
export class TarefaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value instanceof Tarefa) return `${value.descricao}`
    return null;
  }

}
