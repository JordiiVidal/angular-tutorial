import { Injectable, inject } from '@angular/core';
import { HousingLocation } from './housing-location/housing-location';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplyForm } from './apply-form/apply-form';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private url = 'http://localhost:3000';
  http = inject(HttpClient);

  getAllHousingLocations(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(`${this.url}/locations`);
  }

  getHousingLocationById(id: number): Observable<HousingLocation | undefined> {
    return this.http.get<HousingLocation | undefined>(
      `${this.url}/locations/${id}`
    );
  }

  submitApplication(applyForm: ApplyForm): Observable<any> {
    return this.http.post(`${this.url}/applyForms`, applyForm);
  }
}
