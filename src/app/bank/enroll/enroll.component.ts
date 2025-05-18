import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule, ButtonModule, FormModule } from '@coreui/angular';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    FormModule
  ],
  templateUrl: './enroll.component.html'
})
export class EnrollComponent {
  enrollForm: FormGroup;

  constructor(private fb: FormBuilder, private enrollmentService: EnrollmentService) {
    this.enrollForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      birthDate: ['', Validators.required],
      accountType: ['courant', Validators.required],
      balance: [0, [Validators.required, Validators.min(0)]]
    });
  }

  submit(): void {
    if (this.enrollForm.valid) {
      this.enrollmentService.enroll(this.enrollForm.value).subscribe({
        next: () => {
          alert('✅ Client enrôlé avec succès');
          this.enrollForm.reset();
        },
        error: err => {
          console.error(err);
          alert('❌ Erreur lors de l\'enrôlement : ' + err.error?.message || err.message);
        }
      });
    } else {
      alert('❗ Formulaire invalide. Veuillez vérifier tous les champs.');
    }
  }
}
