import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule, CardModule, FormModule } from '@coreui/angular';

// même imports que EnrollComponent...

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

  constructor(private fb: FormBuilder) {
    this.modifyForm = this.fb.group({
      clientId: ['', Validators.required],
      name: [''],
      email: [''],
      phone: [''],
      supervisorPassword: ['', Validators.required],
    });
  }

  submit() {
    if (this.modifyForm.valid) {
      console.log(this.modifyForm.value);
    }
  }
}

