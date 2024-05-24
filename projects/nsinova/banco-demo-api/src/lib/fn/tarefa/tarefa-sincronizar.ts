/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tarefa } from '../../models/tarefa';

export interface TarefaSincronizar$Params {
      body: Tarefa
}

export function tarefaSincronizar(http: HttpClient, rootUrl: string, params: TarefaSincronizar$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarefa>> {
  const rb = new RequestBuilder(rootUrl, tarefaSincronizar.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Tarefa>;
    })
  );
}

tarefaSincronizar.PATH = '/Tarefa/Sincronizar';
