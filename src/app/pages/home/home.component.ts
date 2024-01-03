import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../../housing-location/housing-location.component';
import { HousingLocation } from '../../housing-location/housing-location';
import { HousingService } from '../../housing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filtredLocationList: HousingLocation[] = [];
  housingLocation$!: Observable<HousingLocation[]>;
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocation$ = this.housingService.getAllHousingLocations();
  }

  filterResults(city: string) {
    if (!city) {
      this.filtredLocationList = this.housingLocationList;
    }

    this.filtredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation.city.toLowerCase().includes(city.toLowerCase())
    );
  }
}
