import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HousingService } from '../housing.service';
import { ApplyForm } from './apply-form';

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
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  submitApplication() {
    if (!this.applyForm.valid) {
      return;
    }

    const idHousingLocation = this.idHousingLocation;
    const data: ApplyForm = { idHousingLocation, ...this.applyForm.value };
    this.housingService.submitApplication(data).subscribe((data) => {
      this.applyForm.reset();
    });
  }
}
