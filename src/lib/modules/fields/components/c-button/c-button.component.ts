import { Field } from './../field.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-button',
  templateUrl: './c-button.component.html',
  styleUrls: ['./c-button.component.css']
})

export class CButtonComponent extends Field {
    get theme() {
        return this.fieldDef.theme || this._defaults.BTN_DEFUALT_THEME;
    }

    get icon() {
        return this.fieldDef.icon || '';
    }
}
