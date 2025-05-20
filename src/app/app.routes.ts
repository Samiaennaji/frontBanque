import { Routes } from '@angular/router';
import { BankLayoutComponent } from './layout/bank-layout/bank-layout.component';
import { DashboardComponent } from './bank/dashboard/dashboard.component';
import { EnrollComponent } from './bank/enroll/enroll.component';
import { ModifyComponent } from './bank/modify/modify.component';
import { DeleteComponent } from './bank/delete/delete.component';

export const routes: Routes = [
  {
    path: '',
    component: BankLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'enroll', component: EnrollComponent },
      { path: 'modify', component: ModifyComponent },
      { path: 'delete', component: DeleteComponent },

      // ✅ Composants standalone ajoutés ici
      {
        path: 'client-admin-dashboard',
        loadComponent: () =>
          import('./bank/client-admin-dashboard/client-admin-dashboard.component')
            .then(m => m.ClientAdminDashboardComponent)
      },
      {
        path: 'clients/:id',
        loadComponent: () =>
          import('./bank/client-detail/client-detail.component')
            .then(m => m.ClientDetailComponent)
      },
      {
        path: 'client-list-detailed',
        loadComponent: () =>
          import('./bank/client-list-detailed/client-list-detailed.component')
            .then(m => m.ClientListDetailedComponent)
      },
      {
        path: 'client-search',
        loadComponent: () =>
          import('./bank/client-search/client-search.component')
            .then(m => m.ClientSearchComponent)
      },

      // ✅ Redirection par défaut
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
