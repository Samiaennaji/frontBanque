import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule, ButtonModule, FormModule } from '@coreui/angular';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    FormModule
  ],
  templateUrl: './delete.component.html'
})
export class DeleteComponent {
  deleteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private enrollmentService: EnrollmentService
  ) {
    this.deleteForm = this.fb.group({
      clientId: [null, [Validators.required, Validators.min(1)]],
    });
  }

  submit(): void {
    if (this.deleteForm.valid) {
      const clientId = this.deleteForm.value.clientId;

      if (confirm(`Êtes-vous sûr de vouloir supprimer le client ID ${clientId} ?`)) {
        this.enrollmentService.deleteClient(clientId).subscribe({
          next: () => {
            alert('✅ Client supprimé avec succès');
            this.deleteForm.reset();
          },
          error: err => {
            console.error(err);
            alert('❌ Erreur lors de la suppression : ' + err.error?.message || err.message);
          },
        });
      }
    } else {
      alert('❗ Veuillez entrer un ID client valide.');
    }
  }
}
