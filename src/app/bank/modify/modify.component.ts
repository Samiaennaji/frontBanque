import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule, ButtonModule, FormModule } from '@coreui/angular';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-modify',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    FormModule,
  ],
  templateUrl: './modify.component.html'
})
export class ModifyComponent {
  modifyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private enrollmentService: EnrollmentService
  ) {
    this.modifyForm = this.fb.group({
      clientId: [null, Validators.required],
      newFirstName: [''],
      newLastName: [''],
      newEmail: ['', Validators.email],
      newTel: [''],
      supervisorPassword: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.modifyForm.valid) {
      this.enrollmentService.updateClient(this.modifyForm.value).subscribe({
        next: () => alert('Client mis à jour avec succès'),
        error: err => alert('Erreur de mise à jour : ' + err.message),
      });
    } else {
      alert('Formulaire invalide. Vérifiez les champs obligatoires.');
    }
  }
}
