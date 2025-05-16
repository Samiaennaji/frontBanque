import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardModule, ButtonModule, FormModule } from '@coreui/angular';


// mêmes imports...

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    FormModule,
  ],
  templateUrl: './delete.component.html'
})
export class DeleteComponent {
  deleteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.deleteForm = this.fb.group({
      clientId: ['', Validators.required],
    });
  }

  submit() {
    if (this.deleteForm.valid) {
      console.log(this.deleteForm.value);
    }
  }
}
