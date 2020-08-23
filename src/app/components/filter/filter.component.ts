import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() headerName;
  @Input() data;
  @Output() onChange =new EventEmitter();
  min =0;
  max =3;
  constructor() { }
  values =[];

  ngOnInit(): void {
  }

  showMore() {
    this.max += 3;
  }

  onClick(e) {
    if(this.values.includes(e)) {
      _.remove(this.values, (elm) => {return elm === e});
    } else {
      this.values.push(e);
    }
    this.onChange.emit(this.values);
  }

  isHide() {
    return this.max >= Object.keys(this.data).length;
  }

}
