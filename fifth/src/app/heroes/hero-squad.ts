import { HeroFavoriteService } from "./hero-favorite.service";
import { HeroService } from "./hero.service";

export function heroSquadFactory(isFavourite : boolean){
  return() =>{
  if(isFavourite)
    return new HeroFavoriteService();
  return new HeroService();
}
}
