import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy {

  constructor() { }
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if(route.data && route.data['preload'])
      return fn();
    return EMPTY;
  } /*
  The preload method accepts two parameters: a Route object, which represents
  the lazy-loaded route, and a load method that is called if the route should be
  preloaded. Otherwise, it should return an empty observable. We use the EMPTY
  RxJS operator to denote that an observable does not emit any value.

  Define whether a route should be preloaded by using the data property of the
  Route object. The data property of a route configuration object can be used for
  storing arbitrary data associated with the route, such as a page title, breadcrumbs, or
  other static data.
  */
}
