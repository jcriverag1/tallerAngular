import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptorService implements HttpInterceptor {
  constructor(private toastrService: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        let errorMessage = '';

        if (httpErrorResponse.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = httpErrorResponse.error.message;
        } else {
          const errorType = 'Server side error';
          if (httpErrorResponse.status === 0) {
            errorMessage = 'No hay conexión con el servidor';
          } else if (httpErrorResponse.error && httpErrorResponse.error.error) {
            errorMessage = `${httpErrorResponse.status}: ${httpErrorResponse.error.error}`;
          } else {
            errorMessage = `${httpErrorResponse.status}: ${httpErrorResponse.message}`;
          }
          this.toastrService.error(errorMessage, errorType, { closeButton: true });
        }

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}