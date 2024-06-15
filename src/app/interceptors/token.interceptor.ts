import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';

export class TokenInterceptor implements HttpInterceptor {
  window: Window;

  constructor(
    private router: Router,
    private document: Document,
  ) {
    this.window = this.document.defaultView as Window;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if account is logged in and request is to the api url
    // const headers = { req_uuid: (Date.now() + Math.random()).toString(), Authorization: '' };
    // const account = this.accountService.accountValue;
    const isLoggedIn = true; // account?.token;
    const isApiUrl = true; //request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ou812` },
        // setHeaders: { Authorization: `Bearer ${account.token}` }
      });
    }
    return next.handle(request);
  }
}
