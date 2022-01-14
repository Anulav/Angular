import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();    /*enables production mode and disables unnecessary assertions and enableProdMode
                        checks of the framework, such as warning messages in the browser console, that may slow
                        down the application.*/
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
