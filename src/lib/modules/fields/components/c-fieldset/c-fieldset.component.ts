import { Component, OnInit, Input, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'c-fieldset',
  templateUrl: './c-fieldset.component.html',
  styleUrls: ['./c-fieldset.component.css']
})
export class CFieldsetComponent implements AfterViewInit {

    @Input()
    fieldDef: any;

    @Input()
    group: FormGroup;

    @Input()
    formComponent: any;

    @Input()
    pageComponent: any;

    @Input()
    parent: any;

    public isCollapsed = false;

    constructor(protected _eleRef: ElementRef, protected _renderer: Renderer2) {
    }

    ngAfterViewInit() {
        try {
            this._renderer.setStyle(this._eleRef.nativeElement, 'width', '100%');
            this._renderer.addClass(this._eleRef.nativeElement, 'm-3');
        } catch (error) {
            console.log(error);
        }
    }

    get label() {
        return this.fieldDef.label;
    }

    get fields() {
        return this.fieldDef.fields;
    }

    get code() {
        return this.fieldDef.code;
    }

    get collapse() {
        return this.fieldDef.collpase || true;
    }

    get collapseBodyHidden() {
        return (this.collapse && this.isCollapsed);
    }

    get hideLabel() {
        return this.fieldDef.hideLabel || false;
    }

}
