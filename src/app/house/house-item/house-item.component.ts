import { Component, Input } from '@angular/core';
import { House } from '../house';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-house-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './house-item.component.html',
  styleUrl: './house-item.component.scss',
})
export class HouseItemComponent {
  @Input() house!: House;
}
