/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from './../field.class';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
var CSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CSelectComponent, _super);
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
export { CSelectComponent };
if (false) {
    /** @type {?} */
    CSelectComponent.prototype.ngSelectComponent;
    /**
     * @type {?}
     * @protected
     */
    CSelectComponent.prototype._options;
    /**
     * @type {?}
     * @protected
     */
    CSelectComponent.prototype._eventsAndCallbacksMapping;
    /** @type {?} */
    CSelectComponent.prototype.loading;
    /** @type {?} */
    CSelectComponent.prototype.filterOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL2Mtc2VsZWN0L2Mtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RTtJQU9zQyw0Q0FBSztJQVAzQztRQUFBLHFFQXVGQztRQXpFVSxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBb0RoQixtQkFBYTs7Ozs7UUFBRyxVQUFDLElBQVksRUFBRSxJQUFTO1lBQzNDLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNoQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxFQUFBOztJQWtCTCxDQUFDOzs7OztJQXZFYSxnQ0FBSzs7OztJQUFmO1FBQ0ksSUFBSTtZQUNBLGlCQUFNLEtBQUssV0FBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDOUM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7OztJQUVTLHVDQUFZOzs7O0lBQXRCO1FBQUEsaUJBdUJDO1FBdEJHLElBQUk7WUFDQSxJQUFJLENBQUMsMEJBQTBCLEdBQUcsRUFBRSxDQUFDO1lBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtnQkFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLFNBQVM7O3dCQUM1QixTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUk7O3dCQUMxQixZQUFZLEdBQUcsU0FBUyxDQUFDLFNBQVM7b0JBQ3hDLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ2hELFlBQVksQ0FBQyxPQUFPOzs7O29CQUFDLFVBQUEsV0FBVzs7NEJBQ3RCLFVBQVUsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQzt3QkFDakUsSUFBSSxVQUFVLEVBQUU7NEJBQ1osSUFBSTtnQ0FDQSxLQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzZCQUMvRDs0QkFBQyxPQUFPLEtBQUssRUFBRTtnQ0FDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUN0Qjt5QkFDSjtvQkFDTCxDQUFDLEVBQUMsQ0FBQztnQkFDUCxDQUFDLEVBQUMsQ0FBQzthQUNWO1NBQ0o7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7Ozs7SUFFTSw2Q0FBa0I7Ozs7O0lBQXpCLFVBQTBCLFNBQWlCLEVBQUUsU0FBZTtRQUN4RCxJQUFJO1lBQ0MsSUFBSSxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3RHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUEsUUFBUTtvQkFDdkQsSUFBSSxTQUFTLEVBQUU7d0JBQ1gsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUN2Qjt5QkFBTTt3QkFDSCxRQUFRLEVBQUUsQ0FBQztxQkFDZDtnQkFDTCxDQUFDLEVBQUMsQ0FBQzthQUNOO1NBQ0o7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBT0Qsc0JBQUkscUNBQU87Ozs7UUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFFRCxVQUFZLE9BQU87WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHNDQUFROzs7O1FBQVo7O2dCQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUs7WUFDbEMsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFBRTtnQkFDL0MsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ3JDO1lBQ0QsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7O2dCQXJGSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHN3REFBd0M7b0JBRXhDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFFeEM7OztvQ0FHSSxTQUFTLFNBQUMsVUFBVTs7SUE4RXpCLHVCQUFDO0NBQUEsQUF2RkQsQ0FPc0MsS0FBSyxHQWdGMUM7U0FoRlksZ0JBQWdCOzs7SUFFekIsNkNBQThDOzs7OztJQUU5QyxvQ0FBd0I7Ozs7O0lBRXhCLHNEQUEwQzs7SUFDMUMsbUNBQXVCOztJQW9EdkIseUNBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vLi4vZmllbGQuY2xhc3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjLXNlbGVjdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Mtc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi4vY29tbW9uU3R5bGUuY3NzJywgJy4uL25nLXNlbGVjdC50aGVtZS5jc3MnLCAnYy1zZWxlY3QuY29tcG9uZW50LmNzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcblxufSlcbmV4cG9ydCBjbGFzcyBDU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgRmllbGQge1xuXG4gICAgQFZpZXdDaGlsZCgnbmdTZWxlY3QnKSBuZ1NlbGVjdENvbXBvbmVudDogYW55O1xuXG4gICAgcHJvdGVjdGVkIF9vcHRpb25zOiBhbnk7XG5cbiAgICBwcm90ZWN0ZWQgX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmc6IGFueTtcbiAgICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIF9pbml0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3VwZXIuX2luaXQoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuZmllbGREZWYub3B0aW9ucyB8fCBbXTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYXBwbHlFdmVudHMoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nID0ge307XG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERlZi5ldmVudHMgJiYgdGhpcy5maWVsZERlZi5ldmVudHMuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREZWYuZXZlbnRzLmZvckVhY2goZXZlbnREYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50RGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzQXJyID0gZXZlbnREYXRhLmNhbGxiYWNrcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmdbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzQXJyLmZvckVhY2goY2FsYmFja0RhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrRm4gPSB0aGlzLl9nZXRFdmVudENhbGxiYWNrKGV2ZW50TmFtZSwgY2FsYmFja0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja0ZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFja0ZuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjYWxsRXZlbnRDYWxsYmFja3MoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50RGF0YT86IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgIGlmICh0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nW2V2ZW50TmFtZV0gJiYgdGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZmlsdGVyT3B0aW9ucyA9ICh0ZXJtOiBzdHJpbmcsIGl0ZW06IGFueSkgPT4ge1xuICAgICAgICB0ZXJtID0gdGVybS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gaXRlbS5sYWJlbC50b0xvY2FsZUxvd2VyQ2FzZSgpLmluZGV4T2YodGVybSkgPiAtMTtcbiAgICB9XG5cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMgfHwgW107XG4gICAgfVxuXG4gICAgc2V0IG9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBnZXQgbXVsdGlwbGUoKSB7XG4gICAgICAgIGxldCBtdWx0aXBsZSA9IHRoaXMudHlwZSA9PT0gJ01TTCc7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZERlZi5tdWx0aXBsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG11bHRpcGxlID0gdGhpcy5maWVsZERlZi5tdWx0aXBsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbXVsdGlwbGU7XG4gICAgfVxuXG59XG4iXX0=