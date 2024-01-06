import { Injectable, inject } from '@angular/core';
import { House } from './house';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private url = 'http://localhost:3000';
  http = inject(HttpClient);

  getAll(): Observable<House[]> {
    return this.http.get<House[]>(`${this.url}/house`);
  }

  getHouseById(id: number): Observable<House | undefined> {
    return this.http.get<House | undefined>(`${this.url}/house/${id}`);
  }
}
