import { Routes } from '@angular/router';
import { HouseListComponent } from './house/house-list/house-list.component';
import { HouseDetailsComponent } from './house/house-details/house-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HouseListComponent,
    title: 'Home',
  },
  {
    path: 'details/:id',
    component: HouseDetailsComponent,
    title: 'Details',
  },
];

export default routeConfig;
