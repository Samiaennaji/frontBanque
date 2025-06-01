import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { ServiceManagerService } from '../../services/service-manager.service';
import { ClientSummaryDTO } from '../../models/client-summary.model';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  client?: ClientSummaryDTO;
  clientId: string = '';
  message: string = '';
  error: string = '';
  isLoading: boolean = false;
  
  activeTab: 'activer' | 'suspendre' | 'reactiver' = 'activer';


  availableServices = [
    'VIREMENT', 'PAIEMENTS_EN_LIGNE', 'CONSULTATION_SOLDE',
    'HISTORIQUE_TRANSACTIONS', 'CHEQUIER', 'BLOQUER_CARTE',
    'PRET_PERSONNEL', 'EPARGNE', 'INVESTISSEMENT',
    'ALERTES', 'FACTURES', 'MULTIDEVISES',
    'SERVICE_CLIENT', 'MESSAGERIE_SECURISÉE'
  ];

  newServices: string[] = [];
  suspendedServices: string[] = [];
  reactivatedServices: string[] = [];

  suspensionReason: string = '';
  suspensionMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private serviceManager: ServiceManagerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clientId = id;
      this.isLoading = true;
      this.clientService.getClientById(id).subscribe({
        next: data => this.client = data,
        error: () => this.error = "Erreur lors du chargement du client.",
        complete: () => this.isLoading = false
      });
    }
  }

  get isEligible(): boolean {
    return this.client !== undefined &&
           !this.client['compteBloque'] &&
           this.client['documentsComplets'];
  }

  toggleService(service: string, list: string[]): void {
    const index = list.indexOf(service);
    if (index > -1) list.splice(index, 1);
    else list.push(service);
  }

  activate(): void {
    this.clearMessages();
    if (!this.isEligible) {
      this.error = "Le client est bloqué ou n’a pas tous les documents complets.";
      return;
    }
    if (this.newServices.length === 0) {
      this.error = "Veuillez sélectionner des services à activer.";
      return;
    }

    const request = {
      clientId: this.clientId,
      services: this.newServices
    };

    this.isLoading = true;
    this.serviceManager.activateServices(request).subscribe({
      next: () => this.message = "Services activés avec succès.",
      error: () => this.error = "Erreur lors de l'activation.",
      complete: () => this.isLoading = false
    });
  }

  suspend(): void {
    this.clearMessages();
    if (this.suspendedServices.length === 0) {
      this.error = "Veuillez sélectionner des services à suspendre.";
      return;
    }

    const request = {
      servicesToSuspend: this.suspendedServices,
      reason: this.suspensionReason,
      notificationMessage: this.suspensionMessage
    };

    this.isLoading = true;
    this.serviceManager.suspendServices(this.clientId, request).subscribe({
      next: () => this.message = "Services suspendus avec succès.",
      error: () => this.error = "Erreur lors de la suspension.",
      complete: () => this.isLoading = false
    });
  }

  reactivate(): void {
    this.clearMessages();
    if (this.reactivatedServices.length === 0) {
      this.error = "Veuillez sélectionner des services à réactiver.";
      return;
    }

    this.isLoading = true;
    this.serviceManager.reactivateServices(this.clientId, this.reactivatedServices).subscribe({
      next: () => this.message = "Services réactivés avec succès.",
      error: () => this.error = "Erreur lors de la réactivation.",
      complete: () => this.isLoading = false
    });
  }

  private clearMessages(): void {
    this.message = '';
    this.error = '';
  }
}
