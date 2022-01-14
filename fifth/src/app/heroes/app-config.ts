import { InjectionToken } from "@angular/core";

export interface AppConfig {
  title : string;
  version : number;
}

export const appSettings: AppConfig = {
  title :"My NG App",
  version : 1.0
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

/* App config object for app configs. Word Play! ;p */
