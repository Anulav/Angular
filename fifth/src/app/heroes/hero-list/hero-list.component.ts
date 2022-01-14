import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero.model';
import { HeroService } from '../hero.service';


/*
Remember: the component should only be concerned with presentation logic.
Earlier we had used array in the component for simplicity but from now on,
We should effectively delegate business logic tasks away from the component.

*/


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]  //Added hero Service as provider for HeroListComponent.
  /* Services that are provided with the application root injector are available through the
    whole application. When a component wants to use such a service, it only needs to inject
    it through its constructor, nothing more. Now, if the component provides the same
    service through its injector, it will get an instance of the service that is entirely differen
    from the one from the root injector. This is a technique called service scope limiting
  */


})
export class HeroListComponent implements OnInit {

  heroes! : Hero[];
  // private heroService: HeroService;
  // constructor() {
  //   this.heroService = new HeroService();
  //  }

  /* As shown below, Now, the component does not need to know how to instantiate the service. On the other
    hand, it expects such a dependency to be already available before it is instantiated so that
    it can be injected through its constructor. This approach is easier to test as it allows us
    to override it or mock it up if we wish.
  */
  constructor(private heroservice: HeroService){}

  ngOnInit(): void {
    this.heroes = this.heroservice.getHeroes();
  }

}
