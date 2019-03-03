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
export class SimpleFormComponent {
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
                if (_.includes(this._defaults.DUMMY_FIELDS, type)) {
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
                    callback(parentFieldName, childFieldNameArr, changes);
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
            if (!callbackFnOwner) {
                return null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaW1wbGUtZm9ybS9zaW1wbGUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUErQixpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakssT0FBTyxFQUFFLFdBQVcsRUFBYSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7QUFHNUIsNENBSUM7OztJQUhHLDZDQUFhOztJQUNiLGtEQUFrQjs7SUFDbEIsdURBQXdCOztBQVE1QixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7O0lBNEI1QixZQUNjLEdBQWdCLEVBQ2hCLGNBQTZCLEVBQzdCLE9BQXNCLEVBQ3RCLFlBQXlCLEVBQ3pCLFNBQTBCLEVBQzFCLFFBQW9CLEVBQ3BCLFNBQW9CO1FBTnBCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFwQmxDLGNBQVMsR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdsRSxzQkFBaUIsR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQW1CdEUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU0sV0FBVztRQUNmLElBQUk7WUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkI7SUFDSixDQUFDOzs7O0lBRU0sVUFBVTtJQUNqQixDQUFDOzs7O0lBSUUsZUFBZTtRQUNYLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVTLFVBQVU7UUFDaEIsSUFBSTtZQUNBLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsUUFBUTtRQUN4QixJQUFJO1lBQ0EsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdEM7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7Ozs7O0lBRVMsY0FBYztRQUNwQixJQUFJO1lBQ0EsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2xFO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNSLENBQUM7Ozs7Ozs7SUFHWSx3QkFBd0IsQ0FBQyxRQUFnQixFQUFFLFFBQWE7UUFDOUQsSUFBSTs7a0JBQ00sV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7WUFDdkQsV0FBVyxDQUFDLE9BQU87Ozs7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDMUIsSUFBSTtvQkFDQSxLQUFLLElBQUksT0FBTyxJQUFJLFFBQVEsRUFBRTt3QkFDMUIsSUFBSTs7Z0NBQ0ksU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7NEJBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUM7eUJBQ3pDO3dCQUFDLE9BQU8sS0FBSyxFQUFFLEdBQUU7cUJBQ3JCO2lCQUNKO2dCQUFDLE9BQU8sS0FBSyxFQUFFLEdBQUU7WUFDdEIsQ0FBQyxFQUFDLENBQUM7U0FDTjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRVMsS0FBSztRQUNYLElBQUk7WUFDQSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5R0FBeUcsQ0FBQyxDQUFDO2FBQzFIO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtnQkFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsd0dBQXdHLENBQUMsQ0FBQzthQUN6SDtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDUixDQUFDOzs7Ozs7O0lBRVksZ0JBQWdCLENBQUMsU0FBb0IsRUFBRSxhQUFvQjtRQUNqRSxJQUFJO1lBQ0EsYUFBYSxDQUFDLE9BQU87Ozs7O1lBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7O3NCQUMzQixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUk7Z0JBQ3JCLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRTtvQkFDL0MsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2dCQUNELElBQUksSUFBSSxLQUFLLEtBQUssRUFBRTtvQkFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2hEO3FCQUFNOzswQkFDRyxVQUFVLEdBQWdCLElBQUksV0FBVyxFQUFFO29CQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2lCQUNsRDtZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ047UUFBQyxPQUFPLEtBQUssRUFBRSxHQUFFO0lBQ3RCLENBQUM7Ozs7O0lBRVMsY0FBYztRQUNwQixJQUFJO1lBQ0EsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNqRCxDQUFDO1NBQ0w7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7Ozs7O0lBRU0sd0JBQXdCLENBQUMsZUFBdUIsRUFBRSxpQkFBMkIsRUFBRSxPQUFxQjtRQUN2RyxJQUFJO1lBQ0EsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUU7O3NCQUMzQixRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3hGLElBQUksUUFBUSxFQUFFO29CQUNWLFFBQVEsQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ3pEO2FBQ0o7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7Ozs7Ozs7SUFFUyxpQkFBaUIsQ0FBQyxTQUFpQixFQUFFLFlBQTJDO1FBQ3RGLElBQUk7O2tCQUNNLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSTtZQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtnQkFDekIsWUFBWSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDL0I7O2tCQUVLLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQztZQUMxRSxJQUFJLGNBQWMsSUFBSSxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksT0FBTyxjQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUN0RyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDMUc7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsWUFBWSxjQUFjLFNBQVMscUJBQXFCLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQzNHLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFFTSxZQUFZLENBQUMsU0FBYyxFQUFFLE1BQWMsRUFBRSxPQUFZLEVBQUUsU0FBZTtRQUM3RSxJQUFJO1lBQ0EsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixPQUFPLEdBQUcsRUFBRSxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztrQkFDL0IsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7WUFDekQsSUFBSSxTQUFTLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQjtZQUNELElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFDRCxPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2xFO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7Ozs7SUFFUyxpQkFBaUIsQ0FBQyxTQUFpQjtRQUN6QyxJQUFJO1lBQ0EsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDWixTQUFTLEdBQUcsR0FBRyxDQUFDO2FBQ25COztnQkFDRyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWE7WUFDeEMsSUFBSSxTQUFTLEtBQUssR0FBRyxFQUFFO2dCQUNuQixlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUN4QztpQkFBTSxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtnQkFDdEMsZUFBZSxHQUFHLFNBQVMsQ0FBQzthQUMvQjtZQUNELE9BQU8sZUFBZSxDQUFDO1NBQzFCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNOLHFCQUFxQjtRQUNyQixxQ0FBcUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ0QsSUFBSSxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ0QsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxJQUFJLGtCQUFrQjtRQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsSUFBSSxFQUFFO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsTUFBZTtRQUN0QixJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbEU7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQUksMEJBQTBCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsSUFBSSxJQUFJLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELElBQUksTUFBTSxDQUFDLElBQUk7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7OztZQXZVSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG85TUFBMkM7Z0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN4Qzs7OztZQWZRLFdBQVc7WUFIWCxhQUFhO1lBQ2IsYUFBYTtZQUZiLFdBQVc7WUFLWCxlQUFlO1lBRjRGLFVBQVU7WUFBRSxTQUFTOzs7cUJBbUJwSSxLQUFLOzRCQUdMLEtBQUs7NEJBR0wsS0FBSzt1QkFHTCxLQUFLO3dCQUdMLE1BQU07Z0NBR04sTUFBTTs7OztJQWZQLHFDQUNZOztJQUVaLDRDQUNvQjs7SUFFcEIsNENBQ21COztJQUVuQix1Q0FDZTs7SUFFZix3Q0FDa0U7O0lBRWxFLGdEQUMwRTs7SUFFMUUsdUNBQTJCOztJQUMzQixtQ0FBb0I7O0lBQ3BCLHVDQUFxQzs7SUFDckMsOENBQTRCOztJQUM1QiwwQ0FBNEI7Ozs7O0lBRTVCLHNDQUEyQjs7Ozs7SUFHdkIsa0NBQTBCOzs7OztJQUMxQiw2Q0FBdUM7Ozs7O0lBQ3ZDLHNDQUFnQzs7Ozs7SUFDaEMsMkNBQW1DOzs7OztJQUNuQyx3Q0FBb0M7Ozs7O0lBQ3BDLHVDQUE4Qjs7Ozs7SUFDOUIsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3V0aWwuc2VydmljZSc7XG5pbXBvcnQgeyBTY2hlbWFTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9zY2hlbWEuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIFNpbXBsZUNoYW5nZSwgVmlld0VuY2Fwc3VsYXRpb24sIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbmludGVyZmFjZSBFdmVudEhhbmRsZXJDYWxsYmFja0ludGVyZmFjZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFyZ3VtZW50cz86IGFueVtdO1xuICAgIGhhbmRsZXJGbk93bmVyPzogc3RyaW5nO1xufVxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaW1wbGUtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NpbXBsZS1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbWQtaWNvbi5jc3MnLCAnc2ltcGxlLWZvcm0uY29tcG9uZW50LmNzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICBcbiAgICBASW5wdXQoKVxuICAgIHNjaGVtYTogYW55O1xuXG4gICAgQElucHV0KClcbiAgICBmb3JtQ29tcG9uZW50PzogYW55O1xuXG4gICAgQElucHV0KClcbiAgICBwYWdlQ29tcG9uZW50OiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIGZvcm1EYXRhPzogYW55O1xuXG4gICAgQE91dHB1dCgpXG4gICAgYWZ0ZXJJbml0OiBFdmVudEVtaXR0ZXI8U2ltcGxlRm9ybUNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQE91dHB1dCgpXG4gICAgYWZ0ZXJHZW5lcmF0ZUZvcm06IEV2ZW50RW1pdHRlcjxTaW1wbGVGb3JtQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHB1YmxpYyBmb3JtR291cDogRm9ybUdyb3VwO1xuICAgIHB1YmxpYyBjb2RlOiBzdHJpbmc7XG4gICAgcHVibGljIGluc3RhbmNlOiBTaW1wbGVGb3JtQ29tcG9uZW50O1xuICAgIHB1YmxpYyBmaWVsZHNDb21wb25lbnQ6IGFueTtcbiAgICBwdWJsaWMgaXNDb2xsYXBzZWQ6IGJvb2xlYW47XG5cbiAgICBwcm90ZWN0ZWQgX2hpZGRlbjogYm9vbGVhbjsgXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByb3RlY3RlZCBfc2NoZW1hU2VydmljZTogU2NoZW1hU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIF9sb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBfdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgX2RlZmF1bHRzOiBEZWZhdWx0c1NlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBfZWxlbVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICB9XG5cblx0cHJvdGVjdGVkIF9pbml0aWFsaXplKCkge1xuICAgICAgIHRyeSB7XG5cdFx0ICAgdGhpcy5pbnN0YW5jZSA9IHRoaXM7XG5cdFx0ICAgdGhpcy5maWVsZHNDb21wb25lbnQgPSB7fTtcbiAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgICB0aGlzLl9oaWRkZW4gPSBmYWxzZTtcblx0XHQgICB0aGlzLmluaXRpYWxpemUoKTtcblx0ICAgfSBjYXRjaCAoZXJyb3IpIHtcblx0XHQgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cdCAgIH1cblx0fVxuXG5cdHB1YmxpYyBpbml0aWFsaXplKCkge1xuXHR9XG5cdFxuXG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuX2FmdGVyVmlld0luaXQoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9vbkNoYW5nZXMoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRm9ybSh0aGlzLmZvcm1EYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwb3B1bGF0ZUZvcm0oZm9ybURhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdvdXAucGF0Y2hWYWx1ZShmb3JtRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVGb3JtKHRoaXMuZm9ybURhdGEpO1xuXHRcdFx0dGhpcy5hZnRlckdlbmVyYXRlRm9ybS5lbWl0KHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cdH1cblxuICAgIFxuICAgIHByb3RlY3RlZCBfYXBwbHlJbmxpZUNzc0J5U2VsZWN0b3Ioc2VsZWN0b3I6IHN0cmluZywgY3NzU3R5bGU6IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGVsZW1lbnRMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY3NzUHJvcCBpbiBjc3NTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcFZhbHVlID0gY3NzU3R5bGVbY3NzUHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFsnc3R5bGUnXVtjc3NQcm9wXSA9IHByb3BWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9pbml0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZUNvbXBvbmVudCAmJiB0aGlzLnBhZ2VDb21wb25lbnQuZm9ybXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb21wb25lbnQuZm9ybXNbdGhpcy5jb2RlXSA9IHRoaXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIHByb3ZpZGUgW3BhZ2VDb21wb25lbnRdIGlucHV0IGFuZCBkZWZpbmUgJ2Zvcm1zJyBkZWZpbml0aW9uIGluIHRoZSBwYXN0IG9iamVjdCBhcyBwYWdlQ29tcG9uZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9ybUNvbXBvbmVudC5mb3JtID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Db21wb25lbnQgJiYgdGhpcy5wYWdlQ29tcG9uZW50LmZvcm0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Db21wb25lbnQuZm9ybSA9IHRoaXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIHByb3ZpZGUgW2Zvcm1Db21wb25lbnRdIGlucHV0IGFuZCBkZWZpbmUgJ2Zvcm0nIGRlZmluaXRpb24gaW4gdGhlIHBhc3Qgb2JqZWN0IGFzIHBhZ2VDb21wb25lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oaWRkZW4gPSB0aGlzLnNjaGVtYS5oaWRkZW4gfHwgZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLnNjaGVtYS5jb2RlO1xuICAgICAgICAgICAgdGhpcy5fc2NoZW1hU2VydmljZS5hZGRTY2hlbWEodGhpcy5jb2RlLCB0aGlzLnNjaGVtYSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVtYSA9IHRoaXMuX3NjaGVtYVNlcnZpY2UuZ2V0U2NoZW1hQnlTY2hlbWFLZXkodGhpcy5jb2RlKTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRGb3JtR3JvdXAoKTtcblx0XHRcdHRoaXMuYWZ0ZXJJbml0LmVtaXQodGhpcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblx0fVxuXG4gICAgcHJvdGVjdGVkIF9hZGRGb3JtQ29udHJvbHMoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGZvcm1GaWVsZHNEZWY6IGFueVtdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3JtRmllbGRzRGVmLmZvckVhY2goKGRlZiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gZGVmLnR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXModGhpcy5fZGVmYXVsdHMuRFVNTVlfRklFTERTLCB0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnRlNUJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRGb3JtQ29udHJvbHMoZm9ybUdyb3VwLCBkZWYuZmllbGRzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbGRDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hb3VwLmFkZENvbnRyb2woZGVmLm5hbWUsIGZsZENvbnRyb2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2luaXRGb3JtR3JvdXAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hb3VwID0gdGhpcy5fZmIuZ3JvdXAoe30pO1xuICAgICAgICAgICAgdGhpcy5fYWRkRm9ybUNvbnRyb2xzKFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdvdXAsXG4gICAgICAgICAgICAgICAgdGhpcy5fc2NoZW1hU2VydmljZS5nZXRTY2hlbWFGaWVsZHModGhpcy5jb2RlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblBhcmVudEZpZWxkVmFsdWVDaGFuZ2UocGFyZW50RmllbGROYW1lOiBzdHJpbmcsIGNoaWxkRmllbGROYW1lQXJyOiBzdHJpbmdbXSwgY2hhbmdlczogU2ltcGxlQ2hhbmdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vblBhcmVudEZpZWxkVmFsdWVDaGFuZ2VGbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5fZ2V0RXZlbnRDYWxsYmFjaygncGFyZW50Q2hhbmdlJywgdGhpcy5vblBhcmVudEZpZWxkVmFsdWVDaGFuZ2VGbik7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHBhcmVudEZpZWxkTmFtZSwgY2hpbGRGaWVsZE5hbWVBcnIsIGNoYW5nZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0RXZlbnRDYWxsYmFjayhldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2tEYXRhOiBFdmVudEhhbmRsZXJDYWxsYmFja0ludGVyZmFjZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tOYW1lID0gY2FsbGJhY2tEYXRhLm5hbWU7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrRGF0YS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0RhdGEuYXJndW1lbnRzID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJGbk93bmVyID0gdGhpcy5fZ2V0Q2FsbGJhY2tPd25lcihjYWxsYmFja0RhdGEuaGFuZGxlckZuT3duZXIpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJGbk93bmVyICYmIGhhbmRsZXJGbk93bmVyW2NhbGxiYWNrTmFtZV0gJiYgdHlwZW9mIGhhbmRsZXJGbk93bmVyW2NhbGxiYWNrTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudEhhbmRsZXIuYmluZCh0aGlzLCBjYWxsYmFja0RhdGEuaGFuZGxlckZuT3duZXIsIGNhbGxiYWNrTmFtZSwgY2FsbGJhY2tEYXRhLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDYWxsYmFjayBmdW5jdGlvbiAke2NhbGxiYWNrTmFtZX0gZm9yIGV2ZW50ICR7ZXZlbnROYW1lfSBkb2VzIG5vdCBleGlzdCBpbiBgLCBoYW5kbGVyRm5Pd25lcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBldmVudEhhbmRsZXIob3duZXJUeXBlOiBhbnksIGZuTmFtZTogc3RyaW5nLCBhcmdzQXJyOiBhbnksIGV2ZW50ZGF0YT86IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFhcmdzQXJyKSB7XG4gICAgICAgICAgICAgICAgYXJnc0FyciA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJnc0FyciA9IE9iamVjdC5hc3NpZ24oW10sIGFyZ3NBcnIpO1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tGbk93bmVyID0gdGhpcy5fZ2V0Q2FsbGJhY2tPd25lcihvd25lclR5cGUpO1xuICAgICAgICAgICAgaWYgKGV2ZW50ZGF0YSkge1xuICAgICAgICAgICAgICAgIGFyZ3NBcnIucHVzaChldmVudGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjYWxsYmFja0ZuT3duZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFja0ZuT3duZXJbZm5OYW1lXS5hcHBseShjYWxsYmFja0ZuT3duZXIsIGFyZ3NBcnIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldENhbGxiYWNrT3duZXIob3duZXJUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghb3duZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgb3duZXJUeXBlID0gJ1AnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrRm5Pd25lciA9IHRoaXMucGFnZUNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmIChvd25lclR5cGUgPT09ICdGJykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRm5Pd25lciA9IHRoaXMuZm9ybUNvbXBvbmVudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG93bmVyVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0ZuT3duZXIgPSBvd25lclR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tGbk93bmVyO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLy9cIik7XG4gICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY2hlbWEuaGVscFRleHQpO1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEubGFiZWw7XG4gICAgfVxuICAgIGdldCBoZWxwcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaGVscFRleHQ7XG4gICAgfVxuICAgIGdldCBmaWVsZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5maWVsZHM7XG4gICAgfVxuXG4gICAgZ2V0IGJ1dHRvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5idXR0b25zO1xuICAgIH1cblxuICAgIGdldCBjb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29sdW1ucztcbiAgICB9XG5cbiAgICBnZXQgY29sbGFwc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb2xsYXBzZSB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgaGlkZUxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuaGlkZUxhYmVsIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBjb2xsYXBzZUJvZHlIaWRkZW4oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jb2xsYXBzZSAmJiB0aGlzLmlzQ29sbGFwc2VkKTtcblx0fVxuXHRcblx0Z2V0IHZhbGlkKCkge1xuXHRcdHJldHVybiB0aGlzLmZvcm1Hb3VwLnZhbGlkO1xuXHR9XG5cblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLmZvcm1Hb3VwLnZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZShncm91cFZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm9ybUdvdXAucGF0Y2hWYWx1ZShncm91cFZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgb3JkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5vcmRlciB8fCAxO1xuICAgIH1cbiAgICBcbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvZGUgKyAnX18nICsgdGhpcy5vcmRlcjtcbiAgICB9XG5cbiAgICBnZXQgaGlkZGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGlkZGVuIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIHNldCBoaWRkZW4oaGlkZGVuOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChoaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGlkZGVuID0gaGlkZGVuO1xuICAgIH1cblxuICAgIGdldCBvblBhcmVudEZpZWxkVmFsdWVDaGFuZ2VGbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm9uUGFyZW50RmllbGRWYWx1ZUNoYW5nZSB8fCBudWxsO1xuICAgIH1cblxuICAgIHNldCBkaXNhYmxlKHByb3ApIHtcbiAgICAgICAgdGhpcy5mb3JtR291cC5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IGVuYWJsZShwcm9wKSB7XG4gICAgICAgIHRoaXMuZm9ybUdvdXAuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGZvcm1SZWYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG59XG4iXX0=