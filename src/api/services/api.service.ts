/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { appControllerGetHello } from '../fn/operations/app-controller-get-hello';
import { AppControllerGetHello$Params } from '../fn/operations/app-controller-get-hello';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `appControllerGetHello()` */
  static readonly AppControllerGetHelloPath = '/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appControllerGetHello()` instead.
   *
   * This method doesn't expect any request body.
   */
  appControllerGetHello$Response(params?: AppControllerGetHello$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return appControllerGetHello(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `appControllerGetHello$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  appControllerGetHello(params?: AppControllerGetHello$Params, context?: HttpContext): Observable<void> {
    return this.appControllerGetHello$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
