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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpbXBsZS1mb3JtL3NpbXBsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQStCLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSyxPQUFPLEVBQUUsV0FBVyxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7OztBQUc1Qiw0Q0FJQzs7O0lBSEcsNkNBQWE7O0lBQ2Isa0RBQWtCOztJQUNsQix1REFBd0I7O0FBRTVCO0lBa0NJLDZCQUNjLEdBQWdCLEVBQ2hCLGNBQTZCLEVBQzdCLE9BQXNCLEVBQ3RCLFlBQXlCLEVBQ3pCLFNBQTBCLEVBQzFCLFFBQW9CLEVBQ3BCLFNBQW9CO1FBTnBCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFwQmxDLGNBQVMsR0FBc0Ms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LENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3Q0FBTzs7OztRQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTs7Z0JBdlVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsbzlNQUEyQztvQkFFM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN4Qzs7OztnQkFmUSxXQUFXO2dCQUhYLGFBQWE7Z0JBQ2IsYUFBYTtnQkFGYixXQUFXO2dCQUtYLGVBQWU7Z0JBRjRGLFVBQVU7Z0JBQUUsU0FBUzs7O3lCQW1CcEksS0FBSztnQ0FHTCxLQUFLO2dDQUdMLEtBQUs7MkJBR0wsS0FBSzs0QkFHTCxNQUFNO29DQUdOLE1BQU07O0lBa1RYLDBCQUFDO0NBQUEsQUF6VUQsSUF5VUM7U0FuVVksbUJBQW1COzs7SUFFNUIscUNBQ1k7O0lBRVosNENBQ29COztJQUVwQiw0Q0FDbUI7O0lBRW5CLHVDQUNlOztJQUVmLHdDQUNrRTs7SUFFbEUsZ0RBQzBFOztJQUUxRSx1Q0FBMkI7O0lBQzNCLG1DQUFvQjs7SUFDcEIsdUNBQXFDOztJQUNyQyw4Q0FBNEI7O0lBQzVCLDBDQUE0Qjs7Ozs7SUFFNUIsc0NBQTJCOzs7OztJQUd2QixrQ0FBMEI7Ozs7O0lBQzFCLDZDQUF1Qzs7Ozs7SUFDdkMsc0NBQWdDOzs7OztJQUNoQywyQ0FBbUM7Ozs7O0lBQ25DLHdDQUFvQzs7Ozs7SUFDcEMsdUNBQThCOzs7OztJQUM5Qix3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3NjaGVtYS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgU2ltcGxlQ2hhbmdlLCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvZGVmYXVsdHMuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cblxuaW50ZXJmYWNlIEV2ZW50SGFuZGxlckNhbGxiYWNrSW50ZXJmYWNlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYXJndW1lbnRzPzogYW55W107XG4gICAgaGFuZGxlckZuT3duZXI/OiBzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpbXBsZS1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2ltcGxlLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydtZC1pY29uLmNzcycsICdzaW1wbGUtZm9ybS5jb21wb25lbnQuY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgIFxuICAgIEBJbnB1dCgpXG4gICAgc2NoZW1hOiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIGZvcm1Db21wb25lbnQ/OiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIHBhZ2VDb21wb25lbnQ6IGFueTtcblxuICAgIEBJbnB1dCgpXG4gICAgZm9ybURhdGE/OiBhbnk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBhZnRlckluaXQ6IEV2ZW50RW1pdHRlcjxTaW1wbGVGb3JtQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBAT3V0cHV0KClcbiAgICBhZnRlckdlbmVyYXRlRm9ybTogRXZlbnRFbWl0dGVyPFNpbXBsZUZvcm1Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHVibGljIGZvcm1Hb3VwOiBGb3JtR3JvdXA7XG4gICAgcHVibGljIGNvZGU6IHN0cmluZztcbiAgICBwdWJsaWMgaW5zdGFuY2U6IFNpbXBsZUZvcm1Db21wb25lbnQ7XG4gICAgcHVibGljIGZpZWxkc0NvbXBvbmVudDogYW55O1xuICAgIHB1YmxpYyBpc0NvbGxhcHNlZDogYm9vbGVhbjtcblxuICAgIHByb3RlY3RlZCBfaGlkZGVuOiBib29sZWFuOyBcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgX2ZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJvdGVjdGVkIF9zY2hlbWFTZXJ2aWNlOiBTY2hlbWFTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgX2xvZ2dlcjogTG9nZ2VyU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIF91dGlsU2VydmljZTogVXRpbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBfZGVmYXVsdHM6IERlZmF1bHRzU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIF9lbGVtUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgICApIHtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuXHRwcm90ZWN0ZWQgX2luaXRpYWxpemUoKSB7XG4gICAgICAgdHJ5IHtcblx0XHQgICB0aGlzLmluc3RhbmNlID0gdGhpcztcblx0XHQgICB0aGlzLmZpZWxkc0NvbXBvbmVudCA9IHt9O1xuICAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IGZhbHNlO1xuXHRcdCAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHQgICB9IGNhdGNoIChlcnJvcikge1xuXHRcdCAgIGNvbnNvbGUubG9nKGVycm9yKTtcblx0ICAgfVxuXHR9XG5cblx0cHVibGljIGluaXRpYWxpemUoKSB7XG5cdH1cblx0XG5cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5fYWZ0ZXJWaWV3SW5pdCgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX29uQ2hhbmdlcygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVGb3JtKHRoaXMuZm9ybURhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHBvcHVsYXRlRm9ybShmb3JtRGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtR291cC5wYXRjaFZhbHVlKGZvcm1EYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGRlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZUZvcm0odGhpcy5mb3JtRGF0YSk7XG5cdFx0XHR0aGlzLmFmdGVyR2VuZXJhdGVGb3JtLmVtaXQodGhpcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblx0fVxuXG4gICAgXG4gICAgcHJvdGVjdGVkIF9hcHBseUlubGllQ3NzQnlTZWxlY3RvcihzZWxlY3Rvcjogc3RyaW5nLCBjc3NTdHlsZTogYW55KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgZWxlbWVudExpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjc3NQcm9wIGluIGNzc1N0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wVmFsdWUgPSBjc3NTdHlsZVtjc3NQcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50WydzdHlsZSddW2Nzc1Byb3BdID0gcHJvcFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlQ29tcG9uZW50ICYmIHRoaXMucGFnZUNvbXBvbmVudC5mb3Jtcykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvbXBvbmVudC5mb3Jtc1t0aGlzLmNvZGVdID0gdGhpcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgcHJvdmlkZSBbcGFnZUNvbXBvbmVudF0gaW5wdXQgYW5kIGRlZmluZSAnZm9ybXMnIGRlZmluaXRpb24gaW4gdGhlIHBhc3Qgb2JqZWN0IGFzIHBhZ2VDb21wb25lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtQ29tcG9uZW50ICYmIHRoaXMucGFnZUNvbXBvbmVudC5mb3JtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtQ29tcG9uZW50LmZvcm0gPSB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBwcm92aWRlIFtmb3JtQ29tcG9uZW50XSBpbnB1dCBhbmQgZGVmaW5lICdmb3JtJyBkZWZpbml0aW9uIGluIHRoZSBwYXN0IG9iamVjdCBhcyBwYWdlQ29tcG9uZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gdGhpcy5zY2hlbWEuaGlkZGVuIHx8IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5zY2hlbWEuY29kZTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVtYVNlcnZpY2UuYWRkU2NoZW1hKHRoaXMuY29kZSwgdGhpcy5zY2hlbWEpO1xuICAgICAgICAgICAgdGhpcy5zY2hlbWEgPSB0aGlzLl9zY2hlbWFTZXJ2aWNlLmdldFNjaGVtYUJ5U2NoZW1hS2V5KHRoaXMuY29kZSk7XG4gICAgICAgICAgICB0aGlzLl9pbml0Rm9ybUdyb3VwKCk7XG5cdFx0XHR0aGlzLmFmdGVySW5pdC5lbWl0KHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cdH1cblxuICAgIHByb3RlY3RlZCBfYWRkRm9ybUNvbnRyb2xzKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmb3JtRmllbGRzRGVmOiBhbnlbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9ybUZpZWxkc0RlZi5mb3JFYWNoKChkZWYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGRlZi50eXBlO1xuICAgICAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKHRoaXMuX2RlZmF1bHRzLkRVTU1ZX0ZJRUxEUywgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ0ZTVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkRm9ybUNvbnRyb2xzKGZvcm1Hcm91cCwgZGVmLmZpZWxkcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmxkQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR291cC5hZGRDb250cm9sKGRlZi5uYW1lLCBmbGRDb250cm9sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9pbml0Rm9ybUdyb3VwKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5mb3JtR291cCA9IHRoaXMuX2ZiLmdyb3VwKHt9KTtcbiAgICAgICAgICAgIHRoaXMuX2FkZEZvcm1Db250cm9scyhcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hb3VwLFxuICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVtYVNlcnZpY2UuZ2V0U2NoZW1hRmllbGRzKHRoaXMuY29kZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlKHBhcmVudEZpZWxkTmFtZTogc3RyaW5nLCBjaGlsZEZpZWxkTmFtZUFycjogc3RyaW5nW10sIGNoYW5nZXM6IFNpbXBsZUNoYW5nZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMub25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlRm4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuX2dldEV2ZW50Q2FsbGJhY2soJ3BhcmVudENoYW5nZScsIHRoaXMub25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlRm4pO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwYXJlbnRGaWVsZE5hbWUsIGNoaWxkRmllbGROYW1lQXJyLCBjaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldEV2ZW50Q2FsbGJhY2soZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrRGF0YTogRXZlbnRIYW5kbGVyQ2FsbGJhY2tJbnRlcmZhY2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrTmFtZSA9IGNhbGxiYWNrRGF0YS5uYW1lO1xuICAgICAgICAgICAgaWYgKCFjYWxsYmFja0RhdGEuYXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tEYXRhLmFyZ3VtZW50cyA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyRm5Pd25lciA9IHRoaXMuX2dldENhbGxiYWNrT3duZXIoY2FsbGJhY2tEYXRhLmhhbmRsZXJGbk93bmVyKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyRm5Pd25lciAmJiBoYW5kbGVyRm5Pd25lcltjYWxsYmFja05hbWVdICYmIHR5cGVvZiBoYW5kbGVyRm5Pd25lcltjYWxsYmFja05hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQodGhpcywgY2FsbGJhY2tEYXRhLmhhbmRsZXJGbk93bmVyLCBjYWxsYmFja05hbWUsIGNhbGxiYWNrRGF0YS5hcmd1bWVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2FsbGJhY2sgZnVuY3Rpb24gJHtjYWxsYmFja05hbWV9IGZvciBldmVudCAke2V2ZW50TmFtZX0gZG9lcyBub3QgZXhpc3QgaW4gYCwgaGFuZGxlckZuT3duZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZXZlbnRIYW5kbGVyKG93bmVyVHlwZTogYW55LCBmbk5hbWU6IHN0cmluZywgYXJnc0FycjogYW55LCBldmVudGRhdGE/OiBhbnkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghYXJnc0Fycikge1xuICAgICAgICAgICAgICAgIGFyZ3NBcnIgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyZ3NBcnIgPSBPYmplY3QuYXNzaWduKFtdLCBhcmdzQXJyKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrRm5Pd25lciA9IHRoaXMuX2dldENhbGxiYWNrT3duZXIob3duZXJUeXBlKTtcbiAgICAgICAgICAgIGlmIChldmVudGRhdGEpIHtcbiAgICAgICAgICAgICAgICBhcmdzQXJyLnB1c2goZXZlbnRkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY2FsbGJhY2tGbk93bmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tGbk93bmVyW2ZuTmFtZV0uYXBwbHkoY2FsbGJhY2tGbk93bmVyLCBhcmdzQXJyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRDYWxsYmFja093bmVyKG93bmVyVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIW93bmVyVHlwZSkge1xuICAgICAgICAgICAgICAgIG93bmVyVHlwZSA9ICdQJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLnBhZ2VDb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAob3duZXJUeXBlID09PSAnRicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLmZvcm1Db21wb25lbnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvd25lclR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGbk93bmVyID0gb3duZXJUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrRm5Pd25lcjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIi8vXCIpO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2NoZW1hLmhlbHBUZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmxhYmVsO1xuICAgIH1cbiAgICBnZXQgaGVscHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmhlbHBUZXh0O1xuICAgIH1cbiAgICBnZXQgZmllbGRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZmllbGRzO1xuICAgIH1cblxuICAgIGdldCBidXR0b25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuYnV0dG9ucztcbiAgICB9XG5cbiAgICBnZXQgY29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbHVtbnM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxhcHNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29sbGFwc2UgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGhpZGVMYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmhpZGVMYWJlbCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgY29sbGFwc2VCb2R5SGlkZGVuKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29sbGFwc2UgJiYgdGhpcy5pc0NvbGxhcHNlZCk7XG5cdH1cblx0XG5cdGdldCB2YWxpZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtR291cC52YWxpZDtcblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtR291cC52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUoZ3JvdXBWYWx1ZSkge1xuICAgICAgICB0aGlzLmZvcm1Hb3VwLnBhdGNoVmFsdWUoZ3JvdXBWYWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IG9yZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEub3JkZXIgfHwgMTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2RlICsgJ19fJyArIHRoaXMub3JkZXI7XG4gICAgfVxuXG4gICAgZ2V0IGhpZGRlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZGRlbiB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQgaGlkZGVuKGhpZGRlbjogYm9vbGVhbikge1xuICAgICAgICBpZiAoaGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hpZGRlbiA9IGhpZGRlbjtcbiAgICB9XG5cbiAgICBnZXQgb25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlRm4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5vblBhcmVudEZpZWxkVmFsdWVDaGFuZ2UgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBzZXQgZGlzYWJsZShwcm9wKSB7XG4gICAgICAgIHRoaXMuZm9ybUdvdXAuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHNldCBlbmFibGUocHJvcCkge1xuICAgICAgICB0aGlzLmZvcm1Hb3VwLmVuYWJsZSgpO1xuICAgIH1cblxuICAgIGdldCBmb3JtUmVmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxufVxuIl19