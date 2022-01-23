import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { mergeMap, Observable, of, take } from 'rxjs';
import { Hero } from './heroes/hero.model';
import { HeroService } from './heroes/hero.service';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailResolveService implements Resolve<Hero> {

  constructor(private heroService: HeroService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Hero | Observable<Hero> | Promise<Hero> {
    const id = +route.paramMap.get('id')!; /*'+' is used to convert it to a number */

    return this.heroService.getHero(id).pipe(take(1), mergeMap(hero => of(hero))); /*
            We use the pipe operator to process the returned observable with two other
            RxJS operators. The take operator ensures that the observable completes after emitting the
            first value. The mergeMap operator is used to flatten the observable returned from the
            getHero method.
    */
  }
}


/*
  A resolver is an Angular service that implements the
  Resolve<T> interface, where T is the type of data that is resolved.
  The service needs to implement the resolve method of that interface
  explicitly. It returns resolved data either synchronously or asynchronously.
  In our case, since we are communicating with a backend API using the
  HTTP client, it returns an observable of a Hero object.

*/
