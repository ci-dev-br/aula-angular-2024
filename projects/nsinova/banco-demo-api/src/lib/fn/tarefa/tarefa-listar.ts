/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tarefa } from '../../models/tarefa';

export interface TarefaListar$Params {
}

export function tarefaListar(http: HttpClient, rootUrl: string, params?: TarefaListar$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Tarefa>>> {
  const rb = new RequestBuilder(rootUrl, tarefaListar.PATH, 'post');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Tarefa>>;
    })
  );
}

tarefaListar.PATH = '/Tarefa/Listar';
