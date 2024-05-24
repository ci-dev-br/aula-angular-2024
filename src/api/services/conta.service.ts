/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Conta } from '../models/conta';
import { contaListar } from '../fn/conta/conta-listar';
import { ContaListar$Params } from '../fn/conta/conta-listar';
import { contaSincronizar } from '../fn/conta/conta-sincronizar';
import { ContaSincronizar$Params } from '../fn/conta/conta-sincronizar';

@Injectable({ providedIn: 'root' })
export class ContaService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `contaSincronizar()` */
  static readonly ContaSincronizarPath = '/Conta/Sincronizar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contaSincronizar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contaSincronizar$Response(params: ContaSincronizar$Params, context?: HttpContext): Observable<StrictHttpResponse<Conta>> {
    return contaSincronizar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contaSincronizar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contaSincronizar(params: ContaSincronizar$Params, context?: HttpContext): Observable<Conta> {
    return this.contaSincronizar$Response(params, context).pipe(
      map((r: StrictHttpResponse<Conta>): Conta => r.body)
    );
  }

  /** Path part for operation `contaListar()` */
  static readonly ContaListarPath = '/Conta/Listar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contaListar()` instead.
   *
   * This method doesn't expect any request body.
   */
  contaListar$Response(params?: ContaListar$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Conta>>> {
    return contaListar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contaListar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contaListar(params?: ContaListar$Params, context?: HttpContext): Observable<Array<Conta>> {
    return this.contaListar$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Conta>>): Array<Conta> => r.body)
    );
  }

}
