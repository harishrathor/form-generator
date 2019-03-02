import { CSelectComponent } from './../c-select/c-select.component';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'multiselect',
    templateUrl: '../c-select/c-select.component.html',
    styleUrls: ['../commonStyle.css', '../ng-select.theme.css', '../c-select/c-select.component.css', './multiselect.component.css']
})
export class MultiselectComponent extends CSelectComponent {
}