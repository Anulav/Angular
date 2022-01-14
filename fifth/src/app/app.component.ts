import { Component, Inject } from '@angular/core';
import { AppConfig, appSettings, APP_CONFIG } from './heroes/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: APP_CONFIG,  /* Injecting not a service,class but an object*/
    useValue : appSettings
  }
  ]
})
export class AppComponent {
  title = 'fifth';
  constructor(@Inject(APP_CONFIG) appConfig : AppConfig){
    /* Injecting appConfig object using @Inject and Providers declaration*/
  }
}
