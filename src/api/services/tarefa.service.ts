/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root',
})
export class TarefaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tarefaSincronizar
   */
  static readonly TarefaSincronizarPath = '/Tarefa/Sincronizar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tarefaSincronizar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tarefaSincronizar$Response(params: {
      body: Tarefa
  }): Observable<StrictHttpResponse<Tarefa>> {

    const rb = new RequestBuilder(this.rootUrl, TarefaService.TarefaSincronizarPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Tarefa>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tarefaSincronizar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tarefaSincronizar(params: {
      body: Tarefa
  }): Observable<Tarefa> {

    return this.tarefaSincronizar$Response(params).pipe(
      map((r: StrictHttpResponse<Tarefa>) => r.body as Tarefa)
    );
  }

  /**
   * Path part for operation tarefaListar
   */
  static readonly TarefaListarPath = '/Tarefa/Listar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tarefaListar()` instead.
   *
   * This method doesn't expect any request body.
   */
  tarefaListar$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Tarefa>>> {

    const rb = new RequestBuilder(this.rootUrl, TarefaService.TarefaListarPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Tarefa>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tarefaListar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tarefaListar(params?: {

  }): Observable<Array<Tarefa>> {

    return this.tarefaListar$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Tarefa>>) => r.body as Array<Tarefa>)
    );
  }

}
