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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpbXBsZS1mb3JtL3NpbXBsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQStCLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSyxPQUFPLEVBQUUsV0FBVyxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7OztBQUc1Qiw0Q0FJQzs7O0lBSEcsNkNBQWE7O0lBQ2Isa0RBQWtCOztJQUNsQix1REFBd0I7O0FBUTVCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7Ozs7SUE0QjVCLFlBQ2MsR0FBZ0IsRUFDaEIsY0FBNkIsRUFDN0IsT0FBc0IsRUFDdEIsWUFBeUIsRUFDekIsU0FBMEIsRUFDMUIsUUFBb0IsRUFDcEIsU0FBb0I7UUFOcEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsY0FBUyxHQUFULFNB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SUFmUCxxQ0FDWTs7SUFFWiw0Q0FDb0I7O0lBRXBCLDRDQUNtQjs7SUFFbkIsdUNBQ2U7O0lBRWYsd0NBQ2tFOztJQUVsRSxnREFDMEU7O0lBRTFFLHVDQUEyQjs7SUFDM0IsbUNBQW9COztJQUNwQix1Q0FBcUM7O0lBQ3JDLDhDQUE0Qjs7SUFDNUIsMENBQTRCOzs7OztJQUU1QixzQ0FBMkI7Ozs7O0lBR3ZCLGtDQUEwQjs7Ozs7SUFDMUIsNkNBQXVDOzs7OztJQUN2QyxzQ0FBZ0M7Ozs7O0lBQ2hDLDJDQUFtQzs7Ozs7SUFDbkMsd0NBQW9DOzs7OztJQUNwQyx1Q0FBOEI7Ozs7O0lBQzlCLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy91dGlsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvc2NoZW1hLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0LCBTaW1wbGVDaGFuZ2UsIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9kZWZhdWx0cy5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuXG5pbnRlcmZhY2UgRXZlbnRIYW5kbGVyQ2FsbGJhY2tJbnRlcmZhY2Uge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhcmd1bWVudHM/OiBhbnlbXTtcbiAgICBoYW5kbGVyRm5Pd25lcj86IHN0cmluZztcbn1cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2ltcGxlLWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zaW1wbGUtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ21kLWljb24uY3NzJywgJ3NpbXBsZS1mb3JtLmNvbXBvbmVudC5jc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgXG4gICAgQElucHV0KClcbiAgICBzY2hlbWE6IGFueTtcblxuICAgIEBJbnB1dCgpXG4gICAgZm9ybUNvbXBvbmVudD86IGFueTtcblxuICAgIEBJbnB1dCgpXG4gICAgcGFnZUNvbXBvbmVudDogYW55O1xuXG4gICAgQElucHV0KClcbiAgICBmb3JtRGF0YT86IGFueTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGFmdGVySW5pdDogRXZlbnRFbWl0dGVyPFNpbXBsZUZvcm1Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKVxuICAgIGFmdGVyR2VuZXJhdGVGb3JtOiBFdmVudEVtaXR0ZXI8U2ltcGxlRm9ybUNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwdWJsaWMgZm9ybUdvdXA6IEZvcm1Hcm91cDtcbiAgICBwdWJsaWMgY29kZTogc3RyaW5nO1xuICAgIHB1YmxpYyBpbnN0YW5jZTogU2ltcGxlRm9ybUNvbXBvbmVudDtcbiAgICBwdWJsaWMgZmllbGRzQ29tcG9uZW50OiBhbnk7XG4gICAgcHVibGljIGlzQ29sbGFwc2VkOiBib29sZWFuO1xuXG4gICAgcHJvdGVjdGVkIF9oaWRkZW46IGJvb2xlYW47IFxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBfZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcm90ZWN0ZWQgX3NjaGVtYVNlcnZpY2U6IFNjaGVtYVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBfbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgX3V0aWxTZXJ2aWNlOiBVdGlsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIF9kZWZhdWx0czogRGVmYXVsdHNTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgX2VsZW1SZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByb3RlY3RlZCBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICAgICkge1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplKCk7XG4gICAgfVxuXG5cdHByb3RlY3RlZCBfaW5pdGlhbGl6ZSgpIHtcbiAgICAgICB0cnkge1xuXHRcdCAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzO1xuXHRcdCAgIHRoaXMuZmllbGRzQ29tcG9uZW50ID0ge307XG4gICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgdGhpcy5faGlkZGVuID0gZmFsc2U7XG5cdFx0ICAgdGhpcy5pbml0aWFsaXplKCk7XG5cdCAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ICAgY29uc29sZS5sb2coZXJyb3IpO1xuXHQgICB9XG5cdH1cblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcblx0fVxuXHRcblxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLl9hZnRlclZpZXdJbml0KCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfb25DaGFuZ2VzKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZUZvcm0odGhpcy5mb3JtRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wdWxhdGVGb3JtKGZvcm1EYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hb3VwLnBhdGNoVmFsdWUoZm9ybURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9hZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRm9ybSh0aGlzLmZvcm1EYXRhKTtcblx0XHRcdHRoaXMuYWZ0ZXJHZW5lcmF0ZUZvcm0uZW1pdCh0aGlzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXHR9XG5cbiAgICBcbiAgICBwcm90ZWN0ZWQgX2FwcGx5SW5saWVDc3NCeVNlbGVjdG9yKHNlbGVjdG9yOiBzdHJpbmcsIGNzc1N0eWxlOiBhbnkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBlbGVtZW50TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNzc1Byb3AgaW4gY3NzU3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BWYWx1ZSA9IGNzc1N0eWxlW2Nzc1Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbJ3N0eWxlJ11bY3NzUHJvcF0gPSBwcm9wVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VDb21wb25lbnQgJiYgdGhpcy5wYWdlQ29tcG9uZW50LmZvcm1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlQ29tcG9uZW50LmZvcm1zW3RoaXMuY29kZV0gPSB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBwcm92aWRlIFtwYWdlQ29tcG9uZW50XSBpbnB1dCBhbmQgZGVmaW5lICdmb3JtcycgZGVmaW5pdGlvbiBpbiB0aGUgcGFzc2VkIG9iamVjdCBhcyBwYWdlQ29tcG9uZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUNvbXBvbmVudCAmJiB0aGlzLnBhZ2VDb21wb25lbnQuZm9ybSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUNvbXBvbmVudC5mb3JtID0gdGhpcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgcHJvdmlkZSBbZm9ybUNvbXBvbmVudF0gaW5wdXQgYW5kIGRlZmluZSAnZm9ybScgZGVmaW5pdGlvbiBpbiB0aGUgcGFzc2VkIG9iamVjdCBhcyBmb3JtQ29tcG9uZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGlkZGVuID0gdGhpcy5zY2hlbWEuaGlkZGVuIHx8IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5zY2hlbWEuY29kZTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVtYVNlcnZpY2UuYWRkU2NoZW1hKHRoaXMuY29kZSwgdGhpcy5zY2hlbWEpO1xuICAgICAgICAgICAgdGhpcy5zY2hlbWEgPSB0aGlzLl9zY2hlbWFTZXJ2aWNlLmdldFNjaGVtYUJ5U2NoZW1hS2V5KHRoaXMuY29kZSk7XG4gICAgICAgICAgICB0aGlzLl9pbml0Rm9ybUdyb3VwKCk7XG5cdFx0XHR0aGlzLmFmdGVySW5pdC5lbWl0KHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG5cdH1cblxuICAgIHByb3RlY3RlZCBfYWRkRm9ybUNvbnRyb2xzKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmb3JtRmllbGRzRGVmOiBhbnlbXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9ybUZpZWxkc0RlZi5mb3JFYWNoKChkZWYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGRlZi50eXBlO1xuICAgICAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKHRoaXMuX2RlZmF1bHRzLkRVTU1ZX0ZJRUxEUywgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ0ZTVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkRm9ybUNvbnRyb2xzKGZvcm1Hcm91cCwgZGVmLmZpZWxkcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmxkQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR291cC5hZGRDb250cm9sKGRlZi5uYW1lLCBmbGRDb250cm9sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9pbml0Rm9ybUdyb3VwKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5mb3JtR291cCA9IHRoaXMuX2ZiLmdyb3VwKHt9KTtcbiAgICAgICAgICAgIHRoaXMuX2FkZEZvcm1Db250cm9scyhcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hb3VwLFxuICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVtYVNlcnZpY2UuZ2V0U2NoZW1hRmllbGRzKHRoaXMuY29kZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlKHBhcmVudEZpZWxkTmFtZTogc3RyaW5nLCBjaGlsZEZpZWxkTmFtZUFycjogc3RyaW5nW10sIGNoYW5nZXM6IFNpbXBsZUNoYW5nZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMub25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlRm4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMuX2dldEV2ZW50Q2FsbGJhY2soJ3BhcmVudENoYW5nZScsIHRoaXMub25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlRm4pO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLmNvZGUsIHBhcmVudEZpZWxkTmFtZSwgY2hpbGRGaWVsZE5hbWVBcnIsIGNoYW5nZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0RXZlbnRDYWxsYmFjayhldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2tEYXRhOiBFdmVudEhhbmRsZXJDYWxsYmFja0ludGVyZmFjZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tOYW1lID0gY2FsbGJhY2tEYXRhLm5hbWU7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrRGF0YS5hcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0RhdGEuYXJndW1lbnRzID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJGbk93bmVyID0gdGhpcy5fZ2V0Q2FsbGJhY2tPd25lcihjYWxsYmFja0RhdGEuaGFuZGxlckZuT3duZXIpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZXJGbk93bmVyICYmIGhhbmRsZXJGbk93bmVyW2NhbGxiYWNrTmFtZV0gJiYgdHlwZW9mIGhhbmRsZXJGbk93bmVyW2NhbGxiYWNrTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudEhhbmRsZXIuYmluZCh0aGlzLCBjYWxsYmFja0RhdGEuaGFuZGxlckZuT3duZXIsIGNhbGxiYWNrTmFtZSwgY2FsbGJhY2tEYXRhLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDYWxsYmFjayBmdW5jdGlvbiAke2NhbGxiYWNrTmFtZX0gZm9yIGV2ZW50ICR7ZXZlbnROYW1lfSBkb2VzIG5vdCBleGlzdCBpbiBgLCBoYW5kbGVyRm5Pd25lcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBldmVudEhhbmRsZXIob3duZXJUeXBlOiBhbnksIGZuTmFtZTogc3RyaW5nLCBhcmdzQXJyOiBhbnksIC4uLnJlc3RBcmdzQXJyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3NBcnIpIHtcbiAgICAgICAgICAgICAgICBhcmdzQXJyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmdzQXJyID0gT2JqZWN0LmFzc2lnbihbXSwgYXJnc0Fycik7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLl9nZXRDYWxsYmFja093bmVyKG93bmVyVHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN0QXJnc0Fycikge1xuICAgICAgICAgICAgICAgIGFyZ3NBcnIgPSBbLi4uYXJnc0FyciwgLi4ucmVzdEFyZ3NBcnJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tGbk93bmVyW2ZuTmFtZV0uYXBwbHkoY2FsbGJhY2tGbk93bmVyLCBhcmdzQXJyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRDYWxsYmFja093bmVyKG93bmVyVHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIW93bmVyVHlwZSkge1xuICAgICAgICAgICAgICAgIG93bmVyVHlwZSA9ICdQJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLnBhZ2VDb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAob3duZXJUeXBlID09PSAnRicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLmZvcm1Db21wb25lbnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvd25lclR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGbk93bmVyID0gb3duZXJUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrRm5Pd25lcjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIi8vXCIpO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2NoZW1hLmhlbHBUZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmxhYmVsO1xuICAgIH1cbiAgICBnZXQgaGVscHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmhlbHBUZXh0O1xuICAgIH1cbiAgICBnZXQgZmllbGRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZmllbGRzO1xuICAgIH1cblxuICAgIGdldCBidXR0b25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuYnV0dG9ucztcbiAgICB9XG5cbiAgICBnZXQgY29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbHVtbnM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxhcHNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuY29sbGFwc2UgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGhpZGVMYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmhpZGVMYWJlbCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgY29sbGFwc2VCb2R5SGlkZGVuKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29sbGFwc2UgJiYgdGhpcy5pc0NvbGxhcHNlZCk7XG5cdH1cblx0XG5cdGdldCB2YWxpZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtR291cC52YWxpZDtcblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtR291cC52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUoZ3JvdXBWYWx1ZSkge1xuICAgICAgICB0aGlzLmZvcm1Hb3VwLnBhdGNoVmFsdWUoZ3JvdXBWYWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IG9yZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEub3JkZXIgfHwgMTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2RlICsgJ19fJyArIHRoaXMub3JkZXI7XG4gICAgfVxuXG4gICAgZ2V0IGhpZGRlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZGRlbiB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQgaGlkZGVuKGhpZGRlbjogYm9vbGVhbikge1xuICAgICAgICBpZiAoaGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hpZGRlbiA9IGhpZGRlbjtcbiAgICB9XG5cbiAgICBnZXQgb25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlRm4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5vblBhcmVudEZpZWxkVmFsdWVDaGFuZ2UgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBzZXQgZGlzYWJsZShwcm9wKSB7XG4gICAgICAgIHRoaXMuZm9ybUdvdXAuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHNldCBlbmFibGUocHJvcCkge1xuICAgICAgICB0aGlzLmZvcm1Hb3VwLmVuYWJsZSgpO1xuICAgIH1cblxuICAgIGdldCBmb3JtUmVmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxufVxuIl19