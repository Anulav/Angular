import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyLoggerComponent } from './key-logger/key-logger.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeroesModule } from './heroes/heroes.module';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    KeyLoggerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    /* We must import HttpClientModule
    before so that the in-memory web API HttpClientInMemoryWebApiModule
    overwrites the default behavior of the HTTP client in the Angular framework.   */
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HeroesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:
      AuthInterceptor, multi: true }],  /* The provide object literal contains a key named multi that takes a boolean value.
                                           We set it to true, to indicate that the current injection token, HTTP_INTERCEPTORS
                                           in our case, can accept multiple service instances. This is the reason that we do not set the
                                           providedIn property in the decorator of the service in the first place. It also enables us
                                           to combine multiple interceptors, each one satisfying a particular need.

      */
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  Notice how we import HttpClientInMemoryWebApiModule. We don't import it like
  an ordinary module, such as BrowserModule. Instead, we call its forRoot method,
  passing the service that we created earlier as a parameter.

  The forRoot pattern is used when a module defines services and other declarable
  artifacts such as components and pipes. If we try to import it normally, we will end up
  with multiple instances of the same service, thereby violating the singleton pattern. It

*/
