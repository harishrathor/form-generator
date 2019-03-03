/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { UtilService } from './../../services/util.service';
import { SchemaService } from './../../services/schema.service';
import { LoggerService } from './../../services/logger.service';
import { Component, Input, ViewEncapsulation, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DefaultsService } from './../../services/defaults.service';
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
                if (_.includes(_this._defaults.DUMMY_FIELDS, type)) {
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
                    callback(this.code, parentFieldName, childFieldNameArr, changes);
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
     * @param {...?} restArgsArr
     * @return {?}
     */
    SimpleFormComponent.prototype.eventHandler = /**
     * @param {?} ownerType
     * @param {?} fnName
     * @param {?} argsArr
     * @param {...?} restArgsArr
     * @return {?}
     */
    function (ownerType, fnName, argsArr) {
        var restArgsArr = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            restArgsArr[_i - 3] = arguments[_i];
        }
        try {
            if (!argsArr) {
                argsArr = [];
            }
            argsArr = Object.assign([], argsArr);
            /** @type {?} */
            var callbackFnOwner = this._getCallbackOwner(ownerType);
            if (restArgsArr) {
                argsArr = tslib_1.__spread(argsArr, restArgsArr);
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
export { SimpleFormComponent };
if (false) {
    /** @type {?} */
    SimpleFormComponent.prototype.schema;
    /** @type {?} */
    SimpleFormComponent.prototype.formComponent;
    /** @type {?} */
    SimpleFormComponent.prototype.pageComponent;
    /** @type {?} */
    SimpleFormComponent.prototype.formData;
    /** @type {?} */
    SimpleFormComponent.prototype.afterInit;
    /** @type {?} */
    SimpleFormComponent.prototype.afterGenerateForm;
    /** @type {?} */
    SimpleFormComponent.prototype.formGoup;
    /** @type {?} */
    SimpleFormComponent.prototype.code;
    /** @type {?} */
    SimpleFormComponent.prototype.instance;
    /** @type {?} */
    SimpleFormComponent.prototype.fieldsComponent;
    /** @type {?} */
    SimpleFormComponent.prototype.isCollapsed;
    /**
     * @type {?}
     * @protected
     */
    SimpleFormComponent.prototype._hidden;
    /**
     * @type {?}
     * @protected
     */
    SimpleFormComponent.prototype._fb;
    /**
     * @type {?}
     * @protected
     */
    SimpleFormComponent.prototype._schemaService;
    /**
     * @type {?}
     * @protected
     */
    SimpleFormComponent.prototype._logger;
    /**
     * @type {?}
     * @protected
     */
    SimpleFormComponent.prototype._utilService;
    /**
     * @type {?}
     * @protected
     */
    SimpleFormComponent.prototype._defaults;
    /**
     * @type {?}
     * @protected
     */
    SimpleFormComponent.prototype._elemRef;
    /**
     * @type {?}
     * @protected
     */
    SimpleFormComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpbXBsZS1mb3JtL3NpbXBsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUErQixpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakssT0FBTyxFQUFFLFdBQVcsRUFBYSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7QUFHNUIsNENBSUM7OztJQUhHLDZDQUFhOztJQUNiLGtEQUFrQjs7SUFDbEIsdURBQXdCOztBQUU1QjtJQWtDSSw2QkFDYyxHQUFnQixFQUNoQixjQUE2QixFQUM3QixPQUFzQixFQUN0QixZQUF5QixFQUN6QixTQUEwQixFQUMxQixRQUFvQixFQUNwQixTQUFvQjtRQU5wQixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBcEJsQyxjQUFTLEdBQXND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SUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFPOzs7O1FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBOztnQkFyVUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixvOU1BQTJDO29CQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3hDOzs7O2dCQWZRLFdBQVc7Z0JBSFgsYUFBYTtnQkFDYixhQUFhO2dCQUZiLFdBQVc7Z0JBS1gsZUFBZTtnQkFGNEYsVUFBVTtnQkFBRSxTQUFTOzs7eUJBbUJwSSxLQUFLO2dDQUdMLEtBQUs7Z0NBR0wsS0FBSzsyQkFHTCxLQUFLOzRCQUdMLE1BQU07b0NBR04sTUFBTTs7SUFnVFgsMEJBQUM7Q0FBQSxBQXZVRCxJQXVVQztTQWpVWSxtQkFBbUI7OztJQUU1QixxQ0FDWTs7SUFFWiw0Q0FDb0I7O0lBRXBCLDRDQUNtQjs7SUFFbkIsdUNBQ2U7O0lBRWYsd0NBQ2tFOztJQUVsRSxnREFDMEU7O0lBRTFFLHVDQUEyQjs7SUFDM0IsbUNBQW9COztJQUNwQix1Q0FBcUM7O0lBQ3JDLDhDQUE0Qjs7SUFDNUIsMENBQTRCOzs7OztJQUU1QixzQ0FBMkI7Ozs7O0lBR3ZCLGtDQUEwQjs7Ozs7SUFDMUIsNkNBQXVDOzs7OztJQUN2QyxzQ0FBZ0M7Ozs7O0lBQ2hDLDJDQUFtQzs7Ozs7SUFDbkMsd0NBQW9DOzs7OztJQUNwQyx1Q0FBOEI7Ozs7O0lBQzlCLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy91dGlsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvc2NoZW1hLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0LCBTaW1wbGVDaGFuZ2UsIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9kZWZhdWx0cy5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuXG5pbnRlcmZhY2UgRXZlbnRIYW5kbGVyQ2FsbGJhY2tJbnRlcmZhY2Uge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhcmd1bWVudHM/OiBhbnlbXTtcbiAgICBoYW5kbGVyRm5Pd25lcj86IHN0cmluZztcbn1cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2ltcGxlLWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zaW1wbGUtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ21kLWljb24uY3NzJywgJ3NpbXBsZS1mb3JtLmNvbXBvbmVudC5jc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgXG4gICAgQElucHV0KClcbiAgICBzY2hlbWE6IGFueTtcblxuICAgIEBJbnB1dCgpXG4gICAgZm9ybUNvbXBvbmVudD86IGFueTtcblxuICAgIEBJbnB1dCgpXG4gICAgcGFnZUNvbXBvbmVudDogYW55O1xuXG4gICAgQElucHV0KClcbiAgICBmb3JtRGF0YT86IGFueTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGFmdGVySW5pdDogRXZlbnRFbWl0dGVyPFNpbXBsZUZvcm1Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKVxuICAgIGFmdGVyR2VuZXJhdGVGb3JtOiBFdmVudEVtaXR0ZXI8U2ltcGxlRm9ybUNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwdWJsaWMgZm9ybUdvdXA6IEZvcm1Hcm91cDtcbiAgICBwdWJsaWMgY29kZTogc3RyaW5nO1xuICAgIHB1YmxpYyBpbnN0YW5jZTogU2ltcGxlRm9ybUNvbXBvbmVudDtcbiAgICBwdWJsaWMgZmllbGRzQ29tcG9uZW50OiBhbnk7XG4gICAgcHVibGljIGlzQ29sbGFwc2VkOiBib29sZWFuO1xuXG4gICAgcHJvdGVjdGVkIF9oaWRkZW46IGJvb2xlYW47IFxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBfZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcm90ZWN0ZWQgX3NjaGVtYVNlcnZpY2U6IFNjaGVtYVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBfbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgX3V0aWxTZXJ2aWNlOiBVdGlsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIF9kZWZhdWx0czogRGVmYXVsdHNTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgX2VsZW1SZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByb3RlY3RlZCBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICAgICkge1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplKCk7XG4gICAgfVxuXG5cdHByb3RlY3RlZCBfaW5pdGlhbGl6ZSgpIHtcbiAgICAgICB0cnkge1xuXHRcdCAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzO1xuXHRcdCAgIHRoaXMuZmllbGRzQ29tcG9uZW50ID0ge307XG4gICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgdGhpcy5faGlkZGVuID0gZmFsc2U7XG5cdFx0ICAgdGhpcy5pbml0aWFsaXplKCk7XG5cdCAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ICAgY29uc29sZS5sb2coZXJyb3IpO1xuXHQgICB9XG5cdH1cblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcblx0fVxuXHRcblxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLl9hZnRlclZpZXdJbml0KCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfb25DaGFuZ2VzKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZUZvcm0odGhpcy5mb3JtRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wdWxhdGVGb3JtKGZvcm1EYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hb3VwLnBhdGNoVmFsdWUoZm9ybURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9hZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRm9ybSh0aGlzLmZvcm1EYXRhKTtcblx0XHRcdHRoaXMuYWZ0ZXJHZW5lcmF0ZUZvcm0uZW1pdCh0aGlzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXHR9XG5cbiAgICBcbiAgICBwcm90ZWN0ZWQgX2FwcGx5SW5saWVDc3NCeVNlbGVjdG9yKHNlbGVjdG9yOiBzdHJpbmcsIGNzc1N0eWxlOiBhbnkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBlbGVtZW50TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNzc1Byb3AgaW4gY3NzU3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BWYWx1ZSA9IGNzc1N0eWxlW2Nzc1Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbJ3N0eWxlJ11bY3NzUHJvcF0gPSBwcm9wVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VDb21wb25lbnQgJiYgdGhpcy5wYWdlQ29tcG9uZW50LmZvcm1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlQ29tcG9uZW50LmZvcm1zW3RoaXMuY29kZV0gPSB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBwcm92aWRlIFtwYWdlQ29tcG9uZW50XSBpbnB1dCBhbmQgZGVmaW5lICdmb3JtcycgZGVmaW5pdGlvbiBpbiB0aGUgcGFzc2VkIG9iamVjdCBhcyBwYWdlQ29tcG9uZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUNvbXBvbmVudCAmJiB0aGlzLnBhZ2VDb21wb25lbnQuZm9ybSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUNvbXBvbmVudC5mb3JtID0gdGhpcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgcHJvdmlkZSBbZm9ybUNvbXBvbmVudF0gaW5wdXQgYW5kIGRlZmluZSAnZm9ybScgZGVmaW5pdGlvbiBpbiB0aGUgcGFzc2VkIG9iamVjdCBhcyBmb3JtQ29tcG9uZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gdGhpcy5zY2hlbWEuaGlkZGVuIHx8IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5zY2hlbWEuY29kZTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVtYVNlcnZpY2UuYWRkU2NoZW1hKHRoaXMuY29kZSwgdGhpcy5zY2hlbWEpO1xuICAgICAgICAgICAgdGhpcy5zY2hlbWEgPSB0aGlzLl9zY2hlbWFTZXJ2aWNlLmdldFNjaGVtYUJ5U2NoZW1hS2V5KHRoaXMuY29kZSk7XG4gICAgICAgICAgICB0aGlzLl9pbml0Rm9ybUdyb3VwKCk7XG5cdFx0XHR0aGlzLmFmdGVySW5pdC5lbWl0KHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cdH1cblxuICAgIHByb3RlY3RlZCBfYWRkRm9ybUNvbnRyb2xzKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmb3JtRmllbGRzRGVmOiBhbnlbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9ybUZpZWxkc0RlZi5mb3JFYWNoKChkZWYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGRlZi50eXBlO1xuICAgICAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKHRoaXMuX2RlZmF1bHRzLkRVTU1ZX0ZJRUxEUywgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ0ZTVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkRm9ybUNvbnRyb2xzKGZvcm1Hcm91cCwgZGVmLmZpZWxkcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmxkQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR291cC5hZGRDb250cm9sKGRlZi5uYW1lLCBmbGRDb250cm9sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9pbml0Rm9ybUdyb3VwKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5mb3JtR291cCA9IHRoaXMuX2ZiLmdyb3VwKHt9KTtcbiAgICAgICAgICAgIHRoaXMuX2FkZEZvcm1Db250cm9scyhcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hb3VwLFxuICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVtYVNlcnZpY2UuZ2V0U2NoZW1hRmllbGRzKHRoaXMuY29kZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlKHBhcmVudEZpZWxkTmFtZTogc3RyaW5nLCBjaGlsZEZpZWxkTmFtZUFycjogc3RyaW5nW10sIGNoYW5nZXM6IFNpbXBsZUNoYW5nZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMub25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlRm4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuX2dldEV2ZW50Q2FsbGJhY2soJ3BhcmVudENoYW5nZScsIHRoaXMub25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlRm4pO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLmNvZGUsIHBhcmVudEZpZWxkTmFtZSwgY2hpbGRGaWVsZE5hbWVBcnIsIGNoYW5nZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0RXZlbnRDYWxsYmFjayhldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2tEYXRhOiBFdmVudEhhbmRsZXJDYWxsYmFja0ludGVyZmFjZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tOYW1lID0gY2FsbGJhY2tEYXRhLm5hbWU7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrRGF0YS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0RhdGEuYXJndW1lbnRzID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJGbk93bmVyID0gdGhpcy5fZ2V0Q2FsbGJhY2tPd25lcihjYWxsYmFja0RhdGEuaGFuZGxlckZuT3duZXIpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJGbk93bmVyICYmIGhhbmRsZXJGbk93bmVyW2NhbGxiYWNrTmFtZV0gJiYgdHlwZW9mIGhhbmRsZXJGbk93bmVyW2NhbGxiYWNrTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudEhhbmRsZXIuYmluZCh0aGlzLCBjYWxsYmFja0RhdGEuaGFuZGxlckZuT3duZXIsIGNhbGxiYWNrTmFtZSwgY2FsbGJhY2tEYXRhLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDYWxsYmFjayBmdW5jdGlvbiAke2NhbGxiYWNrTmFtZX0gZm9yIGV2ZW50ICR7ZXZlbnROYW1lfSBkb2VzIG5vdCBleGlzdCBpbiBgLCBoYW5kbGVyRm5Pd25lcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBldmVudEhhbmRsZXIob3duZXJUeXBlOiBhbnksIGZuTmFtZTogc3RyaW5nLCBhcmdzQXJyOiBhbnksIC4uLnJlc3RBcmdzQXJyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3NBcnIpIHtcbiAgICAgICAgICAgICAgICBhcmdzQXJyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmdzQXJyID0gT2JqZWN0LmFzc2lnbihbXSwgYXJnc0Fycik7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLl9nZXRDYWxsYmFja093bmVyKG93bmVyVHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN0QXJnc0Fycikge1xuICAgICAgICAgICAgICAgIGFyZ3NBcnIgPSBbLi4uYXJnc0FyciwgLi4ucmVzdEFyZ3NBcnJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tGbk93bmVyW2ZuTmFtZV0uYXBwbHkoY2FsbGJhY2tGbk93bmVyLCBhcmdzQXJyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRDYWxsYmFja093bmVyKG93bmVyVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIW93bmVyVHlwZSkge1xuICAgICAgICAgICAgICAgIG93bmVyVHlwZSA9ICdQJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLnBhZ2VDb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAob3duZXJUeXBlID09PSAnRicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLmZvcm1Db21wb25lbnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvd25lclR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGbk93bmVyID0gb3duZXJUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrRm5Pd25lcjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIi8vXCIpO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2NoZW1hLmhlbHBUZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmxhYmVsO1xuICAgIH1cbiAgICBnZXQgaGVscHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmhlbHBUZXh0O1xuICAgIH1cbiAgICBnZXQgZmllbGRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZmllbGRzO1xuICAgIH1cblxuICAgIGdldCBidXR0b25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuYnV0dG9ucztcbiAgICB9XG5cbiAgICBnZXQgY29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbHVtbnM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxhcHNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29sbGFwc2UgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGhpZGVMYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmhpZGVMYWJlbCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgY29sbGFwc2VCb2R5SGlkZGVuKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29sbGFwc2UgJiYgdGhpcy5pc0NvbGxhcHNlZCk7XG5cdH1cblx0XG5cdGdldCB2YWxpZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtR291cC52YWxpZDtcblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtR291cC52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUoZ3JvdXBWYWx1ZSkge1xuICAgICAgICB0aGlzLmZvcm1Hb3VwLnBhdGNoVmFsdWUoZ3JvdXBWYWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IG9yZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEub3JkZXIgfHwgMTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2RlICsgJ19fJyArIHRoaXMub3JkZXI7XG4gICAgfVxuXG4gICAgZ2V0IGhpZGRlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZGRlbiB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQgaGlkZGVuKGhpZGRlbjogYm9vbGVhbikge1xuICAgICAgICBpZiAoaGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hpZGRlbiA9IGhpZGRlbjtcbiAgICB9XG5cbiAgICBnZXQgb25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlRm4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5vblBhcmVudEZpZWxkVmFsdWVDaGFuZ2UgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBzZXQgZGlzYWJsZShwcm9wKSB7XG4gICAgICAgIHRoaXMuZm9ybUdvdXAuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHNldCBlbmFibGUocHJvcCkge1xuICAgICAgICB0aGlzLmZvcm1Hb3VwLmVuYWJsZSgpO1xuICAgIH1cblxuICAgIGdldCBmb3JtUmVmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxufVxuIl19