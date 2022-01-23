import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [
  /*{path: 'heroes', component : HeroListComponent,
  children :  [                                       /* We use the children property of a route configuration object to define child routes,
                                                         which contains a list of route configuration objects. Notice also that we removed the word
                                                         hero from the path property of the hero route. We wanted to make it clear that it is a
                                                         child of the heroes route, and it should be accessed using the /heroes/:id path

    *//*
    {path: ':id', component : HeroDetailComponent}
  ]
  }
  */
  { path: 'heroes', component : HeroListComponent},
  { path: 'hero/:id', component: HeroDetailComponent, canActivate: [AuthGuard]},

  {path: '', redirectTo: '/heroes', pathMatch: 'full'}, //Route for empty path. It is worth noting that we added the empty route path after all other routes because, as we
  /*                                                    have already learned, the order of the routes is important. We want more specific routes
                                                        before less specific ones*/
//  {path : 'hero/:id', component: HeroDetailComponent} /*The colon character denotes that id is a route parameter. If a route has more than
//  one parameter, we separate them with '/'*/
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


