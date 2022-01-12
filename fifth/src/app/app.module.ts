import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule /* The main application module, AppModule, does not need to import
                      CommonModule. Instead, it imports BrowserModule, which is used to
                      run Angular applications in a browser platform that exports
                      CommonModule by itself. */
                      ,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* Other propertires of a Module
exports: Angular artifacts that are defined in declarations and are available
for other modules to use. This is the public API of the module. It defines what is
publicly accessible or not. Everything else that's not explicitly exported would be
considered private or internal to the module

providers: Services that are provided from the module and are accessible
from any module of the application.

bootstrap: The main component of the application that will be rendered when
the application starts up. This property is set only once in the main application
module, AppModule, and is usually AppComponent. Typically, you should not
change it unless there is a particular reason to do so.


While creation of an application. First decide on features then make a module corresponding to each feature.
Registering a component with a module. Two ways
1. implicitly by generate component inside module folder
2. By ng CLI command option.

Import vs Imports
Import is for JS module and Imports is for ng modules similarly to export and exports.


*/
