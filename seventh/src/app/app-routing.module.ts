import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'about', loadChildren: ()=> import('./about/about.module').then(m=> m.AboutModule)}, /*
  The loadChildren property returns an arrow
  that uses the ES6 dynamic statement to lazy load AboutModule.
  The import function accepts the relative path of the module that we want to import and returns a
  promise object that contains the TypeScript class of the Angular module that we want to load.
  want to load.

  Also, We did not add AboutModule to the imports array of AppModule. If
  we had done so. AboutModule, would have been loaded twice: once eagerly
  from AppModule and another time lazily from the About link.


  */
  {path : '**', component: PageNotFoundComponent} /*It is better to define a wildcard route along with the related component in
                                                    AppRoutingModule. The wildcard route applies to the whole application,
                                                    and thus it is not tied to a specific feature.*/
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

  This is how basic routing is configured. But for large scale apps it is advised to have a
  separate routing module as this doesn't scales well.

  ng generate module heroes --routing

*/
