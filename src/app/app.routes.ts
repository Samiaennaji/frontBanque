import { Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client-delete/client-delete.component';
import { ClientStatusToggleComponent } from './components/client-status-toggle/client-status-toggle.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'clients', component: ClientListComponent },
      { path: 'clients/create', component: ClientCreateComponent },
      { path: 'clients/:id', component: ClientDetailsComponent },
      { path: 'clients/:id/edit', component: ClientUpdateComponent },
      { path: 'clients/:id/delete', component: ClientDeleteComponent },
      { path: 'clients/:id/status', component: ClientStatusToggleComponent }
      
    ]
  }
];
