import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [
  {path: 'heroes', component : HeroListComponent},
  {path: 'hero', component : HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //Already configured to have RouterModule imported by ng cli.
                                            /*
                                              We use the forChild method here. The forChild method is used when we want to register routes in a feature module.
                                              We should call the forRoot method only in the routing module of the main application
                                              module.
*/
  exports: [RouterModule]
})
export class HeroesRoutingModule { }


