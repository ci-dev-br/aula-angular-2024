/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Conta } from '../../models/conta';

export interface ContaListar$Params {
}

export function contaListar(http: HttpClient, rootUrl: string, params?: ContaListar$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Conta>>> {
  const rb = new RequestBuilder(rootUrl, contaListar.PATH, 'post');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Conta>>;
    })
  );
}

contaListar.PATH = '/Conta/Listar';
