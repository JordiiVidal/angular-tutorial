import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-apply-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './apply-form.component.html',
  styleUrl: './apply-form.component.css',
})
export class ApplyFormComponent {
  @Input('id') idHousingLocation!: number;

  housingService: HousingService = inject(HousingService);
  applyForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
    this.applyForm.reset();
  }
}
