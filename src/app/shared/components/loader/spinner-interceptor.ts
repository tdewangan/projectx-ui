import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from './spinner-service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private spinner: SpinnerService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinner.showLoader();
    return next.handle(req).pipe(finalize(() => this.spinner.hideLoader()));
  }
}
