import { Component } from '@angular/core';
import { WorldBank } from '../services/world-bank';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {
  selectedCountry = '';

  countryName = '';
  capitalCity = '';
  region = '';
  incomeLevel = '';
  latitude = '';
  longitude = '';

  constructor(private worldBank: WorldBank) {}

  countryClicked(id: string, name: string) {
    this.selectedCountry = name;

    this.worldBank.getCountry(id).subscribe((data: any) => {
      const country = data[1][0];

      this.countryName = country.name;
      this.capitalCity = country.capitalCity;
      this.region = country.region.value;
      this.incomeLevel = country.incomeLevel.value;
      this.latitude = country.latitude;
      this.longitude = country.longitude;
    });
  }
}