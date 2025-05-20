import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { ClientSummary } from '../../models/client-summary.model';
import { CardModule, TableModule, SpinnerModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [CommonModule, CardModule, TableModule, SpinnerModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './client-detail.component.html',
})
export class ClientDetailComponent implements OnInit {
  client: ClientSummary | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientService.getClientDetails(+clientId).subscribe({
        next: data => {
          this.client = data;
          this.loading = false;
        },
        error: err => {
          console.error('Erreur chargement détails client', err);
          this.loading = false;
        }
      });
    }
  }
}
