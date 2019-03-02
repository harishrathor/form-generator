import { Field } from './../field.class';
import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['../commonStyle.css', './text.component.css']
})

export class TextComponent extends Field {


	protected _afterViewInit() {
		try {
			super._afterViewInit();
			if (this.type === 'TXT' || this.type === 'TXA') {
				if (this._validationsDataObj.minlength) {
					this._renderer.setAttribute(this.fieldRef, 'minlength', this._validationsDataObj.minlength.value);
				}
				if (this._validationsDataObj.maxlength) {
					this._renderer.setAttribute(this.fieldRef, 'maxlength', this._validationsDataObj.maxlength.value + 1);
				}
			}
		} catch (error) {
			
		}
	}
}
