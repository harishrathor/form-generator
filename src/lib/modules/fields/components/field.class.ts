import { HttpService } from './../../../services/http.service';
import { DefaultsService } from './../../../services/defaults.service';
import { ValidatorService } from '../services/validator.service';
import { FormGroup } from '@angular/forms';
import { Input, OnInit, AfterViewInit, ElementRef, Renderer2, Injectable, DoCheck } from '@angular/core';
import * as _ from 'lodash';



interface EventHandlerCallbackInterface {
	name: string;
	arguments?: any[];
	handlerFnOwner?: string;
}
@Injectable()
export class Field implements OnInit, AfterViewInit {

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

    protected _cssClasses: any;
    protected _cssStyle: any;
    protected _errorMessageData: any;
    protected _eventsDataObj: any;
    protected _validationsDataObj: any;
    protected _hidden: boolean;
    protected _hideLabel: boolean;
    
    constructor(protected _elemRef: ElementRef, protected _renderer: Renderer2, protected _validatorService: ValidatorService, protected _defaults: DefaultsService, protected _httpService: HttpService) {
        this.initialize();
    }

    public initialize() {
        try {
            this._eventsDataObj = {};
            this._errorMessageData = {};
            this._validationsDataObj = {};
            this._hideLabel = false;
            this._hidden = false;
        } catch (error) {
            console.log(error);
        }
    }

     ngOnInit() {
        this._init();
     }

     ngAfterViewInit() {
         this._afterViewInit();
     }

     protected _afterViewInit() {
         try {
            this._addCssClasses(this._elemRef.nativeElement, `${this.gridWidthClass} ${this.type} form-field`);
            this._applyEvents();

            if (this.hidden) {
                this._renderer.addClass(this._elemRef.nativeElement, 'hidden');
            }

             if (this.fieldDef.disabled) {
                const field = this.fieldRef;
                if (field) {
                    this._renderer.setAttribute(field, 'disabled', 'true');
                }
                this.control.disable();
            }

            if (this.defaultValue) {
                this.value = this.defaultValue;
            }

            if (this.fieldDef.isParent && this.fieldDef.children && this.fieldDef.children.length > 0) {
                this.control.valueChanges.subscribe(this.parent.onParentFieldValueChange.bind(this.parent, this.name, this.fieldDef.children) );
            }

            if (this.hideLabel) {
                this._renderer.setAttribute(this.labelRef, 'label', this.label);
                this.labelRef.innerHTML = '';
            }
         } catch (error) {
             console.log(error);
         }
     }

