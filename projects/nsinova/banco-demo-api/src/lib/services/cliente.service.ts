/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Cliente } from '../models/cliente';
import { clienteAutenticar } from '../fn/cliente/cliente-autenticar';
import { ClienteAutenticar$Params } from '../fn/cliente/cliente-autenticar';
import { clienteMe } from '../fn/cliente/cliente-me';
import { ClienteMe$Params } from '../fn/cliente/cliente-me';
import { clienteSincronizar } from '../fn/cliente/cliente-sincronizar';
import { ClienteSincronizar$Params } from '../fn/cliente/cliente-sincronizar';

@Injectable({ providedIn: 'root' })
export class ClienteService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `clienteSincronizar()` */
  static readonly ClienteSincronizarPath = '/Cliente/Sincronizar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clienteSincronizar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clienteSincronizar$Response(params: ClienteSincronizar$Params, context?: HttpContext): Observable<StrictHttpResponse<Cliente>> {
    return clienteSincronizar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clienteSincronizar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clienteSincronizar(params: ClienteSincronizar$Params, context?: HttpContext): Observable<Cliente> {
    return this.clienteSincronizar$Response(params, context).pipe(
      map((r: StrictHttpResponse<Cliente>): Cliente => r.body)
    );
  }

  /** Path part for operation `clienteAutenticar()` */
  static readonly ClienteAutenticarPath = '/Cliente/Autenticar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clienteAutenticar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clienteAutenticar$Response(params: ClienteAutenticar$Params, context?: HttpContext): Observable<StrictHttpResponse<Cliente>> {
    return clienteAutenticar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clienteAutenticar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clienteAutenticar(params: ClienteAutenticar$Params, context?: HttpContext): Observable<Cliente> {
    return this.clienteAutenticar$Response(params, context).pipe(
      map((r: StrictHttpResponse<Cliente>): Cliente => r.body)
    );
  }

  /** Path part for operation `clienteMe()` */
  static readonly ClienteMePath = '/Cliente/Me';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clienteMe()` instead.
   *
   * This method doesn't expect any request body.
   */
  clienteMe$Response(params?: ClienteMe$Params, context?: HttpContext): Observable<StrictHttpResponse<Cliente>> {
    return clienteMe(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `clienteMe$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clienteMe(params?: ClienteMe$Params, context?: HttpContext): Observable<Cliente> {
    return this.clienteMe$Response(params, context).pipe(
      map((r: StrictHttpResponse<Cliente>): Cliente => r.body)
    );
  }

}
