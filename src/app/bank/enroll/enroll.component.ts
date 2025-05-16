import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardModule, ButtonModule, FormModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [
    CommonModule,
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

  constructor(private fb: FormBuilder) {
    this.enrollForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      accountType: ['courant', Validators.required],
    });
  }

  submit() {
    if (this.enrollForm.valid) {
      console.log(this.enrollForm.value);
    }
  }
}
