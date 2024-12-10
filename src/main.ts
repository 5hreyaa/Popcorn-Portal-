// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Import your routes
import { AppComponent } from './app/app.component'; // Import your root component

const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), // Provide HttpClient here
    provideRouter(routes) // Provide router with your routes
  ],
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
