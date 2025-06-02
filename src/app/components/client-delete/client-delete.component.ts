import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-delete.component.html',
  styleUrls:['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {
  clientId = '';
  message = '';
  error = '';
  clientName = '';
  



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.clientId = id;

    // Appel pour récupérer le nom du client
    this.clientService.getClientById(id).subscribe({
      next: (client) => {
        this.clientName = client.fullName;
      },
      error: () => {
        this.error = 'Erreur lors du chargement du client.';
      }
    });
  }
}


 confirmDelete(): void {
  this.clientService.deleteClient({ clientId: this.clientId }).subscribe({
    next: () => {
      this.message = 'Client supprimé avec succès';
      this.router.navigate(['/clients']);
    },
    error: err => {
      if (err?.status === 409) {
        this.error = 'Suppression refusée : client avec transactions actives';
      } else {
        this.error = 'Erreur lors de la suppression.';
      }
    }
  });
}



 cancel(): void {
  this.router.navigate(['/clients', this.clientId]);
}

}