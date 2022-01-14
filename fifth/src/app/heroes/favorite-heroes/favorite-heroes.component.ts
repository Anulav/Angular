import { Component, Host, OnInit, Optional } from '@angular/core';
import { Hero } from 'src/app/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-favorite-heroes',
  templateUrl: './favorite-heroes.component.html',
  styleUrls: ['./favorite-heroes.component.css']
})
export class FavoriteHeroesComponent implements OnInit {

  constructor(@Host() @Optional() private heroservice : HeroService) { } //We could easily inject heroService without any injector because it is already present as Hero-List Component's providers
  /* Just as restricting dependency Injection using viewProvider we can restrict dependency lookup to current parent only by using @Host decorator.
     Also used the Optional decorator to make this as Optional incase the dependency lookup fails.
  */
  heroes! : Hero[];

  ngOnInit(): void {
    this.heroes = this.heroservice.getHeroes();
  }

}
