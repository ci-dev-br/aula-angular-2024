/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Tarefa } from '../models/tarefa';
import { tarefaListar } from '../fn/tarefa/tarefa-listar';
import { TarefaListar$Params } from '../fn/tarefa/tarefa-listar';
import { tarefaSincronizar } from '../fn/tarefa/tarefa-sincronizar';
import { TarefaSincronizar$Params } from '../fn/tarefa/tarefa-sincronizar';

@Injectable({ providedIn: 'root' })
export class TarefaService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tarefaSincronizar()` */
  static readonly TarefaSincronizarPath = '/Tarefa/Sincronizar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tarefaSincronizar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tarefaSincronizar$Response(params: TarefaSincronizar$Params, context?: HttpContext): Observable<StrictHttpResponse<Tarefa>> {
    return tarefaSincronizar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tarefaSincronizar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tarefaSincronizar(params: TarefaSincronizar$Params, context?: HttpContext): Observable<Tarefa> {
    return this.tarefaSincronizar$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tarefa>): Tarefa => r.body)
    );
  }

  /** Path part for operation `tarefaListar()` */
  static readonly TarefaListarPath = '/Tarefa/Listar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tarefaListar()` instead.
   *
   * This method doesn't expect any request body.
   */
  tarefaListar$Response(params?: TarefaListar$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Tarefa>>> {
    return tarefaListar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tarefaListar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tarefaListar(params?: TarefaListar$Params, context?: HttpContext): Observable<Array<Tarefa>> {
    return this.tarefaListar$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Tarefa>>): Array<Tarefa> => r.body)
    );
  }

}
