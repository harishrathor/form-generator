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
     * @param {...?} restArgsArr
     * @return {?}
     */
    eventHandler(ownerType, fnName, argsArr, ...restArgsArr) {
        try {
            if (!argsArr) {
                argsArr = [];
            }
            argsArr = Object.assign([], argsArr);
            /** @type {?} */
            const callbackFnOwner = this._getCallbackOwner(ownerType);
            if (restArgsArr) {
                argsArr = [...argsArr, ...restArgsArr];
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
            this.parent.fieldsComponent[this.name] = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvZmllbGQuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQXlCLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7O0FBSTVCLDRDQUlDOzs7SUFIQSw2Q0FBYTs7SUFDYixrREFBa0I7O0lBQ2xCLHVEQUF3Qjs7QUFHekIsTUFBTSxPQUFPLEtBQUs7Ozs7Ozs7O0lBeUJkLFlBQXNCLFFBQW9CLEVBQVksU0FBb0IsRUFBWSxpQkFBbUMsRUFBWSxTQUEwQixFQUFZLFlBQXlCO1FBQTlLLGFBQVEsR0FBUixRQUFRLENBQVk7UUFBWSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVksc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFZLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQVksaUJBQVksR0FBWixZQUFZLENBQWE7UUFDaE0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2IsSUFBSTtZQUNBLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FB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cnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9kZWZhdWx0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3ZhbGlkYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJbnB1dCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEluamVjdGFibGUsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuXHJcblxyXG5pbnRlcmZhY2UgRXZlbnRIYW5kbGVyQ2FsbGJhY2tJbnRlcmZhY2Uge1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRhcmd1bWVudHM/OiBhbnlbXTtcclxuXHRoYW5kbGVyRm5Pd25lcj86IHN0cmluZztcclxufVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaWVsZCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGZpZWxkRGVmOiBhbnk7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGZvcm1Db21wb25lbnQ6IGFueTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcGFnZUNvbXBvbmVudDogYW55O1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwYXJlbnQ6IGFueTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2Nzc0NsYXNzZXM6IGFueTtcclxuICAgIHByb3RlY3RlZCBfY3NzU3R5bGU6IGFueTtcclxuICAgIHByb3RlY3RlZCBfZXJyb3JNZXNzYWdlRGF0YTogYW55O1xyXG4gICAgcHJvdGVjdGVkIF9ldmVudHNEYXRhT2JqOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgX3ZhbGlkYXRpb25zRGF0YU9iajogYW55O1xyXG4gICAgcHJvdGVjdGVkIF9oaWRkZW46IGJvb2xlYW47XHJcbiAgICBwcm90ZWN0ZWQgX2hpZGVMYWJlbDogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtUmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByb3RlY3RlZCBfdmFsaWRhdG9yU2VydmljZTogVmFsaWRhdG9yU2VydmljZSwgcHJvdGVjdGVkIF9kZWZhdWx0czogRGVmYXVsdHNTZXJ2aWNlLCBwcm90ZWN0ZWQgX2h0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50c0RhdGFPYmogPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3JNZXNzYWdlRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0aW9uc0RhdGFPYmogPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5faGlkZUxhYmVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgICB9XHJcblxyXG4gICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAgdGhpcy5fYWZ0ZXJWaWV3SW5pdCgpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgcHJvdGVjdGVkIF9hZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDc3NDbGFzc2VzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgYCR7dGhpcy5ncmlkV2lkdGhDbGFzc30gJHt0aGlzLnR5cGV9IGZvcm0tZmllbGRgKTtcclxuICAgICAgICAgICAgdGhpcy5fYXBwbHlFdmVudHMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERlZi5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkUmVmO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKGZpZWxkLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGVmLmlzUGFyZW50ICYmIHRoaXMuZmllbGREZWYuY2hpbGRyZW4gJiYgdGhpcy5maWVsZERlZi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh0aGlzLnBhcmVudC5vblBhcmVudEZpZWxkVmFsdWVDaGFuZ2UuYmluZCh0aGlzLnBhcmVudCwgdGhpcy5uYW1lLCB0aGlzLmZpZWxkRGVmLmNoaWxkcmVuKSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oaWRlTGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmxhYmVsUmVmLCAnbGFiZWwnLCB0aGlzLmxhYmVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxSZWYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgcHJvdGVjdGVkIF9hcHBseUV2ZW50cygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERlZi5ldmVudHMgJiYgdGhpcy5maWVsZERlZi5ldmVudHMuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFJlZiA9IHRoaXMuZmllbGRSZWY7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRSZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGVmLmV2ZW50cy5mb3JFYWNoKGV2ZW50RGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50RGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFja3NBcnIgPSBldmVudERhdGEuY2FsbGJhY2tzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NBcnIuZm9yRWFjaCggY2FsYmFja0RhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tGbiA9IHRoaXMuX2dldEV2ZW50Q2FsbGJhY2soZXZlbnROYW1lLCBjYWxiYWNrRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tGbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVmLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFja0ZuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZ2V0RXZlbnRDYWxsYmFjayhldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2tEYXRhOiBFdmVudEhhbmRsZXJDYWxsYmFja0ludGVyZmFjZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrTmFtZSA9IGNhbGxiYWNrRGF0YS5uYW1lO1xyXG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrRGF0YS5hcmd1bWVudHMpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrRGF0YS5hcmd1bWVudHMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlckZuT3duZXIgPSB0aGlzLl9nZXRDYWxsYmFja093bmVyKGNhbGxiYWNrRGF0YS5oYW5kbGVyRm5Pd25lcik7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyRm5Pd25lciAmJiBoYW5kbGVyRm5Pd25lcltjYWxsYmFja05hbWVdICYmIHR5cGVvZiBoYW5kbGVyRm5Pd25lcltjYWxsYmFja05hbWVdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudEhhbmRsZXIuYmluZCh0aGlzLCBjYWxsYmFja0RhdGEuaGFuZGxlckZuT3duZXIsIGNhbGxiYWNrTmFtZSwgY2FsbGJhY2tEYXRhLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2FsbGJhY2sgZnVuY3Rpb24gJHtjYWxsYmFja05hbWV9IGZvciBldmVudCAke2V2ZW50TmFtZX0gZG9lcyBub3QgZXhpc3QgaW4gYCwgaGFuZGxlckZuT3duZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXZlbnRIYW5kbGVyKG93bmVyVHlwZTogYW55LCBmbk5hbWU6IHN0cmluZywgYXJnc0FycjogYW55LCAuLi5yZXN0QXJnc0Fycikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghYXJnc0Fycikge1xyXG4gICAgICAgICAgICAgICAgYXJnc0FyciA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyZ3NBcnIgPSBPYmplY3QuYXNzaWduKFtdLCBhcmdzQXJyKTtcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tGbk93bmVyID0gdGhpcy5fZ2V0Q2FsbGJhY2tPd25lcihvd25lclR5cGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHJlc3RBcmdzQXJyKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzQXJyID0gWy4uLmFyZ3NBcnIsIC4uLnJlc3RBcmdzQXJyXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFja0ZuT3duZXJbZm5OYW1lXS5hcHBseShjYWxsYmFja0ZuT3duZXIsIGFyZ3NBcnIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2dldENhbGxiYWNrT3duZXIob3duZXJUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIW93bmVyVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgb3duZXJUeXBlID0gJ0YnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLmZvcm1Db21wb25lbnQ7XHJcbiAgICAgICAgICAgIGlmIChvd25lclR5cGUgPT09ICdQJykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGbk93bmVyID0gdGhpcy5wYWdlQ29tcG9uZW50O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvd25lclR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja0ZuT3duZXIgPSBvd25lclR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrRm5Pd25lcjtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgcHJvdGVjdGVkIF9hZGRDc3NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzcGFjZVNlcGFyYXRlZENsYXNzZXM6IHN0cmluZykge1xyXG4gICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgY29uc3QgY2xhc3Nlc0FyciA9IHNwYWNlU2VwYXJhdGVkQ2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICAgY2xhc3Nlc0Fyci5mb3JFYWNoKChjc3NDbGFzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY3NzQ2xhc3MpO1xyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5faGlkZGVuID0gdGhpcy5maWVsZERlZi5oaWRkZW4gfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICB0aGlzLl9oaWRlTGFiZWwgPSB0aGlzLmZpZWxkRGVmLmhpZGVMYWJlbCB8fCBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZmllbGRzQ29tcG9uZW50W3RoaXMubmFtZV0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgdGhpcy5fc3RvcmVBcnJheXNJbk9iamVjdHMoKTtcclxuICAgICAgICAgICAgIHRoaXMuX2luaXRDc3NDbGFzc2VzKCk7XHJcbiAgICAgICAgICAgICB0aGlzLl9pbml0Q3NzU3R5bGUoKTtcclxuICAgICAgICAgICAgIHRoaXMuX2FwcGx5VmFsaWRhdGlvbnMoKTtcclxuICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfc3RvcmVBcnJheXNJbk9iamVjdHMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9ucy5mb3JFYWNoKHZhbGlkYXRpb25EYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRpb25zRGF0YU9ialt2YWxpZGF0aW9uRGF0YS5uYW1lXSA9IHZhbGlkYXRpb25EYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChldmVudERhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzRGF0YU9ialtldmVudERhdGEubmFtZV0gPSBldmVudERhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9hcHBseVZhbGlkYXRpb25zKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGVmLnZhbGlkYXRpb25zICYmIHRoaXMuZmllbGREZWYudmFsaWRhdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXN5bmNWYWxpZGF0b3JzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGVmLnZhbGlkYXRpb25zLmZvckVhY2godmFsaWRhdGlvbkRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvckRhdGEgPSB0aGlzLl92YWxpZGF0b3JTZXJ2aWNlLmdldFZhbGlkYXRvcih2YWxpZGF0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvckRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3JzLnB1c2godmFsaWRhdG9yRGF0YS52YWxpZGF0aW9uRm4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvck1lc3NhZ2VEYXRhW3ZhbGlkYXRpb25EYXRhLm5hbWVdID0gdmFsaWRhdG9yRGF0YS5tZXNzYWdlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChhc3luY1ZhbGlkYXRvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9ycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfaW5pdENzc0NsYXNzZXMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRDb250YWluZXJDbGFzc2VzID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyQ2xhc3NlcyA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZENsYXNzZXMgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxDbGFzc2VzID0ge307XHJcblxyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lckNsYXNzZXNbYGxhYmVsLSR7dGhpcy5sYWJlbFBvc2l0aW9ufWBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXJDbGFzc2VzW2Ake3RoaXMuaWR9YF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lckNsYXNzZXNbYCR7dGhpcy50eXBlfS1maWVsZC1jb250YWluZXJgXSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1tgdGV4dC0ke3RoaXMuZmllbGREZWYubGFiZWxBbGlnbm1lbnR9YF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBpbnB1dENvbnRhaW5lckNsYXNzZXNbYCR7dGhpcy50eXBlfS1pbnB1dC1jb250YWluZXJgXSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1sncHItMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1sncGwtMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ3VzdG9tU3R5bGUgJiYgdGhpcy5maWVsZERlZi5mb3JtQ29sdW1ucyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzc2VzWydwci0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzc2VzWydwbC0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJDbGFzc2VzWydwci0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJDbGFzc2VzWydwbC0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb2x1bW5zID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWJlbFBvc2l0aW9uID09PSAndG9wJyB8fCB0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDbGFzc2VzWydwci0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1sncGwtMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lckNsYXNzZXNbJ3ByLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJDbGFzc2VzWydwbC0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jc3NDbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAgICAgZmllbGRDb250YWluZXJDbGFzc2VzLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJDbGFzc2VzLFxyXG4gICAgICAgICAgICAgICAgZmllbGRDbGFzc2VzLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzc2VzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2luaXRDc3NTdHlsZSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lclN0eWxlID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyU3R5bGUgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRTdHlsZSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbFN0eWxlID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDdXN0b21TdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFiZWxXaWR0aCAmJiB0aGlzLmZpZWxkV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFN0eWxlWyd3aWR0aCddID0gdGhpcy5sYWJlbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyU3R5bGVbJ3dpZHRoJ10gPSB0aGlzLmZpZWxkV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdISUQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fY3NzU3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZENvbnRhaW5lclN0eWxlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJTdHlsZSxcclxuICAgICAgICAgICAgICAgIGZpZWxkU3R5bGUsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFN0eWxlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmNvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9yZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLm9yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmb3JtT3JkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuZm9ybU9yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb2RlfV9fJHt0aGlzLmZvcm1PcmRlcn1fXyR7dGhpcy5vcmRlcn1gO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb2x1bW5zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmNvbHVtbnM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLnR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxhYmVsUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYubGFiZWxQb3NpdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGxhYmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmxhYmVsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgZ3JpZFdpZHRoQ2xhc3MoKSB7XHJcbiAgICAgICAgY29uc3QgY29sID0gMTIgLyBOdW1iZXIodGhpcy5jb2x1bW5zKTtcclxuICAgICAgICByZXR1cm4gYGNvbC1zbS0ke2NvbH1gO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwbGFjZWhvbGRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5wbGFjZWhvbGRlciB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGlkZGVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oaWRkZW4gfHwgZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhpZGRlbih2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oaWRkZW4gPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5jb250cm9sLmRpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBkaXNhYmxlKHByb3A6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBlbmFibGUocHJvcDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29udHJvbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cC5jb250cm9sc1t0aGlzLm5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZWZhdWx0VmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuZGVmYXVsdFZhbHVlIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWxwVGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5oZWxwVGV4dCB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlcnJvcnMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JzRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sICYmIHRoaXMuY29udHJvbC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xFcnJvcnMgPSB0aGlzLmNvbnRyb2wuZXJyb3JzO1xyXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGVycm9yTmFtZSBpbiBjb250cm9sRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yTWVzc2FnZURhdGFbZXJyb3JOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnNEYXRhLnB1c2godGhpcy5fZXJyb3JNZXNzYWdlRGF0YVtlcnJvck5hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yc0RhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWVsZFJlZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlucHV0Q29udGFpbmVyUmVmKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH0gLmlucHV0LWNvbnRhaW5lcmApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYWJlbFJlZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9IC5maWVsZC1sYWJlbGApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmVmaXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYucHJlZml4IHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdWZmaXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuc3VmZml4IHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYWJlbFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmxhYmVsV2lkdGggfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmllbGRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5maWVsZFdpZHRoIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbGlkYXRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLnZhbGlkYXRpb25zIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBldmVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuZXZlbnRzIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNDdXN0b21TdHlsZSgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl9kZWZhdWx0cy5FWENFUFRJT05BTF9TVFlMRURfRklFTERTW3RoaXMudHlwZV0gfHwgZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhpZGVMYWJlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGlkZUxhYmVsIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoaWRlTGFiZWwodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmxhYmVsUmVmLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5sYWJlbFJlZiwgJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oaWRlTGFiZWwgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNzc0NsYXNzZXMoKSB7XHJcbiAgICAgICAgdGhpcy5fY3NzQ2xhc3Nlcy5maWVsZENsYXNzZXMgPSBfLmFzc2lnbihcclxuICAgICAgICAgICAgdGhpcy5fY3NzQ2xhc3Nlcy5maWVsZENsYXNzZXMsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vJ2lzLXZhbGlkJzogdGhpcy52YWxpZCxcclxuICAgICAgICAgICAgICAgICdpcy1pbnZhbGlkJzogIXRoaXMudmFsaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nzc0NsYXNzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNzc1N0eWxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NTdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZm9ybUNvZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuZm9ybUNvZGUgfHwgJyc7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==