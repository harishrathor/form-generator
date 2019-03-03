import { NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from 'ngx-quill';
import { CustomValidators } from 'ngx-custom-validators';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CommonModule } from '@angular/common';
import { Injectable, Directive, Component, Input, NgModule, ElementRef, Renderer2, ViewEncapsulation, defineInjectable, inject, ViewChild, EventEmitter, Output } from '@angular/core';
import { assign, includes } from 'lodash';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} methodType
     * @return {?}
     */
    fetchOptions(url, data, methodType) {
        try {
            if (methodType === 'POST') {
                return this._http.post(url, data);
            }
            url += this.makeObjToGetUrlParams(data);
            return this._http.get(url);
        }
        catch (error) {
            console.log(error);
            return of([]);
        }
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    makeObjToGetUrlParams(obj) {
        try {
            /** @type {?} */
            let str = '';
            for (let paramName in obj) {
                /** @type {?} */
                const paramValue = obj[paramName];
                if (str === '') {
                    str += '?';
                }
                else {
                    str += '&';
                }
                str += `${paramValue}=${paramValue}`;
            }
            return str;
        }
        catch (error) {
            console.log(error);
            return '';
        }
    }
}
HttpService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HttpService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ HttpService.ngInjectableDef = defineInjectable({ factory: function HttpService_Factory() { return new HttpService(inject(HttpClient)); }, token: HttpService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoggerService {
    /**
     * @param {?} message
     * @return {?}
     */
    print(message) {
        try {
            console.log(message);
        }
        catch (error) {
        }
    }
}
LoggerService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultsService {
    constructor() {
        this._columns = 2;
    }
    /**
     * @return {?}
     */
    get COLUMNS() {
        return this._columns;
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    set COLUMNS(columns) {
        this._columns = columns;
    }
    /**
     * @return {?}
     */
    get FIELD_DEFAULT_PROPS() {
        /** @type {?} */
        const propsObj = {
            labelPosition: this.FIELD_POSITION,
            labelAlignment: this.FIELD_ALIGNMENT,
            labelWidth: '50%',
            fieldWidth: '50%',
            fieldAlignment: 'left',
            width: '100%'
        };
        return propsObj;
    }
    /**
     * @return {?}
     */
    get FORM_COLUMNS() {
        return 2;
    }
    /**
     * @return {?}
     */
    get FIELD_ALIGNMENT() {
        return 'right';
    }
    /**
     * @return {?}
     */
    get FIELD_POSITION() {
        return 'left';
    }
    /**
     * @return {?}
     */
    get EVENT_HANDLER_OWNER_TYPE() {
        return 'P';
    }
    /**
     * @return {?}
     */
    get EXCEPTIONAL_STYLED_FIELDS() {
        /** @type {?} */
        let labelWidth = '25%';
        /** @type {?} */
        let fieldWidth = '75%';
        if (this.COLUMNS === 2) {
            labelWidth = '24.5%';
            fieldWidth = '75.5%';
        }
        /** @type {?} */
        const defaultProps = {
            labelWidth,
            fieldWidth,
            columns: 1
        };
        return {
            TXA: defaultProps,
            // MSL: defaultProps,
            // RAD: defaultProps,
            HTML: {
                columns: 1,
                labelPosition: 'top',
                labelWidth: '100%',
                fieldWidth: '100%',
                labelAlignment: 'left'
            }
        };
    }
    /**
     * @return {?}
     */
    get DUMMY_FIELDS() {
        return ['BLK', 'BTN'];
    }
    /**
     * @return {?}
     */
    get BTN_DEFUALT_THEME() {
        return 'info';
    }
    /**
     * @return {?}
     */
    get ACS_SEARCH_EVENT_NAME() {
        return 'search';
    }
    /**
     * @return {?}
     */
    get ACS_FETCH_DEBOUNCE_TIME() {
        return 400;
    }
}
DefaultsService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UtilService {
    /*
        constructor(public renderer: Renderer2) {
    
        }
     */
    /**
     * @param {?} element
     * @param {?} spaceSeparatedClasses
     * @return {?}
     */
    addCssClasses(element, spaceSeparatedClasses) {
        try {
            element.className = spaceSeparatedClasses;
            /* const classesArr = spaceSeparatedClasses.split(' ');
            classesArr.forEach((cssClass) => {
                //this.renderer.addClass(element, cssClass);
            }); */
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} selector
     * @param {?} cssStyle
     * @return {?}
     */
    applyInlieCssBySelector(selector, cssStyle) {
        try {
            /** @type {?} */
            const elementList = document.querySelectorAll(selector);
            elementList.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                try {
                    for (let cssProp in cssStyle) {
                        try {
                            /** @type {?} */
                            let propValue = cssStyle[cssProp];
                            element["style"][cssProp] = propValue;
                        }
                        catch (error) { }
                    }
                }
                catch (error) { }
            }));
        }
        catch (error) {
            console.log(error);
        }
    }
}
UtilService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchemaService {
    /**
     * @param {?} _defaults
     */
    constructor(_defaults) {
        this._defaults = _defaults;
        this.initialize();
    }
    /**
     * @return {?}
     */
    initialize() {
        try {
            this._formSchema = {};
            this._formOriginalSchema = {};
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} schemaKey
     * @param {?} schema
     * @return {?}
     */
    addSchema(schemaKey, schema) {
        try {
            if (!this._formOriginalSchema[schemaKey]) {
                this._formOriginalSchema[schemaKey] = {};
            }
            this._formOriginalSchema[schemaKey] = assign({}, schema);
            schema = this._modifyDef(schema);
            if (!this._formSchema[schemaKey]) {
                this._formSchema[schemaKey] = {};
            }
            this._formSchema[schemaKey] = schema;
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @param {?} schema
     * @return {?}
     */
    _modifyDef(schema) {
        try {
            if (!schema.columns) {
                schema.columns = this._defaults.FORM_COLUMNS;
            }
            if (!schema.fieldsDefaultProps) {
                schema.fieldsDefaultProps = {};
            }
            if (!schema.columns) {
                schema.columns = this._defaults.COLUMNS;
            }
            this._defaults.COLUMNS = schema.columns;
            schema.fieldsDefaultProps.columns = schema.columns;
            schema.fieldsDefaultProps.disabled = schema.disabled;
            schema.fieldsDefaultProps.formCode = schema.code;
            schema.fieldsDefaultProps.formOrder = schema.order || 1;
            schema.fields = this._addFieldsDefaultProps(schema.fields, schema.fieldsDefaultProps);
            schema.buttons = this._addFieldsDefaultProps(schema.buttons, schema.fieldsDefaultProps);
            return schema;
        }
        catch (error) {
            console.log(error);
            return {};
        }
    }
    /**
     * @protected
     * @param {?} fieldsArr
     * @param {?} fieldDefaultProps
     * @return {?}
     */
    _addFieldsDefaultProps(fieldsArr, fieldDefaultProps) {
        try {
            if (!fieldsArr) {
                fieldsArr = [];
            }
            fieldsArr.forEach((/**
             * @param {?} def
             * @param {?} index
             * @return {?}
             */
            (def, index) => {
                if (def.type === 'FST') {
                    def.fields = this._addFieldsDefaultProps(def.fields, fieldDefaultProps);
                }
                else {
                    def.disabled = def.disabled || fieldDefaultProps.disabled || false;
                    /** @type {?} */
                    const fieldProps = assign({}, this._defaults.FIELD_DEFAULT_PROPS, fieldDefaultProps);
                    if (def.type in this._defaults.EXCEPTIONAL_STYLED_FIELDS) {
                        def.formColumns = fieldProps.columns;
                        def = assign(def, this._defaults.EXCEPTIONAL_STYLED_FIELDS[def.type]);
                    }
                    def = assign({}, fieldProps, def);
                }
                fieldsArr[index] = def;
            }));
            return fieldsArr;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }
    /**
     * @param {?} schemaKey
     * @return {?}
     */
    getSchemaFields(schemaKey) {
        try {
            if (!this._formSchema[schemaKey] || !this._formSchema[schemaKey].fields) {
                return [];
            }
            return this._formSchema[schemaKey].fields;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }
    /**
     * @param {?} schemaKey
     * @return {?}
     */
    getSchemaBySchemaKey(schemaKey) {
        try {
            if (!this._formSchema[schemaKey]) {
                return {};
            }
            return this._formSchema[schemaKey];
        }
        catch (error) {
            console.log(error);
        }
    }
}
SchemaService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaService.ctorParameters = () => [
    { type: DefaultsService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidatorService {
    constructor() {
        this._validatorsMapping = {
            maxlength: this.getMaxlengthValidator.bind(this),
            minlength: this.getMinlengthValidator.bind(this),
            pattern: this.getPatternValidator.bind(this),
            required: this.getRequiredValidator.bind(this),
            arrayLength: this.getArrayLengthValidator.bind(this),
            base64: this.getBase64Validator.bind(this),
            creditCard: this.getCreditCardValidator.bind(this),
            date: this.getDateValidator.bind(this),
            dateISO: this.getDateISOValidator.bind(this),
            digits: this.getDigitsValidator.bind(this),
            email: this.getEmailValidator.bind(this),
            equal: this.getEqualValidator.bind(this),
            notEqual: this.getNotEqualValidator.bind(this),
            equalTo: this.getEqualToValidator.bind(this),
            notEqualTo: this.getNotEqualToValidator.bind(this),
            lt: this.getLtValidator.bind(this),
            gte: this.getGteValidator.bind(this),
            json: this.getJsonValidator.bind(this),
            lte: this.getLteValidator.bind(this),
            max: this.getMaxValidator.bind(this),
            maxDate: this.getMaxDateValidator.bind(this),
            min: this.getMinValidator.bind(this),
            minDate: this.getMinDateValidator.bind(this),
            number: this.getNumberValidator.bind(this),
            property: this.getPropertyValidator.bind(this),
            range: this.getRangeValidator.bind(this),
            rangeLength: this.getRangeLengthValidator.bind(this),
            url: this.getUrlValidator.bind(this),
            uuid: this.getUuidValidator.bind(this)
        };
        this._validationMessageMapping = {
            maxlength: 'Length can not be greater than XXVALUEXX.',
            minlength: 'Length can not be less than XXVALUEXX.',
            pattern: 'Invalid value.',
            required: 'This field is required.',
            arrayLength: 'Lenght should be XXVALUEXX.',
            base64: 'Invalid base64 value.',
            creditCard: 'Invalid credit card number.',
            date: 'Invalid date.',
            dateISO: 'Invalid ISO date.',
            digits: 'Required numbers only.',
            email: 'Invalid email.',
            equal: 'Value should be equal to XXVALUEXX.',
            notEqual: 'Value should not be equal to XXVALUEXX.',
            equalTo: 'Value should be equal to XXVALUEXX.',
            notEqualTo: 'Value should not be equal to XXVALUEXX.',
            lt: 'Please fill value less than XXVALUEXX.',
            gte: 'Please fill value greater than or equal to XXVALUEXX',
            json: 'Invalid json.',
            lte: 'Please fill value less than or equal to XXVALUEXX',
            max: 'Max value XXVALUEXX is allowed',
            maxDate: 'Max date XXVALUEXX is allowed.',
            min: 'Min value XXVALUEXX is allowed.',
            minDate: 'Min date XXVALUEXX is allowed.',
            number: 'Numbers only required.',
            property: 'Invalid property.',
            range: 'Value should be between XXminXX and XXmaxXX.',
            rangeLength: 'Range should be between XXminXX and XXmaxXX.',
            url: 'Invalid URL.',
            uuid: 'Invalid UUID.'
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMaxlengthValidator(value) {
        try {
            return Validators.maxLength(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMinlengthValidator(value) {
        try {
            return Validators.minLength(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getPatternValidator(value) {
        try {
            return Validators.pattern(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getRequiredValidator(value) {
        try {
            return Validators.required;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getArrayLengthValidator(value) {
        try {
            return CustomValidators.arrayLength(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getBase64Validator(value) {
        try {
            return CustomValidators.base64;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getCreditCardValidator(value) {
        try {
            return CustomValidators.creditCard;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getDateValidator(value) {
        try {
            return CustomValidators.date(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getDateISOValidator(value) {
        try {
            return CustomValidators.dateISO;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getDigitsValidator(value) {
        try {
            return CustomValidators.digits;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getEmailValidator(value) {
        try {
            return CustomValidators.email;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getEqualValidator(value) {
        try {
            return CustomValidators.equal(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getEqualToValidator(value) {
        try {
            return CustomValidators.equalTo(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getLtValidator(value) {
        try {
            return CustomValidators.lt(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getGteValidator(value) {
        try {
            return CustomValidators.gte(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getJsonValidator(value) {
        try {
            return CustomValidators.json;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getLteValidator(value) {
        try {
            return CustomValidators.lte(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMaxValidator(value) {
        try {
            return CustomValidators.max(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMaxDateValidator(value) {
        try {
            return CustomValidators.maxDate;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMinValidator(value) {
        try {
            return CustomValidators.min(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMinDateValidator(value) {
        try {
            return CustomValidators.minDate(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getNotEqualValidator(value) {
        try {
            return CustomValidators.notEqual(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getNotEqualToValidator(value) {
        try {
            return CustomValidators.notEqualTo(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getNumberValidator(value) {
        try {
            return CustomValidators.number;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getPropertyValidator(value) {
        try {
            return CustomValidators.property(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getRangeValidator(value) {
        try {
            return CustomValidators.range([value.min, value.max]);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getRangeLengthValidator(value) {
        try {
            return CustomValidators.rangeLength([value.min, value.max]);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getUrlValidator(value) {
        try {
            return CustomValidators.url;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getUuidValidator(value) {
        try {
            return CustomValidators.uuid(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} validatorData
     * @return {?}
     */
    getValidator(validatorData) {
        try {
            /** @type {?} */
            const name = validatorData.name;
            /** @type {?} */
            const value = validatorData.value;
            if (this._validatorsMapping[name]) {
                /** @type {?} */
                const validationFn = this._validatorsMapping[name](value);
                return {
                    messageDate: this.getErrorMessageData(validatorData),
                    validationFn
                };
            }
            else {
                console.log(`Validation '${name}' is not supported.`);
                return null;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    /**
     * @param {?} validatorData
     * @return {?}
     */
    getErrorMessageData(validatorData) {
        try {
            /** @type {?} */
            const name = validatorData.name;
            return {
                name,
                message: this._getValidationMessage(validatorData)
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @param {?} validatorData
     * @return {?}
     */
    _getValidationMessage(validatorData) {
        try {
            /** @type {?} */
            const name = validatorData.name;
            /** @type {?} */
            const value = validatorData.value;
            /** @type {?} */
            let validationMessage = this._validationMessageMapping[name];
            if (value.constructor === Object) {
                for (let propertyName in value) {
                    /** @type {?} */
                    const propertyValue = value[propertyName];
                    validationMessage = validationMessage.replace(`XX${propertyName}XX`, propertyValue);
                }
            }
            else {
                validationMessage = validationMessage.replace(`XXVALUEXX`, value);
            }
            return validationMessage;
        }
        catch (error) {
            console.log(error);
            return 'Error';
        }
    }
}
ValidatorService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Field {
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
        this._cssClasses.fieldClasses = assign(this._cssClasses.fieldClasses, {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextComponent extends Field {
    /**
     * @protected
     * @return {?}
     */
    _afterViewInit() {
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
        }
        catch (error) {
        }
    }
}
TextComponent.decorators = [
    { type: Component, args: [{
                selector: 'text',
                template: "<!-- <div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <input type=\"text\" class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\">\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n -->\n<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\" *ngIf=\"prefix\">\n        <div class=\"input-group-text\">{{prefix}}</div>\n      </div>\n      <input type=\"text\" class=\"form-control\" \n        [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n        [attr.placeholder]=\"placeholder\">\n      <div class=\"input-group-append\" *ngIf=\"suffix\">\n        <span class=\"input-group-text\">{{suffix}}</span>\n      </div>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorsComponent {
}
ErrorsComponent.decorators = [
    { type: Component, args: [{
                selector: 'errors',
                template: "\n<div  class=\"invalid-feedback field-error-container\" style=\"display:block !important\"> \n  <span *ngFor=\"let error of errors\" class=\"{{error.name}}-error field-error\" >\n     {{error.message}}\n    </span>\n  \n</div>\n\n",
                styles: [""]
            }] }
];
ErrorsComponent.propDecorators = {
    errors: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateComponent extends Field {
    /**
     * @protected
     * @return {?}
     */
    _init() {
        try {
            super._init();
            if (this._validationsDataObj.minDate) {
                this.minDate = new Date();
                /** @type {?} */
                let dSrtng = this._validationsDataObj.minDate.value;
                /** @type {?} */
                let arr = dSrtng.split('/');
                this.minDate.setMonth(arr[0] - 1);
                this.minDate.setDate(arr[1]);
                this.minDate.setFullYear(arr[2]);
            }
            if (this._validationsDataObj.maxDate) {
                this.maxDate = new Date();
                /** @type {?} */
                let dSrtng = this._validationsDataObj.maxDate.value;
                /** @type {?} */
                let arr = dSrtng.split('/');
                this.maxDate.setMonth(arr[0] - 1);
                this.maxDate.setDate(arr[1]);
                this.maxDate.setFullYear(arr[2]);
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
            this._eventsAndCallbacksMapping = {};
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                this.fieldDef.events.forEach((/**
                 * @param {?} eventData
                 * @return {?}
                 */
                eventData => {
                    /** @type {?} */
                    const eventName = eventData.name;
                    /** @type {?} */
                    const callbacksArr = eventData.callbacks;
                    this._eventsAndCallbacksMapping[eventName] = [];
                    callbacksArr.forEach((/**
                     * @param {?} calbackData
                     * @return {?}
                     */
                    calbackData => {
                        /** @type {?} */
                        const callbackFn = this._getEventCallback(eventName, calbackData);
                        if (callbackFn) {
                            try {
                                this._eventsAndCallbacksMapping[eventName].push(callbackFn);
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                    }));
                }));
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    callEventCallbacks(eventName, eventData) {
        try {
            if (this._eventsAndCallbacksMapping && this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
                this._eventsAndCallbacksMapping[eventName].forEach((/**
                 * @param {?} callback
                 * @return {?}
                 */
                callback => {
                    if (eventData) {
                        callback(eventData);
                    }
                    else {
                        callback();
                    }
                }));
            }
        }
        catch (error) {
            console.log(error);
        }
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
        /** @type {?} */
        let setDate = value;
        if (value.constructor === String) {
            this.bsValue = new Date();
            try {
                /** @type {?} */
                let dateAR = setDate.split('/');
                this.bsValue.setMonth(dateAR[0] - 1);
                this.bsValue.setDate(dateAR[1]);
                this.bsValue.setFullYear(dateAR[2]);
                value = this.bsValue;
            }
            catch (error) {
                console.log(error);
            }
        }
        this.control.setValue(value);
    }
}
DateComponent.decorators = [
    { type: Component, args: [{
                selector: 'date',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\"\n\t[ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]=\"group\">\n\t<label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\"\n\t\t[ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n\t<div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\t\t<input class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n\t\t\t[formControlName]=\"name\" [attr.placeholder]=\"placeholder\" bsDatepicker [minDate]=\"minDate\"\n\t\t\t[maxDate]=\"maxDate\" (bsValueChange)=\"callEventCallbacks('bsValueChange', $event)\"\n\t\t\t(onHidden)=\"callEventCallbacks('onHidden', $event)\" (onShown)=\"callEventCallbacks('onShown', $event)\">\n\n\n\t\t<errors [errors]=\"errors\"></errors>\n\t</div>\n\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ".bs-datepicker{display:flex;align-items:stretch;flex-flow:row wrap;background:#fff;box-shadow:0 0 10px 0 #aaa;position:relative;z-index:1}.bs-datepicker:after{clear:both;content:'';display:block}.bs-datepicker bs-day-picker{float:left}.bs-datepicker button:active,.bs-datepicker button:focus,.bs-datepicker button:hover,.bs-datepicker input:active,.bs-datepicker input:focus,.bs-datepicker input:hover,.bs-datepicker-btns button:active,.bs-datepicker-btns button:focus,.bs-datepicker-btns button:hover,.bs-datepicker-predefined-btns button:active,.bs-datepicker-predefined-btns button:focus{outline:0}.bs-datepicker-head{min-width:270px;height:50px;padding:10px;border-radius:3px 3px 0 0;text-align:justify}.bs-datepicker-head:after{content:\"\";display:inline-block;vertical-align:top;width:100%}.bs-datepicker-head button{display:inline-block;vertical-align:top;padding:0;height:30px;line-height:30px;border:0;background:0 0;text-align:center;cursor:pointer;color:#fff;transition:.3s}.bs-datepicker-head button[disabled],.bs-datepicker-head button[disabled]:active,.bs-datepicker-head button[disabled]:hover{background:rgba(221,221,221,.3);color:#f5f5f5;cursor:not-allowed}.bs-datepicker-head button.next,.bs-datepicker-head button.previous{border-radius:50%;width:30px;height:30px}.bs-datepicker-head button.next span,.bs-datepicker-head button.previous span{font-size:28px;line-height:1;display:inline-block;position:relative;height:100%;width:100%;border-radius:50%}.bs-datepicker-head button.current{border-radius:15px;max-width:155px;padding:0 13px}.bs-datepicker-head button:hover{background-color:rgba(0,0,0,.1)}.bs-datepicker-head button:active{background-color:rgba(0,0,0,.2)}.bs-datepicker-body{padding:10px;border-radius:0 0 3px 3px;min-height:232px;min-width:278px;border:1px solid #e9edf0}.bs-datepicker-body .days.weeks{position:relative;z-index:1}.bs-datepicker-body table{width:100%;border-collapse:separate;border-spacing:0}.bs-datepicker-body table th{font-size:13px;color:#9aaec1;font-weight:400;text-align:center}.bs-datepicker-body table td{color:#54708b;text-align:center;position:relative;padding:0}.bs-datepicker-body table td span{display:block;margin:0 auto;font-size:13px;border-radius:50%;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.bs-datepicker-body table td:not(.disabled):not(.week) span:not(.disabled):not(.is-other-month){cursor:pointer}.bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected),.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span{background-color:#e9edf0;transition:none}.bs-datepicker-body table td span.is-active-other-month:not(.disabled):not(.selected),.bs-datepicker-body table td.is-active-other-month:not(.disabled):not(.selected) span{background-color:#e9edf0;transition:none;cursor:pointer}.bs-datepicker-body table td span.disabled,.bs-datepicker-body table td.disabled span{color:#9aaec1}.bs-datepicker-body table td span.selected,.bs-datepicker-body table td.selected span{color:#fff}.bs-datepicker-body table td span.is-other-month,.bs-datepicker-body table td.is-other-month span{color:rgba(0,0,0,.25)}.bs-datepicker-body table td.active{position:relative}.bs-datepicker-body table td.active.select-start:before{left:35%}.bs-datepicker-body table td.active.select-end:before{left:-85%}.bs-datepicker-body table td span.active.select-end:after,.bs-datepicker-body table td span.active.select-start:after,.bs-datepicker-body table td.active.select-end span:after,.bs-datepicker-body table td.active.select-start span:after{content:\"\";display:block;position:absolute;z-index:-1;width:100%;height:100%;transition:.3s;top:0;border-radius:50%}.bs-datepicker-body table td span:before,.bs-datepicker-body table td:before{content:\"\";display:block;position:absolute;z-index:-1;top:6px;bottom:6px;left:-2px;right:-2px;box-sizing:content-box;background:0 0}.bs-datepicker-body table td.active.select-start+td.active:before{left:-20%}.bs-datepicker-body table td:last-child.active:before{border-radius:0 3px 3px 0;width:125%;left:-25%}.bs-datepicker-body table td span[class*=select-],.bs-datepicker-body table td[class*=select-] span{border-radius:50%;color:#fff}.bs-datepicker-body table.days span.active:not(.select-start):before,.bs-datepicker-body table.days span.in-range:not(.select-start):before,.bs-datepicker-body table.days td.active:not(.select-start):before,.bs-datepicker-body table.days td.in-range:not(.select-start):before{background:#e9edf0}.bs-datepicker-body table.days span{width:32px;height:32px;line-height:32px}.bs-datepicker-body table.days span.select-start{z-index:2}.bs-datepicker-body table.days span.in-range.select-end:before,.bs-datepicker-body table.days span.is-highlighted.in-range:before{background:0 0;right:0;left:0}.bs-datepicker-body table.days td.active+td.is-highlighted:before,.bs-datepicker-body table.days td.active+td.select-end:before,.bs-datepicker-body table.days td.in-range+td.is-highlighted:before,.bs-datepicker-body table.days td.in-range+td.select-end:before,.bs-datepicker-body table.days td.select-start+td.is-highlighted:before,.bs-datepicker-body table.days td.select-start+td.select-end:before{background:#e9edf0;width:100%}.bs-datepicker-body table.weeks tr td:nth-child(2).active:before{border-radius:3px 0 0 3px;left:0;width:100%}.bs-datepicker-body table:not(.weeks) tr td:first-child:before{border-radius:3px 0 0 3px}.bs-datepicker-body table.years td span{width:46px;height:46px;line-height:45px;margin:0 auto}.bs-datepicker-body table.years tr:not(:last-child) td span{margin-bottom:8px}.bs-datepicker-body table.months td{height:52px}.bs-datepicker-body table.months td span{padding:6px;border-radius:15px}.bs-datepicker .current-timedate{color:#54708b;font-size:15px;text-align:center;height:30px;line-height:30px;border-radius:20px;border:1px solid #e9edf0;margin-bottom:10px;cursor:pointer;text-transform:uppercase;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.bs-datepicker .current-timedate span:not(:empty):before{content:\"\";width:15px;height:16px;display:inline-block;margin-right:4px;vertical-align:text-bottom;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC)}.bs-datepicker-multiple{border-radius:4px 0 0 4px}.bs-datepicker-multiple+.bs-datepicker-multiple{margin-left:10px}.bs-datepicker-multiple .bs-datepicker{box-shadow:none;position:relative}.bs-datepicker-multiple .bs-datepicker:not(:last-child){padding-right:10px}.bs-datepicker-multiple .bs-datepicker+.bs-datepicker:after{content:\"\";display:block;width:14px;height:10px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);position:absolute;top:25px;left:-8px}.bs-datepicker-multiple .bs-datepicker .left{float:left}.bs-datepicker-multiple .bs-datepicker .right{float:right}.bs-datepicker-container{padding:15px}.bs-datepicker .bs-media-container{display:flex}@media (max-width:768px){.bs-datepicker .bs-media-container{flex-direction:column}}.bs-datepicker-custom-range{padding:15px;background:#eee}.bs-datepicker-predefined-btns button{width:100%;display:block;height:30px;background-color:#9aaec1;border-radius:4px;color:#fff;border:0;margin-bottom:10px;padding:0 18px;text-align:left;transition:.3s}.bs-datepicker-predefined-btns button:active,.bs-datepicker-predefined-btns button:hover{background-color:#54708b}.bs-datepicker-buttons{display:flex;flex-flow:row wrap;justify-content:flex-end;padding-top:10px;border-top:1px solid #e9edf0}.bs-datepicker-buttons .btn-default{margin-left:10px}.bs-timepicker-container{padding:10px 0}.bs-timepicker-label{color:#54708b;margin-bottom:10px}.bs-timepicker-controls{display:inline-block;vertical-align:top;margin-right:10px}.bs-timepicker-controls button{width:20px;height:20px;border-radius:50%;border:0;background-color:#e9edf0;color:#54708b;font-size:16px;font-weight:700;vertical-align:middle;line-height:0;padding:0;transition:.3s}.bs-timepicker-controls button:hover{background-color:#d5dadd}.bs-timepicker-controls input{width:35px;height:25px;border-radius:13px;text-align:center;border:1px solid #e9edf0}.bs-timepicker .switch-time-format{text-transform:uppercase;min-width:54px;height:25px;border-radius:20px;border:1px solid #e9edf0;background:#fff;color:#54708b;font-size:13px}.bs-timepicker .switch-time-format img{vertical-align:initial;margin-left:4px}bs-datepicker-container,bs-daterangepicker-container{z-index:1080}@media (max-width:768px){.bs-datepicker-multiple{display:flex}.bs-datepicker-multiple+.bs-datepicker-multiple{margin-top:10px;margin-left:0}}.theme-default .bs-datepicker-body table td span.selected,.theme-default .bs-datepicker-body table td span[class*=select-]:after,.theme-default .bs-datepicker-body table td.selected span,.theme-default .bs-datepicker-body table td[class*=select-] span:after,.theme-default .bs-datepicker-head{background-color:#777}.theme-default .bs-datepicker-body table td.week span{color:#777}.theme-default .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#777;color:#fff;opacity:.5;transition:none}.theme-green .bs-datepicker-body table td span.selected,.theme-green .bs-datepicker-body table td span[class*=select-]:after,.theme-green .bs-datepicker-body table td.selected span,.theme-green .bs-datepicker-body table td[class*=select-] span:after,.theme-green .bs-datepicker-head{background-color:#5cb85c}.theme-green .bs-datepicker-body table td.week span{color:#5cb85c}.theme-green .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#5cb85c;color:#fff;opacity:.5;transition:none}.theme-blue .bs-datepicker-body table td span.selected,.theme-blue .bs-datepicker-body table td span[class*=select-]:after,.theme-blue .bs-datepicker-body table td.selected span,.theme-blue .bs-datepicker-body table td[class*=select-] span:after,.theme-blue .bs-datepicker-head{background-color:#5bc0de}.theme-blue .bs-datepicker-body table td.week span{color:#5bc0de}.theme-blue .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#5bc0de;color:#fff;opacity:.5;transition:none}.theme-dark-blue .bs-datepicker-body table td span.selected,.theme-dark-blue .bs-datepicker-body table td span[class*=select-]:after,.theme-dark-blue .bs-datepicker-body table td.selected span,.theme-dark-blue .bs-datepicker-body table td[class*=select-] span:after,.theme-dark-blue .bs-datepicker-head{background-color:#337ab7}.theme-dark-blue .bs-datepicker-body table td.week span{color:#337ab7}.theme-dark-blue .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#337ab7;color:#fff;opacity:.5;transition:none}.theme-red .bs-datepicker-body table td span.selected,.theme-red .bs-datepicker-body table td span[class*=select-]:after,.theme-red .bs-datepicker-body table td.selected span,.theme-red .bs-datepicker-body table td[class*=select-] span:after,.theme-red .bs-datepicker-head{background-color:#d9534f}.theme-red .bs-datepicker-body table td.week span{color:#d9534f}.theme-red .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#d9534f;color:#fff;opacity:.5;transition:none}.theme-orange .bs-datepicker-body table td span.selected,.theme-orange .bs-datepicker-body table td span[class*=select-]:after,.theme-orange .bs-datepicker-body table td.selected span,.theme-orange .bs-datepicker-body table td[class*=select-] span:after,.theme-orange .bs-datepicker-head{background-color:#f0ad4e}.theme-orange .bs-datepicker-body table td.week span{color:#f0ad4e}.theme-orange .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#f0ad4e;color:#fff;opacity:.5;transition:none}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PasswordComponent extends Field {
}
PasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'password',
                template: "<!-- <div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]= \"group\">\n    <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n    <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n  [formControlName]=\"name\" [attr.placeholder]=\"placeholder\">\n    </div> <errors [errors]=\"errors\"></errors>\n    \n  </div> -->\n\n<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\" *ngIf=\"prefix\">\n        <div class=\"input-group-text\">{{prefix}}</div>\n      </div>\n      <input type=\"password\" class=\"form-control\" \n        [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n        [attr.placeholder]=\"placeholder\">\n      <div class=\"input-group-append\" *ngIf=\"suffix\">\n        <span class=\"input-group-text\">{{suffix}}</span>\n      </div>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n\n  ",
                styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberComponent extends Field {
}
NumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'number',
                template: "<!-- <div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <input type=\"number\" class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\"\n      [attr.id]=\"id\" [formControlName]=\"name\" [attr.placeholder]=\"placeholder\">\n  </div>\n  <errors [errors]=\"errors\"></errors>\n\n</div> -->\n\n\n<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\" *ngIf=\"prefix\">\n        <div class=\"input-group-text\">{{prefix}}</div>\n      </div>\n      <!--  <input type=\"text\" class=\"form-control\" \n        [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n        [attr.placeholder]=\"placeholder\"> -->\n      <input type=\"number\" class=\"form-control\" \n        [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n        [attr.placeholder]=\"placeholder\">\n      <div class=\"input-group-append\" *ngIf=\"suffix\">\n        <span class=\"input-group-text\">{{suffix}}</span>\n      </div>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CSelectComponent extends Field {
    constructor() {
        super(...arguments);
        this.loading = false;
        this.filterOptions = (/**
         * @param {?} term
         * @param {?} item
         * @return {?}
         */
        (term, item) => {
            term = term.toLocaleLowerCase();
            return item.label.toLocaleLowerCase().indexOf(term) > -1;
        });
    }
    /**
     * @protected
     * @return {?}
     */
    _init() {
        try {
            super._init();
            this.options = this.fieldDef.options || [];
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
            this._eventsAndCallbacksMapping = {};
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                this.fieldDef.events.forEach((/**
                 * @param {?} eventData
                 * @return {?}
                 */
                eventData => {
                    /** @type {?} */
                    const eventName = eventData.name;
                    /** @type {?} */
                    const callbacksArr = eventData.callbacks;
                    this._eventsAndCallbacksMapping[eventName] = [];
                    callbacksArr.forEach((/**
                     * @param {?} calbackData
                     * @return {?}
                     */
                    calbackData => {
                        /** @type {?} */
                        const callbackFn = this._getEventCallback(eventName, calbackData);
                        if (callbackFn) {
                            try {
                                this._eventsAndCallbacksMapping[eventName].push(callbackFn);
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                    }));
                }));
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    callEventCallbacks(eventName, eventData) {
        try {
            if (this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
                this._eventsAndCallbacksMapping[eventName].forEach((/**
                 * @param {?} callback
                 * @return {?}
                 */
                callback => {
                    if (eventData) {
                        callback(eventData);
                    }
                    else {
                        callback();
                    }
                }));
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options || [];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this._options = options;
    }
    /**
     * @return {?}
     */
    get multiple() {
        /** @type {?} */
        let multiple = this.type === 'MSL';
        if (typeof this.fieldDef.multiple !== 'undefined') {
            multiple = this.fieldDef.multiple;
        }
        return multiple;
    }
}
CSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-select',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <ng-select #ngSelect class=\"c-select\" [ngClass]=\"{'select-is-invalid': errors.length > 0, 'select-is-valid': errors.length == 0}\"\n      [ngClass]=\"cssClasses.fieldClasses\" [items]=\"options\" [selectOnTab]=\"true\" bindValue=\"value\" labelForId=\"{{id}}\"\n      bindLabel=\"label\" [clearOnBackspace]=\"true\" placeholder=\"{{placeholder}}\" [multiple]=\"multiple\" [formControlName]=\"name\"\n      (open)=\"callEventCallbacks('open')\" (close)=\"callEventCallbacks('close')\" (focus)=\"callEventCallbacks('focus', $event)\"\n      (search)=\"callEventCallbacks('search', $event)\" (blur)=\"callEventCallbacks('blur', $event)\" (clear)=\"callEventCallbacks('clear')\"\n      (add)=\"callEventCallbacks('add', $event)\" (scrollToEnd)=\"callEventCallbacks('scrollToEnd', $event)\" (remove)=\"callEventCallbacks('remove', $event)\"\n(change)=\"callEventCallbacks('change', $event)\" groupBy=\"options\" [searchFn]=\"filterOptions\">\n\n>\n\n      <ng-template ng-optgroup-tmp let-item=\"item\">\n        {{item.label}}\n      </ng-template>\n      <ng-template ng-option-tmp let-item=\"item\">\n        {{item.label}}\n      </ng-template>\n    </ng-select>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ".ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1)}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select .ng-select-container:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=rtl] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon,.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.ng-select .ng-clear-wrapper{color:#999}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,.06);left:0}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,.54);cursor:pointer}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,.87);padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .ng-dropdown-panel{direction:rtl;text-align:right}.c-select.select-is-invalid .ng-select-container{border-color:#dc3545;padding-right:calc(1.5em + .75rem)}", ".c-select.select-is-invalid .ng-select-container{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.c-select.select-is-valid .ng-select-container{background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}"]
            }] }
];
CSelectComponent.propDecorators = {
    ngSelectComponent: [{ type: ViewChild, args: ['ngSelect',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MultiselectComponent extends CSelectComponent {
}
MultiselectComponent.decorators = [
    { type: Component, args: [{
                selector: 'multiselect',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <ng-select #ngSelect class=\"c-select\" [ngClass]=\"{'select-is-invalid': errors.length > 0, 'select-is-valid': errors.length == 0}\"\n      [ngClass]=\"cssClasses.fieldClasses\" [items]=\"options\" [selectOnTab]=\"true\" bindValue=\"value\" labelForId=\"{{id}}\"\n      bindLabel=\"label\" [clearOnBackspace]=\"true\" placeholder=\"{{placeholder}}\" [multiple]=\"multiple\" [formControlName]=\"name\"\n      (open)=\"callEventCallbacks('open')\" (close)=\"callEventCallbacks('close')\" (focus)=\"callEventCallbacks('focus', $event)\"\n      (search)=\"callEventCallbacks('search', $event)\" (blur)=\"callEventCallbacks('blur', $event)\" (clear)=\"callEventCallbacks('clear')\"\n      (add)=\"callEventCallbacks('add', $event)\" (scrollToEnd)=\"callEventCallbacks('scrollToEnd', $event)\" (remove)=\"callEventCallbacks('remove', $event)\"\n(change)=\"callEventCallbacks('change', $event)\" groupBy=\"options\" [searchFn]=\"filterOptions\">\n\n>\n\n      <ng-template ng-optgroup-tmp let-item=\"item\">\n        {{item.label}}\n      </ng-template>\n      <ng-template ng-option-tmp let-item=\"item\">\n        {{item.label}}\n      </ng-template>\n    </ng-select>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ".ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1)}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select .ng-select-container:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=rtl] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon,.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.ng-select .ng-clear-wrapper{color:#999}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,.06);left:0}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,.54);cursor:pointer}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,.87);padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .ng-dropdown-panel{direction:rtl;text-align:right}.c-select.select-is-invalid .ng-select-container{border-color:#dc3545;padding-right:calc(1.5em + .75rem)}", ".c-select.select-is-invalid .ng-select-container{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.c-select.select-is-valid .ng-select-container{background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}", ""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioComponent extends Field {
    /**
     * @return {?}
     */
    get options() {
        return this.fieldDef.options;
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'radio',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"custom-control custom-radio radio-button-cotnainer\" *ngFor=\"let item of options; let i = index;\">\n      <input type=\"radio\" class=\"custom-control-input\" [attr.disabled]=\"disabled\" [attr.disabled]=\"item.disabled\"\n        [value]=\"item.value\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id + '__' + i\"\n        [formControlName]=\"name\">\n      <label class=\"custom-control-label\" for=\"{{id}}__{{i}}\">{{item.label}}</label>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxComponent extends Field {
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'checkbox',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container \" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"custom-control custom-checkbox display-flex align-center\">\n      <input type=\"checkbox\" class=\"custom-control-input\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\"\n        [attr.id]=\"id\" [formControlName]=\"name\" [attr.placeholder]=\"placeholder\">\n      <label class=\"custom-control-label\" for=\"{{id}}\"></label>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextAreaComponent extends TextComponent {
}
TextAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'text-area',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <textarea class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\"></textarea>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CButtonComponent extends Field {
    /**
     * @return {?}
     */
    get theme() {
        return this.fieldDef.theme || this._defaults.BTN_DEFUALT_THEME;
    }
    /**
     * @return {?}
     */
    get icon() {
        return this.fieldDef.icon || '';
    }
}
CButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-button',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\"></label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\n    <button type=\"button\" class=\"btn btn-{{theme}}\" [attr.id]=\"id\">\n      <div class=\"button-label display-flex\">\n        <i class=\"material-icons mr-1 \" *ngIf=\"icon\">\n          {{icon}}\n        </i>\n        {{label}}\n      </div>\n\n    </button>\n\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <!-- <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors> -->\n  </div>\n</div>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateTimeComponent extends Field {
    /**
     * @protected
     * @return {?}
     */
    _init() {
        super._init();
        this.bsConfig = { dateInputFormat: 'MMMM Do YYYY, h:mm:ss a' };
    }
}
DateTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'date-time',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\"\n\t[ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]=\"group\">\n\t<label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\"\n\t\t[ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n\t<div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\t\t<input type=\"text\" class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\"\n\t\t\t[attr.id]=\"id\" [formControlName]=\"name\" [attr.placeholder]=\"placeholder\"   [bsConfig]=\"bsConfig\"\n      bsDatepicker>\n      <errors [errors]=\"errors\"></errors>\n\t</div>\n\n</div>",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimeComponent extends Field {
    constructor() {
        super(...arguments);
        this.mytime = new Date();
    }
}
TimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'time',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]= \"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <!-- <input type=\"text\" class=\"form-control\" \n  [ngClass]=\"cssClasses.fieldClasses\"\n  [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n  [formControlName]=\"name\" [attr.placeholder]=\"placeholder\"> -->\n  \n    <timepicker  class=\"\" \n      [ngClass]=\"cssClasses.fieldClasses\"\n      [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n      [formControlName]=\"name\" >></timepicker>\n    \n\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n </div>",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MonthComponent extends Field {
    constructor() {
        super(...arguments);
        this.minMode = 'month';
    }
    /**
     * @protected
     * @return {?}
     */
    _init() {
        super._init();
        this.bsConfig =
            Object.assign({}, {
                minMode: this.minMode,
                dateInputFormat: 'MMMM  YYYY'
            });
    }
}
MonthComponent.decorators = [
    { type: Component, args: [{
                selector: 'month',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\"\n\t[ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]=\"group\">\n\t<label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\"\n\t\t[ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n\t<div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\t\t<input type=\"text\" class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\"\n\t\t\t[attr.id]=\"id\" [formControlName]=\"name\" [attr.placeholder]=\"placeholder\"   [bsConfig]=\"bsConfig\"\n      bsDatepicker><errors [errors]=\"errors\"></errors>\n\t</div>\n\n</div>",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileComponent extends Field {
}
FileComponent.decorators = [
    { type: Component, args: [{
                selector: 'file',
                template: "<p>\n  file works!\n</p>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HiddenComponent extends Field {
}
HiddenComponent.decorators = [
    { type: Component, args: [{
                selector: 'hidden',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <input type=\"hidden\" class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\">\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BlankComponent extends Field {
}
BlankComponent.decorators = [
    { type: Component, args: [{
                selector: 'blank',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <!-- <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label> -->\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <!-- <input type=\"text\" class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\"> -->\n    <!-- <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small> -->\n    <!-- <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors> -->\n  </div>\n</div>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HtmlEditorComponent extends Field {
    constructor() {
        super(...arguments);
        this._defaultQuillConfig = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean'],
                ['link', 'image', 'video'] // link and image, video
            ]
        };
    }
    /**
     * @protected
     * @return {?}
     */
    _applyEvents() {
        try {
            this._eventsAndCallbacksMapping = {};
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                this.fieldDef.events.forEach((/**
                 * @param {?} eventData
                 * @return {?}
                 */
                eventData => {
                    /** @type {?} */
                    const eventName = eventData.name;
                    /** @type {?} */
                    const callbacksArr = eventData.callbacks;
                    this._eventsAndCallbacksMapping[eventName] = [];
                    callbacksArr.forEach((/**
                     * @param {?} calbackData
                     * @return {?}
                     */
                    calbackData => {
                        /** @type {?} */
                        const callbackFn = this._getEventCallback(eventName, calbackData);
                        if (callbackFn) {
                            try {
                                this._eventsAndCallbacksMapping[eventName].push(callbackFn);
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                    }));
                }));
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    callEventCallbacks(eventName, eventData) {
        try {
            if (this._eventsAndCallbacksMapping && this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
                this._eventsAndCallbacksMapping[eventName].forEach((/**
                 * @param {?} callback
                 * @return {?}
                 */
                callback => {
                    if (eventData) {
                        callback(eventData);
                    }
                    else {
                        callback();
                    }
                }));
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @return {?}
     */
    get options() {
        return this.fieldDef.options;
    }
    /**
     * @return {?}
     */
    get multiple() {
        return this.type === 'MSL';
    }
    /**
     * @return {?}
     */
    get quillConfig() {
        return this.fieldDef.quillConfig || this._defaultQuillConfig;
    }
}
HtmlEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'html-editor',
                template: "<!-- <script src=\"/quill-editor-files/quill.core.js\"></script>\n<script src=\"/quill-editor-files/quill.js\"></script> -->\n<!-- <script src=\"/quill-editor-files/quill.min.js\"></script> -->\n\n<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\"  [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <quill-editor #editor [formControlName]=\"name\" placeholder=\"{{placeholder}}\" [modules]=\"quillConfig\" (onEditorCreated)=\"callEventCallbacks('onEditorCreated', $event)\" (onContentChanged)=\"callEventCallbacks('onContentChanged', $event)\" (onSelectionChanged)=\"callEventCallbacks('onSelectionChanged', $event)\">\n    </quill-editor>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnchorComponent extends Field {
}
AnchorComponent.decorators = [
    { type: Component, args: [{
                selector: 'anchor',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <!-- <input type=\"text\" class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\"> -->\n      <a target=\"_blank\" href=\"{{value}}\">{{label}}</a>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <!-- <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors> -->\n  </div>\n</div>\n",
                styles: [""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CFieldsetComponent {
    /**
     * @param {?} _eleRef
     * @param {?} _renderer
     */
    constructor(_eleRef, _renderer) {
        this._eleRef = _eleRef;
        this._renderer = _renderer;
        this.isCollapsed = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        try {
            this._renderer.setStyle(this._eleRef.nativeElement, 'width', '100%');
            this._renderer.addClass(this._eleRef.nativeElement, 'm-3');
        }
        catch (error) {
            console.log(error);
        }
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
    get fields() {
        return this.fieldDef.fields;
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
    get collapse() {
        return this.fieldDef.collpase || true;
    }
    /**
     * @return {?}
     */
    get collapseBodyHidden() {
        return (this.collapse && this.isCollapsed);
    }
    /**
     * @return {?}
     */
    get hideLabel() {
        return this.fieldDef.hideLabel || false;
    }
}
CFieldsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-fieldset',
                template: "<div class=\"simple-fieldset-container fieldset-container\">\n\n  <div class=\"card \">\n<div class=\"card-header display-flex justify-space-between\" [ngClass]=\"{'hidden': hideLabel}\">\n      <div class=\"fieldset-label\">\n        {{label}}\n      </div>\n      <div class=\"fieldset-collapse\">\n        <div class=\"fieldset-collapse-icons cursor-pointer\" (click)=\"isCollapsed = !isCollapsed\" *ngIf=\"collapse\">\n          <i class=\"material-icons\" *ngIf=\"isCollapsed\">\n            expand_more\n          </i>\n          <i class=\"material-icons\" *ngIf=\"!isCollapsed\">\n            expand_less\n          </i>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\" style=\"padding-bottom:0% !important\" [ngClass]=\"{'hidden': collapseBodyHidden}\">\n      <div class=\"fieldset-form-container fieldset-container ml-3 mr-3 mt-3\">\n        <div class=\"simple-form\" [attr.id]=\"code\">\n          <div class=\"fields-container \">\n            <ng-container class=\"field-wrapper\" *ngFor=\"let fldDef of fields\">\n              <text *ngIf=\"fldDef.type=='TXT'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></text>\n              <hidden *ngIf=\"fldDef.type=='HID'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></hidden>\n              <blank *ngIf=\"fldDef.type=='BLK'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></blank>\n              <anchor *ngIf=\"fldDef.type=='ANC'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></anchor>\n              <radio *ngIf=\"fldDef.type=='RAD'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></radio>\n              <checkbox *ngIf=\"fldDef.type=='CHK'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></checkbox>\n              <text-area *ngIf=\"fldDef.type=='TXA'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></text-area>\n              <c-select *ngIf=\"fldDef.type=='SEL'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></c-select>\n              <multiselect *ngIf=\"fldDef.type=='MSL'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></multiselect>\n              <c-button *ngIf=\"fldDef.type=='BTN'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></c-button>\n              <html-editor *ngIf=\"fldDef.type=='HTML'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></html-editor>\n              <c-fieldset *ngIf=\"fldDef.type=='FST'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></c-fieldset>\n              <month *ngIf=\"fldDef.type=='MONTH'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </month>\n              <date-time *ngIf=\"fldDef.type=='DATETIME'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </date-time>\n              <time *ngIf=\"fldDef.type=='TIME'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </time>\n              <number *ngIf=\"fldDef.type=='NUM'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </number>\n              <password *ngIf=\"fldDef.type=='PWD'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </password>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CFieldsetComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
CFieldsetComponent.propDecorators = {
    fieldDef: [{ type: Input }],
    group: [{ type: Input }],
    formComponent: [{ type: Input }],
    pageComponent: [{ type: Input }],
    parent: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutocompleteComponent extends CSelectComponent {
    constructor() {
        super(...arguments);
        this.fetchOptions$ = new Subject();
    }
    /**
     * @protected
     * @return {?}
     */
    _init() {
        try {
            super._init();
            this.options$ = of(this.options);
            this.fetchOptions$
                .pipe(debounceTime(this._defaults.ACS_FETCH_DEBOUNCE_TIME), distinctUntilChanged())
                .subscribe((/**
             * @param {?} term
             * @return {?}
             */
            term => {
                this.loading = true;
                return this._fetchOptions(term)
                    .subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                response => {
                    this.options$ = this._onFetchOptions(term, response);
                    this.loading = false;
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => this.options$ = of([])));
            }));
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @param {?} term
     * @return {?}
     */
    _fetchOptions(term) {
        try {
            /** @type {?} */
            const searchData = this.searchData;
            if (!searchData) {
                return of([]);
            }
            if (searchData.beforeFetchFn) {
                /** @type {?} */
                const beforeSearchFn = this._getEventCallback(this._defaults.ACS_SEARCH_EVENT_NAME, searchData.beforeFetchFn);
                if (beforeSearchFn && !beforeSearchFn(term, this.code)) {
                    return of([]);
                }
            }
            /** @type {?} */
            const data = {
                searchTerm: term,
                fieldCode: this.code
            };
            if (searchData.fetchFn) {
                /** @type {?} */
                const searchFn = this._getEventCallback(this._defaults.ACS_SEARCH_EVENT_NAME, searchData.fetchFn);
                if (!searchFn || typeof searchFn !== 'function') {
                    return of([]);
                }
                /** @type {?} */
                const searchResult = searchFn(data);
                if (!searchResult || !searchResult.options || searchResult.options.constructor !== Array) {
                    return of([]);
                }
                return of(searchResult);
            }
            else if (searchData.url) {
                return this._httpService.fetchOptions(searchData.url, data, searchData.methodType);
            }
            return of([]);
        }
        catch (error) {
            console.log(error);
            return of([]);
        }
    }
    /**
     * @protected
     * @param {?} term
     * @param {?=} response
     * @return {?}
     */
    _onFetchOptions(term, response) {
        try {
            /** @type {?} */
            const searchData = this.searchData;
            if (searchData && searchData.afterFetchFn) {
                /** @type {?} */
                const afterSearchFn = this._getEventCallback(this._defaults.ACS_SEARCH_EVENT_NAME, searchData.afterFetchFn);
                if (afterSearchFn) {
                    /** @type {?} */
                    let optionsData = afterSearchFn({
                        searchTerm: term,
                        fieldCode: this.code,
                        formCode: this.formCode,
                        response
                    });
                    if (!optionsData || !optionsData.options || optionsData.options.constructor !== Array) {
                        optionsData = { options: [] };
                    }
                    return of(optionsData.options);
                }
            }
            if (response && response.options) {
                return of(response.options);
            }
            return of([]);
        }
        catch (error) {
            console.log(error);
            return of([]);
        }
    }
    /**
     * @return {?}
     */
    get searchData() {
        return this.fieldDef.searchData || null;
    }
}
AutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'autocomplete',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <ng-select #ngSelect class=\"c-select\" [ngClass]=\"{'select-is-invalid': errors.length > 0, 'select-is-valid': errors.length == 0}\"\n      [ngClass]=\"cssClasses.fieldClasses\" [items]=\"options$ | async\" [selectOnTab]=\"true\" bindValue=\"value\" labelForId=\"{{id}}\"\n      bindLabel=\"label\" [clearOnBackspace]=\"true\" placeholder=\"{{placeholder}}\" [multiple]=\"multiple\" [formControlName]=\"name\"\n      (open)=\"callEventCallbacks('open')\" (close)=\"callEventCallbacks('close')\" (focus)=\"callEventCallbacks('focus', $event)\"\n      (search)=\"callEventCallbacks('search', $event)\" (blur)=\"callEventCallbacks('blur', $event)\" (clear)=\"callEventCallbacks('clear')\"\n      (add)=\"callEventCallbacks('add', $event)\" (scrollToEnd)=\"callEventCallbacks('scrollToEnd', $event)\" (remove)=\"callEventCallbacks('remove', $event)\"\n      (change)=\"callEventCallbacks('change', $event)\" groupBy=\"options\" [hideSelected]=\"true\" [loading]=\"loading\"\n[typeahead]=\"fetchOptions$\">\n\n      <ng-template ng-optgroup-tmp let-item=\"item\">\n        {{item.label}}\n      </ng-template>\n      <ng-template ng-option-tmp let-item=\"item\">\n        {{item.label}}\n      </ng-template>\n    </ng-select>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ".ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1)}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select .ng-select-container:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=rtl] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon,.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.ng-select .ng-clear-wrapper{color:#999}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,.06);left:0}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,.54);cursor:pointer}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,.87);padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .ng-dropdown-panel{direction:rtl;text-align:right}.c-select.select-is-invalid .ng-select-container{border-color:#dc3545;padding-right:calc(1.5em + .75rem)}", ".c-select.select-is-invalid .ng-select-container{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.c-select.select-is-valid .ng-select-container{background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}", ""]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldsModule {
}
FieldsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TextComponent,
                    ErrorsComponent,
                    DateComponent,
                    PasswordComponent,
                    NumberComponent,
                    CSelectComponent,
                    MultiselectComponent,
                    RadioComponent,
                    CheckboxComponent,
                    TextAreaComponent,
                    CButtonComponent,
                    DateTimeComponent,
                    TimeComponent,
                    MonthComponent,
                    FileComponent,
                    HiddenComponent,
                    BlankComponent,
                    HtmlEditorComponent,
                    AnchorComponent,
                    CFieldsetComponent,
                    AutocompleteComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    BsDatepickerModule.forRoot(),
                    NgSelectModule,
                    TimepickerModule.forRoot(),
                    QuillModule
                ],
                exports: [
                    TextComponent,
                    ErrorsComponent,
                    DateComponent,
                    PasswordComponent,
                    NumberComponent,
                    CSelectComponent,
                    MultiselectComponent,
                    RadioComponent,
                    CheckboxComponent,
                    TextAreaComponent,
                    CButtonComponent,
                    DateTimeComponent,
                    TimeComponent,
                    MonthComponent,
                    FileComponent,
                    HiddenComponent,
                    BlankComponent,
                    HtmlEditorComponent,
                    AnchorComponent,
                    CFieldsetComponent,
                    AutocompleteComponent
                ],
                providers: [
                    ValidatorService
                ],
                schemas: [
                // NO_ERRORS_SCHEMA,
                // CUSTOM_ELEMENTS_SCHEMA
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldDirective {
}
FieldDirective.decorators = [
    { type: Directive, args: [{
                selector: '[field]',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SimpleFormComponent {
    /**
     * @param {?} _fb
     * @param {?} _schemaService
     * @param {?} _logger
     * @param {?} _utilService
     * @param {?} _defaults
     * @param {?} _elemRef
     * @param {?} _renderer
     */
    constructor(_fb, _schemaService, _logger, _utilService, _defaults, _elemRef, _renderer) {
        this._fb = _fb;
        this._schemaService = _schemaService;
        this._logger = _logger;
        this._utilService = _utilService;
        this._defaults = _defaults;
        this._elemRef = _elemRef;
        this._renderer = _renderer;
        this.afterInit = new EventEmitter();
        this.afterGenerateForm = new EventEmitter();
        this._initialize();
    }
    /**
     * @protected
     * @return {?}
     */
    _initialize() {
        try {
            this.instance = this;
            this.fieldsComponent = {};
            this.isCollapsed = false;
            this._hidden = false;
            this.initialize();
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @return {?}
     */
    initialize() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._afterViewInit();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._onChanges();
    }
    /**
     * @protected
     * @return {?}
     */
    _onChanges() {
        try {
            this._init();
            this.populateForm(this.formData);
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} formData
     * @return {?}
     */
    populateForm(formData) {
        try {
            if (formData) {
                this.formGoup.patchValue(formData);
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
    _afterViewInit() {
        try {
            if (this.hidden) {
                this._renderer.addClass(this._elemRef.nativeElement, 'hidden');
            }
            this.populateForm(this.formData);
            this.afterGenerateForm.emit(this);
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @param {?} selector
     * @param {?} cssStyle
     * @return {?}
     */
    _applyInlieCssBySelector(selector, cssStyle) {
        try {
            /** @type {?} */
            const elementList = document.querySelectorAll(selector);
            elementList.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                try {
                    for (let cssProp in cssStyle) {
                        try {
                            /** @type {?} */
                            let propValue = cssStyle[cssProp];
                            element['style'][cssProp] = propValue;
                        }
                        catch (error) { }
                    }
                }
                catch (error) { }
            }));
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
     * @protected
     * @return {?}
     */
    _init() {
        try {
            if (this.pageComponent && this.pageComponent.forms) {
                this.pageComponent.forms[this.code] = this;
            }
            else {
                console.log("Please provide [pageComponent] input and define 'forms' definition in the passed object as pageComponent.");
            }
            if (this.formComponent && this.pageComponent.form) {
                this.formComponent.form = this;
            }
            else {
                console.log("Please provide [formComponent] input and define 'form' definition in the passed object as formComponent.");
            }
            this.hidden = this.schema.hidden || false;
            this.code = this.schema.code;
            this._schemaService.addSchema(this.code, this.schema);
            this.schema = this._schemaService.getSchemaBySchemaKey(this.code);
            this._initFormGroup();
            this.afterInit.emit(this);
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @param {?} formGroup
     * @param {?} formFieldsDef
     * @return {?}
     */
    _addFormControls(formGroup, formFieldsDef) {
        try {
            formFieldsDef.forEach((/**
             * @param {?} def
             * @param {?} index
             * @return {?}
             */
            (def, index) => {
                /** @type {?} */
                const type = def.type;
                if (includes(this._defaults.DUMMY_FIELDS, type)) {
                    return false;
                }
                if (type === 'FST') {
                    this._addFormControls(formGroup, def.fields);
                }
                else {
                    /** @type {?} */
                    const fldControl = new FormControl();
                    this.formGoup.addControl(def.name, fldControl);
                }
            }));
        }
        catch (error) { }
    }
    /**
     * @protected
     * @return {?}
     */
    _initFormGroup() {
        try {
            this.formGoup = this._fb.group({});
            this._addFormControls(this.formGoup, this._schemaService.getSchemaFields(this.code));
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} parentFieldName
     * @param {?} childFieldNameArr
     * @param {?} changes
     * @return {?}
     */
    onParentFieldValueChange(parentFieldName, childFieldNameArr, changes) {
        try {
            if (this.onParentFieldValueChangeFn) {
                /** @type {?} */
                const callback = this._getEventCallback('parentChange', this.onParentFieldValueChangeFn);
                if (callback) {
                    callback(this.code, parentFieldName, childFieldNameArr, changes);
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
                ownerType = 'P';
            }
            /** @type {?} */
            let callbackFnOwner = this.pageComponent;
            if (ownerType === 'F') {
                callbackFnOwner = this.formComponent;
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
     * @return {?}
     */
    get label() {
        // console.log("//");
        // console.log(this.schema.helpText);
        return this.schema.label;
    }
    /**
     * @return {?}
     */
    get helps() {
        return this.schema.helpText;
    }
    /**
     * @return {?}
     */
    get fields() {
        return this.schema.fields;
    }
    /**
     * @return {?}
     */
    get buttons() {
        return this.schema.buttons;
    }
    /**
     * @return {?}
     */
    get columns() {
        return this.schema.columns;
    }
    /**
     * @return {?}
     */
    get collapse() {
        return this.schema.collapse || false;
    }
    /**
     * @return {?}
     */
    get hideLabel() {
        return this.schema.hideLabel || false;
    }
    /**
     * @return {?}
     */
    get collapseBodyHidden() {
        return (this.collapse && this.isCollapsed);
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.formGoup.valid;
    }
    /**
     * @return {?}
     */
    get value() {
        return this.formGoup.value;
    }
    /**
     * @param {?} groupValue
     * @return {?}
     */
    set value(groupValue) {
        this.formGoup.patchValue(groupValue);
    }
    /**
     * @return {?}
     */
    get order() {
        return this.schema.order || 1;
    }
    /**
     * @return {?}
     */
    get id() {
        return this.code + '__' + this.order;
    }
    /**
     * @return {?}
     */
    get hidden() {
        return this._hidden || false;
    }
    /**
     * @param {?} hidden
     * @return {?}
     */
    set hidden(hidden) {
        if (hidden === true) {
            this._renderer.addClass(this._elemRef.nativeElement, 'hidden');
        }
        else {
            this._renderer.removeClass(this._elemRef.nativeElement, 'hidden');
        }
        this._hidden = hidden;
    }
    /**
     * @return {?}
     */
    get onParentFieldValueChangeFn() {
        return this.schema.onParentFieldValueChange || null;
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    set disable(prop) {
        this.formGoup.disable();
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    set enable(prop) {
        this.formGoup.enable();
    }
    /**
     * @return {?}
     */
    get formRef() {
        return this._elemRef.nativeElement;
    }
}
SimpleFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'simple-form',
                template: "<div class=\"simple-form-container form-container m-5\" [attr.id]=\"id + '__CONTAINER'\">\n\n  <div class=\"card \">\n    <div class=\"card-header \">\n      <div class=\"display-flex justify-space-between\">\n        <div class=\"form-label\">\n          {{label}}\n        </div>\n        <div class=\"form-collapse\">\n          <div class=\"form-collapse-icons cursor-pointer\" (click)=\"isCollapsed = !isCollapsed\" *ngIf=\"collapse\">\n            <i class=\"material-icons\" *ngIf=\"isCollapsed\">\n              expand_more\n            </i>\n            <i class=\"material-icons\" *ngIf=\"!isCollapsed\">\n              expand_less\n            </i>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"form-help\">\n        <ul>\n          <li *ngFor=\"let help of helps;\">\n            {{help}}\n          </li>\n        </ul>\n\n      </div>\n    </div>\n    <div class=\"card-body\" style=\"padding-bottom:0% !important\" [ngClass]=\"{'hidden': collapseBodyHidden}\">\n      <div class=\"external-content top-external-content\">\n        <ng-content select=\".top-external-content\"></ng-content>\n      </div>\n      <div class=\"simple-form-container form-container ml-3 mr-3 mt-3\">\n        <form class=\"form-row simple-form\" [attr.id]=\"id\" [formGroup]=\"formGoup\">\n          <div class=\"fields-container form-column-{{columns}}\">\n            <ng-container class=\"field-wrapper\" *ngFor=\"let fieldDef of fields\">\n              <text *ngIf=\"fieldDef.type=='TXT'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></text>\n              <hidden *ngIf=\"fieldDef.type=='HID'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></hidden>\n              <blank *ngIf=\"fieldDef.type=='BLK'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></blank>\n              <anchor *ngIf=\"fieldDef.type=='ANC'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></anchor>\n              <radio *ngIf=\"fieldDef.type=='RAD'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></radio>\n              <checkbox *ngIf=\"fieldDef.type=='CHK'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></checkbox>\n              <text-area *ngIf=\"fieldDef.type=='TXA'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></text-area>\n              <c-select *ngIf=\"fieldDef.type=='SEL'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></c-select>\n              <multiselect *ngIf=\"fieldDef.type=='MSL'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></multiselect>\n              <autocomplete *ngIf=\"fieldDef.type=='ACS'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></autocomplete>\n              <c-button *ngIf=\"fieldDef.type=='BTN'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></c-button>\n              <c-fieldset *ngIf=\"fieldDef.type=='FST'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></c-fieldset>\n              <html-editor *ngIf=\"fieldDef.type=='HTML'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></html-editor>\n              <date *ngIf=\"fieldDef.type=='DAT'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\">\n              </date>\n              <month *ngIf=\"fieldDef.type=='MONTH'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\">\n              </month>\n              <date-time *ngIf=\"fieldDef.type=='DATETIME'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\">\n              </date-time>\n              <time *ngIf=\"fieldDef.type=='TIME'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\">\n              </time>\n              <number *ngIf=\"fieldDef.type=='NUM'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\">\n              </number>\n              <password *ngIf=\"fieldDef.type=='PWD'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\">\n              </password>\n            </ng-container>\n          </div>\n        </form>\n      </div>\n      <div class=\"external-content above-button-external-content\">\n        <ng-content select=\".above-button-external-content\"></ng-content>\n      </div>\n      <div class=\"mt-3 mb-3 text-right display-flex justify-end\">\n        <ng-container class=\"field-wrapper\" *ngFor=\"let buttonDef of buttons\">\n          <div class=\"pl-3 w-fit-content form-button-container\" id=\"{{buttonDef.code}}__BTN\">\n            <c-button [fieldDef]=\"buttonDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\" [pageComponent]=\"pageComponent\"\n              [parent]=\"instance\"></c-button>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"external-content bottom-external-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v43/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2')}.material-icons{font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}", ".fields-container{display:flex!important;flex-flow:wrap}.hidden{display:none!important}.w-fit-content{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.display-flex{display:flex}.align-center{align-items:center}.justify-end{justify-content:flex-end}.cursor-pointer{cursor:pointer}.justify-space-between{justify-content:space-between}.field-container{padding:inherit}"]
            }] }
];
/** @nocollapse */
SimpleFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: SchemaService },
    { type: LoggerService },
    { type: UtilService },
    { type: DefaultsService },
    { type: ElementRef },
    { type: Renderer2 }
];
SimpleFormComponent.propDecorators = {
    schema: [{ type: Input }],
    formComponent: [{ type: Input }],
    pageComponent: [{ type: Input }],
    formData: [{ type: Input }],
    afterInit: [{ type: Output }],
    afterGenerateForm: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SimpleFormGeneratorModule {
}
SimpleFormGeneratorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SimpleFormComponent,
                    FieldDirective
                ],
                imports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    FieldsModule
                ],
                exports: [
                    SimpleFormComponent
                ],
                providers: [
                    SchemaService,
                    UtilService,
                    DefaultsService,
                    LoggerService,
                    HttpService
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SimpleFormGeneratorModule, SimpleFormComponent as ɵa, FieldDirective as ɵf, AnchorComponent as ɵbc, AutocompleteComponent as ɵbe, BlankComponent as ɵba, CButtonComponent as ɵu, CFieldsetComponent as ɵbd, CSelectComponent as ɵp, CheckboxComponent as ɵs, DateTimeComponent as ɵv, DateComponent as ɵm, ErrorsComponent as ɵl, Field as ɵi, FileComponent as ɵy, HiddenComponent as ɵz, HtmlEditorComponent as ɵbb, MonthComponent as ɵx, MultiselectComponent as ɵq, NumberComponent as ɵo, PasswordComponent as ɵn, RadioComponent as ɵr, TextAreaComponent as ɵt, TextComponent as ɵh, TimeComponent as ɵw, FieldsModule as ɵg, ValidatorService as ɵj, DefaultsService as ɵc, HttpService as ɵk, LoggerService as ɵd, SchemaService as ɵb, UtilService as ɵe };

//# sourceMappingURL=json-form-generator.js.map