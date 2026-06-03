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

  countryClicked(event: MouseEvent) {
    const target = event.target as SVGPathElement;
    const countryCode = target.id;

    if (!countryCode) {
      return;
    }

    this.worldBank.getCountry(countryCode).subscribe((data: any) => {
      const country = data[1][0];
      this.selectedCountry = country.name;
      this.countryName = country.name;
      this.capitalCity = country.capitalCity;
      this.region = country.region.value;
      this.incomeLevel = country.incomeLevel.value;
      this.latitude = country.latitude;
      this.longitude = country.longitude;
    });
  }
}