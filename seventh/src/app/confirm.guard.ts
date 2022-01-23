import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';

@Injectable({
  providedIn: 'root'
})

/*
    To prevent access to a route, we can also prevent navigating away from a route
    using the CanDeactivate<T> interface. T indicates the component class from which
    we want to navigate away. We need to implement the canDeactivate method in a
    guard to start using it.


*/
export class ConfirmGuard implements CanActivate, CanDeactivate<HeroDetailComponent> { /* set the type of the CanDeactivate interface to HeroDetailComponent
  because we want to check whether the user navigates away from this component only. */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: HeroDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.showConfirm();
  }

  private  showConfirm(): Observable<boolean>{
    const confirmation = window.confirm('Are you sure?');
    return of(confirmation);
  }

}
