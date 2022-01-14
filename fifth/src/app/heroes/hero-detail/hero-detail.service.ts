import { Injectable } from '@angular/core';
import { Hero } from 'src/app/hero.model';
import { HeroService } from '../hero.service';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailService {

  private hero! : Hero;
  constructor(private heroService : HeroService) { } /* Service in service*/


  getHero(id : number) : Hero{
    const heroes = this.heroService.getHeroes();
    if(!this.hero){
      this.hero = heroes.find(hero => hero.id === id) as Hero;
      /*
      StackOverflow
      You can now use the non-null assertion operator that is here exactly for your use case.
      It tells TypeScript that even though something looks like it could be null, it can trust you that it's not:
      let name1:string = person.name!;
      //                            ^ note the exclamation mark here

      Here I have casted using "as Hero"
      */

    }
    return this.hero;
  }

}
