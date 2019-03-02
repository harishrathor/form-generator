import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent  {
   @Input() errors: any;

}
