import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';


/*
Remember: the component should only be concerned with presentation logic.
Earlier we had used array in the component for simplicity but from now on,
We should effectively delegate business logic tasks away from the component.

*/


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']

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
    this.getHeroes();
  }

  private getHeroes(){
    this.heroservice.getHeroes().subscribe(heroes => this.heroes=heroes);
  }

  add(name: string){
    this.heroservice.createHero(name).subscribe(hero => this.heroes.push(hero));
  }

  rename(hero : Hero){
    const existingHero = {id: hero.id, name : 'Prizehog'};
    this.heroservice.editHero(hero.id, existingHero).subscribe(()=> {
        this.heroes.find(hero => hero.id == existingHero.id).name='Pricezog'; /* Had to add strictNullCheck: false in compiler options to remove null checks*/
    });
  }

 remove(hero: Hero) {
    this.heroservice.deleteHero(hero.id).subscribe(() => {
    this.heroes = this.heroes.filter(selected => selected!== hero);
    });
    }

}

/*
  private methods are only accessible inside a class.
*/
