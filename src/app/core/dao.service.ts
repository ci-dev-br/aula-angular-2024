import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor() { }

  preparar(data: any, chave = 'internalId'){
    if(data != null && data != undefined && typeof data === 'object'){
      Object.defineProperties(data, {
        '$initial_value': {
          value: { ...data }
        },
        'toJSON': {
          value: () => {
            return this.toSave(data, chave);
          }
        }
      })
      Object.keys(data).forEach(p => {

        if(data[p] != null && typeof data[p] === 'object') return; 
        if(typeof data[p] === 'object' && data[p] != null && chave in data[p])
          this.preparar(data[p], chave);

      })

    }
      return data;
  }

  toSave(data: any, chave = 'iternalId'){
    if(typeof data === 'object'){
      if('$initial_value' in data){
        let to_save: any = { internalId: data.internalId }
        Object.keys(data).forEach(p => {
          if(
            (data[p] != null && typeof data[p] === 'object') || 
            (data.$initial_value[p] !== data[p])
          ){
            to_save[p] = data[p];
          }
          })        
      return to_save;
    } else {
      throw new Error('Objeto não preparado para alteração')
    }
  }

}

  bindForm(form: FormGroup, data: any, chave = 'internalId'){
    form.reset(data);
    form.valueChanges.subscribe(changes => {
      Object.assign(data, changes)
    })

    if(data != null && data != undefined && typeof data === 'object'){
      Object.keys(data).forEach(propriedade => {
        if(propriedade.indexOf('$') > -1) return;
        let privates = {...data};
        Object.defineProperty(data, propriedade, {
          get: () => { return privates[propriedade] },
          set: (v) => { 
            if(privates[propriedade] === v) return;
            privates[propriedade] = v;
            form.get(propriedade)?.setValue(v);
          }
        })
      })
    }

    this.preparar(data, chave);
  }

}



