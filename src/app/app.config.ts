import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  // HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { routes } from './app.routes';
//import { HttpRequestInterceptor } from './core/services/http-request-interceptor.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpRequestInterceptor,
    //   multi: true,
    // }, 
    provideAnimationsAsync(),
  ],
};

