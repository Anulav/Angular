import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [
  {path: 'heroes', component : HeroListComponent},
  {path: 'hero', component : HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
  This is an Angular module that is used to configure and enable the router in our
  application. It imports RouterModule using the forRoot method. It also re-exports
  RouterModule so that components of other modules that import AppRoutingModule have
  access to router services and directives.
  By default, AppModule imports AppRoutingModule, so all the components
  of our application are enabled with routing capabilities

*/
