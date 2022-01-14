import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-favorite-heroes',
  templateUrl: './favorite-heroes.component.html',
  styleUrls: ['./favorite-heroes.component.css']
})
export class FavoriteHeroesComponent implements OnInit {

  constructor(private heroservice : HeroService) { }
  heroes! : Hero[];

  ngOnInit(): void {
    this.heroes = this.heroservice.getHeroes();
  }

}
