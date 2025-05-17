import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EnrollmentService } from '../../services/enrollment.service';
import { CardModule, ButtonModule, FormModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule, // ✅ necessary for HttpClient injection
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    FormModule,
  ],
  templateUrl: './enroll.component.html'
})
export class EnrollComponent {
  enrollForm: FormGroup;

  constructor(private fb: FormBuilder, private enrollmentService: EnrollmentService) {
    this.enrollForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      accountType: ['courant', Validators.required],
    });
  }

  submit() {
    if (this.enrollForm.valid) {
      this.enrollmentService.enroll(this.enrollForm.value).subscribe({
        next: res => console.log('Success:', res),
        error: err => console.error('Error:', err)
      });
    }
  }
}
