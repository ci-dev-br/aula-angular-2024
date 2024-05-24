/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Cliente } from '../../models/cliente';

export interface ClienteMe$Params {
}

export function clienteMe(http: HttpClient, rootUrl: string, params?: ClienteMe$Params, context?: HttpContext): Observable<StrictHttpResponse<Cliente>> {
  const rb = new RequestBuilder(rootUrl, clienteMe.PATH, 'post');
  if (params) {
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

clienteMe.PATH = '/Cliente/Me';
