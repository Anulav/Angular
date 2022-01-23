import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero!: Hero;
  constructor(private route: ActivatedRoute, private heroService: HeroService) { } /* RouterModule exports the ActivatedRoute
  service, which we can use to retrieve information about the currently active route, including any
  parameters. Injecting the ActivatedRoute service into the constructor of HeroDetailComponent.
  */

  ngOnInit(): void {
    this.getHeroObs();
    console.log("inside component details");
    

  }

  private getHeroObs() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {     /* The paramMap observable returns an object of the ParamMap type. We can use the
                                               get method of the ParamMap object and pass the name of the parameter that we
                                               defined in the route configuration to access its value.
                                               We add the plus sign in front of the id parameter to convert it from a string into
                                               a number.

        */
        const id = +params.get('id');
        console.log(id);
        return this.heroService.getHero(id);
      }),
      map(hero => this.hero = hero)
    ).subscribe();
  }

  private getHeroSnap(){
    const id = this.route.snapshot.params['id'];
    this.heroService.getHero(id).subscribe(hero => this.hero=hero);
  }

}

/*
  The ActivatedRoute service contains the paramMap observable, which we can
  subscribe to get route parameter values. HeroDetailComponent needs to get the id
  parameter value from the paramMap observable and make a call to the getHero method
  of HeroService, which is also an observable.

  To switch from one observable to another we use  switchMap, to switch from one observable to
  the other. We also take advantage of the map operator to set the returned hero from the backend API to the local
  component property hero.



*/
