import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {

  @Input() data;
  min =0;
  max =3;
  order = {by: 'price', dir: true};
  @Input() that;
  @Input() filter;

  constructor() { }

  ngOnInit(): void {
  }

  showMore() {
    this.max += 3;
  }
  

  changeOrder(order, dir) {
    this.order.by = order;
    this.order.dir = dir;
  }
}
