import { CommonModule } from '@angular/common';
import {
  Component,
  Signal,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { LoadingComponent } from '../../layout/loading/loading.component';
import { House } from '../house';
import { HouseItemComponent } from '../house-item/house-item.component';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CommonModule, HouseItemComponent, LoadingComponent],
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.scss',
})
export class HouseListComponent {
  houseService: HouseService = inject(HouseService);

  filter: WritableSignal<string> = signal('');
  readonly filtredHouseList: Signal<House[]> = computed(() => {
    const houseList = this.houseService.houses();
    if (this.filter()) {
      return houseList.filter((house) =>
        house.name.toLowerCase().includes(this.filter().toLowerCase())
      );
    }
    return houseList;
  });

  setFilter(text: string) {
    this.filter.set(text);
  }
}
