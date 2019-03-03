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
            this._cssClasses.fieldClasses = _.assign(this._cssClasses.fieldClasses, {
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
export { Field };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvZmllbGQuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQXlCLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7O0FBSTVCLDRDQUlDOzs7SUFIQSw2Q0FBYTs7SUFDYixrREFBa0I7O0lBQ2xCLHVEQUF3Qjs7QUFFekI7SUEwQkksZUFBc0IsUUFBb0IsRUFBWSxTQUFvQixFQUFZLGlCQUFtQyxFQUFZLFNBQTBCLEVBQVksWUFBeUI7UUFBOUssYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFZLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBWSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQVksY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFBWSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUNoTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVNLDBCQUFVOzs7SUFBakI7UUFDSSxJQUFJO1lBQ0EsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1lBQzlCLElBQUks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QUVELHNCQUFJLDJCQUFROzs7O1FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQkFBUTs7OztRQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7O2dCQTdkSixVQUFVOzs7O2dCQVY0QixVQUFVO2dCQUFFLFNBQVM7Z0JBRm5ELGdCQUFnQjtnQkFEaEIsZUFBZTtnQkFEZixXQUFXOzs7MkJBaUJmLEtBQUs7d0JBR0wsS0FBSztnQ0FHTCxLQUFLO2dDQUdMLEtBQUs7eUJBR0wsS0FBSzs7SUFnZFYsWUFBQztDQUFBLEFBL2RELElBK2RDO1NBOWRZLEtBQUs7OztJQUVkLHlCQUNjOztJQUVkLHNCQUNpQjs7SUFFakIsOEJBQ21COztJQUVuQiw4QkFDbUI7O0lBRW5CLHVCQUNZOzs7OztJQUVaLDRCQUEyQjs7Ozs7SUFDM0IsMEJBQXlCOzs7OztJQUN6QixrQ0FBaUM7Ozs7O0lBQ2pDLCtCQUE4Qjs7Ozs7SUFDOUIsb0NBQW1DOzs7OztJQUNuQyx3QkFBMkI7Ozs7O0lBQzNCLDJCQUE4Qjs7Ozs7SUFFbEIseUJBQThCOzs7OztJQUFFLDBCQUE4Qjs7Ozs7SUFBRSxrQ0FBNkM7Ozs7O0lBQUUsMEJBQW9DOzs7OztJQUFFLDZCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdmFsaWRhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5qZWN0YWJsZSwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBFdmVudEhhbmRsZXJDYWxsYmFja0ludGVyZmFjZSB7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGFyZ3VtZW50cz86IGFueVtdO1xyXG5cdGhhbmRsZXJGbk93bmVyPzogc3RyaW5nO1xyXG59XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpZWxkIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZmllbGREZWY6IGFueTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZm9ybUNvbXBvbmVudDogYW55O1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwYWdlQ29tcG9uZW50OiBhbnk7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHBhcmVudDogYW55O1xyXG5cclxuICAgIHByb3RlY3RlZCBfY3NzQ2xhc3NlczogYW55O1xyXG4gICAgcHJvdGVjdGVkIF9jc3NTdHlsZTogYW55O1xyXG4gICAgcHJvdGVjdGVkIF9lcnJvck1lc3NhZ2VEYXRhOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgX2V2ZW50c0RhdGFPYmo6IGFueTtcclxuICAgIHByb3RlY3RlZCBfdmFsaWRhdGlvbnNEYXRhT2JqOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgX2hpZGRlbjogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBfaGlkZUxhYmVsOiBib29sZWFuO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1SZWY6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJvdGVjdGVkIF92YWxpZGF0b3JTZXJ2aWNlOiBWYWxpZGF0b3JTZXJ2aWNlLCBwcm90ZWN0ZWQgX2RlZmF1bHRzOiBEZWZhdWx0c1NlcnZpY2UsIHByb3RlY3RlZCBfaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzRGF0YU9iaiA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvck1lc3NhZ2VEYXRhID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRpb25zRGF0YU9iaiA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRlTGFiZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5faGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgICB0aGlzLl9hZnRlclZpZXdJbml0KCk7XHJcbiAgICAgfVxyXG5cclxuICAgICBwcm90ZWN0ZWQgX2FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENzc0NsYXNzZXModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCBgJHt0aGlzLmdyaWRXaWR0aENsYXNzfSAke3RoaXMudHlwZX0gZm9ybS1maWVsZGApO1xyXG4gICAgICAgICAgICB0aGlzLl9hcHBseUV2ZW50cygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGVmLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRSZWY7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZmllbGQsICdkaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmRlZmF1bHRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREZWYuaXNQYXJlbnQgJiYgdGhpcy5maWVsZERlZi5jaGlsZHJlbiAmJiB0aGlzLmZpZWxkRGVmLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHRoaXMucGFyZW50Lm9uUGFyZW50RmllbGRWYWx1ZUNoYW5nZS5iaW5kKHRoaXMucGFyZW50LCB0aGlzLm5hbWUsIHRoaXMuZmllbGREZWYuY2hpbGRyZW4pICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGVMYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMubGFiZWxSZWYsICdsYWJlbCcsIHRoaXMubGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbFJlZi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBwcm90ZWN0ZWQgX2FwcGx5RXZlbnRzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGVmLmV2ZW50cyAmJiB0aGlzLmZpZWxkRGVmLmV2ZW50cy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkUmVmID0gdGhpcy5maWVsZFJlZjtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZFJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREZWYuZXZlbnRzLmZvckVhY2goZXZlbnREYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnREYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrc0FyciA9IGV2ZW50RGF0YS5jYWxsYmFja3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc0Fyci5mb3JFYWNoKCBjYWxiYWNrRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFja0ZuID0gdGhpcy5fZ2V0RXZlbnRDYWxsYmFjayhldmVudE5hbWUsIGNhbGJhY2tEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja0ZuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRSZWYuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrRm4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9nZXRFdmVudENhbGxiYWNrKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFja0RhdGE6IEV2ZW50SGFuZGxlckNhbGxiYWNrSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tOYW1lID0gY2FsbGJhY2tEYXRhLm5hbWU7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2tEYXRhLmFyZ3VtZW50cykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tEYXRhLmFyZ3VtZW50cyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyRm5Pd25lciA9IHRoaXMuX2dldENhbGxiYWNrT3duZXIoY2FsbGJhY2tEYXRhLmhhbmRsZXJGbk93bmVyKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZXJGbk93bmVyICYmIGhhbmRsZXJGbk93bmVyW2NhbGxiYWNrTmFtZV0gJiYgdHlwZW9mIGhhbmRsZXJGbk93bmVyW2NhbGxiYWNrTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKHRoaXMsIGNhbGxiYWNrRGF0YS5oYW5kbGVyRm5Pd25lciwgY2FsbGJhY2tOYW1lLCBjYWxsYmFja0RhdGEuYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDYWxsYmFjayBmdW5jdGlvbiAke2NhbGxiYWNrTmFtZX0gZm9yIGV2ZW50ICR7ZXZlbnROYW1lfSBkb2VzIG5vdCBleGlzdCBpbiBgLCBoYW5kbGVyRm5Pd25lcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBldmVudEhhbmRsZXIob3duZXJUeXBlOiBhbnksIGZuTmFtZTogc3RyaW5nLCBhcmdzQXJyOiBhbnksIGV2ZW50ZGF0YT86IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghYXJnc0Fycikge1xyXG4gICAgICAgICAgICAgICAgYXJnc0FyciA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyZ3NBcnIgPSBPYmplY3QuYXNzaWduKFtdLCBhcmdzQXJyKTtcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tGbk93bmVyID0gdGhpcy5fZ2V0Q2FsbGJhY2tPd25lcihvd25lclR5cGUpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzQXJyLnB1c2goZXZlbnRkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tGbk93bmVyW2ZuTmFtZV0uYXBwbHkoY2FsbGJhY2tGbk93bmVyLCBhcmdzQXJyKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9nZXRDYWxsYmFja093bmVyKG93bmVyVHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFvd25lclR5cGUpIHtcclxuICAgICAgICAgICAgICAgIG93bmVyVHlwZSA9ICdGJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2tGbk93bmVyID0gdGhpcy5mb3JtQ29tcG9uZW50O1xyXG4gICAgICAgICAgICBpZiAob3duZXJUeXBlID09PSAnUCcpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrRm5Pd25lciA9IHRoaXMucGFnZUNvbXBvbmVudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3duZXJUeXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGbk93bmVyID0gb3duZXJUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFja0ZuT3duZXI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIHByb3RlY3RlZCBfYWRkQ3NzQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgc3BhY2VTZXBhcmF0ZWRDbGFzc2VzOiBzdHJpbmcpIHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXNBcnIgPSBzcGFjZVNlcGFyYXRlZENsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgIGNsYXNzZXNBcnIuZm9yRWFjaCgoY3NzQ2xhc3MpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzKTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IHRoaXMuZmllbGREZWYuaGlkZGVuIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICAgdGhpcy5faGlkZUxhYmVsID0gdGhpcy5maWVsZERlZi5oaWRlTGFiZWwgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmZpZWxkc0NvbXBvbmVudFt0aGlzLmNvZGVdID0gdGhpcztcclxuICAgICAgICAgICAgIHRoaXMuX3N0b3JlQXJyYXlzSW5PYmplY3RzKCk7XHJcbiAgICAgICAgICAgICB0aGlzLl9pbml0Q3NzQ2xhc3NlcygpO1xyXG4gICAgICAgICAgICAgdGhpcy5faW5pdENzc1N0eWxlKCk7XHJcbiAgICAgICAgICAgICB0aGlzLl9hcHBseVZhbGlkYXRpb25zKCk7XHJcbiAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX3N0b3JlQXJyYXlzSW5PYmplY3RzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbnMuZm9yRWFjaCh2YWxpZGF0aW9uRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92YWxpZGF0aW9uc0RhdGFPYmpbdmFsaWRhdGlvbkRhdGEubmFtZV0gPSB2YWxpZGF0aW9uRGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZXZlbnREYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c0RhdGFPYmpbZXZlbnREYXRhLm5hbWVdID0gZXZlbnREYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfYXBwbHlWYWxpZGF0aW9ucygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERlZi52YWxpZGF0aW9ucyAmJiB0aGlzLmZpZWxkRGVmLnZhbGlkYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFzeW5jVmFsaWRhdG9ycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZERlZi52YWxpZGF0aW9ucy5mb3JFYWNoKHZhbGlkYXRpb25EYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0b3JEYXRhID0gdGhpcy5fdmFsaWRhdG9yU2VydmljZS5nZXRWYWxpZGF0b3IodmFsaWRhdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3JEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9ycy5wdXNoKHZhbGlkYXRvckRhdGEudmFsaWRhdGlvbkZuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3JNZXNzYWdlRGF0YVt2YWxpZGF0aW9uRGF0YS5uYW1lXSA9IHZhbGlkYXRvckRhdGEubWVzc2FnZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2luaXRDc3NDbGFzc2VzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyQ2xhc3NlcyA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lckNsYXNzZXMgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRDbGFzc2VzID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgZmllbGRDb250YWluZXJDbGFzc2VzW2BsYWJlbC0ke3RoaXMubGFiZWxQb3NpdGlvbn1gXSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyQ2xhc3Nlc1tgJHt0aGlzLmlkfWBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgZmllbGRDb250YWluZXJDbGFzc2VzW2Ake3RoaXMudHlwZX0tZmllbGQtY29udGFpbmVyYF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBsYWJlbENsYXNzZXNbYHRleHQtJHt0aGlzLmZpZWxkRGVmLmxhYmVsQWxpZ25tZW50fWBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgaW5wdXRDb250YWluZXJDbGFzc2VzW2Ake3RoaXMudHlwZX0taW5wdXQtY29udGFpbmVyYF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYWJlbFBvc2l0aW9uID09PSAnbGVmdCcgfHwgdGhpcy5sYWJlbFBvc2l0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbENsYXNzZXNbJ3ByLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbENsYXNzZXNbJ3BsLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0N1c3RvbVN0eWxlICYmIHRoaXMuZmllbGREZWYuZm9ybUNvbHVtbnMgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1sncHItMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1sncGwtMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyQ2xhc3Nlc1sncHItMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyQ2xhc3Nlc1sncGwtMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1ucyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gJ3RvcCcgfHwgdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1sncHItMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbENsYXNzZXNbJ3BsLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJDbGFzc2VzWydwci0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyQ2xhc3Nlc1sncGwtMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fY3NzQ2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyQ2xhc3NlcyxcclxuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyQ2xhc3NlcyxcclxuICAgICAgICAgICAgICAgIGZpZWxkQ2xhc3NlcyxcclxuICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3Nlc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9pbml0Q3NzU3R5bGUoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRDb250YWluZXJTdHlsZSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lclN0eWxlID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkU3R5bGUgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxTdHlsZSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ3VzdG9tU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsV2lkdGggJiYgdGhpcy5maWVsZFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHlsZVsnd2lkdGgnXSA9IHRoaXMubGFiZWxXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lclN0eWxlWyd3aWR0aCddID0gdGhpcy5maWVsZFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnSElEJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Nzc1N0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgZmllbGRDb250YWluZXJTdHlsZSxcclxuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyU3R5bGUsXHJcbiAgICAgICAgICAgICAgICBmaWVsZFN0eWxlLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxTdHlsZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5jb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvcmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5vcmRlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZm9ybU9yZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmZvcm1PcmRlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29kZX1fXyR7dGhpcy5mb3JtT3JkZXJ9X18ke3RoaXMub3JkZXJ9YDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29sdW1ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5jb2x1bW5zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYWJlbFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmxhYmVsUG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBsYWJlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5sYWJlbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGdyaWRXaWR0aENsYXNzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IDEyIC8gTnVtYmVyKHRoaXMuY29sdW1ucyk7XHJcbiAgICAgICAgcmV0dXJuIGBjb2wtc20tJHtjb2x9YDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGxhY2Vob2xkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYucGxhY2Vob2xkZXIgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhpZGRlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGlkZGVuIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoaWRkZW4odmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faGlkZGVuID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkaXNhYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gIHRoaXMuY29udHJvbC5kaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGlzYWJsZShwcm9wOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sLmRpc2FibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZW5hYmxlKHByb3A6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbnRyb2woKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAuY29udHJvbHNbdGhpcy5uYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVmYXVsdFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmRlZmF1bHRWYWx1ZSB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVscFRleHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuaGVscFRleHQgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXJyb3JzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yc0RhdGEgPSBbXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbCAmJiB0aGlzLmNvbnRyb2wuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sRXJyb3JzID0gdGhpcy5jb250cm9sLmVycm9ycztcclxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBlcnJvck5hbWUgaW4gY29udHJvbEVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvck1lc3NhZ2VEYXRhW2Vycm9yTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzRGF0YS5wdXNoKHRoaXMuX2Vycm9yTWVzc2FnZURhdGFbZXJyb3JOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcnNEYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmllbGRSZWYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbnB1dENvbnRhaW5lclJlZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuaWR9IC5pbnB1dC1jb250YWluZXJgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFiZWxSZWYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmlkfSAuZmllbGQtbGFiZWxgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJlZml4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLnByZWZpeCB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3VmZml4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLnN1ZmZpeCB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFiZWxXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5sYWJlbFdpZHRoIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpZWxkV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuZmllbGRXaWR0aCB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWxpZGF0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi52YWxpZGF0aW9ucyB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXZlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmV2ZW50cyB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzQ3VzdG9tU3R5bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGVmYXVsdHMuRVhDRVBUSU9OQUxfU1RZTEVEX0ZJRUxEU1t0aGlzLnR5cGVdIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoaWRlTGFiZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZGVMYWJlbCB8fCBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGlkZUxhYmVsKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh2YWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5sYWJlbFJlZiwgJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubGFiZWxSZWYsICdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faGlkZUxhYmVsID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjc3NDbGFzc2VzKCkge1xyXG4gICAgICAgIHRoaXMuX2Nzc0NsYXNzZXMuZmllbGRDbGFzc2VzID0gXy5hc3NpZ24oXHJcbiAgICAgICAgICAgIHRoaXMuX2Nzc0NsYXNzZXMuZmllbGRDbGFzc2VzLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLydpcy12YWxpZCc6IHRoaXMudmFsaWQsXHJcbiAgICAgICAgICAgICAgICAnaXMtaW52YWxpZCc6ICF0aGlzLnZhbGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NDbGFzc2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjc3NTdHlsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzU3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZvcm1Db2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmZvcm1Db2RlIHx8ICcnO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=