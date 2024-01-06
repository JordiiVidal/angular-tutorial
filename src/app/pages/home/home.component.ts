import {
  Component,
  WritableSignal,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../../housing-location/housing-location.component';
import { HousingLocation } from '../../housing-location/housing-location';
import { HousingService } from '../../housing.service';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);

  housingLocationList$!: Observable<HousingLocation[]>;

  retriveLocationList() {
    this.housingLocationList$ = this.housingService.getAllHousingLocations();
  }
}
