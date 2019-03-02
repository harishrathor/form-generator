import { Field } from './../field.class';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent extends Field {
  mytime: Date = new Date();
}
