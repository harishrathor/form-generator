import { NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from 'ngx-quill';
import { CustomValidators } from 'ngx-custom-validators';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { __extends } from 'tslib';
import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CommonModule } from '@angular/common';
import { Injectable, Directive, Component, Input, NgModule, ElementRef, Renderer2, defineInjectable, inject, ViewEncapsulation, ViewChild, EventEmitter, Output } from '@angular/core';
import { assign, includes } from 'lodash';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} methodType
     * @return {?}
     */
    HttpService.prototype.fetchOptions = /**
     * @param {?} url
     * @param {?} data
     * @param {?=} methodType
     * @return {?}
     */
    function (url, data, methodType) {
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
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    HttpService.prototype.makeObjToGetUrlParams = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        try {
            /** @type {?} */
            var str = '';
            for (var paramName in obj) {
                /** @type {?} */
                var paramValue = obj[paramName];
                if (str === '') {
                    str += '?';
                }
                else {
                    str += '&';
                }
                str += paramValue + "=" + paramValue;
            }
            return str;
        }
        catch (error) {
            console.log(error);
            return '';
        }
    };
    HttpService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HttpService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ HttpService.ngInjectableDef = defineInjectable({ factory: function HttpService_Factory() { return new HttpService(inject(HttpClient)); }, token: HttpService, providedIn: "root" });
    return HttpService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.print = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        try {
            console.log(message);
        }
        catch (error) {
        }
    };
    LoggerService.decorators = [
        { type: Injectable }
    ];
    return LoggerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DefaultsService = /** @class */ (function () {
    function DefaultsService() {
        this._columns = 2;
    }
    Object.defineProperty(DefaultsService.prototype, "COLUMNS", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columns;
        },
        set: /**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            this._columns = columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "FIELD_DEFAULT_PROPS", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var propsObj = {
                labelPosition: this.FIELD_POSITION,
                labelAlignment: this.FIELD_ALIGNMENT,
                labelWidth: '50%',
                fieldWidth: '50%',
                fieldAlignment: 'left',
                width: '100%'
            };
            return propsObj;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "FORM_COLUMNS", {
        get: /**
         * @return {?}
         */
        function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "FIELD_ALIGNMENT", {
        get: /**
         * @return {?}
         */
        function () {
            return 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "FIELD_POSITION", {
        get: /**
         * @return {?}
         */
        function () {
            return 'left';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "EVENT_HANDLER_OWNER_TYPE", {
        get: /**
         * @return {?}
         */
        function () {
            return 'P';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "EXCEPTIONAL_STYLED_FIELDS", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var labelWidth = '25%';
            /** @type {?} */
            var fieldWidth = '75%';
            if (this.COLUMNS === 2) {
                labelWidth = '24.5%';
                fieldWidth = '75.5%';
            }
            /** @type {?} */
            var defaultProps = {
                labelWidth: labelWidth,
                fieldWidth: fieldWidth,
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "DUMMY_FIELDS", {
        get: /**
         * @return {?}
         */
        function () {
            return ['BLK', 'BTN'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "BTN_DEFUALT_THEME", {
        get: /**
         * @return {?}
         */
        function () {
            return 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "ACS_SEARCH_EVENT_NAME", {
        get: /**
         * @return {?}
         */
        function () {
            return 'search';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "ACS_FETCH_DEBOUNCE_TIME", {
        get: /**
         * @return {?}
         */
        function () {
            return 400;
        },
        enumerable: true,
        configurable: true
    });
    DefaultsService.decorators = [
        { type: Injectable }
    ];
    return DefaultsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    /*
        constructor(public renderer: Renderer2) {
    
        }
     */
    /*
        constructor(public renderer: Renderer2) {
    
        }
     */
    /**
     * @param {?} element
     * @param {?} spaceSeparatedClasses
     * @return {?}
     */
    UtilService.prototype.addCssClasses = /*
        constructor(public renderer: Renderer2) {
    
        }
     */
    /**
     * @param {?} element
     * @param {?} spaceSeparatedClasses
     * @return {?}
     */
    function (element, spaceSeparatedClasses) {
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
    };
    /**
     * @param {?} selector
     * @param {?} cssStyle
     * @return {?}
     */
    UtilService.prototype.applyInlieCssBySelector = /**
     * @param {?} selector
     * @param {?} cssStyle
     * @return {?}
     */
    function (selector, cssStyle) {
        try {
            /** @type {?} */
            var elementList = document.querySelectorAll(selector);
            elementList.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                try {
                    for (var cssProp in cssStyle) {
                        try {
                            /** @type {?} */
                            var propValue = cssStyle[cssProp];
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
    };
    UtilService.decorators = [
        { type: Injectable }
    ];
    return UtilService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchemaService = /** @class */ (function () {
    function SchemaService(_defaults) {
        this._defaults = _defaults;
        this.initialize();
    }
    /**
     * @return {?}
     */
    SchemaService.prototype.initialize = /**
     * @return {?}
     */
    function () {
        try {
            this._formSchema = {};
            this._formOriginalSchema = {};
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @param {?} schemaKey
     * @param {?} schema
     * @return {?}
     */
    SchemaService.prototype.addSchema = /**
     * @param {?} schemaKey
     * @param {?} schema
     * @return {?}
     */
    function (schemaKey, schema) {
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
    };
    /**
     * @protected
     * @param {?} schema
     * @return {?}
     */
    SchemaService.prototype._modifyDef = /**
     * @protected
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
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
    };
    /**
     * @protected
     * @param {?} fieldsArr
     * @param {?} fieldDefaultProps
     * @return {?}
     */
    SchemaService.prototype._addFieldsDefaultProps = /**
     * @protected
     * @param {?} fieldsArr
     * @param {?} fieldDefaultProps
     * @return {?}
     */
    function (fieldsArr, fieldDefaultProps) {
        var _this = this;
        try {
            if (!fieldsArr) {
                fieldsArr = [];
            }
            fieldsArr.forEach((/**
             * @param {?} def
             * @param {?} index
             * @return {?}
             */
            function (def, index) {
                if (def.type === 'FST') {
                    def.fields = _this._addFieldsDefaultProps(def.fields, fieldDefaultProps);
                }
                else {
                    def.disabled = def.disabled || fieldDefaultProps.disabled || false;
                    /** @type {?} */
                    var fieldProps = assign({}, _this._defaults.FIELD_DEFAULT_PROPS, fieldDefaultProps);
                    if (def.type in _this._defaults.EXCEPTIONAL_STYLED_FIELDS) {
                        def.formColumns = fieldProps.columns;
                        def = assign(def, _this._defaults.EXCEPTIONAL_STYLED_FIELDS[def.type]);
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
    };
    /**
     * @param {?} schemaKey
     * @return {?}
     */
    SchemaService.prototype.getSchemaFields = /**
     * @param {?} schemaKey
     * @return {?}
     */
    function (schemaKey) {
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
    };
    /**
     * @param {?} schemaKey
     * @return {?}
     */
    SchemaService.prototype.getSchemaBySchemaKey = /**
     * @param {?} schemaKey
     * @return {?}
     */
    function (schemaKey) {
        try {
            if (!this._formSchema[schemaKey]) {
                return {};
            }
            return this._formSchema[schemaKey];
        }
        catch (error) {
            console.log(error);
        }
    };
    SchemaService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaService.ctorParameters = function () { return [
        { type: DefaultsService }
    ]; };
    return SchemaService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidatorService = /** @class */ (function () {
    function ValidatorService() {
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
            lt: 'Please fill value less than XXVALUEXX',
            gte: 'Please fill value greater than or equal to XXVALUEXX',
            json: 'Invalid json.',
            lte: 'Please fill value less than or equal to XXVALUEXX',
            max: 'Max value XXVALUEXX is allowed',
            maxDate: 'Max date XXVALUEXX is allowed.',
            min: 'Min value XXVALUEXX is allowed',
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
    ValidatorService.prototype.getMaxlengthValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return Validators.maxLength(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getMinlengthValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return Validators.minLength(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getPatternValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return Validators.pattern(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getRequiredValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return Validators.required;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getArrayLengthValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.arrayLength(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getBase64Validator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.base64;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getCreditCardValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.creditCard;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getDateValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.date(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getDateISOValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.dateISO;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getDigitsValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.digits;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getEmailValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.email;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getEqualValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.equal(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getEqualToValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.equalTo(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getLtValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.lt(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getGteValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.gte(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getJsonValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.json;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getLteValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.lte(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getMaxValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.max(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getMaxDateValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.maxDate;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getMinValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.min(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getMinDateValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.minDate(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getNotEqualValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.notEqual(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getNotEqualToValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.notEqualTo(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getNumberValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.number;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getPropertyValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.property(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getRangeValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.range([value.min, value.max]);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getRangeLengthValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.rangeLength([value.min, value.max]);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getUrlValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.url;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValidatorService.prototype.getUuidValidator = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return CustomValidators.uuid(value);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} validatorData
     * @return {?}
     */
    ValidatorService.prototype.getValidator = /**
     * @param {?} validatorData
     * @return {?}
     */
    function (validatorData) {
        try {
            /** @type {?} */
            var name_1 = validatorData.name;
            /** @type {?} */
            var value = validatorData.value;
            if (this._validatorsMapping[name_1]) {
                /** @type {?} */
                var validationFn = this._validatorsMapping[name_1](value);
                return {
                    messageDate: this.getErrorMessageData(validatorData),
                    validationFn: validationFn
                };
            }
            else {
                console.log("Validation '" + name_1 + "' is not supported.");
                return null;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} validatorData
     * @return {?}
     */
    ValidatorService.prototype.getErrorMessageData = /**
     * @param {?} validatorData
     * @return {?}
     */
    function (validatorData) {
        try {
            /** @type {?} */
            var name_2 = validatorData.name;
            return {
                name: name_2,
                message: this._getValidationMessage(validatorData)
            };
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @param {?} validatorData
     * @return {?}
     */
    ValidatorService.prototype._getValidationMessage = /**
     * @protected
     * @param {?} validatorData
     * @return {?}
     */
    function (validatorData) {
        try {
            /** @type {?} */
            var name_3 = validatorData.name;
            /** @type {?} */
            var value = validatorData.value;
            /** @type {?} */
            var validationMessage = this._validationMessageMapping[name_3];
            if (value.constructor === Object) {
                for (var propertyName in value) {
                    /** @type {?} */
                    var propertyValue = value[propertyName];
                    validationMessage = validationMessage.replace("XX" + propertyName + "XX", propertyValue);
                }
            }
            else {
                validationMessage = validationMessage.replace("XXVALUEXX", value);
            }
            return validationMessage;
        }
        catch (error) {
            console.log(error);
            return 'Error';
        }
    };
    ValidatorService.decorators = [
        { type: Injectable }
    ];
    return ValidatorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Field = /** @class */ (function () {
    function Field(_elemRef, _renderer, _validatorService, _defaults, _httpService) {
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
    Field.prototype.initialize = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    Field.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /**
     * @return {?}
     */
    Field.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._afterViewInit();
    };
    /**
     * @protected
     * @return {?}
     */
    Field.prototype._afterViewInit = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            this._addCssClasses(this._elemRef.nativeElement, this.gridWidthClass + " " + this.type + " form-field");
            this._applyEvents();
            if (this.hidden) {
                this._renderer.addClass(this._elemRef.nativeElement, 'hidden');
            }
            if (this.fieldDef.disabled) {
                /** @type {?} */
                var field = this.fieldRef;
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
    };
    /**
     * @protected
     * @return {?}
     */
    Field.prototype._applyEvents = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                /** @type {?} */
                var fieldRef_1 = this.fieldRef;
                if (fieldRef_1) {
                    this.fieldDef.events.forEach((/**
                     * @param {?} eventData
                     * @return {?}
                     */
                    function (eventData) {
                        /** @type {?} */
                        var eventName = eventData.name;
                        /** @type {?} */
                        var callbacksArr = eventData.callbacks;
                        callbacksArr.forEach((/**
                         * @param {?} calbackData
                         * @return {?}
                         */
                        function (calbackData) {
                            /** @type {?} */
                            var callbackFn = _this._getEventCallback(eventName, calbackData);
                            if (callbackFn) {
                                try {
                                    fieldRef_1.addEventListener(eventName, callbackFn);
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
    };
    /**
     * @protected
     * @param {?} eventName
     * @param {?} callbackData
     * @return {?}
     */
    Field.prototype._getEventCallback = /**
     * @protected
     * @param {?} eventName
     * @param {?} callbackData
     * @return {?}
     */
    function (eventName, callbackData) {
        try {
            /** @type {?} */
            var callbackName = callbackData.name;
            if (!callbackData.arguments) {
                callbackData.arguments = [];
            }
            /** @type {?} */
            var handlerFnOwner = this._getCallbackOwner(callbackData.handlerFnOwner);
            if (handlerFnOwner && handlerFnOwner[callbackName] && typeof handlerFnOwner[callbackName] === 'function') {
                return this.eventHandler.bind(this, callbackData.handlerFnOwner, callbackName, callbackData.arguments);
            }
            else {
                console.log("Callback function " + callbackName + " for event " + eventName + " does not exist in ", handlerFnOwner);
                return null;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} ownerType
     * @param {?} fnName
     * @param {?} argsArr
     * @param {?=} eventdata
     * @return {?}
     */
    Field.prototype.eventHandler = /**
     * @param {?} ownerType
     * @param {?} fnName
     * @param {?} argsArr
     * @param {?=} eventdata
     * @return {?}
     */
    function (ownerType, fnName, argsArr, eventdata) {
        try {
            if (!argsArr) {
                argsArr = [];
            }
            argsArr = Object.assign([], argsArr);
            /** @type {?} */
            var callbackFnOwner = this._getCallbackOwner(ownerType);
            if (eventdata) {
                argsArr.push(eventdata);
            }
            return callbackFnOwner[fnName].apply(callbackFnOwner, argsArr);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @protected
     * @param {?} ownerType
     * @return {?}
     */
    Field.prototype._getCallbackOwner = /**
     * @protected
     * @param {?} ownerType
     * @return {?}
     */
    function (ownerType) {
        try {
            if (!ownerType) {
                ownerType = 'F';
            }
            /** @type {?} */
            var callbackFnOwner = this.formComponent;
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
    };
    /**
     * @protected
     * @param {?} element
     * @param {?} spaceSeparatedClasses
     * @return {?}
     */
    Field.prototype._addCssClasses = /**
     * @protected
     * @param {?} element
     * @param {?} spaceSeparatedClasses
     * @return {?}
     */
    function (element, spaceSeparatedClasses) {
        var _this = this;
        try {
            /** @type {?} */
            var classesArr = spaceSeparatedClasses.split(' ');
            classesArr.forEach((/**
             * @param {?} cssClass
             * @return {?}
             */
            function (cssClass) {
                _this._renderer.addClass(element, cssClass);
            }));
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    Field.prototype._init = /**
     * @protected
     * @return {?}
     */
    function () {
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
    };
    /**
     * @protected
     * @return {?}
     */
    Field.prototype._storeArraysInObjects = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            this.validations.forEach((/**
             * @param {?} validationData
             * @return {?}
             */
            function (validationData) {
                _this._validationsDataObj[validationData.name] = validationData;
            }));
            this.events.forEach((/**
             * @param {?} eventData
             * @return {?}
             */
            function (eventData) {
                _this._eventsDataObj[eventData.name] = eventData;
            }));
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    Field.prototype._applyValidations = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            if (this.fieldDef.validations && this.fieldDef.validations.length > 0) {
                /** @type {?} */
                var asyncValidators_1 = [];
                this.fieldDef.validations.forEach((/**
                 * @param {?} validationData
                 * @return {?}
                 */
                function (validationData) {
                    /** @type {?} */
                    var validatorData = _this._validatorService.getValidator(validationData);
                    if (validatorData) {
                        asyncValidators_1.push(validatorData.validationFn);
                        _this._errorMessageData[validationData.name] = validatorData.messageDate;
                    }
                }));
                if (asyncValidators_1.length > 0) {
                    this.control.setValidators(asyncValidators_1);
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    Field.prototype._initCssClasses = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var fieldContainerClasses = {};
            /** @type {?} */
            var inputContainerClasses = {};
            /** @type {?} */
            var fieldClasses = {};
            /** @type {?} */
            var labelClasses = {};
            fieldContainerClasses["label-" + this.labelPosition] = true;
            fieldContainerClasses["" + this.id] = true;
            fieldContainerClasses[this.type + "-field-container"] = true;
            labelClasses["text-" + this.fieldDef.labelAlignment] = true;
            inputContainerClasses[this.type + "-input-container"] = true;
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
                fieldContainerClasses: fieldContainerClasses,
                inputContainerClasses: inputContainerClasses,
                fieldClasses: fieldClasses,
                labelClasses: labelClasses
            };
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    Field.prototype._initCssStyle = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var fieldContainerStyle = {};
            /** @type {?} */
            var inputContainerStyle = {};
            /** @type {?} */
            var fieldStyle = {};
            /** @type {?} */
            var labelStyle = {};
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
                fieldContainerStyle: fieldContainerStyle,
                inputContainerStyle: inputContainerStyle,
                fieldStyle: fieldStyle,
                labelStyle: labelStyle
            };
        }
        catch (error) {
            console.log(error);
        }
    };
    Object.defineProperty(Field.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "code", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "order", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.order;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "formOrder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.formOrder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this.code + "__" + this.formOrder + "__" + this.order;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "columns", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "labelPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.labelPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "gridWidthClass", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var col = 12 / Number(this.columns);
            return "col-sm-" + col;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.placeholder || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "hidden", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hidden || false;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val === true) {
                this._renderer.addClass(this._elemRef.nativeElement, 'hidden');
            }
            else {
                this._renderer.removeClass(this._elemRef.nativeElement, 'hidden');
            }
            this._hidden = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "disable", {
        set: /**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            this.control.disable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "enable", {
        set: /**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            this.control.enable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.group.controls[this.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "defaultValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.defaultValue || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "helpText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.helpText || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.control.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "errors", {
        get: /**
         * @return {?}
         */
        function () {
            try {
                /** @type {?} */
                var errorsData = [];
                if (this.control && this.control.errors) {
                    /** @type {?} */
                    var controlErrors = this.control.errors;
                    for (var errorName in controlErrors) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "fieldRef", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elemRef.nativeElement.querySelector("#" + this.id);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "inputContainerRef", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elemRef.nativeElement.querySelector("." + this.id + " .input-container");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "labelRef", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elemRef.nativeElement.querySelector("." + this.id + " .field-label");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "prefix", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.prefix || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "suffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.suffix || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "labelWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.labelWidth || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "fieldWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.fieldWidth || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "validations", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.validations || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "events", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.events || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "hasCustomStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._defaults.EXCEPTIONAL_STYLED_FIELDS[this.type] || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "hideLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideLabel || false;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val === true) {
                this._renderer.addClass(this.labelRef, 'hidden');
            }
            else {
                this._renderer.removeClass(this.labelRef, 'hidden');
            }
            this._hideLabel = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.errors.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "cssClasses", {
        get: /**
         * @return {?}
         */
        function () {
            this._cssClasses.fieldClasses = assign(this._cssClasses.fieldClasses, {
                //'is-valid': this.valid,
                'is-invalid': !this.valid
            });
            return this._cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "cssStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cssStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "formCode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.formCode || '';
        },
        enumerable: true,
        configurable: true
    });
    Field.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Field.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ValidatorService },
        { type: DefaultsService },
        { type: HttpService }
    ]; };
    Field.propDecorators = {
        fieldDef: [{ type: Input }],
        group: [{ type: Input }],
        formComponent: [{ type: Input }],
        pageComponent: [{ type: Input }],
        parent: [{ type: Input }]
    };
    return Field;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextComponent = /** @class */ (function (_super) {
    __extends(TextComponent, _super);
    function TextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    TextComponent.prototype._afterViewInit = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            _super.prototype._afterViewInit.call(this);
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
    };
    TextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'text',
                    template: "<!-- <div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <input type=\"text\" class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\">\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n -->\n<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\" *ngIf=\"prefix\">\n        <div class=\"input-group-text\">{{prefix}}</div>\n      </div>\n      <input type=\"text\" class=\"form-control\" \n        [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n        [attr.placeholder]=\"placeholder\">\n      <div class=\"input-group-append\" *ngIf=\"suffix\">\n        <span class=\"input-group-text\">{{suffix}}</span>\n      </div>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ""]
                }] }
    ];
    return TextComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ErrorsComponent = /** @class */ (function () {
    function ErrorsComponent() {
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
    return ErrorsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateComponent = /** @class */ (function (_super) {
    __extends(DateComponent, _super);
    function DateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    DateComponent.prototype._init = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            _super.prototype._init.call(this);
            if (this._validationsDataObj.minDate) {
                this.minDate = new Date();
                /** @type {?} */
                var dSrtng = this._validationsDataObj.minDate.value;
                /** @type {?} */
                var arr = dSrtng.split('/');
                this.minDate.setMonth(arr[0] - 1);
                this.minDate.setDate(arr[1]);
                this.minDate.setFullYear(arr[2]);
            }
            if (this._validationsDataObj.maxDate) {
                this.maxDate = new Date();
                /** @type {?} */
                var dSrtng = this._validationsDataObj.maxDate.value;
                /** @type {?} */
                var arr = dSrtng.split('/');
                this.maxDate.setMonth(arr[0] - 1);
                this.maxDate.setDate(arr[1]);
                this.maxDate.setFullYear(arr[2]);
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    DateComponent.prototype._applyEvents = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            this._eventsAndCallbacksMapping = {};
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                this.fieldDef.events.forEach((/**
                 * @param {?} eventData
                 * @return {?}
                 */
                function (eventData) {
                    /** @type {?} */
                    var eventName = eventData.name;
                    /** @type {?} */
                    var callbacksArr = eventData.callbacks;
                    _this._eventsAndCallbacksMapping[eventName] = [];
                    callbacksArr.forEach((/**
                     * @param {?} calbackData
                     * @return {?}
                     */
                    function (calbackData) {
                        /** @type {?} */
                        var callbackFn = _this._getEventCallback(eventName, calbackData);
                        if (callbackFn) {
                            try {
                                _this._eventsAndCallbacksMapping[eventName].push(callbackFn);
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
    };
    /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    DateComponent.prototype.callEventCallbacks = /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    function (eventName, eventData) {
        try {
            if (this._eventsAndCallbacksMapping && this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
                this._eventsAndCallbacksMapping[eventName].forEach((/**
                 * @param {?} callback
                 * @return {?}
                 */
                function (callback) {
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
    };
    Object.defineProperty(DateComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var setDate = value;
            if (value.constructor === String) {
                this.bsValue = new Date();
                try {
                    /** @type {?} */
                    var dateAR = setDate.split('/');
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
        },
        enumerable: true,
        configurable: true
    });
    DateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\"\n\t[ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]=\"group\">\n\t<label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\"\n\t\t[ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n\t<div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\t\t<input class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n\t\t\t[formControlName]=\"name\" [attr.placeholder]=\"placeholder\" bsDatepicker [minDate]=\"minDate\"\n\t\t\t[maxDate]=\"maxDate\" (bsValueChange)=\"callEventCallbacks('bsValueChange', $event)\"\n\t\t\t(onHidden)=\"callEventCallbacks('onHidden', $event)\" (onShown)=\"callEventCallbacks('onShown', $event)\">\n\n\n\t\t<errors [errors]=\"errors\"></errors>\n\t</div>\n\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ".bs-datepicker{display:flex;align-items:stretch;flex-flow:row wrap;background:#fff;box-shadow:0 0 10px 0 #aaa;position:relative;z-index:1}.bs-datepicker:after{clear:both;content:'';display:block}.bs-datepicker bs-day-picker{float:left}.bs-datepicker button:active,.bs-datepicker button:focus,.bs-datepicker button:hover,.bs-datepicker input:active,.bs-datepicker input:focus,.bs-datepicker input:hover,.bs-datepicker-btns button:active,.bs-datepicker-btns button:focus,.bs-datepicker-btns button:hover,.bs-datepicker-predefined-btns button:active,.bs-datepicker-predefined-btns button:focus{outline:0}.bs-datepicker-head{min-width:270px;height:50px;padding:10px;border-radius:3px 3px 0 0;text-align:justify}.bs-datepicker-head:after{content:\"\";display:inline-block;vertical-align:top;width:100%}.bs-datepicker-head button{display:inline-block;vertical-align:top;padding:0;height:30px;line-height:30px;border:0;background:0 0;text-align:center;cursor:pointer;color:#fff;transition:.3s}.bs-datepicker-head button[disabled],.bs-datepicker-head button[disabled]:active,.bs-datepicker-head button[disabled]:hover{background:rgba(221,221,221,.3);color:#f5f5f5;cursor:not-allowed}.bs-datepicker-head button.next,.bs-datepicker-head button.previous{border-radius:50%;width:30px;height:30px}.bs-datepicker-head button.next span,.bs-datepicker-head button.previous span{font-size:28px;line-height:1;display:inline-block;position:relative;height:100%;width:100%;border-radius:50%}.bs-datepicker-head button.current{border-radius:15px;max-width:155px;padding:0 13px}.bs-datepicker-head button:hover{background-color:rgba(0,0,0,.1)}.bs-datepicker-head button:active{background-color:rgba(0,0,0,.2)}.bs-datepicker-body{padding:10px;border-radius:0 0 3px 3px;min-height:232px;min-width:278px;border:1px solid #e9edf0}.bs-datepicker-body .days.weeks{position:relative;z-index:1}.bs-datepicker-body table{width:100%;border-collapse:separate;border-spacing:0}.bs-datepicker-body table th{font-size:13px;color:#9aaec1;font-weight:400;text-align:center}.bs-datepicker-body table td{color:#54708b;text-align:center;position:relative;padding:0}.bs-datepicker-body table td span{display:block;margin:0 auto;font-size:13px;border-radius:50%;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.bs-datepicker-body table td:not(.disabled):not(.week) span:not(.disabled):not(.is-other-month){cursor:pointer}.bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected),.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span{background-color:#e9edf0;transition:none}.bs-datepicker-body table td span.is-active-other-month:not(.disabled):not(.selected),.bs-datepicker-body table td.is-active-other-month:not(.disabled):not(.selected) span{background-color:#e9edf0;transition:none;cursor:pointer}.bs-datepicker-body table td span.disabled,.bs-datepicker-body table td.disabled span{color:#9aaec1}.bs-datepicker-body table td span.selected,.bs-datepicker-body table td.selected span{color:#fff}.bs-datepicker-body table td span.is-other-month,.bs-datepicker-body table td.is-other-month span{color:rgba(0,0,0,.25)}.bs-datepicker-body table td.active{position:relative}.bs-datepicker-body table td.active.select-start:before{left:35%}.bs-datepicker-body table td.active.select-end:before{left:-85%}.bs-datepicker-body table td span.active.select-end:after,.bs-datepicker-body table td span.active.select-start:after,.bs-datepicker-body table td.active.select-end span:after,.bs-datepicker-body table td.active.select-start span:after{content:\"\";display:block;position:absolute;z-index:-1;width:100%;height:100%;transition:.3s;top:0;border-radius:50%}.bs-datepicker-body table td span:before,.bs-datepicker-body table td:before{content:\"\";display:block;position:absolute;z-index:-1;top:6px;bottom:6px;left:-2px;right:-2px;box-sizing:content-box;background:0 0}.bs-datepicker-body table td.active.select-start+td.active:before{left:-20%}.bs-datepicker-body table td:last-child.active:before{border-radius:0 3px 3px 0;width:125%;left:-25%}.bs-datepicker-body table td span[class*=select-],.bs-datepicker-body table td[class*=select-] span{border-radius:50%;color:#fff}.bs-datepicker-body table.days span.active:not(.select-start):before,.bs-datepicker-body table.days span.in-range:not(.select-start):before,.bs-datepicker-body table.days td.active:not(.select-start):before,.bs-datepicker-body table.days td.in-range:not(.select-start):before{background:#e9edf0}.bs-datepicker-body table.days span{width:32px;height:32px;line-height:32px}.bs-datepicker-body table.days span.select-start{z-index:2}.bs-datepicker-body table.days span.in-range.select-end:before,.bs-datepicker-body table.days span.is-highlighted.in-range:before{background:0 0;right:0;left:0}.bs-datepicker-body table.days td.active+td.is-highlighted:before,.bs-datepicker-body table.days td.active+td.select-end:before,.bs-datepicker-body table.days td.in-range+td.is-highlighted:before,.bs-datepicker-body table.days td.in-range+td.select-end:before,.bs-datepicker-body table.days td.select-start+td.is-highlighted:before,.bs-datepicker-body table.days td.select-start+td.select-end:before{background:#e9edf0;width:100%}.bs-datepicker-body table.weeks tr td:nth-child(2).active:before{border-radius:3px 0 0 3px;left:0;width:100%}.bs-datepicker-body table:not(.weeks) tr td:first-child:before{border-radius:3px 0 0 3px}.bs-datepicker-body table.years td span{width:46px;height:46px;line-height:45px;margin:0 auto}.bs-datepicker-body table.years tr:not(:last-child) td span{margin-bottom:8px}.bs-datepicker-body table.months td{height:52px}.bs-datepicker-body table.months td span{padding:6px;border-radius:15px}.bs-datepicker .current-timedate{color:#54708b;font-size:15px;text-align:center;height:30px;line-height:30px;border-radius:20px;border:1px solid #e9edf0;margin-bottom:10px;cursor:pointer;text-transform:uppercase;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.bs-datepicker .current-timedate span:not(:empty):before{content:\"\";width:15px;height:16px;display:inline-block;margin-right:4px;vertical-align:text-bottom;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC)}.bs-datepicker-multiple{border-radius:4px 0 0 4px}.bs-datepicker-multiple+.bs-datepicker-multiple{margin-left:10px}.bs-datepicker-multiple .bs-datepicker{box-shadow:none;position:relative}.bs-datepicker-multiple .bs-datepicker:not(:last-child){padding-right:10px}.bs-datepicker-multiple .bs-datepicker+.bs-datepicker:after{content:\"\";display:block;width:14px;height:10px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);position:absolute;top:25px;left:-8px}.bs-datepicker-multiple .bs-datepicker .left{float:left}.bs-datepicker-multiple .bs-datepicker .right{float:right}.bs-datepicker-container{padding:15px}.bs-datepicker .bs-media-container{display:flex}@media (max-width:768px){.bs-datepicker .bs-media-container{flex-direction:column}}.bs-datepicker-custom-range{padding:15px;background:#eee}.bs-datepicker-predefined-btns button{width:100%;display:block;height:30px;background-color:#9aaec1;border-radius:4px;color:#fff;border:0;margin-bottom:10px;padding:0 18px;text-align:left;transition:.3s}.bs-datepicker-predefined-btns button:active,.bs-datepicker-predefined-btns button:hover{background-color:#54708b}.bs-datepicker-buttons{display:flex;flex-flow:row wrap;justify-content:flex-end;padding-top:10px;border-top:1px solid #e9edf0}.bs-datepicker-buttons .btn-default{margin-left:10px}.bs-timepicker-container{padding:10px 0}.bs-timepicker-label{color:#54708b;margin-bottom:10px}.bs-timepicker-controls{display:inline-block;vertical-align:top;margin-right:10px}.bs-timepicker-controls button{width:20px;height:20px;border-radius:50%;border:0;background-color:#e9edf0;color:#54708b;font-size:16px;font-weight:700;vertical-align:middle;line-height:0;padding:0;transition:.3s}.bs-timepicker-controls button:hover{background-color:#d5dadd}.bs-timepicker-controls input{width:35px;height:25px;border-radius:13px;text-align:center;border:1px solid #e9edf0}.bs-timepicker .switch-time-format{text-transform:uppercase;min-width:54px;height:25px;border-radius:20px;border:1px solid #e9edf0;background:#fff;color:#54708b;font-size:13px}.bs-timepicker .switch-time-format img{vertical-align:initial;margin-left:4px}bs-datepicker-container,bs-daterangepicker-container{z-index:1080}@media (max-width:768px){.bs-datepicker-multiple{display:flex}.bs-datepicker-multiple+.bs-datepicker-multiple{margin-top:10px;margin-left:0}}.theme-default .bs-datepicker-body table td span.selected,.theme-default .bs-datepicker-body table td span[class*=select-]:after,.theme-default .bs-datepicker-body table td.selected span,.theme-default .bs-datepicker-body table td[class*=select-] span:after,.theme-default .bs-datepicker-head{background-color:#777}.theme-default .bs-datepicker-body table td.week span{color:#777}.theme-default .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#777;color:#fff;opacity:.5;transition:none}.theme-green .bs-datepicker-body table td span.selected,.theme-green .bs-datepicker-body table td span[class*=select-]:after,.theme-green .bs-datepicker-body table td.selected span,.theme-green .bs-datepicker-body table td[class*=select-] span:after,.theme-green .bs-datepicker-head{background-color:#5cb85c}.theme-green .bs-datepicker-body table td.week span{color:#5cb85c}.theme-green .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#5cb85c;color:#fff;opacity:.5;transition:none}.theme-blue .bs-datepicker-body table td span.selected,.theme-blue .bs-datepicker-body table td span[class*=select-]:after,.theme-blue .bs-datepicker-body table td.selected span,.theme-blue .bs-datepicker-body table td[class*=select-] span:after,.theme-blue .bs-datepicker-head{background-color:#5bc0de}.theme-blue .bs-datepicker-body table td.week span{color:#5bc0de}.theme-blue .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#5bc0de;color:#fff;opacity:.5;transition:none}.theme-dark-blue .bs-datepicker-body table td span.selected,.theme-dark-blue .bs-datepicker-body table td span[class*=select-]:after,.theme-dark-blue .bs-datepicker-body table td.selected span,.theme-dark-blue .bs-datepicker-body table td[class*=select-] span:after,.theme-dark-blue .bs-datepicker-head{background-color:#337ab7}.theme-dark-blue .bs-datepicker-body table td.week span{color:#337ab7}.theme-dark-blue .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#337ab7;color:#fff;opacity:.5;transition:none}.theme-red .bs-datepicker-body table td span.selected,.theme-red .bs-datepicker-body table td span[class*=select-]:after,.theme-red .bs-datepicker-body table td.selected span,.theme-red .bs-datepicker-body table td[class*=select-] span:after,.theme-red .bs-datepicker-head{background-color:#d9534f}.theme-red .bs-datepicker-body table td.week span{color:#d9534f}.theme-red .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#d9534f;color:#fff;opacity:.5;transition:none}.theme-orange .bs-datepicker-body table td span.selected,.theme-orange .bs-datepicker-body table td span[class*=select-]:after,.theme-orange .bs-datepicker-body table td.selected span,.theme-orange .bs-datepicker-body table td[class*=select-] span:after,.theme-orange .bs-datepicker-head{background-color:#f0ad4e}.theme-orange .bs-datepicker-body table td.week span{color:#f0ad4e}.theme-orange .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#f0ad4e;color:#fff;opacity:.5;transition:none}"]
                }] }
    ];
    return DateComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PasswordComponent = /** @class */ (function (_super) {
    __extends(PasswordComponent, _super);
    function PasswordComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'password',
                    template: "<!-- <div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]= \"group\">\n    <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n    <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n  [formControlName]=\"name\" [attr.placeholder]=\"placeholder\">\n    </div> <errors [errors]=\"errors\"></errors>\n    \n  </div> -->\n\n<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\" *ngIf=\"prefix\">\n        <div class=\"input-group-text\">{{prefix}}</div>\n      </div>\n      <input type=\"password\" class=\"form-control\" \n        [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n        [attr.placeholder]=\"placeholder\">\n      <div class=\"input-group-append\" *ngIf=\"suffix\">\n        <span class=\"input-group-text\">{{suffix}}</span>\n      </div>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n\n  ",
                    styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ""]
                }] }
    ];
    return PasswordComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberComponent = /** @class */ (function (_super) {
    __extends(NumberComponent, _super);
    function NumberComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'number',
                    template: "<!-- <div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <input type=\"number\" class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\"\n      [attr.id]=\"id\" [formControlName]=\"name\" [attr.placeholder]=\"placeholder\">\n  </div>\n  <errors [errors]=\"errors\"></errors>\n\n</div> -->\n\n\n<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\" *ngIf=\"prefix\">\n        <div class=\"input-group-text\">{{prefix}}</div>\n      </div>\n      <!--  <input type=\"text\" class=\"form-control\" \n        [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n        [attr.placeholder]=\"placeholder\"> -->\n      <input type=\"number\" class=\"form-control\" \n        [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n        [attr.placeholder]=\"placeholder\">\n      <div class=\"input-group-append\" *ngIf=\"suffix\">\n        <span class=\"input-group-text\">{{suffix}}</span>\n      </div>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ""]
                }] }
    ];
    return NumberComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CSelectComponent = /** @class */ (function (_super) {
    __extends(CSelectComponent, _super);
    function CSelectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = false;
        _this.filterOptions = (/**
         * @param {?} term
         * @param {?} item
         * @return {?}
         */
        function (term, item) {
            term = term.toLocaleLowerCase();
            return item.label.toLocaleLowerCase().indexOf(term) > -1;
        });
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    CSelectComponent.prototype._init = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            _super.prototype._init.call(this);
            this.options = this.fieldDef.options || [];
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CSelectComponent.prototype._applyEvents = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            this._eventsAndCallbacksMapping = {};
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                this.fieldDef.events.forEach((/**
                 * @param {?} eventData
                 * @return {?}
                 */
                function (eventData) {
                    /** @type {?} */
                    var eventName = eventData.name;
                    /** @type {?} */
                    var callbacksArr = eventData.callbacks;
                    _this._eventsAndCallbacksMapping[eventName] = [];
                    callbacksArr.forEach((/**
                     * @param {?} calbackData
                     * @return {?}
                     */
                    function (calbackData) {
                        /** @type {?} */
                        var callbackFn = _this._getEventCallback(eventName, calbackData);
                        if (callbackFn) {
                            try {
                                _this._eventsAndCallbacksMapping[eventName].push(callbackFn);
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
    };
    /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    CSelectComponent.prototype.callEventCallbacks = /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    function (eventName, eventData) {
        try {
            if (this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
                this._eventsAndCallbacksMapping[eventName].forEach((/**
                 * @param {?} callback
                 * @return {?}
                 */
                function (callback) {
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
    };
    Object.defineProperty(CSelectComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options || [];
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this._options = options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSelectComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var multiple = this.type === 'MSL';
            if (typeof this.fieldDef.multiple !== 'undefined') {
                multiple = this.fieldDef.multiple;
            }
            return multiple;
        },
        enumerable: true,
        configurable: true
    });
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
    return CSelectComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MultiselectComponent = /** @class */ (function (_super) {
    __extends(MultiselectComponent, _super);
    function MultiselectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiselectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'multiselect',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <ng-select #ngSelect class=\"c-select\" [ngClass]=\"{'select-is-invalid': errors.length > 0, 'select-is-valid': errors.length == 0}\"\n      [ngClass]=\"cssClasses.fieldClasses\" [items]=\"options\" [selectOnTab]=\"true\" bindValue=\"value\" labelForId=\"{{id}}\"\n      bindLabel=\"label\" [clearOnBackspace]=\"true\" placeholder=\"{{placeholder}}\" [multiple]=\"multiple\" [formControlName]=\"name\"\n      (open)=\"callEventCallbacks('open')\" (close)=\"callEventCallbacks('close')\" (focus)=\"callEventCallbacks('focus', $event)\"\n      (search)=\"callEventCallbacks('search', $event)\" (blur)=\"callEventCallbacks('blur', $event)\" (clear)=\"callEventCallbacks('clear')\"\n      (add)=\"callEventCallbacks('add', $event)\" (scrollToEnd)=\"callEventCallbacks('scrollToEnd', $event)\" (remove)=\"callEventCallbacks('remove', $event)\"\n(change)=\"callEventCallbacks('change', $event)\" groupBy=\"options\" [searchFn]=\"filterOptions\">\n\n>\n\n      <ng-template ng-optgroup-tmp let-item=\"item\">\n        {{item.label}}\n      </ng-template>\n      <ng-template ng-option-tmp let-item=\"item\">\n        {{item.label}}\n      </ng-template>\n    </ng-select>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ".ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1)}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select .ng-select-container:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=rtl] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon,.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.ng-select .ng-clear-wrapper{color:#999}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,.06);left:0}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,.54);cursor:pointer}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,.87);padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .ng-dropdown-panel{direction:rtl;text-align:right}.c-select.select-is-invalid .ng-select-container{border-color:#dc3545;padding-right:calc(1.5em + .75rem)}", ".c-select.select-is-invalid .ng-select-container{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.c-select.select-is-valid .ng-select-container{background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}", ""]
                }] }
    ];
    return MultiselectComponent;
}(CSelectComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadioComponent = /** @class */ (function (_super) {
    __extends(RadioComponent, _super);
    function RadioComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RadioComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.options;
        },
        enumerable: true,
        configurable: true
    });
    RadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'radio',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"custom-control custom-radio radio-button-cotnainer\" *ngFor=\"let item of options; let i = index;\">\n      <input type=\"radio\" class=\"custom-control-input\" [attr.disabled]=\"disabled\" [attr.disabled]=\"item.disabled\"\n        [value]=\"item.value\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id + '__' + i\"\n        [formControlName]=\"name\">\n      <label class=\"custom-control-label\" for=\"{{id}}__{{i}}\">{{item.label}}</label>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return RadioComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxComponent = /** @class */ (function (_super) {
    __extends(CheckboxComponent, _super);
    function CheckboxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'checkbox',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container \" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"custom-control custom-checkbox display-flex align-center\">\n      <input type=\"checkbox\" class=\"custom-control-input\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\"\n        [attr.id]=\"id\" [formControlName]=\"name\" [attr.placeholder]=\"placeholder\">\n      <label class=\"custom-control-label\" for=\"{{id}}\"></label>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return CheckboxComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextAreaComponent = /** @class */ (function (_super) {
    __extends(TextAreaComponent, _super);
    function TextAreaComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'text-area',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <textarea class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\"></textarea>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return TextAreaComponent;
}(TextComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CButtonComponent = /** @class */ (function (_super) {
    __extends(CButtonComponent, _super);
    function CButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CButtonComponent.prototype, "theme", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.theme || this._defaults.BTN_DEFUALT_THEME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CButtonComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.icon || '';
        },
        enumerable: true,
        configurable: true
    });
    CButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c-button',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\"></label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\n    <button type=\"button\" class=\"btn btn-{{theme}}\" [attr.id]=\"id\">\n      <div class=\"button-label display-flex\">\n        <i class=\"material-icons mr-1 \" *ngIf=\"icon\">\n          {{icon}}\n        </i>\n        {{label}}\n      </div>\n\n    </button>\n\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <!-- <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors> -->\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return CButtonComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateTimeComponent = /** @class */ (function (_super) {
    __extends(DateTimeComponent, _super);
    function DateTimeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    DateTimeComponent.prototype._init = /**
     * @protected
     * @return {?}
     */
    function () {
        _super.prototype._init.call(this);
        this.bsConfig = { dateInputFormat: 'MMMM Do YYYY, h:mm:ss a' };
    };
    DateTimeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date-time',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\"\n\t[ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]=\"group\">\n\t<label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\"\n\t\t[ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n\t<div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\t\t<input type=\"text\" class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\"\n\t\t\t[attr.id]=\"id\" [formControlName]=\"name\" [attr.placeholder]=\"placeholder\"   [bsConfig]=\"bsConfig\"\n      bsDatepicker>\n      <errors [errors]=\"errors\"></errors>\n\t</div>\n\n</div>",
                    styles: [""]
                }] }
    ];
    return DateTimeComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimeComponent = /** @class */ (function (_super) {
    __extends(TimeComponent, _super);
    function TimeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mytime = new Date();
        return _this;
    }
    TimeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'time',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]= \"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <!-- <input type=\"text\" class=\"form-control\" \n  [ngClass]=\"cssClasses.fieldClasses\"\n  [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n  [formControlName]=\"name\" [attr.placeholder]=\"placeholder\"> -->\n  \n    <timepicker  class=\"\" \n      [ngClass]=\"cssClasses.fieldClasses\"\n      [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n      [formControlName]=\"name\" >></timepicker>\n    \n\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n </div>",
                    styles: [""]
                }] }
    ];
    return TimeComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MonthComponent = /** @class */ (function (_super) {
    __extends(MonthComponent, _super);
    function MonthComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minMode = 'month';
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    MonthComponent.prototype._init = /**
     * @protected
     * @return {?}
     */
    function () {
        _super.prototype._init.call(this);
        this.bsConfig =
            Object.assign({}, {
                minMode: this.minMode,
                dateInputFormat: 'MMMM  YYYY'
            });
    };
    MonthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'month',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\"\n\t[ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]=\"group\">\n\t<label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\"\n\t\t[ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n\t<div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\t\t<input type=\"text\" class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\"\n\t\t\t[attr.id]=\"id\" [formControlName]=\"name\" [attr.placeholder]=\"placeholder\"   [bsConfig]=\"bsConfig\"\n      bsDatepicker><errors [errors]=\"errors\"></errors>\n\t</div>\n\n</div>",
                    styles: [""]
                }] }
    ];
    return MonthComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileComponent = /** @class */ (function (_super) {
    __extends(FileComponent, _super);
    function FileComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'file',
                    template: "<p>\n  file works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    return FileComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HiddenComponent = /** @class */ (function (_super) {
    __extends(HiddenComponent, _super);
    function HiddenComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HiddenComponent.decorators = [
        { type: Component, args: [{
                    selector: 'hidden',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <input type=\"hidden\" class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\">\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return HiddenComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BlankComponent = /** @class */ (function (_super) {
    __extends(BlankComponent, _super);
    function BlankComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlankComponent.decorators = [
        { type: Component, args: [{
                    selector: 'blank',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <!-- <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label> -->\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <!-- <input type=\"text\" class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\"> -->\n    <!-- <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small> -->\n    <!-- <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors> -->\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return BlankComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HtmlEditorComponent = /** @class */ (function (_super) {
    __extends(HtmlEditorComponent, _super);
    function HtmlEditorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._defaultQuillConfig = {
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
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    HtmlEditorComponent.prototype._applyEvents = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            this._eventsAndCallbacksMapping = {};
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                this.fieldDef.events.forEach((/**
                 * @param {?} eventData
                 * @return {?}
                 */
                function (eventData) {
                    /** @type {?} */
                    var eventName = eventData.name;
                    /** @type {?} */
                    var callbacksArr = eventData.callbacks;
                    _this._eventsAndCallbacksMapping[eventName] = [];
                    callbacksArr.forEach((/**
                     * @param {?} calbackData
                     * @return {?}
                     */
                    function (calbackData) {
                        /** @type {?} */
                        var callbackFn = _this._getEventCallback(eventName, calbackData);
                        if (callbackFn) {
                            try {
                                _this._eventsAndCallbacksMapping[eventName].push(callbackFn);
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
    };
    /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    HtmlEditorComponent.prototype.callEventCallbacks = /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    function (eventName, eventData) {
        try {
            if (this._eventsAndCallbacksMapping && this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
                this._eventsAndCallbacksMapping[eventName].forEach((/**
                 * @param {?} callback
                 * @return {?}
                 */
                function (callback) {
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
    };
    Object.defineProperty(HtmlEditorComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlEditorComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this.type === 'MSL';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HtmlEditorComponent.prototype, "quillConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.quillConfig || this._defaultQuillConfig;
        },
        enumerable: true,
        configurable: true
    });
    HtmlEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'html-editor',
                    template: "<!-- <script src=\"/quill-editor-files/quill.core.js\"></script>\n<script src=\"/quill-editor-files/quill.js\"></script> -->\n<!-- <script src=\"/quill-editor-files/quill.min.js\"></script> -->\n\n<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\"  [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <quill-editor #editor [formControlName]=\"name\" placeholder=\"{{placeholder}}\" [modules]=\"quillConfig\" (onEditorCreated)=\"callEventCallbacks('onEditorCreated', $event)\" (onContentChanged)=\"callEventCallbacks('onContentChanged', $event)\" (onSelectionChanged)=\"callEventCallbacks('onSelectionChanged', $event)\">\n    </quill-editor>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return HtmlEditorComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AnchorComponent = /** @class */ (function (_super) {
    __extends(AnchorComponent, _super);
    function AnchorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnchorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'anchor',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <!-- <input type=\"text\" class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\"> -->\n      <a target=\"_blank\" href=\"{{value}}\">{{label}}</a>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <!-- <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors> -->\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return AnchorComponent;
}(Field));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CFieldsetComponent = /** @class */ (function () {
    function CFieldsetComponent(_eleRef, _renderer) {
        this._eleRef = _eleRef;
        this._renderer = _renderer;
        this.isCollapsed = false;
    }
    /**
     * @return {?}
     */
    CFieldsetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        try {
            this._renderer.setStyle(this._eleRef.nativeElement, 'width', '100%');
            this._renderer.addClass(this._eleRef.nativeElement, 'm-3');
        }
        catch (error) {
            console.log(error);
        }
    };
    Object.defineProperty(CFieldsetComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CFieldsetComponent.prototype, "fields", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CFieldsetComponent.prototype, "code", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CFieldsetComponent.prototype, "collapse", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.collpase || true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CFieldsetComponent.prototype, "collapseBodyHidden", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.collapse && this.isCollapsed);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CFieldsetComponent.prototype, "hideLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.hideLabel || false;
        },
        enumerable: true,
        configurable: true
    });
    CFieldsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c-fieldset',
                    template: "<div class=\"simple-fieldset-container fieldset-container\">\n\n  <div class=\"card \">\n<div class=\"card-header display-flex justify-space-between\" [ngClass]=\"{'hidden': hideLabel}\">\n      <div class=\"fieldset-label\">\n        {{label}}\n      </div>\n      <div class=\"fieldset-collapse\">\n        <div class=\"fieldset-collapse-icons cursor-pointer\" (click)=\"isCollapsed = !isCollapsed\" *ngIf=\"collapse\">\n          <i class=\"material-icons\" *ngIf=\"isCollapsed\">\n            expand_more\n          </i>\n          <i class=\"material-icons\" *ngIf=\"!isCollapsed\">\n            expand_less\n          </i>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\" style=\"padding-bottom:0% !important\" [ngClass]=\"{'hidden': collapseBodyHidden}\">\n      <div class=\"fieldset-form-container fieldset-container ml-3 mr-3 mt-3\">\n        <div class=\"simple-form\" [attr.id]=\"code\">\n          <div class=\"fields-container \">\n            <ng-container class=\"field-wrapper\" *ngFor=\"let fldDef of fields\">\n              <text *ngIf=\"fldDef.type=='TXT'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></text>\n              <hidden *ngIf=\"fldDef.type=='HID'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></hidden>\n              <blank *ngIf=\"fldDef.type=='BLK'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></blank>\n              <anchor *ngIf=\"fldDef.type=='ANC'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></anchor>\n              <radio *ngIf=\"fldDef.type=='RAD'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></radio>\n              <checkbox *ngIf=\"fldDef.type=='CHK'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></checkbox>\n              <text-area *ngIf=\"fldDef.type=='TXA'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></text-area>\n              <c-select *ngIf=\"fldDef.type=='SEL'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></c-select>\n              <multiselect *ngIf=\"fldDef.type=='MSL'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></multiselect>\n              <c-button *ngIf=\"fldDef.type=='BTN'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></c-button>\n              <html-editor *ngIf=\"fldDef.type=='HTML'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></html-editor>\n              <c-fieldset *ngIf=\"fldDef.type=='FST'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\"></c-fieldset>\n              <month *ngIf=\"fldDef.type=='MONTH'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </month>\n              <date-time *ngIf=\"fldDef.type=='DATETIME'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </date-time>\n              <time *ngIf=\"fldDef.type=='TIME'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </time>\n              <number *ngIf=\"fldDef.type=='NUM'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </number>\n              <password *ngIf=\"fldDef.type=='PWD'\" [fieldDef]=\"fldDef\" [group]=\"group\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"parent\">\n              </password>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CFieldsetComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    CFieldsetComponent.propDecorators = {
        fieldDef: [{ type: Input }],
        group: [{ type: Input }],
        formComponent: [{ type: Input }],
        pageComponent: [{ type: Input }],
        parent: [{ type: Input }]
    };
    return CFieldsetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutocompleteComponent = /** @class */ (function (_super) {
    __extends(AutocompleteComponent, _super);
    function AutocompleteComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fetchOptions$ = new Subject();
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    AutocompleteComponent.prototype._init = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            _super.prototype._init.call(this);
            this.options$ = of(this.options);
            this.fetchOptions$
                .pipe(debounceTime(this._defaults.ACS_FETCH_DEBOUNCE_TIME), distinctUntilChanged())
                .subscribe((/**
             * @param {?} term
             * @return {?}
             */
            function (term) {
                _this.loading = true;
                return _this._fetchOptions(term)
                    .subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.options$ = _this._onFetchOptions(term, response);
                    _this.loading = false;
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return _this.options$ = of([]); }));
            }));
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @param {?} term
     * @return {?}
     */
    AutocompleteComponent.prototype._fetchOptions = /**
     * @protected
     * @param {?} term
     * @return {?}
     */
    function (term) {
        try {
            /** @type {?} */
            var searchData = this.searchData;
            if (!searchData) {
                return of([]);
            }
            if (searchData.beforeFetchFn) {
                /** @type {?} */
                var beforeSearchFn = this._getEventCallback(this._defaults.ACS_SEARCH_EVENT_NAME, searchData.beforeFetchFn);
                if (beforeSearchFn && !beforeSearchFn(term, this.code)) {
                    return of([]);
                }
            }
            /** @type {?} */
            var data = {
                searchTerm: term,
                fieldCode: this.code
            };
            if (searchData.fetchFn) {
                /** @type {?} */
                var searchFn = this._getEventCallback(this._defaults.ACS_SEARCH_EVENT_NAME, searchData.fetchFn);
                if (!searchFn || typeof searchFn !== 'function') {
                    return of([]);
                }
                /** @type {?} */
                var searchResult = searchFn(data);
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
    };
    /**
     * @protected
     * @param {?} term
     * @param {?=} response
     * @return {?}
     */
    AutocompleteComponent.prototype._onFetchOptions = /**
     * @protected
     * @param {?} term
     * @param {?=} response
     * @return {?}
     */
    function (term, response) {
        try {
            /** @type {?} */
            var searchData = this.searchData;
            if (searchData && searchData.afterFetchFn) {
                /** @type {?} */
                var afterSearchFn = this._getEventCallback(this._defaults.ACS_SEARCH_EVENT_NAME, searchData.afterFetchFn);
                if (afterSearchFn) {
                    /** @type {?} */
                    var optionsData = afterSearchFn({
                        searchTerm: term,
                        fieldCode: this.code,
                        formCode: this.formCode,
                        response: response
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
    };
    Object.defineProperty(AutocompleteComponent.prototype, "searchData", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.searchData || null;
        },
        enumerable: true,
        configurable: true
    });
    AutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <ng-select #ngSelect class=\"c-select\" [ngClass]=\"{'select-is-invalid': errors.length > 0, 'select-is-valid': errors.length == 0}\"\n      [ngClass]=\"cssClasses.fieldClasses\" [items]=\"options$ | async\" [selectOnTab]=\"true\" bindValue=\"value\" labelForId=\"{{id}}\"\n      bindLabel=\"label\" [clearOnBackspace]=\"true\" placeholder=\"{{placeholder}}\" [multiple]=\"multiple\" [formControlName]=\"name\"\n      (open)=\"callEventCallbacks('open')\" (close)=\"callEventCallbacks('close')\" (focus)=\"callEventCallbacks('focus', $event)\"\n      (search)=\"callEventCallbacks('search', $event)\" (blur)=\"callEventCallbacks('blur', $event)\" (clear)=\"callEventCallbacks('clear')\"\n      (add)=\"callEventCallbacks('add', $event)\" (scrollToEnd)=\"callEventCallbacks('scrollToEnd', $event)\" (remove)=\"callEventCallbacks('remove', $event)\"\n      (change)=\"callEventCallbacks('change', $event)\" groupBy=\"options\" [hideSelected]=\"true\" [loading]=\"loading\"\n[typeahead]=\"fetchOptions$\">\n\n      <ng-template ng-optgroup-tmp let-item=\"item\">\n        {{item.label}}\n      </ng-template>\n      <ng-template ng-option-tmp let-item=\"item\">\n        {{item.label}}\n      </ng-template>\n    </ng-select>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ".ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1)}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select .ng-select-container:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=rtl] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon,.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.ng-select .ng-clear-wrapper{color:#999}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,.06);left:0}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,.54);cursor:pointer}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,.87);padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .ng-dropdown-panel{direction:rtl;text-align:right}.c-select.select-is-invalid .ng-select-container{border-color:#dc3545;padding-right:calc(1.5em + .75rem)}", ".c-select.select-is-invalid .ng-select-container{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.c-select.select-is-valid .ng-select-container{background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}", ""]
                }] }
    ];
    return AutocompleteComponent;
}(CSelectComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldsModule = /** @class */ (function () {
    function FieldsModule() {
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
    return FieldsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldDirective = /** @class */ (function () {
    function FieldDirective() {
    }
    FieldDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[field]',
                },] }
    ];
    return FieldDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SimpleFormComponent = /** @class */ (function () {
    function SimpleFormComponent(_fb, _schemaService, _logger, _utilService, _defaults, _elemRef, _renderer) {
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
    SimpleFormComponent.prototype._initialize = /**
     * @protected
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    SimpleFormComponent.prototype.initialize = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SimpleFormComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._afterViewInit();
    };
    /**
     * @return {?}
     */
    SimpleFormComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._onChanges();
    };
    /**
     * @protected
     * @return {?}
     */
    SimpleFormComponent.prototype._onChanges = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            this._init();
            this.populateForm(this.formData);
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    SimpleFormComponent.prototype.populateForm = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        try {
            if (formData) {
                this.formGoup.patchValue(formData);
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    SimpleFormComponent.prototype._afterViewInit = /**
     * @protected
     * @return {?}
     */
    function () {
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
    };
    /**
     * @protected
     * @param {?} selector
     * @param {?} cssStyle
     * @return {?}
     */
    SimpleFormComponent.prototype._applyInlieCssBySelector = /**
     * @protected
     * @param {?} selector
     * @param {?} cssStyle
     * @return {?}
     */
    function (selector, cssStyle) {
        try {
            /** @type {?} */
            var elementList = document.querySelectorAll(selector);
            elementList.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                try {
                    for (var cssProp in cssStyle) {
                        try {
                            /** @type {?} */
                            var propValue = cssStyle[cssProp];
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
    };
    /**
     * @return {?}
     */
    SimpleFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /**
     * @protected
     * @return {?}
     */
    SimpleFormComponent.prototype._init = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            if (this.pageComponent && this.pageComponent.forms) {
                this.pageComponent.forms[this.code] = this;
            }
            else {
                console.log("Please provide [pageComponent] input and define 'forms' definition in the past object as pageComponent.");
            }
            if (this.formComponent && this.pageComponent.form) {
                this.formComponent.form = this;
            }
            else {
                console.log("Please provide [formComponent] input and define 'form' definition in the past object as pageComponent.");
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
    };
    /**
     * @protected
     * @param {?} formGroup
     * @param {?} formFieldsDef
     * @return {?}
     */
    SimpleFormComponent.prototype._addFormControls = /**
     * @protected
     * @param {?} formGroup
     * @param {?} formFieldsDef
     * @return {?}
     */
    function (formGroup, formFieldsDef) {
        var _this = this;
        try {
            formFieldsDef.forEach((/**
             * @param {?} def
             * @param {?} index
             * @return {?}
             */
            function (def, index) {
                /** @type {?} */
                var type = def.type;
                if (includes(_this._defaults.DUMMY_FIELDS, type)) {
                    return false;
                }
                if (type === 'FST') {
                    _this._addFormControls(formGroup, def.fields);
                }
                else {
                    /** @type {?} */
                    var fldControl = new FormControl();
                    _this.formGoup.addControl(def.name, fldControl);
                }
            }));
        }
        catch (error) { }
    };
    /**
     * @protected
     * @return {?}
     */
    SimpleFormComponent.prototype._initFormGroup = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            this.formGoup = this._fb.group({});
            this._addFormControls(this.formGoup, this._schemaService.getSchemaFields(this.code));
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @param {?} parentFieldName
     * @param {?} childFieldNameArr
     * @param {?} changes
     * @return {?}
     */
    SimpleFormComponent.prototype.onParentFieldValueChange = /**
     * @param {?} parentFieldName
     * @param {?} childFieldNameArr
     * @param {?} changes
     * @return {?}
     */
    function (parentFieldName, childFieldNameArr, changes) {
        try {
            if (this.onParentFieldValueChangeFn) {
                /** @type {?} */
                var callback = this._getEventCallback('parentChange', this.onParentFieldValueChangeFn);
                if (callback) {
                    callback(parentFieldName, childFieldNameArr, changes);
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @param {?} eventName
     * @param {?} callbackData
     * @return {?}
     */
    SimpleFormComponent.prototype._getEventCallback = /**
     * @protected
     * @param {?} eventName
     * @param {?} callbackData
     * @return {?}
     */
    function (eventName, callbackData) {
        try {
            /** @type {?} */
            var callbackName = callbackData.name;
            if (!callbackData.arguments) {
                callbackData.arguments = [];
            }
            /** @type {?} */
            var handlerFnOwner = this._getCallbackOwner(callbackData.handlerFnOwner);
            if (handlerFnOwner && handlerFnOwner[callbackName] && typeof handlerFnOwner[callbackName] === 'function') {
                return this.eventHandler.bind(this, callbackData.handlerFnOwner, callbackName, callbackData.arguments);
            }
            else {
                console.log("Callback function " + callbackName + " for event " + eventName + " does not exist in ", handlerFnOwner);
                return null;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @param {?} ownerType
     * @param {?} fnName
     * @param {?} argsArr
     * @param {?=} eventdata
     * @return {?}
     */
    SimpleFormComponent.prototype.eventHandler = /**
     * @param {?} ownerType
     * @param {?} fnName
     * @param {?} argsArr
     * @param {?=} eventdata
     * @return {?}
     */
    function (ownerType, fnName, argsArr, eventdata) {
        try {
            if (!argsArr) {
                argsArr = [];
            }
            argsArr = Object.assign([], argsArr);
            /** @type {?} */
            var callbackFnOwner = this._getCallbackOwner(ownerType);
            if (eventdata) {
                argsArr.push(eventdata);
            }
            if (!callbackFnOwner) {
                return null;
            }
            return callbackFnOwner[fnName].apply(callbackFnOwner, argsArr);
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    /**
     * @protected
     * @param {?} ownerType
     * @return {?}
     */
    SimpleFormComponent.prototype._getCallbackOwner = /**
     * @protected
     * @param {?} ownerType
     * @return {?}
     */
    function (ownerType) {
        try {
            if (!ownerType) {
                ownerType = 'P';
            }
            /** @type {?} */
            var callbackFnOwner = this.pageComponent;
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
    };
    Object.defineProperty(SimpleFormComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            // console.log("//");
            // console.log(this.schema.helpText);
            return this.schema.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "helps", {
        get: /**
         * @return {?}
         */
        function () {
            return this.schema.helpText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "fields", {
        get: /**
         * @return {?}
         */
        function () {
            return this.schema.fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "buttons", {
        get: /**
         * @return {?}
         */
        function () {
            return this.schema.buttons;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "columns", {
        get: /**
         * @return {?}
         */
        function () {
            return this.schema.columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "collapse", {
        get: /**
         * @return {?}
         */
        function () {
            return this.schema.collapse || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "hideLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.schema.hideLabel || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "collapseBodyHidden", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.collapse && this.isCollapsed);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formGoup.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formGoup.value;
        },
        set: /**
         * @param {?} groupValue
         * @return {?}
         */
        function (groupValue) {
            this.formGoup.patchValue(groupValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "order", {
        get: /**
         * @return {?}
         */
        function () {
            return this.schema.order || 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this.code + '__' + this.order;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "hidden", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hidden || false;
        },
        set: /**
         * @param {?} hidden
         * @return {?}
         */
        function (hidden) {
            if (hidden === true) {
                this._renderer.addClass(this._elemRef.nativeElement, 'hidden');
            }
            else {
                this._renderer.removeClass(this._elemRef.nativeElement, 'hidden');
            }
            this._hidden = hidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "onParentFieldValueChangeFn", {
        get: /**
         * @return {?}
         */
        function () {
            return this.schema.onParentFieldValueChange || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "disable", {
        set: /**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            this.formGoup.disable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "enable", {
        set: /**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            this.formGoup.enable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleFormComponent.prototype, "formRef", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elemRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    SimpleFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'simple-form',
                    template: "<div class=\"simple-form-container form-container m-5\" [attr.id]=\"id + '__CONTAINER'\">\n\n  <div class=\"card \">\n    <div class=\"card-header \">\n      <div class=\"display-flex justify-space-between\">\n        <div class=\"form-label\">\n          {{label}}\n        </div>\n        <div class=\"form-collapse\">\n          <div class=\"form-collapse-icons cursor-pointer\" (click)=\"isCollapsed = !isCollapsed\" *ngIf=\"collapse\">\n            <i class=\"material-icons\" *ngIf=\"isCollapsed\">\n              expand_more\n            </i>\n            <i class=\"material-icons\" *ngIf=\"!isCollapsed\">\n              expand_less\n            </i>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"form-help\">\n        <ul>\n          <li *ngFor=\"let help of helps;\">\n            {{help}}\n          </li>\n        </ul>\n\n      </div>\n    </div>\n    <div class=\"card-body\" style=\"padding-bottom:0% !important\" [ngClass]=\"{'hidden': collapseBodyHidden}\">\n      <div class=\"external-content top-external-content\">\n        <ng-content select=\".top-external-content\"></ng-content>\n      </div>\n      <div class=\"simple-form-container form-container ml-3 mr-3 mt-3\">\n        <form class=\"form-row simple-form\" [attr.id]=\"id\" [formGroup]=\"formGoup\">\n          <div class=\"fields-container form-column-{{columns}}\">\n            <ng-container class=\"field-wrapper\" *ngFor=\"let fieldDef of fields\">\n              <text *ngIf=\"fieldDef.type=='TXT'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></text>\n              <hidden *ngIf=\"fieldDef.type=='HID'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></hidden>\n              <blank *ngIf=\"fieldDef.type=='BLK'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></blank>\n              <anchor *ngIf=\"fieldDef.type=='ANC'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></anchor>\n              <radio *ngIf=\"fieldDef.type=='RAD'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></radio>\n              <checkbox *ngIf=\"fieldDef.type=='CHK'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></checkbox>\n              <text-area *ngIf=\"fieldDef.type=='TXA'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></text-area>\n              <c-select *ngIf=\"fieldDef.type=='SEL'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></c-select>\n              <multiselect *ngIf=\"fieldDef.type=='MSL'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></multiselect>\n              <autocomplete *ngIf=\"fieldDef.type=='ACS'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></autocomplete>\n              <c-button *ngIf=\"fieldDef.type=='BTN'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></c-button>\n              <c-fieldset *ngIf=\"fieldDef.type=='FST'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></c-fieldset>\n              <html-editor *ngIf=\"fieldDef.type=='HTML'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\"></html-editor>\n              <date *ngIf=\"fieldDef.type=='DAT'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\">\n              </date>\n              <month *ngIf=\"fieldDef.type=='MONTH'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\">\n              </month>\n              <date-time *ngIf=\"fieldDef.type=='DATETIME'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\">\n              </date-time>\n              <time *ngIf=\"fieldDef.type=='TIME'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\">\n              </time>\n              <number *ngIf=\"fieldDef.type=='NUM'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\">\n              </number>\n              <password *ngIf=\"fieldDef.type=='PWD'\" [fieldDef]=\"fieldDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\"\n                [pageComponent]=\"pageComponent\" [parent]=\"instance\">\n              </password>\n            </ng-container>\n          </div>\n        </form>\n      </div>\n      <div class=\"external-content above-button-external-content\">\n        <ng-content select=\".above-button-external-content\"></ng-content>\n      </div>\n      <div class=\"mt-3 mb-3 text-right display-flex justify-end\">\n        <ng-container class=\"field-wrapper\" *ngFor=\"let buttonDef of buttons\">\n          <div class=\"pl-3 w-fit-content form-button-container\" id=\"{{buttonDef.code}}__BTN\">\n            <c-button [fieldDef]=\"buttonDef\" [group]=\"formGoup\" [formComponent]=\"formComponent\" [pageComponent]=\"pageComponent\"\n              [parent]=\"instance\"></c-button>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"external-content bottom-external-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v43/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2')}.material-icons{font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}", ".fields-container{display:flex!important;flex-flow:wrap}.hidden{display:none!important}.w-fit-content{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.display-flex{display:flex}.align-center{align-items:center}.justify-end{justify-content:flex-end}.cursor-pointer{cursor:pointer}.justify-space-between{justify-content:space-between}.field-container{padding:inherit}"]
                }] }
    ];
    /** @nocollapse */
    SimpleFormComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: SchemaService },
        { type: LoggerService },
        { type: UtilService },
        { type: DefaultsService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    SimpleFormComponent.propDecorators = {
        schema: [{ type: Input }],
        formComponent: [{ type: Input }],
        pageComponent: [{ type: Input }],
        formData: [{ type: Input }],
        afterInit: [{ type: Output }],
        afterGenerateForm: [{ type: Output }]
    };
    return SimpleFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SimpleFormGeneratorModule = /** @class */ (function () {
    function SimpleFormGeneratorModule() {
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
    return SimpleFormGeneratorModule;
}());

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