import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from '../../housing.service';
import { HousingLocation } from '../../housing-location/housing-location';
import { Observable } from 'rxjs';
import { ApplyFormComponent } from '../../apply-form/apply-form.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ApplyFormComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation$!: Observable<HousingLocation | undefined>;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation$ =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}
