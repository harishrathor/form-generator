/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpService } from './../../../services/http.service';
import { DefaultsService } from './../../../services/defaults.service';
import { ValidatorService } from '../services/validator.service';
import { FormGroup } from '@angular/forms';
import { Input, ElementRef, Renderer2, Injectable } from '@angular/core';
import * as _ from 'lodash';
/**
 * @record
 */
function EventHandlerCallbackInterface() { }
if (false) {
    /** @type {?} */
    EventHandlerCallbackInterface.prototype.name;
    /** @type {?|undefined} */
    EventHandlerCallbackInterface.prototype.arguments;
    /** @type {?|undefined} */
    EventHandlerCallbackInterface.prototype.handlerFnOwner;
}
export class Field {
    /**
     * @param {?} _elemRef
     * @param {?} _renderer
     * @param {?} _validatorService
     * @param {?} _defaults
     * @param {?} _httpService
     */
    constructor(_elemRef, _renderer, _validatorService, _defaults, _httpService) {
        this._elemRef = _elemRef;
        this._renderer = _renderer;
        this._validatorService = _validatorService;
        this._defaults = _defaults;
        this._httpService = _httpService;
        this.initialize();
    }
    /**
     * @return {?}
     */
    initialize() {
        try {
            this._eventsDataObj = {};
            this._errorMessageData = {};
            this._validationsDataObj = {};
            this._hideLabel = false;
            this._hidden = false;
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._init();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._afterViewInit();
    }
    /**
     * @protected
     * @return {?}
     */
    _afterViewInit() {
        try {
            this._addCssClasses(this._elemRef.nativeElement, `${this.gridWidthClass} ${this.type} form-field`);
            this._applyEvents();
            if (this.hidden) {
                this._renderer.addClass(this._elemRef.nativeElement, 'hidden');
            }
            if (this.fieldDef.disabled) {
                /** @type {?} */
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
                this.control.valueChanges.subscribe(this.parent.onParentFieldValueChange.bind(this.parent, this.name, this.fieldDef.children));
            }
            if (this.hideLabel) {
                this._renderer.setAttribute(this.labelRef, 'label', this.label);
                this.labelRef.innerHTML = '';
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _applyEvents() {
        try {
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                /** @type {?} */
                const fieldRef = this.fieldRef;
                if (fieldRef) {
                    this.fieldDef.events.forEach((/**
                     * @param {?} eventData
                     * @return {?}
                     */
                    eventData => {
                        /** @type {?} */
                        const eventName = eventData.name;
                        /** @type {?} */
                        const callbacksArr = eventData.callbacks;
                        callbacksArr.forEach((/**
                         * @param {?} calbackData
                         * @return {?}
                         */
                        calbackData => {
                            /** @type {?} */
                            const callbackFn = this._getEventCallback(eventName, calbackData);
                            if (callbackFn) {
                                try {
                                    fieldRef.addEventListener(eventName, callbackFn);
                                }
                                catch (error) {
                                    console.log(error);
                                }
                            }
                        }));
                    }));
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @param {?} eventName
     * @param {?} callbackData
     * @return {?}
     */
    _getEventCallback(eventName, callbackData) {
        try {
            /** @type {?} */
            const callbackName = callbackData.name;
            if (!callbackData.arguments) {
                callbackData.arguments = [];
            }
            /** @type {?} */
            const handlerFnOwner = this._getCallbackOwner(callbackData.handlerFnOwner);
            if (handlerFnOwner && handlerFnOwner[callbackName] && typeof handlerFnOwner[callbackName] === 'function') {
                return this.eventHandler.bind(this, callbackData.handlerFnOwner, callbackName, callbackData.arguments);
            }
            else {
                console.log(`Callback function ${callbackName} for event ${eventName} does not exist in `, handlerFnOwner);
                return null;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} ownerType
     * @param {?} fnName
     * @param {?} argsArr
     * @param {?=} eventdata
     * @return {?}
     */
    eventHandler(ownerType, fnName, argsArr, eventdata) {
        try {
            if (!argsArr) {
                argsArr = [];
            }
            argsArr = Object.assign([], argsArr);
            /** @type {?} */
            const callbackFnOwner = this._getCallbackOwner(ownerType);
            if (eventdata) {
                argsArr.push(eventdata);
            }
            return callbackFnOwner[fnName].apply(callbackFnOwner, argsArr);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @protected
     * @param {?} ownerType
     * @return {?}
     */
    _getCallbackOwner(ownerType) {
        try {
            if (!ownerType) {
                ownerType = 'F';
            }
            /** @type {?} */
            let callbackFnOwner = this.formComponent;
            if (ownerType === 'P') {
                callbackFnOwner = this.pageComponent;
            }
            else if (typeof ownerType === 'object') {
                callbackFnOwner = ownerType;
            }
            return callbackFnOwner;
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @param {?} element
     * @param {?} spaceSeparatedClasses
     * @return {?}
     */
    _addCssClasses(element, spaceSeparatedClasses) {
        try {
            /** @type {?} */
            const classesArr = spaceSeparatedClasses.split(' ');
            classesArr.forEach((/**
             * @param {?} cssClass
             * @return {?}
             */
            (cssClass) => {
                this._renderer.addClass(element, cssClass);
            }));
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _init() {
        try {
            this._hidden = this.fieldDef.hidden || false;
            this._hideLabel = this.fieldDef.hideLabel || false;
            this.parent.fieldsComponent[this.code] = this;
            this._storeArraysInObjects();
            this._initCssClasses();
            this._initCssStyle();
            this._applyValidations();
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _storeArraysInObjects() {
        try {
            this.validations.forEach((/**
             * @param {?} validationData
             * @return {?}
             */
            validationData => {
                this._validationsDataObj[validationData.name] = validationData;
            }));
            this.events.forEach((/**
             * @param {?} eventData
             * @return {?}
             */
            eventData => {
                this._eventsDataObj[eventData.name] = eventData;
            }));
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _applyValidations() {
        try {
            if (this.fieldDef.validations && this.fieldDef.validations.length > 0) {
                /** @type {?} */
                const asyncValidators = [];
                this.fieldDef.validations.forEach((/**
                 * @param {?} validationData
                 * @return {?}
                 */
                validationData => {
                    /** @type {?} */
                    const validatorData = this._validatorService.getValidator(validationData);
                    if (validatorData) {
                        asyncValidators.push(validatorData.validationFn);
                        this._errorMessageData[validationData.name] = validatorData.messageDate;
                    }
                }));
                if (asyncValidators.length > 0) {
                    this.control.setValidators(asyncValidators);
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _initCssClasses() {
        try {
            /** @type {?} */
            const fieldContainerClasses = {};
            /** @type {?} */
            const inputContainerClasses = {};
            /** @type {?} */
            const fieldClasses = {};
            /** @type {?} */
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
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _initCssStyle() {
        try {
            /** @type {?} */
            const fieldContainerStyle = {};
            /** @type {?} */
            const inputContainerStyle = {};
            /** @type {?} */
            const fieldStyle = {};
            /** @type {?} */
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
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @return {?}
     */
    get name() {
        return this.fieldDef.name;
    }
    /**
     * @return {?}
     */
    get code() {
        return this.fieldDef.code;
    }
    /**
     * @return {?}
     */
    get order() {
        return this.fieldDef.order;
    }
    /**
     * @return {?}
     */
    get formOrder() {
        return this.fieldDef.formOrder;
    }
    /**
     * @return {?}
     */
    get id() {
        return `${this.code}__${this.formOrder}__${this.order}`;
    }
    /**
     * @return {?}
     */
    get columns() {
        return this.fieldDef.columns;
    }
    /**
     * @return {?}
     */
    get type() {
        return this.fieldDef.type;
    }
    /**
     * @return {?}
     */
    get labelPosition() {
        return this.fieldDef.labelPosition;
    }
    /**
     * @return {?}
     */
    get label() {
        return this.fieldDef.label;
    }
    /**
     * @return {?}
     */
    get gridWidthClass() {
        /** @type {?} */
        const col = 12 / Number(this.columns);
        return `col-sm-${col}`;
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this.fieldDef.placeholder || '';
    }
    /**
     * @return {?}
     */
    get hidden() {
        return this._hidden || false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set hidden(val) {
        if (val === true) {
            this._renderer.addClass(this._elemRef.nativeElement, 'hidden');
        }
        else {
            this._renderer.removeClass(this._elemRef.nativeElement, 'hidden');
        }
        this._hidden = val;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.control.disabled;
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    set disable(prop) {
        this.control.disable();
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    set enable(prop) {
        this.control.enable();
    }
    /**
     * @return {?}
     */
    get control() {
        return this.group.controls[this.name];
    }
    /**
     * @return {?}
     */
    get defaultValue() {
        return this.fieldDef.defaultValue || '';
    }
    /**
     * @return {?}
     */
    get helpText() {
        return this.fieldDef.helpText || '';
    }
    /**
     * @return {?}
     */
    get value() {
        return this.control.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.control.setValue(value);
    }
    /**
     * @return {?}
     */
    get errors() {
        try {
            /** @type {?} */
            const errorsData = [];
            if (this.control && this.control.errors) {
                /** @type {?} */
                const controlErrors = this.control.errors;
                for (let errorName in controlErrors) {
                    if (this._errorMessageData[errorName]) {
                        errorsData.push(this._errorMessageData[errorName]);
                    }
                }
            }
            return errorsData;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }
    /**
     * @return {?}
     */
    get fieldRef() {
        return this._elemRef.nativeElement.querySelector(`#${this.id}`);
    }
    /**
     * @return {?}
     */
    get inputContainerRef() {
        return this._elemRef.nativeElement.querySelector(`.${this.id} .input-container`);
    }
    /**
     * @return {?}
     */
    get labelRef() {
        return this._elemRef.nativeElement.querySelector(`.${this.id} .field-label`);
    }
    /**
     * @return {?}
     */
    get prefix() {
        return this.fieldDef.prefix || '';
    }
    /**
     * @return {?}
     */
    get suffix() {
        return this.fieldDef.suffix || '';
    }
    /**
     * @return {?}
     */
    get labelWidth() {
        return this.fieldDef.labelWidth || null;
    }
    /**
     * @return {?}
     */
    get fieldWidth() {
        return this.fieldDef.fieldWidth || null;
    }
    /**
     * @return {?}
     */
    get validations() {
        return this.fieldDef.validations || [];
    }
    /**
     * @return {?}
     */
    get events() {
        return this.fieldDef.events || [];
    }
    /**
     * @return {?}
     */
    get hasCustomStyle() {
        return !!this._defaults.EXCEPTIONAL_STYLED_FIELDS[this.type] || false;
    }
    /**
     * @return {?}
     */
    get hideLabel() {
        return this._hideLabel || false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set hideLabel(val) {
        if (val === true) {
            this._renderer.addClass(this.labelRef, 'hidden');
        }
        else {
            this._renderer.removeClass(this.labelRef, 'hidden');
        }
        this._hideLabel = val;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.errors.length === 0;
    }
    /**
     * @return {?}
     */
    get cssClasses() {
        this._cssClasses.fieldClasses = _.assign(this._cssClasses.fieldClasses, {
            //'is-valid': this.valid,
            'is-invalid': !this.valid
        });
        return this._cssClasses;
    }
    /**
     * @return {?}
     */
    get cssStyle() {
        return this._cssStyle;
    }
    /**
     * @return {?}
     */
    get formCode() {
        return this.fieldDef.formCode || '';
    }
}
Field.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Field.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ValidatorService },
    { type: DefaultsService },
    { type: HttpService }
];
Field.propDecorators = {
    fieldDef: [{ type: Input }],
    group: [{ type: Input }],
    formComponent: [{ type: Input }],
    pageComponent: [{ type: Input }],
    parent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    Field.prototype.fieldDef;
    /** @type {?} */
    Field.prototype.group;
    /** @type {?} */
    Field.prototype.formComponent;
    /** @type {?} */
    Field.prototype.pageComponent;
    /** @type {?} */
    Field.prototype.parent;
    /**
     * @type {?}
     * @protected
     */
    Field.prototype._cssClasses;
    /**
     * @type {?}
     * @protected
     */
    Field.prototype._cssStyle;
    /**
     * @type {?}
     * @protected
     */
    Field.prototype._errorMessageData;
    /**
     * @type {?}
     * @protected
     */
    Field.prototype._eventsDataObj;
    /**
     * @type {?}
     * @protected
     */
    Field.prototype._validationsDataObj;
    /**
     * @type {?}
     * @protected
     */
    Field.prototype._hidden;
    /**
     * @type {?}
     * @protected
     */
    Field.prototype._hideLabel;
    /**
     * @type {?}
     * @protected
     */
    Field.prototype._elemRef;
    /**
     * @type {?}
     * @protected
     */
    Field.prototype._renderer;
    /**
     * @type {?}
     * @protected
     */
    Field.prototype._validatorService;
    /**
     * @type {?}
     * @protected
     */
    Field.prototype._defaults;
    /**
     * @type {?}
     * @protected
     */
    Field.prototype._httpService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL2ZpZWxkLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUF5QixVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVyxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7OztBQUk1Qiw0Q0FJQzs7O0lBSEEsNkNBQWE7O0lBQ2Isa0RBQWtCOztJQUNsQix1REFBd0I7O0FBR3pCLE1BQU0sT0FBTyxLQUFLOzs7Ozs7OztJQXlCZCxZQUFzQixRQUFvQixFQUFZLFNBQW9CLEVBQVksaUJBQW1DLEVBQVksU0FBMEIsRUFBWSxZQUF5QjtRQUE5SyxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQVksY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFZLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFBWSxjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUFZLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ2hNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRU0sVUFBVTtRQUNiLElBQUk7WUFDQSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7WUFD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Li8uLi8uLi8uLi9zZXJ2aWNlcy9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdmFsaWRhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5qZWN0YWJsZSwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBFdmVudEhhbmRsZXJDYWxsYmFja0ludGVyZmFjZSB7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGFyZ3VtZW50cz86IGFueVtdO1xyXG5cdGhhbmRsZXJGbk93bmVyPzogc3RyaW5nO1xyXG59XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpZWxkIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZmllbGREZWY6IGFueTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZm9ybUNvbXBvbmVudDogYW55O1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwYWdlQ29tcG9uZW50OiBhbnk7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHBhcmVudDogYW55O1xyXG5cclxuICAgIHByb3RlY3RlZCBfY3NzQ2xhc3NlczogYW55O1xyXG4gICAgcHJvdGVjdGVkIF9jc3NTdHlsZTogYW55O1xyXG4gICAgcHJvdGVjdGVkIF9lcnJvck1lc3NhZ2VEYXRhOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgX2V2ZW50c0RhdGFPYmo6IGFueTtcclxuICAgIHByb3RlY3RlZCBfdmFsaWRhdGlvbnNEYXRhT2JqOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgX2hpZGRlbjogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBfaGlkZUxhYmVsOiBib29sZWFuO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1SZWY6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJvdGVjdGVkIF92YWxpZGF0b3JTZXJ2aWNlOiBWYWxpZGF0b3JTZXJ2aWNlLCBwcm90ZWN0ZWQgX2RlZmF1bHRzOiBEZWZhdWx0c1NlcnZpY2UsIHByb3RlY3RlZCBfaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzRGF0YU9iaiA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvck1lc3NhZ2VEYXRhID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRpb25zRGF0YU9iaiA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRlTGFiZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5faGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgICB0aGlzLl9hZnRlclZpZXdJbml0KCk7XHJcbiAgICAgfVxyXG5cclxuICAgICBwcm90ZWN0ZWQgX2FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENzc0NsYXNzZXModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCBgJHt0aGlzLmdyaWRXaWR0aENsYXNzfSAke3RoaXMudHlwZX0gZm9ybS1maWVsZGApO1xyXG4gICAgICAgICAgICB0aGlzLl9hcHBseUV2ZW50cygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGVmLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRSZWY7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZmllbGQsICdkaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmRlZmF1bHRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREZWYuaXNQYXJlbnQgJiYgdGhpcy5maWVsZERlZi5jaGlsZHJlbiAmJiB0aGlzLmZpZWxkRGVmLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHRoaXMucGFyZW50Lm9uUGFyZW50RmllbGRWYWx1ZUNoYW5nZS5iaW5kKHRoaXMucGFyZW50LCB0aGlzLm5hbWUsIHRoaXMuZmllbGREZWYuY2hpbGRyZW4pICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGVMYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMubGFiZWxSZWYsICdsYWJlbCcsIHRoaXMubGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbFJlZi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBwcm90ZWN0ZWQgX2FwcGx5RXZlbnRzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGVmLmV2ZW50cyAmJiB0aGlzLmZpZWxkRGVmLmV2ZW50cy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkUmVmID0gdGhpcy5maWVsZFJlZjtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZFJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREZWYuZXZlbnRzLmZvckVhY2goZXZlbnREYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnREYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrc0FyciA9IGV2ZW50RGF0YS5jYWxsYmFja3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc0Fyci5mb3JFYWNoKCBjYWxiYWNrRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFja0ZuID0gdGhpcy5fZ2V0RXZlbnRDYWxsYmFjayhldmVudE5hbWUsIGNhbGJhY2tEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja0ZuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZWYuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrRm4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9nZXRFdmVudENhbGxiYWNrKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFja0RhdGE6IEV2ZW50SGFuZGxlckNhbGxiYWNrSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tOYW1lID0gY2FsbGJhY2tEYXRhLm5hbWU7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2tEYXRhLmFyZ3VtZW50cykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tEYXRhLmFyZ3VtZW50cyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyRm5Pd25lciA9IHRoaXMuX2dldENhbGxiYWNrT3duZXIoY2FsbGJhY2tEYXRhLmhhbmRsZXJGbk93bmVyKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZXJGbk93bmVyICYmIGhhbmRsZXJGbk93bmVyW2NhbGxiYWNrTmFtZV0gJiYgdHlwZW9mIGhhbmRsZXJGbk93bmVyW2NhbGxiYWNrTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKHRoaXMsIGNhbGxiYWNrRGF0YS5oYW5kbGVyRm5Pd25lciwgY2FsbGJhY2tOYW1lLCBjYWxsYmFja0RhdGEuYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDYWxsYmFjayBmdW5jdGlvbiAke2NhbGxiYWNrTmFtZX0gZm9yIGV2ZW50ICR7ZXZlbnROYW1lfSBkb2VzIG5vdCBleGlzdCBpbiBgLCBoYW5kbGVyRm5Pd25lcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBldmVudEhhbmRsZXIob3duZXJUeXBlOiBhbnksIGZuTmFtZTogc3RyaW5nLCBhcmdzQXJyOiBhbnksIGV2ZW50ZGF0YT86IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghYXJnc0Fycikge1xyXG4gICAgICAgICAgICAgICAgYXJnc0FyciA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyZ3NBcnIgPSBPYmplY3QuYXNzaWduKFtdLCBhcmdzQXJyKTtcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tGbk93bmVyID0gdGhpcy5fZ2V0Q2FsbGJhY2tPd25lcihvd25lclR5cGUpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzQXJyLnB1c2goZXZlbnRkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tGbk93bmVyW2ZuTmFtZV0uYXBwbHkoY2FsbGJhY2tGbk93bmVyLCBhcmdzQXJyKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9nZXRDYWxsYmFja093bmVyKG93bmVyVHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFvd25lclR5cGUpIHtcclxuICAgICAgICAgICAgICAgIG93bmVyVHlwZSA9ICdGJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2tGbk93bmVyID0gdGhpcy5mb3JtQ29tcG9uZW50O1xyXG4gICAgICAgICAgICBpZiAob3duZXJUeXBlID09PSAnUCcpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrRm5Pd25lciA9IHRoaXMucGFnZUNvbXBvbmVudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3duZXJUeXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGbk93bmVyID0gb3duZXJUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFja0ZuT3duZXI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIHByb3RlY3RlZCBfYWRkQ3NzQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgc3BhY2VTZXBhcmF0ZWRDbGFzc2VzOiBzdHJpbmcpIHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXNBcnIgPSBzcGFjZVNlcGFyYXRlZENsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgIGNsYXNzZXNBcnIuZm9yRWFjaCgoY3NzQ2xhc3MpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzKTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IHRoaXMuZmllbGREZWYuaGlkZGVuIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICAgdGhpcy5faGlkZUxhYmVsID0gdGhpcy5maWVsZERlZi5oaWRlTGFiZWwgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmZpZWxkc0NvbXBvbmVudFt0aGlzLmNvZGVdID0gdGhpcztcclxuICAgICAgICAgICAgIHRoaXMuX3N0b3JlQXJyYXlzSW5PYmplY3RzKCk7XHJcbiAgICAgICAgICAgICB0aGlzLl9pbml0Q3NzQ2xhc3NlcygpO1xyXG4gICAgICAgICAgICAgdGhpcy5faW5pdENzc1N0eWxlKCk7XHJcbiAgICAgICAgICAgICB0aGlzLl9hcHBseVZhbGlkYXRpb25zKCk7XHJcbiAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0b3JlQXJyYXlzSW5PYmplY3RzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbnMuZm9yRWFjaCh2YWxpZGF0aW9uRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92YWxpZGF0aW9uc0RhdGFPYmpbdmFsaWRhdGlvbkRhdGEubmFtZV0gPSB2YWxpZGF0aW9uRGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZXZlbnREYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c0RhdGFPYmpbZXZlbnREYXRhLm5hbWVdID0gZXZlbnREYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfYXBwbHlWYWxpZGF0aW9ucygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERlZi52YWxpZGF0aW9ucyAmJiB0aGlzLmZpZWxkRGVmLnZhbGlkYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFzeW5jVmFsaWRhdG9ycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZERlZi52YWxpZGF0aW9ucy5mb3JFYWNoKHZhbGlkYXRpb25EYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0b3JEYXRhID0gdGhpcy5fdmFsaWRhdG9yU2VydmljZS5nZXRWYWxpZGF0b3IodmFsaWRhdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3JEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9ycy5wdXNoKHZhbGlkYXRvckRhdGEudmFsaWRhdGlvbkZuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3JNZXNzYWdlRGF0YVt2YWxpZGF0aW9uRGF0YS5uYW1lXSA9IHZhbGlkYXRvckRhdGEubWVzc2FnZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2luaXRDc3NDbGFzc2VzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyQ2xhc3NlcyA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lckNsYXNzZXMgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRDbGFzc2VzID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgZmllbGRDb250YWluZXJDbGFzc2VzW2BsYWJlbC0ke3RoaXMubGFiZWxQb3NpdGlvbn1gXSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyQ2xhc3Nlc1tgJHt0aGlzLmlkfWBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXJDbGFzc2VzW2Ake3RoaXMudHlwZX0tZmllbGQtY29udGFpbmVyYF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBsYWJlbENsYXNzZXNbYHRleHQtJHt0aGlzLmZpZWxkRGVmLmxhYmVsQWxpZ25tZW50fWBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgaW5wdXRDb250YWluZXJDbGFzc2VzW2Ake3RoaXMudHlwZX0taW5wdXQtY29udGFpbmVyYF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYWJlbFBvc2l0aW9uID09PSAnbGVmdCcgfHwgdGhpcy5sYWJlbFBvc2l0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbENsYXNzZXNbJ3ByLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbENsYXNzZXNbJ3BsLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0N1c3RvbVN0eWxlICYmIHRoaXMuZmllbGREZWYuZm9ybUNvbHVtbnMgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1sncHItMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1sncGwtMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyQ2xhc3Nlc1sncHItMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyQ2xhc3Nlc1sncGwtMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1ucyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gJ3RvcCcgfHwgdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1sncHItMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbENsYXNzZXNbJ3BsLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJDbGFzc2VzWydwci0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyQ2xhc3Nlc1sncGwtMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fY3NzQ2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyQ2xhc3NlcyxcclxuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyQ2xhc3NlcyxcclxuICAgICAgICAgICAgICAgIGZpZWxkQ2xhc3NlcyxcclxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9pbml0Q3NzU3R5bGUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRDb250YWluZXJTdHlsZSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lclN0eWxlID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU3R5bGUgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxTdHlsZSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ3VzdG9tU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsV2lkdGggJiYgdGhpcy5maWVsZFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHlsZVsnd2lkdGgnXSA9IHRoaXMubGFiZWxXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lclN0eWxlWyd3aWR0aCddID0gdGhpcy5maWVsZFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnSElEJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Nzc1N0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgZmllbGRDb250YWluZXJTdHlsZSxcclxuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyU3R5bGUsXHJcbiAgICAgICAgICAgICAgICBmaWVsZFN0eWxlLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxTdHlsZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5jb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvcmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5vcmRlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZm9ybU9yZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmZvcm1PcmRlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29kZX1fXyR7dGhpcy5mb3JtT3JkZXJ9X18ke3RoaXMub3JkZXJ9YDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sdW1ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5jb2x1bW5zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYWJlbFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmxhYmVsUG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBsYWJlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5sYWJlbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGdyaWRXaWR0aENsYXNzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IDEyIC8gTnVtYmVyKHRoaXMuY29sdW1ucyk7XHJcbiAgICAgICAgcmV0dXJuIGBjb2wtc20tJHtjb2x9YDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGxhY2Vob2xkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYucGxhY2Vob2xkZXIgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhpZGRlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGlkZGVuIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoaWRkZW4odmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faGlkZGVuID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkaXNhYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gIHRoaXMuY29udHJvbC5kaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGlzYWJsZShwcm9wOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sLmRpc2FibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZW5hYmxlKHByb3A6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbnRyb2woKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAuY29udHJvbHNbdGhpcy5uYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmRlZmF1bHRWYWx1ZSB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVscFRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuaGVscFRleHQgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXJyb3JzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yc0RhdGEgPSBbXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbCAmJiB0aGlzLmNvbnRyb2wuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sRXJyb3JzID0gdGhpcy5jb250cm9sLmVycm9ycztcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBlcnJvck5hbWUgaW4gY29udHJvbEVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvck1lc3NhZ2VEYXRhW2Vycm9yTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzRGF0YS5wdXNoKHRoaXMuX2Vycm9yTWVzc2FnZURhdGFbZXJyb3JOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcnNEYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmllbGRSZWYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbnB1dENvbnRhaW5lclJlZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9IC5pbnB1dC1jb250YWluZXJgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFiZWxSZWYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmlkfSAuZmllbGQtbGFiZWxgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJlZml4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLnByZWZpeCB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3VmZml4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLnN1ZmZpeCB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFiZWxXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5sYWJlbFdpZHRoIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpZWxkV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuZmllbGRXaWR0aCB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWxpZGF0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi52YWxpZGF0aW9ucyB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXZlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmV2ZW50cyB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzQ3VzdG9tU3R5bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmYXVsdHMuRVhDRVBUSU9OQUxfU1RZTEVEX0ZJRUxEU1t0aGlzLnR5cGVdIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoaWRlTGFiZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZGVMYWJlbCB8fCBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGlkZUxhYmVsKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh2YWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5sYWJlbFJlZiwgJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubGFiZWxSZWYsICdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faGlkZUxhYmVsID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjc3NDbGFzc2VzKCkge1xyXG4gICAgICAgIHRoaXMuX2Nzc0NsYXNzZXMuZmllbGRDbGFzc2VzID0gXy5hc3NpZ24oXHJcbiAgICAgICAgICAgIHRoaXMuX2Nzc0NsYXNzZXMuZmllbGRDbGFzc2VzLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLydpcy12YWxpZCc6IHRoaXMudmFsaWQsXHJcbiAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6ICF0aGlzLnZhbGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NDbGFzc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjc3NTdHlsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzU3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZvcm1Db2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmZvcm1Db2RlIHx8ICcnO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=