/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Cliente } from '../../models/cliente';

export interface ClienteAutenticar$Params {
      body: Cliente
}

export function clienteAutenticar(http: HttpClient, rootUrl: string, params: ClienteAutenticar$Params, context?: HttpContext): Observable<StrictHttpResponse<Cliente>> {
  const rb = new RequestBuilder(rootUrl, clienteAutenticar.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Cliente>;
    })
  );
}

clienteAutenticar.PATH = '/Cliente/Autenticar';
