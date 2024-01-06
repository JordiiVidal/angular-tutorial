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

  filter: WritableSignal<string> = signal('');
  housingLocationList$!: Observable<HousingLocation[]>;

  constructor() {
    effect(() => this.retriveLocationList());
  }

  retriveLocationList() {
    return this.housingService.getAllHousingLocations(this.filter());
  }

  setFilter(text: string) {
    this.filter.set(text);
  }
}
