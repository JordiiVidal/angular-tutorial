import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../house';
import { HouseItemComponent } from '../house-item/house-item.component';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CommonModule, HouseItemComponent],
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css',
})
export class HouseListComponent {
  houseService: HouseService = inject(HouseService);

  houseList$!: Observable<House[]>;

  constructor() {
    this.retriveLocationList();
  }

  retriveLocationList() {
    this.houseList$ = this.houseService.getAll();
  }
}
