import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,         /* The order that we import routing modules in does matter. The router selects
                             a route with a "first match wins" strategy. We place feature routing modules that
                             contain more specific routes before the main application routing module that
                             contains more generic routes, such as a wildcard route. Thus, we want to force
                             the router to first search through our specific route paths and then fall back to
                             an application-specific one.

    */
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
