import { HttpService } from './../../../services/http.service';
import { DefaultsService } from './../../../services/defaults.service';
import { ValidatorService } from '../services/validator.service';
import { FormGroup } from '@angular/forms';
import { OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
interface EventHandlerCallbackInterface {
    name: string;
    arguments?: any[];
    handlerFnOwner?: string;
}
export declare class Field implements OnInit, AfterViewInit {
    protected _elemRef: ElementRef;
    protected _renderer: Renderer2;
    protected _validatorService: ValidatorService;
    protected _defaults: DefaultsService;
    protected _httpService: HttpService;
    fieldDef: any;
    group: FormGroup;
    formComponent: any;
    pageComponent: any;
    parent: any;
    protected _cssClasses: any;
    protected _cssStyle: any;
    protected _errorMessageData: any;
    protected _eventsDataObj: any;
    protected _validationsDataObj: any;
    protected _hidden: boolean;
    protected _hideLabel: boolean;
    constructor(_elemRef: ElementRef, _renderer: Renderer2, _validatorService: ValidatorService, _defaults: DefaultsService, _httpService: HttpService);
    initialize(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    protected _afterViewInit(): void;
    protected _applyEvents(): void;
    protected _getEventCallback(eventName: string, callbackData: EventHandlerCallbackInterface): any;
    eventHandler(ownerType: any, fnName: string, argsArr: any, eventdata?: any): any;
    protected _getCallbackOwner(ownerType: string): any;
    protected _addCssClasses(element: HTMLElement, spaceSeparatedClasses: string): void;
    protected _init(): void;
    protected _storeArraysInObjects(): void;
    protected _applyValidations(): void;
    protected _initCssClasses(): void;
    protected _initCssStyle(): void;
    readonly name: any;
    readonly code: any;
    readonly order: any;
    readonly formOrder: any;
    readonly id: string;
    readonly columns: any;
    readonly type: any;
    readonly labelPosition: any;
    readonly label: any;
    readonly gridWidthClass: string;
    readonly placeholder: any;
    hidden: boolean;
    readonly disabled: boolean;
    disable: boolean;
    enable: boolean;
    readonly control: import("@angular/forms").AbstractControl;
    readonly defaultValue: any;
    readonly helpText: any;
    value: any;
    readonly errors: any[];
    readonly fieldRef: any;
    readonly inputContainerRef: any;
    readonly labelRef: any;
    readonly prefix: any;
    readonly suffix: any;
    readonly labelWidth: any;
    readonly fieldWidth: any;
    readonly validations: any;
    readonly events: any;
    readonly hasCustomStyle: boolean;
    hideLabel: boolean;
    readonly valid: boolean;
    readonly cssClasses: any;
    readonly cssStyle: any;
    readonly formCode: any;
}
export {};