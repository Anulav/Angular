import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate/*, CanLoad */ {
  private isAuthenticated: boolean = true; /* In a real-world application, we would delegate the decision of whether a user is
                                              authenticated or not to a separate Angular service. The service would probably
                                              check the local storage of the browser or any other means to indicate whether
                                              the user has already authenticated or not.
  */

  constructor(private router: Router){

  }
/*  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkLogin(); /* Protecting lazy loaded module using the canLoad interface*/
/*                                Commenting it out to check the CustomPreloadingService
  } */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  private checkLogin(): boolean{    /* We created a separate checkLogin method that handles the logic of whether to allow
    access to the route or not. The canActivate method calls the checkLogin method
    and returns its value. It checks the value of the isAuthenticated property,
    and if it is true, the application can navigate to the specified route. Otherwise, it uses the
    Router service to navigate to the root path of the Angular app and returns false so that the
    previous navigation can be canceled.
    */

    if(this.isAuthenticated)
     return true;
    this.router.navigate(['/']);
    return false;
  }

}
