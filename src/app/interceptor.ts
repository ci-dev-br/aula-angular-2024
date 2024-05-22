import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(
        private readonly auth: AuthService) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.auth.user && this.auth.user.value)
            req = req.clone({
                headers: req.headers.set('Authorization', this.auth.user.value.name)
            })
        return next.handle(req);
    }
}