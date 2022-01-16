import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

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
