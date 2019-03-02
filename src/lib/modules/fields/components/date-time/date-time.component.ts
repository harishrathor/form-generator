import { Field } from './../field.class';
import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent extends Field {
  //minMode: BsDatepickerViewMode = 'month';
 
  bsConfig: Partial<BsDatepickerConfig>;
  protected _init() {
    super._init();
        this.bsConfig ={ dateInputFormat: 'MMMM Do YYYY, h:mm:ss a' }

  }
}
