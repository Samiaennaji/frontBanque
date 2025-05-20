import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  CardModule,
  SpinnerModule,
  ListGroupModule 
} from '@coreui/angular';

import { ClientService } from '../../services/client.service';
import { ClientBasic } from '../../models/client-basic.model';

@Component({
  selector: 'app-client-list-basic',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    SpinnerModule,
    ListGroupModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './client-list-basic.component.html'
})
export class ClientListBasicComponent implements OnInit {
  clients: ClientBasic[] = [];
  loading = false;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loading = true;
    this.clientService.getClientsBasic().subscribe({
      next: (data) => {
        this.clients = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Erreur lors du chargement des clients.');
      }
    });
  }
}
