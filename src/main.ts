// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import '@coreui/coreui/dist/js/coreui'; // optional JS bundle
import '@coreui/coreui'; // or '@coreui/coreui/dist/js/coreui.bundle.min.js'
import '@webcomponents/custom-elements';



bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ],
  
});
