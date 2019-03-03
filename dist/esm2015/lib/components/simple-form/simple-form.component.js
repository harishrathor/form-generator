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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NpbXBsZS1mb3JtL3NpbXBsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQStCLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSyxPQUFPLEVBQUUsV0FBVyxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7OztBQUc1Qiw0Q0FJQzs7O0lBSEcsNkNBQWE7O0lBQ2Isa0RBQWtCOztJQUNsQix1REFBd0I7O0FBUTVCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7Ozs7SUE0QjVCLFlBQ2MsR0FBZ0IsRUFDaEIsY0FBNkIsRUFDN0IsT0FBc0IsRUFDdEIsWUFBeUIsRUFDekIsU0FBMEIsRUFDMUIsUUFBb0IsRUFDcEIsU0FBb0I7UUFOcEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsY0FBUyxHQUFULFNB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LENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFDRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELElBQUksa0JBQWtCO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLFVBQVU7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxJQUFJLEVBQUU7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFlO1FBQ3RCLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNsRTthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSwwQkFBMEI7UUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHdCQUF3QixJQUFJLElBQUksQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELElBQUksT0FBTyxDQUFDLElBQUk7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsSUFBSTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQzs7O1lBdlVKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsbzlNQUEyQztnQkFFM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3hDOzs7O1lBZlEsV0FBVztZQUhYLGFBQWE7WUFDYixhQUFhO1lBRmIsV0FBVztZQUtYLGVBQWU7WUFGNEYsVUFBVTtZQUFFLFNBQVM7OztxQkFtQnBJLEtBQUs7NEJBR0wsS0FBSzs0QkFHTCxLQUFLO3VCQUdMLEtBQUs7d0JBR0wsTUFBTTtnQ0FHTixNQUFNOzs7O0lBZlAscUNBQ1k7O0lBRVosNENBQ29COztJQUVwQiw0Q0FDbUI7O0lBRW5CLHVDQUNlOztJQUVmLHdDQUNrRTs7SUFFbEUsZ0RBQzBFOztJQUUxRSx1Q0FBMkI7O0lBQzNCLG1DQUFvQjs7SUFDcEIsdUNBQXFDOztJQUNyQyw4Q0FBNEI7O0lBQzVCLDBDQUE0Qjs7Ozs7SUFFNUIsc0NBQTJCOzs7OztJQUd2QixrQ0FBMEI7Ozs7O0lBQzFCLDZDQUF1Qzs7Ozs7SUFDdkMsc0NBQWdDOzs7OztJQUNoQywyQ0FBbUM7Ozs7O0lBQ25DLHdDQUFvQzs7Ozs7SUFDcEMsdUNBQThCOzs7OztJQUM5Qix3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3NjaGVtYS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgU2ltcGxlQ2hhbmdlLCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvZGVmYXVsdHMuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cblxuaW50ZXJmYWNlIEV2ZW50SGFuZGxlckNhbGxiYWNrSW50ZXJmYWNlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYXJndW1lbnRzPzogYW55W107XG4gICAgaGFuZGxlckZuT3duZXI/OiBzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpbXBsZS1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2ltcGxlLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydtZC1pY29uLmNzcycsICdzaW1wbGUtZm9ybS5jb21wb25lbnQuY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgIFxuICAgIEBJbnB1dCgpXG4gICAgc2NoZW1hOiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIGZvcm1Db21wb25lbnQ/OiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIHBhZ2VDb21wb25lbnQ6IGFueTtcblxuICAgIEBJbnB1dCgpXG4gICAgZm9ybURhdGE/OiBhbnk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBhZnRlckluaXQ6IEV2ZW50RW1pdHRlcjxTaW1wbGVGb3JtQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBcbiAgICBAT3V0cHV0KClcbiAgICBhZnRlckdlbmVyYXRlRm9ybTogRXZlbnRFbWl0dGVyPFNpbXBsZUZvcm1Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHVibGljIGZvcm1Hb3VwOiBGb3JtR3JvdXA7XG4gICAgcHVibGljIGNvZGU6IHN0cmluZztcbiAgICBwdWJsaWMgaW5zdGFuY2U6IFNpbXBsZUZvcm1Db21wb25lbnQ7XG4gICAgcHVibGljIGZpZWxkc0NvbXBvbmVudDogYW55O1xuICAgIHB1YmxpYyBpc0NvbGxhcHNlZDogYm9vbGVhbjtcblxuICAgIHByb3RlY3RlZCBfaGlkZGVuOiBib29sZWFuOyBcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgX2ZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJvdGVjdGVkIF9zY2hlbWFTZXJ2aWNlOiBTY2hlbWFTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgX2xvZ2dlcjogTG9nZ2VyU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIF91dGlsU2VydmljZTogVXRpbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBfZGVmYXVsdHM6IERlZmF1bHRzU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIF9lbGVtUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgICApIHtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuXHRwcm90ZWN0ZWQgX2luaXRpYWxpemUoKSB7XG4gICAgICAgdHJ5IHtcblx0XHQgICB0aGlzLmluc3RhbmNlID0gdGhpcztcblx0XHQgICB0aGlzLmZpZWxkc0NvbXBvbmVudCA9IHt9O1xuICAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IGZhbHNlO1xuXHRcdCAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHQgICB9IGNhdGNoIChlcnJvcikge1xuXHRcdCAgIGNvbnNvbGUubG9nKGVycm9yKTtcblx0ICAgfVxuXHR9XG5cblx0cHVibGljIGluaXRpYWxpemUoKSB7XG5cdH1cblx0XG5cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5fYWZ0ZXJWaWV3SW5pdCgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX29uQ2hhbmdlcygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVGb3JtKHRoaXMuZm9ybURhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHBvcHVsYXRlRm9ybShmb3JtRGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtR291cC5wYXRjaFZhbHVlKGZvcm1EYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGRlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZUZvcm0odGhpcy5mb3JtRGF0YSk7XG5cdFx0XHR0aGlzLmFmdGVyR2VuZXJhdGVGb3JtLmVtaXQodGhpcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cblx0fVxuXG4gICAgXG4gICAgcHJvdGVjdGVkIF9hcHBseUlubGllQ3NzQnlTZWxlY3RvcihzZWxlY3Rvcjogc3RyaW5nLCBjc3NTdHlsZTogYW55KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgZWxlbWVudExpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjc3NQcm9wIGluIGNzc1N0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wVmFsdWUgPSBjc3NTdHlsZVtjc3NQcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50WydzdHlsZSddW2Nzc1Byb3BdID0gcHJvcFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlQ29tcG9uZW50ICYmIHRoaXMucGFnZUNvbXBvbmVudC5mb3Jtcykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUNvbXBvbmVudC5mb3Jtc1t0aGlzLmNvZGVdID0gdGhpcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgcHJvdmlkZSBbcGFnZUNvbXBvbmVudF0gaW5wdXQgYW5kIGRlZmluZSAnZm9ybXMnIGRlZmluaXRpb24gaW4gdGhlIHBhc3Qgb2JqZWN0IGFzIHBhZ2VDb21wb25lbnQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb3JtQ29tcG9uZW50LmZvcm0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUNvbXBvbmVudCAmJiB0aGlzLnBhZ2VDb21wb25lbnQuZm9ybSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUNvbXBvbmVudC5mb3JtID0gdGhpcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgcHJvdmlkZSBbZm9ybUNvbXBvbmVudF0gaW5wdXQgYW5kIGRlZmluZSAnZm9ybScgZGVmaW5pdGlvbiBpbiB0aGUgcGFzdCBvYmplY3QgYXMgcGFnZUNvbXBvbmVudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhpZGRlbiA9IHRoaXMuc2NoZW1hLmhpZGRlbiB8fCBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IHRoaXMuc2NoZW1hLmNvZGU7XG4gICAgICAgICAgICB0aGlzLl9zY2hlbWFTZXJ2aWNlLmFkZFNjaGVtYSh0aGlzLmNvZGUsIHRoaXMuc2NoZW1hKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hID0gdGhpcy5fc2NoZW1hU2VydmljZS5nZXRTY2hlbWFCeVNjaGVtYUtleSh0aGlzLmNvZGUpO1xuICAgICAgICAgICAgdGhpcy5faW5pdEZvcm1Hcm91cCgpO1xuXHRcdFx0dGhpcy5hZnRlckluaXQuZW1pdCh0aGlzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuXHR9XG5cbiAgICBwcm90ZWN0ZWQgX2FkZEZvcm1Db250cm9scyhmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZm9ybUZpZWxkc0RlZjogYW55W10pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvcm1GaWVsZHNEZWYuZm9yRWFjaCgoZGVmLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBkZWYudHlwZTtcbiAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyh0aGlzLl9kZWZhdWx0cy5EVU1NWV9GSUVMRFMsIHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdGU1QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZEZvcm1Db250cm9scyhmb3JtR3JvdXAsIGRlZi5maWVsZHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZsZENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdvdXAuYWRkQ29udHJvbChkZWYubmFtZSwgZmxkQ29udHJvbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfaW5pdEZvcm1Hcm91cCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdvdXAgPSB0aGlzLl9mYi5ncm91cCh7fSk7XG4gICAgICAgICAgICB0aGlzLl9hZGRGb3JtQ29udHJvbHMoXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtR291cCxcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2hlbWFTZXJ2aWNlLmdldFNjaGVtYUZpZWxkcyh0aGlzLmNvZGUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUGFyZW50RmllbGRWYWx1ZUNoYW5nZShwYXJlbnRGaWVsZE5hbWU6IHN0cmluZywgY2hpbGRGaWVsZE5hbWVBcnI6IHN0cmluZ1tdLCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9uUGFyZW50RmllbGRWYWx1ZUNoYW5nZUZuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLl9nZXRFdmVudENhbGxiYWNrKCdwYXJlbnRDaGFuZ2UnLCB0aGlzLm9uUGFyZW50RmllbGRWYWx1ZUNoYW5nZUZuKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socGFyZW50RmllbGROYW1lLCBjaGlsZEZpZWxkTmFtZUFyciwgY2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRFdmVudENhbGxiYWNrKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFja0RhdGE6IEV2ZW50SGFuZGxlckNhbGxiYWNrSW50ZXJmYWNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja05hbWUgPSBjYWxsYmFja0RhdGEubmFtZTtcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2tEYXRhLmFyZ3VtZW50cykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRGF0YS5hcmd1bWVudHMgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaGFuZGxlckZuT3duZXIgPSB0aGlzLl9nZXRDYWxsYmFja093bmVyKGNhbGxiYWNrRGF0YS5oYW5kbGVyRm5Pd25lcik7XG4gICAgICAgICAgICBpZiAoaGFuZGxlckZuT3duZXIgJiYgaGFuZGxlckZuT3duZXJbY2FsbGJhY2tOYW1lXSAmJiB0eXBlb2YgaGFuZGxlckZuT3duZXJbY2FsbGJhY2tOYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKHRoaXMsIGNhbGxiYWNrRGF0YS5oYW5kbGVyRm5Pd25lciwgY2FsbGJhY2tOYW1lLCBjYWxsYmFja0RhdGEuYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENhbGxiYWNrIGZ1bmN0aW9uICR7Y2FsbGJhY2tOYW1lfSBmb3IgZXZlbnQgJHtldmVudE5hbWV9IGRvZXMgbm90IGV4aXN0IGluIGAsIGhhbmRsZXJGbk93bmVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGV2ZW50SGFuZGxlcihvd25lclR5cGU6IGFueSwgZm5OYW1lOiBzdHJpbmcsIGFyZ3NBcnI6IGFueSwgZXZlbnRkYXRhPzogYW55KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3NBcnIpIHtcbiAgICAgICAgICAgICAgICBhcmdzQXJyID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmdzQXJyID0gT2JqZWN0LmFzc2lnbihbXSwgYXJnc0Fycik7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLl9nZXRDYWxsYmFja093bmVyKG93bmVyVHlwZSk7XG4gICAgICAgICAgICBpZiAoZXZlbnRkYXRhKSB7XG4gICAgICAgICAgICAgICAgYXJnc0Fyci5wdXNoKGV2ZW50ZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrRm5Pd25lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrRm5Pd25lcltmbk5hbWVdLmFwcGx5KGNhbGxiYWNrRm5Pd25lciwgYXJnc0Fycik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0Q2FsbGJhY2tPd25lcihvd25lclR5cGU6IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFvd25lclR5cGUpIHtcbiAgICAgICAgICAgICAgICBvd25lclR5cGUgPSAnUCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY2FsbGJhY2tGbk93bmVyID0gdGhpcy5wYWdlQ29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKG93bmVyVHlwZSA9PT0gJ0YnKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGbk93bmVyID0gdGhpcy5mb3JtQ29tcG9uZW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3duZXJUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRm5Pd25lciA9IG93bmVyVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFja0ZuT3duZXI7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbGFiZWwoKSB7XG4gICAgICAgLy8gY29uc29sZS5sb2coXCIvL1wiKTtcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNjaGVtYS5oZWxwVGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5sYWJlbDtcbiAgICB9XG4gICAgZ2V0IGhlbHBzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5oZWxwVGV4dDtcbiAgICB9XG4gICAgZ2V0IGZpZWxkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmZpZWxkcztcbiAgICB9XG5cbiAgICBnZXQgYnV0dG9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmJ1dHRvbnM7XG4gICAgfVxuXG4gICAgZ2V0IGNvbHVtbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb2x1bW5zO1xuICAgIH1cblxuICAgIGdldCBjb2xsYXBzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbGxhcHNlIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBoaWRlTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5oaWRlTGFiZWwgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGNvbGxhcHNlQm9keUhpZGRlbigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbGxhcHNlICYmIHRoaXMuaXNDb2xsYXBzZWQpO1xuXHR9XG5cdFxuXHRnZXQgdmFsaWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybUdvdXAudmFsaWQ7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybUdvdXAudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKGdyb3VwVmFsdWUpIHtcbiAgICAgICAgdGhpcy5mb3JtR291cC5wYXRjaFZhbHVlKGdyb3VwVmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBvcmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm9yZGVyIHx8IDE7XG4gICAgfVxuICAgIFxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZSArICdfXycgKyB0aGlzLm9yZGVyO1xuICAgIH1cblxuICAgIGdldCBoaWRkZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWRkZW4gfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0IGhpZGRlbihoaWRkZW46IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGhpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oaWRkZW4gPSBoaWRkZW47XG4gICAgfVxuXG4gICAgZ2V0IG9uUGFyZW50RmllbGRWYWx1ZUNoYW5nZUZuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEub25QYXJlbnRGaWVsZFZhbHVlQ2hhbmdlIHx8IG51bGw7XG4gICAgfVxuXG4gICAgc2V0IGRpc2FibGUocHJvcCkge1xuICAgICAgICB0aGlzLmZvcm1Hb3VwLmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICBzZXQgZW5hYmxlKHByb3ApIHtcbiAgICAgICAgdGhpcy5mb3JtR291cC5lbmFibGUoKTtcbiAgICB9XG5cbiAgICBnZXQgZm9ybVJlZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbn1cbiJdfQ==