import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor() { }

  preparar(data: any, chave = 'internalId') {
    if (data !== null && typeof data === 'object') {
      Object.defineProperties(data, {
        $initial_value: { value: { ...data } },
        toJSON: {
          value: () => {
            return this.toSave(data, chave);
          }
        }
      });
      Object.keys(data).forEach(p => {
        if (data[p] instanceof Date || data[p] === null) return;
        if (typeof data[p] === 'object' && chave in data[p]) {
          this.preparar(data[p], chave);
        }
      })
    }
    return data;
  }
  toSave(data: any, chave = 'internalId') {
    if (typeof data === 'object') {
      if ('$initial_value' in data) {
        let _to_save: any = { [chave]: data[chave] }
        Object.keys(data).forEach(p => {
          if (
            (data[p] !== null && typeof data[p] === 'object') ||
            (data.$initial_value[p] !== data[p]))
            _to_save[p] = data[p];
        })
        return _to_save;
      } else {
        throw new Error('Objeto não foi preparado para alteração.')
      }
    }
  }

  bindForm(form: FormGroup, data: any, chave = 'internalId') {
    form.reset(data);
    form.valueChanges.subscribe(changes => {
      Object.assign(data, changes)
    });
    if (data !== null && typeof data === 'object') {
      Object.keys(data).forEach(propriedade => {
        if (propriedade.indexOf('$') > -1) return;
        let _privates = { ...data };
        Object.defineProperty(data, propriedade, {
          get: () => { return _privates[propriedade]; },
          set: (v) => {
            if (_privates[propriedade] === v) return;
            _privates[propriedade] = v;
            form.get(propriedade)?.setValue(v);
          }
        })
      })
    }
    this.preparar(data, chave);
  }
}
