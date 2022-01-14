import { Injectable } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class HeroFavoriteService extends HeroService {

  constructor() {
    super();
  }

  override getHeroes(): Hero[]{
    return super.getHeroes().slice(0,3);
  }
}
