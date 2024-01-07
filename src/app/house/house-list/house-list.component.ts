import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { HouseItemComponent } from '../house-item/house-item.component';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CommonModule, HouseItemComponent],
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.scss',
})
export class HouseListComponent {
  houseService: HouseService = inject(HouseService);

  houseList = computed(() => {
    try {
      return this.houseService.houses();
    } catch (e) {
      return [];
    }
  });
}
