import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-client-status-toggle',
  standalone: true,
  imports: [CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './client-status-toggle.component.html',
})
export class ClientStatusToggleComponent {
  @Input() clientId!: number;
  @Input() isBlocked: boolean = false;

  loading = false;

  constructor(private clientService: ClientService) {}

  toggleStatus(): void {
    if (!this.clientId) return;

    this.loading = true;
    this.clientService.toggleClientStatus(this.clientId).subscribe({
      next: () => {
        this.isBlocked = !this.isBlocked;
        this.loading = false;
      },
      error: () => {
        alert("Erreur lors du changement de statut.");
        this.loading = false;
      },
    });
  }
}