     protected _applyEvents() {
        try {
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                const fieldRef = this.fieldRef;
                if (fieldRef) {
                    this.fieldDef.events.forEach(eventData => {
                        const eventName = eventData.name;
                        const callbacksArr = eventData.callbacks;
                        callbacksArr.forEach( calbackData => {
                            const callbackFn = this._getEventCallback(eventName, calbackData);
                            if (callbackFn) {
                                try {
                                    fieldRef.addEventListener(eventName, callbackFn);
                                } catch (error) {
                                    console.log(error);
                                }
                            }
                        } );
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    protected _getEventCallback(eventName: string, callbackData: EventHandlerCallbackInterface) {
        try {
            const callbackName = callbackData.name;
            if (!callbackData.arguments) {
                callbackData.arguments = [];
            }

            const handlerFnOwner = this._getCallbackOwner(callbackData.handlerFnOwner);
            if (handlerFnOwner && handlerFnOwner[callbackName] && typeof handlerFnOwner[callbackName] === 'function') {
                return this.eventHandler.bind(this, callbackData.handlerFnOwner, callbackName, callbackData.arguments);
            } else {
                console.log(`Callback function ${callbackName} for event ${eventName} does not exist in `, handlerFnOwner);
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    public eventHandler(ownerType: any, fnName: string, argsArr: any, eventdata?: any) {
        try {
            if (!argsArr) {
                argsArr = [];
            }
            argsArr = Object.assign([], argsArr);
            const callbackFnOwner = this._getCallbackOwner(ownerType);
            if (eventdata) {
                argsArr.push(eventdata);
            }
            return callbackFnOwner[fnName].apply(callbackFnOwner, argsArr);
        } catch (error) {
            console.log(error);
            return null;
        }
     }

    protected _getCallbackOwner(ownerType: string) {
        try {
            if (!ownerType) {
                ownerType = 'F';
            }
            let callbackFnOwner = this.formComponent;
            if (ownerType === 'P') {
                callbackFnOwner = this.pageComponent;
            } else if (typeof ownerType === 'object') {
                callbackFnOwner = ownerType;
            }
            return callbackFnOwner;
        } catch (error) {
            console.log(error);
        }
     }

     protected _addCssClasses(element: HTMLElement, spaceSeparatedClasses: string) {
         try {
             const classesArr = spaceSeparatedClasses.split(' ');
             classesArr.forEach((cssClass) => {
                this._renderer.addClass(element, cssClass);
             });
         } catch (error) {
             console.log(error);
         }
     }

     protected _init() {
         try {
            this._hidden = this.fieldDef.hidden || false;
             this._hideLabel = this.fieldDef.hideLabel || false;
            this.parent.fieldsComponent[this.code] = this;
             this._storeArraysInObjects();
             this._initCssClasses();
             this._initCssStyle();
             this._applyValidations();
         } catch (error) {
             console.log(error);
         }
    }

    protected _storeArraysInObjects() {
        try {
            this.validations.forEach(validationData => {
                this._validationsDataObj[validationData.name] = validationData;
            });
            this.events.forEach(eventData => {
                this._eventsDataObj[eventData.name] = eventData;
            });
        } catch (error) {
            console.log(error);
        }
    }

    protected _applyValidations() {
        try {
            if (this.fieldDef.validations && this.fieldDef.validations.length > 0) {
                const asyncValidators = [];
                this.fieldDef.validations.forEach(validationData => {
                    const validatorData = this._validatorService.getValidator(validationData);
                    if (validatorData) {
                        asyncValidators.push(validatorData.validationFn);
                        this._errorMessageData[validationData.name] = validatorData.messageDate;
                    }
                });
                if (asyncValidators.length > 0) {
                    this.control.setValidators(asyncValidators);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    protected _initCssClasses() {
        try {
            const fieldContainerClasses = {};
            const inputContainerClasses = {};
            const fieldClasses = {};
            const labelClasses = {};

            fieldContainerClasses[`label-${this.labelPosition}`] = true;
            fieldContainerClasses[`${this.id}`] = true;
            fieldContainerClasses[`${this.type}-field-container`] = true;
            labelClasses[`text-${this.fieldDef.labelAlignment}`] = true;
            inputContainerClasses[`${this.type}-input-container`] = true;
            if (this.labelPosition === 'left' || this.labelPosition === 'right') {
                labelClasses['pr-3'] = true;
                labelClasses['pl-3'] = true;
            }

            if (this.hasCustomStyle && this.fieldDef.formColumns === 3) {
                labelClasses['pr-3'] = true;
                labelClasses['pl-3'] = true;
                inputContainerClasses['pr-3'] = true;
                inputContainerClasses['pl-3'] = true;
            }

            if (this.columns === 3) {
                if (this.labelPosition === 'top' || this.labelPosition === 'bottom') {
                    labelClasses['pr-3'] = true;
                    labelClasses['pl-3'] = true;
                    inputContainerClasses['pr-3'] = true;
                    inputContainerClasses['pl-3'] = true;
                }
            }

            this._cssClasses = {
                fieldContainerClasses,
                inputContainerClasses,
                fieldClasses,
                labelClasses
            };
        } catch (error) {
            console.log(error);
        }
    }

    protected _initCssStyle() {
        try {
            const fieldContainerStyle = {};
            const inputContainerStyle = {};
            const fieldStyle = {};
            const labelStyle = {};

            if (this.hasCustomStyle) {
                if (this.labelWidth && this.fieldWidth) {
                    labelStyle['width'] = this.labelWidth;
                    inputContainerStyle['width'] = this.fieldWidth;
                }
            }

            if (this.type === 'HID') {
                this._renderer.addClass(this._elemRef.nativeElement, 'hidden');
            }

            this._cssStyle = {
                fieldContainerStyle,
                inputContainerStyle,
                fieldStyle,
                labelStyle
            };
        } catch (error) {
            console.log(error);
        }
    }

    get name() {
        return this.fieldDef.name;
    }

    get code() {
        return this.fieldDef.code;
    }

    get order() {
        return this.fieldDef.order;
    }

    get formOrder() {
        return this.fieldDef.formOrder;
    }

    get id() {
        return `${this.code}__${this.formOrder}__${this.order}`;
    }

    get columns() {
        return this.fieldDef.columns;
    }
    
    get type() {
        return this.fieldDef.type;
    }

    get labelPosition() {
        return this.fieldDef.labelPosition;
    }
    
    get label() {
        return this.fieldDef.label;
    }
    
    get gridWidthClass() {
        const col = 12 / Number(this.columns);
        return `col-sm-${col}`;
    }

    get placeholder() {
        return this.fieldDef.placeholder || '';
    }

    get hidden() {
        return this._hidden || false;
    }

    set hidden(val: boolean) {
        if (val === true) {
            this._renderer.addClass(this._elemRef.nativeElement, 'hidden');
        } else {
            this._renderer.removeClass(this._elemRef.nativeElement, 'hidden');
        }
        this._hidden = val;
    }

    get disabled() {
        return  this.control.disabled;
    }

    set disable(prop: boolean) {
        this.control.disable();
    }

    set enable(prop: boolean) {
        this.control.enable();
    }

    get control() {
        return this.group.controls[this.name];
    }

    get defaultValue() {
        return this.fieldDef.defaultValue || '';
    }

    get helpText() {
        return this.fieldDef.helpText || '';
    }

    get value() {
        return this.control.value;
    }

    set value(value) {
        this.control.setValue(value);
    }

    get errors() {
        try {
            const errorsData = [];
            if (this.control && this.control.errors) {
                const controlErrors = this.control.errors;
                for ( let errorName in controlErrors) {
                    if (this._errorMessageData[errorName]) {
                        errorsData.push(this._errorMessageData[errorName]);
                    }
                }
            }
            return errorsData;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    get fieldRef() {
        return this._elemRef.nativeElement.querySelector(`#${this.id}`);
    }

    get inputContainerRef() {
        return this._elemRef.nativeElement.querySelector(`.${this.id} .input-container`);
    }

    get labelRef() {
        return this._elemRef.nativeElement.querySelector(`.${this.id} .field-label`);
    }

    get prefix() {
        return this.fieldDef.prefix || '';
    }

    get suffix() {
        return this.fieldDef.suffix || '';
    }

    get labelWidth() {
        return this.fieldDef.labelWidth || null;
    }

    get fieldWidth() {
        return this.fieldDef.fieldWidth || null;
    }

    get validations() {
        return this.fieldDef.validations || [];
    }

    get events() {
        return this.fieldDef.events || [];
    }

    get hasCustomStyle() {
        return !!this._defaults.EXCEPTIONAL_STYLED_FIELDS[this.type] || false;
    }

    get hideLabel() {
        return this._hideLabel || false;
    }

    set hideLabel(val: boolean) {
        if (val === true) {
            this._renderer.addClass(this.labelRef, 'hidden');
        } else {
            this._renderer.removeClass(this.labelRef, 'hidden');
        }
        this._hideLabel = val;
    }

    get valid() {
        return this.errors.length === 0;
    }

    get cssClasses() {
        this._cssClasses.fieldClasses = _.assign(
            this._cssClasses.fieldClasses,
            {
                //'is-valid': this.valid,
                'is-invalid': !this.valid
            }
        );
        return this._cssClasses;
    }

    get cssStyle() {
        return this._cssStyle;
    }

    get formCode() {
        return this.fieldDef.formCode || '';
    }

}
