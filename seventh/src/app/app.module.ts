import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

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
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
