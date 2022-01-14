import { HeroFavoriteService } from "./hero-favorite.service";
import { HeroService } from "./hero.service";

export function heroSquadFactory(isFavourite : boolean){
  if(isFavourite)
    return HeroFavoriteService;
  return HeroService;
}
