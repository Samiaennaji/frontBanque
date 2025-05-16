import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { CardModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      RouterModule,
      CardModule,
      ChartjsModule
    )
  ]
};
