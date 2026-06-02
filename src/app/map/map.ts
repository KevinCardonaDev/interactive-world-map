import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {
  selectedCountry = '';

  countryClicked(id: string, name: string) {
    this.selectedCountry = name;
    console.log(id);
  }
}