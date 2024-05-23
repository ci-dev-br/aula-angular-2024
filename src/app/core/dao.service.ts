import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor() { }

  preparar(data: any){
    if(typeof data === 'object'){
      Object.defineProperty(data, '$initial_value', {
        value: {...data}
      })
    }

    return data;
  }

  toSave(data: any){
    if(typeof data === 'object'){
      let to_save: any = { internalId: data.internalId }
      Object.keys(data).forEach(p => {
        if(data.$initial_value[p] !== data[p]) to_save[p] = data[p]
      })        
      return to_save;
    } else {
      throw new Error('Objeto não preparado para alteração')
    }
  }

}


