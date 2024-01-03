import { Injectable, inject } from '@angular/core';
import { HousingLocation } from './housing-location/housing-location';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private http = inject(HttpClient);
  readonly url = 'http://localhost:3000';

  getAllHousingLocations(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(`${this.url}/locations`);
  }

  getHousingLocationById(id: number): Observable<HousingLocation | undefined> {
    return this.http.get<HousingLocation | undefined>(
      `${this.url}/locations/${id}`
    );
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
