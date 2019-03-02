import { Component, OnInit } from '@angular/core';
import { Field } from '../field.class';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent extends Field {

  minMode: BsDatepickerViewMode = 'month';
 
  bsConfig: Partial<BsDatepickerConfig>;
  protected _init() {
    super._init();
        this.bsConfig = 
         Object.assign({}, {
          minMode : this.minMode,
        dateInputFormat: 'MMMM  YYYY'
        });

  }
}