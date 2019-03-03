/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                console.log("Please provide [pageComponent] input and define 'forms' definition in the past object as pageComponent.");
            }
            this.formComponent.form = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpbXBsZS1mb3JtL3NpbXBsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQStCLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSyxPQUFPLEVBQUUsV0FBVyxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7OztBQUc1Qiw0Q0FJQzs7O0lBSEcsNkNBQWE7O0lBQ2Isa0RBQWtCOztJQUNsQix1REFBd0I7O0FBRTVCO0lBa0NJLDZCQUNjLEdBQWdCLEVBQ2hCLGNBQTZCLEVBQzdCLE9BQXNCLEVBQ3RCLFlBQXlCLEVBQ3pCLFNBQTBCLEVBQzFCLFFBQW9CLEVBQ3BCLFNBQW9CO1FBTnBCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFwQmxDLGNBQVMsR0FBc0Ms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SSx1Q0FBTTs7Ozs7UUFBVixVQUFXLElBQUk7WUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQU87Ozs7UUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7O2dCQXZVSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLG85TUFBMkM7b0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDeEM7Ozs7Z0JBZlEsV0FBVztnQkFIWCxhQUFhO2dCQUNiLGFBQWE7Z0JBRmIsV0FBVztnQkFLWCxlQUFlO2dCQUY0RixVQUFVO2dCQUFFLFNBQVM7Ozt5QkFtQnBJLEtBQUs7Z0NBR0wsS0FBSztnQ0FHTCxLQUFLOzJCQUdMLEtBQUs7NEJBR0wsTUFBTTtvQ0FHTixNQUFNOztJQWtUWCwwQkFBQztDQUFBLEFBelVELElBeVVDO1NBblVZLG1CQUFtQjs7O0lBRTVCLHFDQUNZOztJQUVaLDRDQUNvQjs7SUFFcEIsNENBQ21COztJQUVuQix1Q0FDZTs7SUFFZix3Q0FDa0U7O0lBRWxFLGdEQUMwRTs7SUFFMUUsdUNBQTJCOztJQUMzQixtQ0FBb0I7O0lBQ3BCLHVDQUFxQzs7SUFDckMsOENBQTRCOztJQUM1QiwwQ0FBNEI7Ozs7O0lBRTVCLHNDQUEyQjs7Ozs7SUFHdkIsa0NBQTBCOzs7OztJQUMxQiw2Q0FBdUM7Ozs7O0lBQ3ZDLHNDQUFnQzs7Ozs7SUFDaEMsMkNBQW1DOzs7OztJQUNuQyx3Q0FBb0M7Ozs7O0lBQ3BDLHVDQUE4Qjs7Ozs7SUFDOUIsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XG5pbXBvcnQgeyBTY2hlbWFTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9zY2hlbWEuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIFNpbXBsZUNoYW5nZSwgVmlld0VuY2Fwc3VsYXRpb24sIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbmludGVyZmFjZSBFdmVudEhhbmRsZXJDYWxsYmFja0ludGVyZmFjZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFyZ3VtZW50cz86IGFueVtdO1xuICAgIGhhbmRsZXJGbk93bmVyPzogc3RyaW5nO1xufVxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaW1wbGUtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NpbXBsZS1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbWQtaWNvbi5jc3MnLCAnc2ltcGxlLWZvcm0uY29tcG9uZW50LmNzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICBcbiAgICBASW5wdXQoKVxuICAgIHNjaGVtYTogYW55O1xuXG4gICAgQElucHV0KClcbiAgICBmb3JtQ29tcG9uZW50PzogYW55O1xuXG4gICAgQElucHV0KClcbiAgICBwYWdlQ29tcG9uZW50OiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIGZvcm1EYXRhPzogYW55O1xuXG4gICAgQE91dHB1dCgpXG4gICAgYWZ0ZXJJbml0OiBFdmVudEVtaXR0ZXI8U2ltcGxlRm9ybUNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQE91dHB1dCgpXG4gICAgYWZ0ZXJHZW5lcmF0ZUZvcm06IEV2ZW50RW1pdHRlcjxTaW1wbGVGb3JtQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHB1YmxpYyBmb3JtR291cDogRm9ybUdyb3VwO1xuICAgIHB1YmxpYyBjb2RlOiBzdHJpbmc7XG4gICAgcHVibGljIGluc3RhbmNlOiBTaW1wbGVGb3JtQ29tcG9uZW50O1xuICAgIHB1YmxpYyBmaWVsZHNDb21wb25lbnQ6IGFueTtcbiAgICBwdWJsaWMgaXNDb2xsYXBzZWQ6IGJvb2xlYW47XG5cbiAgICBwcm90ZWN0ZWQgX2hpZGRlbjogYm9vbGVhbjsgXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByb3RlY3RlZCBfc2NoZW1hU2VydmljZTogU2NoZW1hU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIF9sb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBfdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgX2RlZmF1bHRzOiBEZWZhdWx0c1NlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBfZWxlbVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICB9XG5cblx0cHJvdGVjdGVkIF9pbml0aWFsaXplKCkge1xuICAgICAgIHRyeSB7XG5cdFx0ICAgdGhpcy5pbnN0YW5jZSA9IHRoaXM7XG5cdFx0ICAgdGhpcy5maWVsZHNDb21wb25lbnQgPSB7fTtcbiAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgICB0aGlzLl9oaWRkZW4gPSBmYWxzZTtcblx0XHQgICB0aGlzLmluaXRpYWxpemUoKTtcblx0ICAgfSBjYXRjaCAoZXJyb3IpIHtcblx0XHQgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cdCAgIH1cblx0fVxuXG5cdHB1YmxpYyBpbml0aWFsaXplKCkge1xuXHR9XG5cdFxuXG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuX2FmdGVyVmlld0luaXQoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9vbkNoYW5nZXMoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRm9ybSh0aGlzLmZvcm1EYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwb3B1bGF0ZUZvcm0oZm9ybURhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdvdXAucGF0Y2hWYWx1ZShmb3JtRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVGb3JtKHRoaXMuZm9ybURhdGEpO1xuXHRcdFx0dGhpcy5hZnRlckdlbmVyYXRlRm9ybS5lbWl0KHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cdH1cblxuICAgIFxuICAgIHByb3RlY3RlZCBfYXBwbHlJbmxpZUNzc0J5U2VsZWN0b3Ioc2VsZWN0b3I6IHN0cmluZywgY3NzU3R5bGU6IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGVsZW1lbnRMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY3NzUHJvcCBpbiBjc3NTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcFZhbHVlID0gY3NzU3R5bGVbY3NzUHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFsnc3R5bGUnXVtjc3NQcm9wXSA9IHByb3BWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9pbml0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZUNvbXBvbmVudCAmJiB0aGlzLnBhZ2VDb21wb25lbnQuZm9ybXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb21wb25lbnQuZm9ybXNbdGhpcy5jb2RlXSA9IHRoaXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIHByb3ZpZGUgW3BhZ2VDb21wb25lbnRdIGlucHV0IGFuZCBkZWZpbmUgJ2Zvcm1zJyBkZWZpbml0aW9uIGluIHRoZSBwYXN0IG9iamVjdCBhcyBwYWdlQ29tcG9uZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9ybUNvbXBvbmVudC5mb3JtID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Db21wb25lbnQgJiYgdGhpcy5wYWdlQ29tcG9uZW50LmZvcm0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Db21wb25lbnQuZm9ybSA9IHRoaXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIHByb3ZpZGUgW2Zvcm1Db21wb25lbnRdIGlucHV0IGFuZCBkZWZpbmUgJ2Zvcm0nIGRlZmluaXRpb24gaW4gdGhlIHBhc3Qgb2JqZWN0IGFzIHBhZ2VDb21wb25lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSB0aGlzLnNjaGVtYS5oaWRkZW4gfHwgZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLnNjaGVtYS5jb2RlO1xuICAgICAgICAgICAgdGhpcy5fc2NoZW1hU2VydmljZS5hZGRTY2hlbWEodGhpcy5jb2RlLCB0aGlzLnNjaGVtYSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVtYSA9IHRoaXMuX3NjaGVtYVNlcnZpY2UuZ2V0U2NoZW1hQnlTY2hlbWFLZXkodGhpcy5jb2RlKTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRGb3JtR3JvdXAoKTtcblx0XHRcdHRoaXMuYWZ0ZXJJbml0LmVtaXQodGhpcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblx0fVxuXG4gICAgcHJvdGVjdGVkIF9hZGRGb3JtQ29udHJvbHMoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGZvcm1GaWVsZHNEZWY6IGFueVtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3JtRmllbGRzRGVmLmZvckVhY2goKGRlZiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gZGVmLnR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXModGhpcy5fZGVmYXVsdHMuRFVNTVlfRklFTERTLCB0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnRlNUJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRGb3JtQ29udHJvbHMoZm9ybUdyb3VwLCBkZWYuZmllbGRzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbGRDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hb3VwLmFkZENvbnRyb2woZGVmLm5hbWUsIGZsZENvbnRyb2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2luaXRGb3JtR3JvdXAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hb3VwID0gdGhpcy5fZmIuZ3JvdXAoe30pO1xuICAgICAgICAgICAgdGhpcy5fYWRkRm9ybUNvbnRyb2xzKFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdvdXAsXG4gICAgICAgICAgICAgICAgdGhpcy5fc2NoZW1hU2VydmljZS5nZXRTY2hlbWFGaWVsZHModGhpcy5jb2RlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblBhcmVudEZpZWxkVmFsdWVDaGFuZ2UocGFyZW50RmllbGROYW1lOiBzdHJpbmcsIGNoaWxkRmllbGROYW1lQXJyOiBzdHJpbmdbXSwgY2hhbmdlczogU2ltcGxlQ2hhbmdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vblBhcmVudEZpZWxkVmFsdWVDaGFuZ2VGbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5fZ2V0RXZlbnRDYWxsYmFjaygncGFyZW50Q2hhbmdlJywgdGhpcy5vblBhcmVudEZpZWxkVmFsdWVDaGFuZ2VGbik7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHBhcmVudEZpZWxkTmFtZSwgY2hpbGRGaWVsZE5hbWVBcnIsIGNoYW5nZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0RXZlbnRDYWxsYmFjayhldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2tEYXRhOiBFdmVudEhhbmRsZXJDYWxsYmFja0ludGVyZmFjZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tOYW1lID0gY2FsbGJhY2tEYXRhLm5hbWU7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrRGF0YS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0RhdGEuYXJndW1lbnRzID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJGbk93bmVyID0gdGhpcy5fZ2V0Q2FsbGJhY2tPd25lcihjYWxsYmFja0RhdGEuaGFuZGxlckZuT3duZXIpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJGbk93bmVyICYmIGhhbmRsZXJGbk93bmVyW2NhbGxiYWNrTmFtZV0gJiYgdHlwZW9mIGhhbmRsZXJGbk93bmVyW2NhbGxiYWNrTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudEhhbmRsZXIuYmluZCh0aGlzLCBjYWxsYmFja0RhdGEuaGFuZGxlckZuT3duZXIsIGNhbGxiYWNrTmFtZSwgY2FsbGJhY2tEYXRhLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDYWxsYmFjayBmdW5jdGlvbiAke2NhbGxiYWNrTmFtZX0gZm9yIGV2ZW50ICR7ZXZlbnROYW1lfSBkb2VzIG5vdCBleGlzdCBpbiBgLCBoYW5kbGVyRm5Pd25lcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBldmVudEhhbmRsZXIob3duZXJUeXBlOiBhbnksIGZuTmFtZTogc3RyaW5nLCBhcmdzQXJyOiBhbnksIGV2ZW50ZGF0YT86IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFhcmdzQXJyKSB7XG4gICAgICAgICAgICAgICAgYXJnc0FyciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJnc0FyciA9IE9iamVjdC5hc3NpZ24oW10sIGFyZ3NBcnIpO1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tGbk93bmVyID0gdGhpcy5fZ2V0Q2FsbGJhY2tPd25lcihvd25lclR5cGUpO1xuICAgICAgICAgICAgaWYgKGV2ZW50ZGF0YSkge1xuICAgICAgICAgICAgICAgIGFyZ3NBcnIucHVzaChldmVudGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjYWxsYmFja0ZuT3duZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFja0ZuT3duZXJbZm5OYW1lXS5hcHBseShjYWxsYmFja0ZuT3duZXIsIGFyZ3NBcnIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldENhbGxiYWNrT3duZXIob3duZXJUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghb3duZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgb3duZXJUeXBlID0gJ1AnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrRm5Pd25lciA9IHRoaXMucGFnZUNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmIChvd25lclR5cGUgPT09ICdGJykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRm5Pd25lciA9IHRoaXMuZm9ybUNvbXBvbmVudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG93bmVyVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0ZuT3duZXIgPSBvd25lclR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tGbk93bmVyO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLy9cIik7XG4gICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY2hlbWEuaGVscFRleHQpO1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEubGFiZWw7XG4gICAgfVxuICAgIGdldCBoZWxwcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaGVscFRleHQ7XG4gICAgfVxuICAgIGdldCBmaWVsZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5maWVsZHM7XG4gICAgfVxuXG4gICAgZ2V0IGJ1dHRvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5idXR0b25zO1xuICAgIH1cblxuICAgIGdldCBjb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29sdW1ucztcbiAgICB9XG5cbiAgICBnZXQgY29sbGFwc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb2xsYXBzZSB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgaGlkZUxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaGlkZUxhYmVsIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBjb2xsYXBzZUJvZHlIaWRkZW4oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jb2xsYXBzZSAmJiB0aGlzLmlzQ29sbGFwc2VkKTtcblx0fVxuXHRcblx0Z2V0IHZhbGlkKCkge1xuXHRcdHJldHVybiB0aGlzLmZvcm1Hb3VwLnZhbGlkO1xuXHR9XG5cblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLmZvcm1Hb3VwLnZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZShncm91cFZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm9ybUdvdXAucGF0Y2hWYWx1ZShncm91cFZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgb3JkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5vcmRlciB8fCAxO1xuICAgIH1cbiAgICBcbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvZGUgKyAnX18nICsgdGhpcy5vcmRlcjtcbiAgICB9XG5cbiAgICBnZXQgaGlkZGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGlkZGVuIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIHNldCBoaWRkZW4oaGlkZGVuOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChoaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGlkZGVuID0gaGlkZGVuO1xuICAgIH1cblxuICAgIGdldCBvblBhcmVudEZpZWxkVmFsdWVDaGFuZ2VGbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm9uUGFyZW50RmllbGRWYWx1ZUNoYW5nZSB8fCBudWxsO1xuICAgIH1cblxuICAgIHNldCBkaXNhYmxlKHByb3ApIHtcbiAgICAgICAgdGhpcy5mb3JtR291cC5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IGVuYWJsZShwcm9wKSB7XG4gICAgICAgIHRoaXMuZm9ybUdvdXAuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGZvcm1SZWYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG59XG4iXX0=