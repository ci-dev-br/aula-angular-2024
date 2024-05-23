/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation clienteSincronizar
   */
  static readonly ClienteSincronizarPath = '/Cliente/Sincronizar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clienteSincronizar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clienteSincronizar$Response(params: {
      body: Cliente
  }): Observable<StrictHttpResponse<Cliente>> {

    const rb = new RequestBuilder(this.rootUrl, ClienteService.ClienteSincronizarPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Cliente>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `clienteSincronizar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clienteSincronizar(params: {
      body: Cliente
  }): Observable<Cliente> {

    return this.clienteSincronizar$Response(params).pipe(
      map((r: StrictHttpResponse<Cliente>) => r.body as Cliente)
    );
  }

  /**
   * Path part for operation clienteAutenticar
   */
  static readonly ClienteAutenticarPath = '/Cliente/Autenticar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clienteAutenticar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clienteAutenticar$Response(params: {
      body: Cliente
  }): Observable<StrictHttpResponse<Cliente>> {

    const rb = new RequestBuilder(this.rootUrl, ClienteService.ClienteAutenticarPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Cliente>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `clienteAutenticar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  clienteAutenticar(params: {
      body: Cliente
  }): Observable<Cliente> {

    return this.clienteAutenticar$Response(params).pipe(
      map((r: StrictHttpResponse<Cliente>) => r.body as Cliente)
    );
  }

  /**
   * Path part for operation clienteMe
   */
  static readonly ClienteMePath = '/Cliente/Me';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clienteMe()` instead.
   *
   * This method doesn't expect any request body.
   */
  clienteMe$Response(params?: {

  }): Observable<StrictHttpResponse<Cliente>> {

    const rb = new RequestBuilder(this.rootUrl, ClienteService.ClienteMePath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Cliente>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `clienteMe$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clienteMe(params?: {

  }): Observable<Cliente> {

    return this.clienteMe$Response(params).pipe(
      map((r: StrictHttpResponse<Cliente>) => r.body as Cliente)
    );
  }

}
