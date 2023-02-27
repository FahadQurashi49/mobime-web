import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: Router) {

  }
  cities: string[] = [
    'Karachi',
    'Lahore',
    'Quetta',
    'Peshawar',
    'Islamabad'
  ];
  selectedCity: string = '';
  searchTitle: string = '';

  navigateToSearch() {
    this.route.navigateByUrl(`search?city=${this.selectedCity}&title=${this.searchTitle}`);
  }
}
