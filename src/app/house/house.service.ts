import { Injectable, Signal, inject } from '@angular/core';
import { House } from './house';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private url = 'http://localhost:3000';
  http = inject(HttpClient);

  private houses$!: Observable<House[]>;
  houses!: Signal<House[]>;

  constructor() {
    this.houses$ = this.getAll();
    this.houses = toSignal(this.houses$, { initialValue: [] as House[] });
  }

  getAll(): Observable<House[]> {
    return this.http.get<House[]>(`${this.url}/house`);
  }

  getHouseById(id: number): Observable<House | undefined> {
    return this.http.get<House | undefined>(`${this.url}/house/${id}`);
  }
}
