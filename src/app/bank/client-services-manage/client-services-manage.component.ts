import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-client-services-manage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './client-services-manage.component.html',
})
export class ClientServicesManageComponent implements OnInit {
  @Input() clientId!: number;
  services: { name: string; status: 'ACTIVE' | 'SUSPENDED' | 'NEVER_ACTIVATED' }[] = [];
  loading = false;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    // ⚠️ À remplacer par un vrai appel backend si disponible
    this.services = [
      { name: 'VIREMENT', status: 'ACTIVE' },
      { name: 'PAIEMENTS_EN_LIGNE', status: 'NEVER_ACTIVATED' },
      { name: 'CONSULTATION_SOLDE', status: 'ACTIVE' },
      { name: 'RETRAIT_INTERNATIONAL', status: 'SUSPENDED' },
    ];
  }

  activate(serviceName: string): void {
    this.loading = true;
    this.clientService.activateServices({
      clientId: this.clientId,
      serviceNames: [serviceName]
    }).subscribe({
      next: () => {
        this.setStatus(serviceName, 'ACTIVE');
        this.loading = false;
      },
      error: () => {
        alert("Erreur lors de l'activation.");
        this.loading = false;
      }
    });
  }

  suspend(serviceName: string): void {
    this.loading = true;
    this.clientService.suspendServices(this.clientId).subscribe({
      next: () => {
        this.setStatus(serviceName, 'SUSPENDED');
        this.loading = false;
      },
      error: () => {
        alert("Erreur lors de la suspension.");
        this.loading = false;
      }
    });
  }

  reactivate(serviceName: string): void {
    this.loading = true;
    this.clientService.reactivateServices(this.clientId).subscribe({
      next: () => {
        this.setStatus(serviceName, 'ACTIVE');
        this.loading = false;
      },
      error: () => {
        alert("Erreur lors de la réactivation.");
        this.loading = false;
      }
    });
  }

  private setStatus(serviceName: string, status: 'ACTIVE' | 'SUSPENDED' | 'NEVER_ACTIVATED') {
    const service = this.services.find(s => s.name === serviceName);
    if (service) service.status = status;
  }
}
