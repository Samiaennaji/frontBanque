import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './client-create.component.html',
  styleUrls:['./client-create.component.css']
})
export class ClientCreateComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  tel: string = '';
  birthDate: string = '';
  accountType: string = 'courant';
  balance: number = 0;

  message: string = '';
  error: string = '';

  constructor(private clientService: ClientService, private router: Router) {}

  create(): void {
    this.error = '';
    const payload = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      tel: this.tel,
      birthDate: this.birthDate,
      accountType: this.accountType,
      balance: this.balance
    };

    this.clientService.createClient(payload).subscribe({
      next: () => {
        this.message = 'Client créé avec succès.';
        this.router.navigate(['/clients']);
      },
      error: () => {
        this.error = 'Erreur lors de la création du client.';
      }
    });
  }
  showRecap = false;

toggleRecap(): void {
  this.showRecap = !this.showRecap;
}

}
