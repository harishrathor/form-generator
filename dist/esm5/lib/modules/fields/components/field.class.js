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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL2ZpZWxkLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUF5QixVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVyxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7OztBQUk1Qiw0Q0FJQzs7O0lBSEEsNkNBQWE7O0lBQ2Isa0RBQWtCOztJQUNsQix1REFBd0I7O0FBRXpCO0lBMEJJLGVBQXNCLFFBQW9CLEVBQVksU0FBb0IsRUFBWSxpQkFBbUMsRUFBWSxTQUEwQixFQUFZLFlBQXlCO1FBQTlLLGFBQVEsR0FBUixRQUFRLENBQVk7UUFBWSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVksc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFZLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQVksaUJBQVksR0FBWixZQUFZLENBQWE7UUFDaE0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFTSwwQkFBVTs7O0lBQWpCO1FBQ0ksSUFBSTtZQUNBLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMs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QkFBSSwyQkFBUTs7OztRQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkJBQVE7Ozs7UUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQ3hDLENBQUM7OztPQUFBOztnQkE3ZEosVUFBVTs7OztnQkFWNEIsVUFBVTtnQkFBRSxTQUFTO2dCQUZuRCxnQkFBZ0I7Z0JBRGhCLGVBQWU7Z0JBRGYsV0FBVzs7OzJCQWlCZixLQUFLO3dCQUdMLEtBQUs7Z0NBR0wsS0FBSztnQ0FHTCxLQUFLO3lCQUdMLEtBQUs7O0lBZ2RWLFlBQUM7Q0FBQSxBQS9kRCxJQStkQztTQTlkWSxLQUFLOzs7SUFFZCx5QkFDYzs7SUFFZCxzQkFDaUI7O0lBRWpCLDhCQUNtQjs7SUFFbkIsOEJBQ21COztJQUVuQix1QkFDWTs7Ozs7SUFFWiw0QkFBMkI7Ozs7O0lBQzNCLDBCQUF5Qjs7Ozs7SUFDekIsa0NBQWlDOzs7OztJQUNqQywrQkFBOEI7Ozs7O0lBQzlCLG9DQUFtQzs7Ozs7SUFDbkMsd0JBQTJCOzs7OztJQUMzQiwyQkFBOEI7Ozs7O0lBRWxCLHlCQUE4Qjs7Ozs7SUFBRSwwQkFBOEI7Ozs7O0lBQUUsa0NBQTZDOzs7OztJQUFFLDBCQUFvQzs7Ozs7SUFBRSw2QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9kZWZhdWx0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3ZhbGlkYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJbnB1dCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEluamVjdGFibGUsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuXHJcblxyXG5pbnRlcmZhY2UgRXZlbnRIYW5kbGVyQ2FsbGJhY2tJbnRlcmZhY2Uge1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRhcmd1bWVudHM/OiBhbnlbXTtcclxuXHRoYW5kbGVyRm5Pd25lcj86IHN0cmluZztcclxufVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaWVsZCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGZpZWxkRGVmOiBhbnk7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGZvcm1Db21wb25lbnQ6IGFueTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcGFnZUNvbXBvbmVudDogYW55O1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwYXJlbnQ6IGFueTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2Nzc0NsYXNzZXM6IGFueTtcclxuICAgIHByb3RlY3RlZCBfY3NzU3R5bGU6IGFueTtcclxuICAgIHByb3RlY3RlZCBfZXJyb3JNZXNzYWdlRGF0YTogYW55O1xyXG4gICAgcHJvdGVjdGVkIF9ldmVudHNEYXRhT2JqOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgX3ZhbGlkYXRpb25zRGF0YU9iajogYW55O1xyXG4gICAgcHJvdGVjdGVkIF9oaWRkZW46IGJvb2xlYW47XHJcbiAgICBwcm90ZWN0ZWQgX2hpZGVMYWJlbDogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtUmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByb3RlY3RlZCBfdmFsaWRhdG9yU2VydmljZTogVmFsaWRhdG9yU2VydmljZSwgcHJvdGVjdGVkIF9kZWZhdWx0czogRGVmYXVsdHNTZXJ2aWNlLCBwcm90ZWN0ZWQgX2h0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50c0RhdGFPYmogPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3JNZXNzYWdlRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0aW9uc0RhdGFPYmogPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5faGlkZUxhYmVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgICB9XHJcblxyXG4gICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAgdGhpcy5fYWZ0ZXJWaWV3SW5pdCgpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgcHJvdGVjdGVkIF9hZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDc3NDbGFzc2VzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgYCR7dGhpcy5ncmlkV2lkdGhDbGFzc30gJHt0aGlzLnR5cGV9IGZvcm0tZmllbGRgKTtcclxuICAgICAgICAgICAgdGhpcy5fYXBwbHlFdmVudHMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERlZi5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkUmVmO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKGZpZWxkLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGVmLmlzUGFyZW50ICYmIHRoaXMuZmllbGREZWYuY2hpbGRyZW4gJiYgdGhpcy5maWVsZERlZi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh0aGlzLnBhcmVudC5vblBhcmVudEZpZWxkVmFsdWVDaGFuZ2UuYmluZCh0aGlzLnBhcmVudCwgdGhpcy5uYW1lLCB0aGlzLmZpZWxkRGVmLmNoaWxkcmVuKSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oaWRlTGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmxhYmVsUmVmLCAnbGFiZWwnLCB0aGlzLmxhYmVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxSZWYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgcHJvdGVjdGVkIF9hcHBseUV2ZW50cygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERlZi5ldmVudHMgJiYgdGhpcy5maWVsZERlZi5ldmVudHMuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFJlZiA9IHRoaXMuZmllbGRSZWY7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRSZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGVmLmV2ZW50cy5mb3JFYWNoKGV2ZW50RGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50RGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFja3NBcnIgPSBldmVudERhdGEuY2FsbGJhY2tzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NBcnIuZm9yRWFjaCggY2FsYmFja0RhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tGbiA9IHRoaXMuX2dldEV2ZW50Q2FsbGJhY2soZXZlbnROYW1lLCBjYWxiYWNrRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tGbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkUmVmLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFja0ZuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZ2V0RXZlbnRDYWxsYmFjayhldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2tEYXRhOiBFdmVudEhhbmRsZXJDYWxsYmFja0ludGVyZmFjZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrTmFtZSA9IGNhbGxiYWNrRGF0YS5uYW1lO1xyXG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrRGF0YS5hcmd1bWVudHMpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrRGF0YS5hcmd1bWVudHMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlckZuT3duZXIgPSB0aGlzLl9nZXRDYWxsYmFja093bmVyKGNhbGxiYWNrRGF0YS5oYW5kbGVyRm5Pd25lcik7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyRm5Pd25lciAmJiBoYW5kbGVyRm5Pd25lcltjYWxsYmFja05hbWVdICYmIHR5cGVvZiBoYW5kbGVyRm5Pd25lcltjYWxsYmFja05hbWVdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudEhhbmRsZXIuYmluZCh0aGlzLCBjYWxsYmFja0RhdGEuaGFuZGxlckZuT3duZXIsIGNhbGxiYWNrTmFtZSwgY2FsbGJhY2tEYXRhLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2FsbGJhY2sgZnVuY3Rpb24gJHtjYWxsYmFja05hbWV9IGZvciBldmVudCAke2V2ZW50TmFtZX0gZG9lcyBub3QgZXhpc3QgaW4gYCwgaGFuZGxlckZuT3duZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXZlbnRIYW5kbGVyKG93bmVyVHlwZTogYW55LCBmbk5hbWU6IHN0cmluZywgYXJnc0FycjogYW55LCBldmVudGRhdGE/OiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIWFyZ3NBcnIpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NBcnIgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcmdzQXJyID0gT2JqZWN0LmFzc2lnbihbXSwgYXJnc0Fycik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrRm5Pd25lciA9IHRoaXMuX2dldENhbGxiYWNrT3duZXIob3duZXJUeXBlKTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50ZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgYXJnc0Fyci5wdXNoKGV2ZW50ZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrRm5Pd25lcltmbk5hbWVdLmFwcGx5KGNhbGxiYWNrRm5Pd25lciwgYXJnc0Fycik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZ2V0Q2FsbGJhY2tPd25lcihvd25lclR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghb3duZXJUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBvd25lclR5cGUgPSAnRic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrRm5Pd25lciA9IHRoaXMuZm9ybUNvbXBvbmVudDtcclxuICAgICAgICAgICAgaWYgKG93bmVyVHlwZSA9PT0gJ1AnKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja0ZuT3duZXIgPSB0aGlzLnBhZ2VDb21wb25lbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG93bmVyVHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrRm5Pd25lciA9IG93bmVyVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tGbk93bmVyO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBwcm90ZWN0ZWQgX2FkZENzc0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNwYWNlU2VwYXJhdGVkQ2xhc3Nlczogc3RyaW5nKSB7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICBjb25zdCBjbGFzc2VzQXJyID0gc3BhY2VTZXBhcmF0ZWRDbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgICBjbGFzc2VzQXJyLmZvckVhY2goKGNzc0NsYXNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBjc3NDbGFzcyk7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgcHJvdGVjdGVkIF9pbml0KCkge1xyXG4gICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl9oaWRkZW4gPSB0aGlzLmZpZWxkRGVmLmhpZGRlbiB8fCBmYWxzZTtcclxuICAgICAgICAgICAgIHRoaXMuX2hpZGVMYWJlbCA9IHRoaXMuZmllbGREZWYuaGlkZUxhYmVsIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5maWVsZHNDb21wb25lbnRbdGhpcy5jb2RlXSA9IHRoaXM7XHJcbiAgICAgICAgICAgICB0aGlzLl9zdG9yZUFycmF5c0luT2JqZWN0cygpO1xyXG4gICAgICAgICAgICAgdGhpcy5faW5pdENzc0NsYXNzZXMoKTtcclxuICAgICAgICAgICAgIHRoaXMuX2luaXRDc3NTdHlsZSgpO1xyXG4gICAgICAgICAgICAgdGhpcy5fYXBwbHlWYWxpZGF0aW9ucygpO1xyXG4gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zdG9yZUFycmF5c0luT2JqZWN0cygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25zLmZvckVhY2godmFsaWRhdGlvbkRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsaWRhdGlvbnNEYXRhT2JqW3ZhbGlkYXRpb25EYXRhLm5hbWVdID0gdmFsaWRhdGlvbkRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGV2ZW50RGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNEYXRhT2JqW2V2ZW50RGF0YS5uYW1lXSA9IGV2ZW50RGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2FwcGx5VmFsaWRhdGlvbnMoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREZWYudmFsaWRhdGlvbnMgJiYgdGhpcy5maWVsZERlZi52YWxpZGF0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhc3luY1ZhbGlkYXRvcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGREZWYudmFsaWRhdGlvbnMuZm9yRWFjaCh2YWxpZGF0aW9uRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdG9yRGF0YSA9IHRoaXMuX3ZhbGlkYXRvclNlcnZpY2UuZ2V0VmFsaWRhdG9yKHZhbGlkYXRpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdG9yRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luY1ZhbGlkYXRvcnMucHVzaCh2YWxpZGF0b3JEYXRhLnZhbGlkYXRpb25Gbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yTWVzc2FnZURhdGFbdmFsaWRhdGlvbkRhdGEubmFtZV0gPSB2YWxpZGF0b3JEYXRhLm1lc3NhZ2VEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFzeW5jVmFsaWRhdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbGlkYXRvcnMoYXN5bmNWYWxpZGF0b3JzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9pbml0Q3NzQ2xhc3NlcygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lckNsYXNzZXMgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXJDbGFzc2VzID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkQ2xhc3NlcyA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbENsYXNzZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyQ2xhc3Nlc1tgbGFiZWwtJHt0aGlzLmxhYmVsUG9zaXRpb259YF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBmaWVsZENvbnRhaW5lckNsYXNzZXNbYCR7dGhpcy5pZH1gXSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyQ2xhc3Nlc1tgJHt0aGlzLnR5cGV9LWZpZWxkLWNvbnRhaW5lcmBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGFiZWxDbGFzc2VzW2B0ZXh0LSR7dGhpcy5maWVsZERlZi5sYWJlbEFsaWdubWVudH1gXSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyQ2xhc3Nlc1tgJHt0aGlzLnR5cGV9LWlucHV0LWNvbnRhaW5lcmBdID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzc2VzWydwci0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzc2VzWydwbC0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDdXN0b21TdHlsZSAmJiB0aGlzLmZpZWxkRGVmLmZvcm1Db2x1bW5zID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbENsYXNzZXNbJ3ByLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsYWJlbENsYXNzZXNbJ3BsLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lckNsYXNzZXNbJ3ByLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lckNsYXNzZXNbJ3BsLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbnMgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsUG9zaXRpb24gPT09ICd0b3AnIHx8IHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbENsYXNzZXNbJ3ByLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDbGFzc2VzWydwbC0zJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyQ2xhc3Nlc1sncHItMyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lckNsYXNzZXNbJ3BsLTMnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Nzc0NsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZENvbnRhaW5lckNsYXNzZXMsXHJcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lckNsYXNzZXMsXHJcbiAgICAgICAgICAgICAgICBmaWVsZENsYXNzZXMsXHJcbiAgICAgICAgICAgICAgICBsYWJlbENsYXNzZXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfaW5pdENzc1N0eWxlKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyU3R5bGUgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXJTdHlsZSA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZFN0eWxlID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsU3R5bGUgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0N1c3RvbVN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWJlbFdpZHRoICYmIHRoaXMuZmllbGRXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsU3R5bGVbJ3dpZHRoJ10gPSB0aGlzLmxhYmVsV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXJTdHlsZVsnd2lkdGgnXSA9IHRoaXMuZmllbGRXaWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0hJRCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jc3NTdHlsZSA9IHtcclxuICAgICAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyU3R5bGUsXHJcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lclN0eWxlLFxyXG4gICAgICAgICAgICAgICAgZmllbGRTdHlsZSxcclxuICAgICAgICAgICAgICAgIGxhYmVsU3R5bGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuY29kZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3JkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYub3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZvcm1PcmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5mb3JtT3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNvZGV9X18ke3RoaXMuZm9ybU9yZGVyfV9fJHt0aGlzLm9yZGVyfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbHVtbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuY29sdW1ucztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFiZWxQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5sYWJlbFBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgbGFiZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYubGFiZWw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBncmlkV2lkdGhDbGFzcygpIHtcclxuICAgICAgICBjb25zdCBjb2wgPSAxMiAvIE51bWJlcih0aGlzLmNvbHVtbnMpO1xyXG4gICAgICAgIHJldHVybiBgY29sLXNtLSR7Y29sfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBsYWNlaG9sZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLnBsYWNlaG9sZGVyIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoaWRkZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZGRlbiB8fCBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGlkZGVuKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh2YWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hpZGRlbiA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGlzYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLmNvbnRyb2wuZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGRpc2FibGUocHJvcDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGVuYWJsZShwcm9wOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sLmVuYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb250cm9sKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwLmNvbnRyb2xzW3RoaXMubmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlZmF1bHRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5kZWZhdWx0VmFsdWUgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlbHBUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmhlbHBUZXh0IHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVycm9ycygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvcnNEYXRhID0gW107XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2wgJiYgdGhpcy5jb250cm9sLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbEVycm9ycyA9IHRoaXMuY29udHJvbC5lcnJvcnM7XHJcbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgZXJyb3JOYW1lIGluIGNvbnRyb2xFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZXJyb3JNZXNzYWdlRGF0YVtlcnJvck5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yc0RhdGEucHVzaCh0aGlzLl9lcnJvck1lc3NhZ2VEYXRhW2Vycm9yTmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3JzRGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpZWxkUmVmKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5wdXRDb250YWluZXJSZWYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmlkfSAuaW5wdXQtY29udGFpbmVyYCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxhYmVsUmVmKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5pZH0gLmZpZWxkLWxhYmVsYCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByZWZpeCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5wcmVmaXggfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN1ZmZpeCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5zdWZmaXggfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxhYmVsV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYubGFiZWxXaWR0aCB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWVsZFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLmZpZWxkV2lkdGggfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsaWRhdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYudmFsaWRhdGlvbnMgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGV2ZW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5ldmVudHMgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc0N1c3RvbVN0eWxlKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2RlZmF1bHRzLkVYQ0VQVElPTkFMX1NUWUxFRF9GSUVMRFNbdGhpcy50eXBlXSB8fCBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGlkZUxhYmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oaWRlTGFiZWwgfHwgZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhpZGVMYWJlbCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMubGFiZWxSZWYsICdoaWRkZW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmxhYmVsUmVmLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hpZGVMYWJlbCA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3NzQ2xhc3NlcygpIHtcclxuICAgICAgICB0aGlzLl9jc3NDbGFzc2VzLmZpZWxkQ2xhc3NlcyA9IF8uYXNzaWduKFxyXG4gICAgICAgICAgICB0aGlzLl9jc3NDbGFzc2VzLmZpZWxkQ2xhc3NlcyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8naXMtdmFsaWQnOiB0aGlzLnZhbGlkLFxyXG4gICAgICAgICAgICAgICAgJ2lzLWludmFsaWQnOiAhdGhpcy52YWxpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3NlcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3NzU3R5bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nzc1N0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmb3JtQ29kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5mb3JtQ29kZSB8fCAnJztcclxuICAgIH1cclxuXHJcbn1cclxuIl19