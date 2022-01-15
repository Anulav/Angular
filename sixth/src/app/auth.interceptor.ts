import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({ setHeaders: { Authorization: 'myAuthToken'}}); /* HttpRequest objects are immutable. If we need to modify them, we need to use their
    clone method. The HttpHeaders object is also immutable. We can't just create a new
    instance of headers. Instead, we use the shorthand setHeaders method to update them.


    */
    return next.handle(request);  /* Like chain of interceptors*/
  }


}


/*
  To set a header, we use the header key of the option's object and create a new instance of HttpHeaders as a value.
  The HttpHeaders object is a key-value pair that defines custom HTTP headers.

  Now imagine what is going to happen if we have many requests that require the
  authentication token. We should go to each one of them and write the same piece of code
  again and again. Our code could quickly become cluttered and difficult to test. Luckily,
  the Angular built-in HTTP library has another feature that we can use to help us in such a
  situation – HTTP interceptors.

  An HTTP interceptor is an Angular service that intercepts HTTP requests and responses
  originating from HttpClient. It can be used in the following scenarios:
  • When we want to pass custom HTTP headers in every request, such as an
  authentication token
  • When we want to display a loading indicator while we wait for a response from
  the server
  • When we want to provide a logging mechanism for every HTTP communication

  We create an interceptor as we would typically create an Angular service. The only
  differences are the following:
  • It must implement the HttpInterceptor interface.
  • It should not set the providedIn property in the @Injectable decorator:

  The HttpInterceptor interface contains a method named intercept that our interceptor must implement.
  It accepts two parameters: an object that indicates the current request, and HttpRequest
  an HttpHandler object that denotes the next interceptor in the chain. The purest form of
  an interceptor is to delegate the request to the next interceptor using the handle
  method.


*/
