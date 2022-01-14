import { Injectable } from '@angular/core';
import { Hero } from '../hero.model';

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

  constructor() { }

  getHeroes(): Hero[]{
  return [
  { id: 1, name: 'Boothstomper', team: 'avengers' },
  { id: 2, name: 'Drogfisher', team: 'avengers' },
  { id: 3, name: 'Bloodyllips', team: 'villains' },
  { id: 4, name: 'Mr Bu Moverse', team: 'villains' },
  { id: 5, name: 'Piranhaelli', team: '' }
  ];
  }
}
