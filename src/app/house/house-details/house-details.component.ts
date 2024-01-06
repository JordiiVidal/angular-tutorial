import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HouseService } from '../house.service';
import { House } from '../house';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-house-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './house-details.component.html',
  styleUrl: './house-details.component.css',
})
export class HouseDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  houseService: HouseService = inject(HouseService);

  house$!: Observable<House | undefined>;

  constructor() {
    const idHouse = Number(this.route.snapshot.params['id']);
    this.house$ = this.houseService.getHouseById(idHouse);
  }
}
