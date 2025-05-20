import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ClientBasic } from '../../models/client-basic.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-client-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './client-search.component.html'
})
export class ClientSearchComponent {
  searchTerm: string = '';
  results: ClientBasic[] = [];
  loading = false;

  @Output() clientSelected = new EventEmitter<ClientBasic>();

  constructor(private clientService: ClientService) {}

  search(): void {
    const term = this.searchTerm.trim();
    if (!term) return;

    this.loading = true;
    this.clientService.searchClients(term).subscribe({
      next: (data) => {
        this.results = data;
        this.loading = false;
      },
      error: () => {
        alert("Erreur lors de la recherche des clients.");
        this.loading = false;
      }
    });
  }

  selectClient(client: ClientBasic): void {
    this.clientSelected.emit(client);
  }
}
