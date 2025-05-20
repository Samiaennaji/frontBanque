import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { ClientSummary } from '../../models/client-summary.model';
import { CardModule, TableModule, SpinnerModule } from '@coreui/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-client-list-detailed',
  standalone: true,
  imports: [CommonModule, CardModule, TableModule, SpinnerModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './client-list-detailed.component.html'
})
export class ClientListDetailedComponent implements OnInit {
  clients: ClientSummary[] = [];
  loading = false;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loading = true;
    this.clientService.getDetailedClients().subscribe({
      next: data => {
        this.clients = data;
        this.loading = false;
      },
      error: () => {
        alert('Erreur lors du chargement des clients détaillés.');
        this.loading = false;
      }
    });
  }
}
