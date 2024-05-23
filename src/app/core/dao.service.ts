import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor() { }

  peparar(data: any) {
    if (typeof data === 'object') {
      Object.defineProperty(data, '$initial_value', {
        value: { ...data }
      })
    }

    return data;
  }
  toSave(data: any, chave = 'internalId') {
    if (typeof data === 'object') {
      if ('$initial_value' in data) {
        let _to_save: any = { [chave]: data[chave] }
        Object.keys(data).forEach(p => {
          if (data.$initial_value[p] !== data[p]) _to_save[p] = data[p];
        })
        return _to_save;
      } else {
        throw new Error('Objeto não foi preparado para alteração.')
      }
    }
  }
}
