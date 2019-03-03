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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvZmllbGQuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQXlCLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7O0FBSTVCLDRDQUlDOzs7SUFIQSw2Q0FBYTs7SUFDYixrREFBa0I7O0lBQ2xCLHVEQUF3Qjs7QUFHekIsTUFBTSxPQUFPLEtBQUs7Ozs7Ozs7O0lBeUJkLFlBQXNCLFFBQW9CLEVBQVksU0FBb0IsRUFBWSxpQkFBbUMsRUFBWSxTQUEwQixFQUFZLFlBQXlCO1FBQTlLLGFBQVEsR0FBUixRQUFRLENBQVk7UUFBWSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVksc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFZLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQVksaUJBQVksR0FBWixZQUFZLENBQWE7UUFDaE0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2IsSUFBSTtZQUNBLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FB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cm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvZGVmYXVsdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRvclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy92YWxpZGF0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSW5wdXQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbmplY3RhYmxlLCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIEV2ZW50SGFuZGxlckNhbGxiYWNrSW50ZXJmYWNlIHtcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0YXJndW1lbnRzPzogYW55W107XHJcblx0aGFuZGxlckZuT3duZXI/OiBzdHJpbmc7XHJcbn1cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmllbGQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBmaWVsZERlZjogYW55O1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBncm91cDogRm9ybUdyb3VwO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBmb3JtQ29tcG9uZW50OiBhbnk7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHBhZ2VDb21wb25lbnQ6IGFueTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcGFyZW50OiBhbnk7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jc3NDbGFzc2VzOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgX2Nzc1N0eWxlOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgX2Vycm9yTWVzc2FnZURhdGE6IGFueTtcclxuICAgIHByb3RlY3RlZCBfZXZlbnRzRGF0YU9iajogYW55O1xyXG4gICAgcHJvdGVjdGVkIF92YWxpZGF0aW9uc0RhdGFPYmo6IGFueTtcclxuICAgIHByb3RlY3RlZCBfaGlkZGVuOiBib29sZWFuO1xyXG4gICAgcHJvdGVjdGVkIF9oaWRlTGFiZWw6IGJvb2xlYW47XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZWxlbVJlZjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcm90ZWN0ZWQgX3ZhbGlkYXRvclNlcnZpY2U6IFZhbGlkYXRvclNlcnZpY2UsIHByb3RlY3RlZCBfZGVmYXVsdHM6IERlZmF1bHRzU2VydmljZSwgcHJvdGVjdGVkIF9odHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudHNEYXRhT2JqID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yTWVzc2FnZURhdGEgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdGlvbnNEYXRhT2JqID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGVMYWJlbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgfVxyXG5cclxuICAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgIHRoaXMuX2FmdGVyVmlld0luaXQoKTtcclxuICAgICB9XHJcblxyXG4gICAgIHByb3RlY3RlZCBfYWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ3NzQ2xhc3Nlcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsIGAke3RoaXMuZ3JpZFdpZHRoQ2xhc3N9ICR7dGhpcy50eXBlfSBmb3JtLWZpZWxkYCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FwcGx5RXZlbnRzKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oaWRkZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREZWYuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZFJlZjtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShmaWVsZCwgJ2Rpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERlZi5pc1BhcmVudCAmJiB0aGlzLmZpZWxkRGVmLmNoaWxkcmVuICYmIHRoaXMuZmllbGREZWYuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodGhpcy5wYXJlbnQub25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlLmJpbmQodGhpcy5wYXJlbnQsIHRoaXMubmFtZSwgdGhpcy5maWVsZERlZi5jaGlsZHJlbikgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZUxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5sYWJlbFJlZiwgJ2xhYmVsJywgdGhpcy5sYWJlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsUmVmLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIHByb3RlY3RlZCBfYXBwbHlFdmVudHMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREZWYuZXZlbnRzICYmIHRoaXMuZmllbGREZWYuZXZlbnRzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRSZWYgPSB0aGlzLmZpZWxkUmVmO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkUmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERlZi5ldmVudHMuZm9yRWFjaChldmVudERhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudE5hbWUgPSBldmVudERhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzQXJyID0gZXZlbnREYXRhLmNhbGxiYWNrcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzQXJyLmZvckVhY2goIGNhbGJhY2tEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrRm4gPSB0aGlzLl9nZXRFdmVudENhbGxiYWNrKGV2ZW50TmFtZSwgY2FsYmFja0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrRm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFJlZi5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2tGbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2dldEV2ZW50Q2FsbGJhY2soZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrRGF0YTogRXZlbnRIYW5kbGVyQ2FsbGJhY2tJbnRlcmZhY2UpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja05hbWUgPSBjYWxsYmFja0RhdGEubmFtZTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsYmFja0RhdGEuYXJndW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja0RhdGEuYXJndW1lbnRzID0gW107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJGbk93bmVyID0gdGhpcy5fZ2V0Q2FsbGJhY2tPd25lcihjYWxsYmFja0RhdGEuaGFuZGxlckZuT3duZXIpO1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlckZuT3duZXIgJiYgaGFuZGxlckZuT3duZXJbY2FsbGJhY2tOYW1lXSAmJiB0eXBlb2YgaGFuZGxlckZuT3duZXJbY2FsbGJhY2tOYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQodGhpcywgY2FsbGJhY2tEYXRhLmhhbmRsZXJGbk93bmVyLCBjYWxsYmFja05hbWUsIGNhbGxiYWNrRGF0YS5hcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENhbGxiYWNrIGZ1bmN0aW9uICR7Y2FsbGJhY2tOYW1lfSBmb3IgZXZlbnQgJHtldmVudE5hbWV9IGRvZXMgbm90IGV4aXN0IGluIGAsIGhhbmRsZXJGbk93bmVyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2ZW50SGFuZGxlcihvd25lclR5cGU6IGFueSwgZm5OYW1lOiBzdHJpbmcsIGFyZ3NBcnI6IGFueSwgZXZlbnRkYXRhPzogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFhcmdzQXJyKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzQXJyID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJnc0FyciA9IE9iamVjdC5hc3NpZ24oW10sIGFyZ3NBcnIpO1xyXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLl9nZXRDYWxsYmFja093bmVyKG93bmVyVHlwZSk7XHJcbiAgICAgICAgICAgIGlmIChldmVudGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NBcnIucHVzaChldmVudGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFja0ZuT3duZXJbZm5OYW1lXS5hcHBseShjYWxsYmFja0ZuT3duZXIsIGFyZ3NBcnIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2dldENhbGxiYWNrT3duZXIob3duZXJUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIW93bmVyVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgb3duZXJUeXBlID0gJ0YnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLmZvcm1Db21wb25lbnQ7XHJcbiAgICAgICAgICAgIGlmIChvd25lclR5cGUgPT09ICdQJykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGbk93bmVyID0gdGhpcy5wYWdlQ29tcG9uZW50O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvd25lclR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja0ZuT3duZXIgPSBvd25lclR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrRm5Pd25lcjtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgcHJvdGVjdGVkIF9hZGRDc3NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzcGFjZVNlcGFyYXRlZENsYXNzZXM6IHN0cmluZykge1xyXG4gICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgY29uc3QgY2xhc3Nlc0FyciA9IHNwYWNlU2VwYXJhdGVkQ2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICAgY2xhc3Nlc0Fyci5mb3JFYWNoKChjc3NDbGFzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY3NzQ2xhc3MpO1xyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5faGlkZGVuID0gdGhpcy5maWVsZERlZi5oaWRkZW4gfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICB0aGlzLl9oaWRlTGFiZWwgPSB0aGlzLmZpZWxkRGVmLmhpZGVMYWJlbCB8fCBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZmllbGRzQ29tcG9uZW50W3RoaXMuY29kZV0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgdGhpcy5fc3RvcmVBcnJheXNJbk9iamVjdHMoKTtcclxuICAgICAgICAgICAgIHRoaXMuX2luaXRDc3NDbGFzc2VzKCk7XHJcbiAgICAgICAgICAgICB0aGlzLl9pbml0Q3NzU3R5bGUoKTtcclxuICAgICAgICAgICAgIHRoaXMuX2FwcGx5VmFsaWRhdGlvbnMoKTtcclxuICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfc3RvcmVBcnJheXNJbk9iamVjdHMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9ucy5mb3JFYWNoKHZhbGlkYXRpb25EYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRpb25zRGF0YU9ialt2YWxpZGF0aW9uRGF0YS5uYW1lXSA9IHZhbGlkYXRpb25EYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChldmVudERhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzRGF0YU9ialtldmVudERhdGEubmFtZV0gPSBldmVudERhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9hcHBseVZhbGlkYXRpb25zKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGVmLnZhbGlkYXRpb25zICYmIHRoaXMuZmllbGREZWYudmFsaWRhdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXN5bmNWYWxpZGF0b3JzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGVmLnZhbGlkYXRpb25zLmZvckVhY2godmFsaWRhdGlvbkRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvckRhdGEgPSB0aGlzLl92YWxpZGF0b3JTZXJ2aWNlLmdldFZhbGlkYXRvcih2YWxpZGF0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvckRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3JzLnB1c2godmFsaWRhdG9yRGF0YS52YWxpZGF0aW9uRm4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvck1lc3NhZ2VEYXRhW3ZhbGlkYXRpb25EYXRhLm5hbWVdID0gdmFsaWRhdG9yRGF0YS5tZXNzYWdlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChhc3luY1ZhbGlkYXRvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9ycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfaW5pdENzc0NsYXNzZXMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRDb250YWluZXJDbGFzc2VzID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyQ2xhc3NlcyA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZENsYXNzZXMgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxDbGFzc2VzID0ge307XHJcblxyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lckNsYXNzZXNbYGxhYmVsLSR7dGhpcy5sYWJlbFBvc2l0aW9ufWBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXJDbGFzc2VzW2Ake3RoaXMuaWR9YF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lckNsYXNzZXNbYCR7dGhpcy50eXBlfS1maWVsZC1jb250YWluZXJgXSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1tgdGV4dC0ke3RoaXMuZmllbGREZWYubGFiZWxBbGlnbm1lbnR9YF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBpbnB1dENvbnRhaW5lckNsYXNzZXNbYCR7dGhpcy50eXBlfS1pbnB1dC1jb250YWluZXJgXSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1sncHItMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1sncGwtMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ3VzdG9tU3R5bGUgJiYgdGhpcy5maWVsZERlZi5mb3JtQ29sdW1ucyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzc2VzWydwci0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzc2VzWydwbC0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJDbGFzc2VzWydwci0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJDbGFzc2VzWydwbC0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb2x1bW5zID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWJlbFBvc2l0aW9uID09PSAndG9wJyB8fCB0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDbGFzc2VzWydwci0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1sncGwtMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lckNsYXNzZXNbJ3ByLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJDbGFzc2VzWydwbC0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jc3NDbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAgICAgZmllbGRDb250YWluZXJDbGFzc2VzLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJDbGFzc2VzLFxyXG4gICAgICAgICAgICAgICAgZmllbGRDbGFzc2VzLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzc2VzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2luaXRDc3NTdHlsZSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lclN0eWxlID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyU3R5bGUgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRTdHlsZSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbFN0eWxlID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDdXN0b21TdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFiZWxXaWR0aCAmJiB0aGlzLmZpZWxkV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFN0eWxlWyd3aWR0aCddID0gdGhpcy5sYWJlbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyU3R5bGVbJ3dpZHRoJ10gPSB0aGlzLmZpZWxkV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdISUQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fY3NzU3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZENvbnRhaW5lclN0eWxlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJTdHlsZSxcclxuICAgICAgICAgICAgICAgIGZpZWxkU3R5bGUsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFN0eWxlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmNvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9yZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLm9yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmb3JtT3JkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuZm9ybU9yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb2RlfV9fJHt0aGlzLmZvcm1PcmRlcn1fXyR7dGhpcy5vcmRlcn1gO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb2x1bW5zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmNvbHVtbnM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxhYmVsUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYubGFiZWxQb3NpdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGxhYmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmxhYmVsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgZ3JpZFdpZHRoQ2xhc3MoKSB7XHJcbiAgICAgICAgY29uc3QgY29sID0gMTIgLyBOdW1iZXIodGhpcy5jb2x1bW5zKTtcclxuICAgICAgICByZXR1cm4gYGNvbC1zbS0ke2NvbH1gO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwbGFjZWhvbGRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5wbGFjZWhvbGRlciB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGlkZGVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oaWRkZW4gfHwgZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhpZGRlbih2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oaWRkZW4gPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5jb250cm9sLmRpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBkaXNhYmxlKHByb3A6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBlbmFibGUocHJvcDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29udHJvbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cC5jb250cm9sc1t0aGlzLm5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuZGVmYXVsdFZhbHVlIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWxwVGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5oZWxwVGV4dCB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlcnJvcnMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sICYmIHRoaXMuY29udHJvbC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xFcnJvcnMgPSB0aGlzLmNvbnRyb2wuZXJyb3JzO1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGVycm9yTmFtZSBpbiBjb250cm9sRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yTWVzc2FnZURhdGFbZXJyb3JOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnNEYXRhLnB1c2godGhpcy5fZXJyb3JNZXNzYWdlRGF0YVtlcnJvck5hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yc0RhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWVsZFJlZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlucHV0Q29udGFpbmVyUmVmKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH0gLmlucHV0LWNvbnRhaW5lcmApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYWJlbFJlZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9IC5maWVsZC1sYWJlbGApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmVmaXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYucHJlZml4IHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdWZmaXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuc3VmZml4IHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYWJlbFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmxhYmVsV2lkdGggfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmllbGRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5maWVsZFdpZHRoIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbGlkYXRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLnZhbGlkYXRpb25zIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBldmVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuZXZlbnRzIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNDdXN0b21TdHlsZSgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWZhdWx0cy5FWENFUFRJT05BTF9TVFlMRURfRklFTERTW3RoaXMudHlwZV0gfHwgZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhpZGVMYWJlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGlkZUxhYmVsIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoaWRlTGFiZWwodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmxhYmVsUmVmLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5sYWJlbFJlZiwgJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oaWRlTGFiZWwgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNzc0NsYXNzZXMoKSB7XHJcbiAgICAgICAgdGhpcy5fY3NzQ2xhc3Nlcy5maWVsZENsYXNzZXMgPSBfLmFzc2lnbihcclxuICAgICAgICAgICAgdGhpcy5fY3NzQ2xhc3Nlcy5maWVsZENsYXNzZXMsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vJ2lzLXZhbGlkJzogdGhpcy52YWxpZCxcclxuICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogIXRoaXMudmFsaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nzc0NsYXNzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNzc1N0eWxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NTdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZm9ybUNvZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuZm9ybUNvZGUgfHwgJyc7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==