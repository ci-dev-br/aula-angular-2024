import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep',
  pure: false
})
export class CepPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.valor;
  }
}
