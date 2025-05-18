import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true, // ✅ clé ici
  imports: [CommonModule, CardModule, ChartjsModule], // ✅ modules nécessaires
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  totalClients = 0;
  totalAccounts = 0;

  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Comptes créés',
        backgroundColor: '#4dbd74',
        data: Array(12).fill(0),
      },
    ],
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.dashboardService.getTotalClients().subscribe({
      next: (count) => (this.totalClients = count),
      error: (err) => console.error('Erreur clients :', err),
    });

    this.dashboardService.getTotalAccounts().subscribe({
      next: (count) => (this.totalAccounts = count),
      error: (err) => console.error('Erreur comptes :', err),
    });

    this.dashboardService.getAccountsPerMonth().subscribe({
      next: (data) => {
        this.chartData.datasets[0].data = [...data, ...Array(12 - data.length).fill(0)];
      },
      error: (err) => console.error('Erreur graphique :', err),
    });
  }
}
