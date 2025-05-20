import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSearchComponent } from '../client-search/client-search.component';
import { ClientListDetailedComponent } from '../client-list-detailed/client-list-detailed.component';
import { ClientStatusToggleComponent } from '../client-status-toggle/client-status-toggle.component';
import { ClientServicesManageComponent } from '../client-services-manage/client-services-manage.component';
import { ClientBasic } from '../../models/client-basic.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-client-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ClientSearchComponent,
    ClientListDetailedComponent,
    ClientStatusToggleComponent,
    ClientServicesManageComponent
  ],
  templateUrl: './client-admin-dashboard.component.html',
})
export class ClientAdminDashboardComponent {
  selectedClient: ClientBasic | null = null;

  onClientSelected(client: ClientBasic): void {
    this.selectedClient = client;
  }
}
