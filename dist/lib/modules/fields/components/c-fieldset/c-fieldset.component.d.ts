import { ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class CFieldsetComponent implements AfterViewInit {
    protected _eleRef: ElementRef;
    protected _renderer: Renderer2;
    fieldDef: any;
    group: FormGroup;
    formComponent: any;
    pageComponent: any;
    parent: any;
    isCollapsed: boolean;
    constructor(_eleRef: ElementRef, _renderer: Renderer2);
    ngAfterViewInit(): void;
    readonly label: any;
    readonly fields: any;
    readonly code: any;
    readonly collapse: any;
    readonly collapseBodyHidden: boolean;
    readonly hideLabel: any;
}
