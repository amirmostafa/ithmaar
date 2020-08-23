import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  hotels;
  cities;
  hotelNames;
  citiesFilter = [];
  hotelsFilter = [];
  priceRange;
  checkIn;
  checkOut;

  constructor(private hotelService: HotelsService) { }

  ngOnInit(): void {
    this.getHotels();
  }
  getHotels(search?) {
    this.hotelService.getAllHotels().subscribe(data => {
      if (data) {
        this.hotels = data;
      } else {
        this.hotels = [];
      }
      if(search) {
        this.filterDates();
      }
      this.getFilters();
    });
  }

  getFilters() {
    this.cities = _.countBy(this.hotels, 'city');
    this.hotelNames = _.countBy(this.hotels, 'name');
  }

  onSliderChange(event) {
    this.priceRange = event;
  }

  updateCities(cities) {
    this.citiesFilter =cities;
  }

  updateHotels(hotels) {
    this.hotelsFilter =hotels;
  }

  search() {
    this.getHotels(true);
  }

  filterDates() {
    if(this.checkIn || this.checkOut) {
      if(this.checkIn) this.checkIn.setHours(0);
      if(this.checkOut) this.checkOut.setHours(23);
      this.hotels = _.filter(this.hotels, (hotel) => {
        const date = new Date(hotel.available_on);
        return (!this.checkIn || (this.checkIn && date >= this.checkIn)) &&
        (!this.checkOut || (this.checkOut && date <= this.checkOut))
      });
    }
  }
}

