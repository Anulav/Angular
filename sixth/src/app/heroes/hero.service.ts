import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'   /* An Angular service, by default, is not registered with a specific module like components, directives, and pipes are. Instead, it is registered with an injector
                        – the root injector of the Angular application – as defined in the option: providedIn

                        An Angular service is configured with the root injector when created with the CLI, by
                        default. The root injector creates singleton services that are globally available through the
                        application. Alternatively, we can pass different values to the providedIn property to
                        register the service with a different type of injector: "class" to make the service available to this module only,
                        "any" to create a new instance every time Ng inserts in via dependency injection,
                        "platform" same instance for same paltform.

                        Injecting services using providedIn: root vs declarations in module.
                        The main difference between them is that the providedIn syntax is tree shakable.

                        The @Component decorator has a providers property that's similar to the @NgModule decorator to register services with a component injector. A service that
                        registers with the component injector can serve two purposes:
                        • It can be shared with the child components of the component that provides
                        the service.
                        • It can create multiple copies of the service every time the component that provides
                        the service is rendered.

                        */
})
export class HeroService {

  private url : string = 'api/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
  return this.http.get<Hero[]>('api/heroes');
  }

  createHero(name :string): Observable<Hero> {
    const hero = {name};
    console.log(hero);
    return this.http.post<Hero>(this.url, hero);
  }

  editHero(id: number, hero: Hero) : Observable<any>{
    console.log(hero);
    return this.http.put(this.url+"/"+id, hero);
  }

  deleteHero(id: number): Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }

}


/*
  They append the id of the hero that we want to update or delete in the URL
  endpoint. Why is that? The in-memory web API does its best to behave like a real
  backend REST API by making a number of assumptions. One of them is that all
  collections must contain a field with the name id, which acts as the primary key of
  each object in the collection.
*/
