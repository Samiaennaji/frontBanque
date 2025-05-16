import { Component } from '@angular/core';
import { CardModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ChartjsModule
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  totalClients = 120; // à récupérer depuis API
  totalAccounts = 95; // à récupérer depuis API

  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Comptes créés',
        backgroundColor: '#4dbd74',
        data: [5, 10, 8, 15, 12],
      },
    ],
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
}
