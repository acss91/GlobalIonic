import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { map, catchError } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
  
  @Injectable()
  export class HttpConfigInterceptor implements HttpInterceptor {
    
    constructor() { }
  
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
      const token = "accessKey 394772d23dfb455a9fc5ee31ce8ee53a";
  
      //Authentication by setting header with token value
      if (token) {
        request = request.clone({
          setHeaders: {
            'Authorization': token
          }
        });
      }
  
      if (!request.headers.has('Content-Type')) {
        request = request.clone({
          setHeaders: {
            'content-type': 'application/json'
          }
        });
      }
  
      request = request.clone({
        headers: request.headers.set('Accept', 'application/json')
      });
      request = request.clone({
        headers: request.headers.set("Access-Control-Allow-Origin", "https://heroes.globalthings.net/api/Heroes")
      });
      request = request.clone({
        headers: request.headers.set('access-control-allow-headers', 'accessKey')
      });
      request = request.clone({
        headers: request.headers.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
      });
      request = request.clone({
        headers: request.headers.set("access-control-allow-credentials", "false")
      });
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          return throwError(error);
        }));
    }
  
  
  }