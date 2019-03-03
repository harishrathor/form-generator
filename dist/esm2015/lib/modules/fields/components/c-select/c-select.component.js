/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from './../field.class';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
export class CSelectComponent extends Field {
    constructor() {
        super(...arguments);
        this.loading = false;
        this.filterOptions = (/**
         * @param {?} term
         * @param {?} item
         * @return {?}
         */
        (term, item) => {
            term = term.toLocaleLowerCase();
            return item.label.toLocaleLowerCase().indexOf(term) > -1;
        });
    }
    /**
     * @protected
     * @return {?}
     */
    _init() {
        try {
            super._init();
            this.options = this.fieldDef.options || [];
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _applyEvents() {
        try {
            this._eventsAndCallbacksMapping = {};
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                this.fieldDef.events.forEach((/**
                 * @param {?} eventData
                 * @return {?}
                 */
                eventData => {
                    /** @type {?} */
                    const eventName = eventData.name;
                    /** @type {?} */
                    const callbacksArr = eventData.callbacks;
                    this._eventsAndCallbacksMapping[eventName] = [];
                    callbacksArr.forEach((/**
                     * @param {?} calbackData
                     * @return {?}
                     */
                    calbackData => {
                        /** @type {?} */
                        const callbackFn = this._getEventCallback(eventName, calbackData);
                        if (callbackFn) {
                            try {
                                this._eventsAndCallbacksMapping[eventName].push(callbackFn);
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
    }
    /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    callEventCallbacks(eventName, eventData) {
        try {
            if (this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
                this._eventsAndCallbacksMapping[eventName].forEach((/**
                 * @param {?} callback
                 * @return {?}
                 */
                callback => {
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
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options || [];
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this._options = options;
    }
    /**
     * @return {?}
     */
    get multiple() {
        /** @type {?} */
        let multiple = this.type === 'MSL';
        if (typeof this.fieldDef.multiple !== 'undefined') {
            multiple = this.fieldDef.multiple;
        }
        return multiple;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL2Mtc2VsZWN0L2Mtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVXhFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxLQUFLO0lBUDNDOztRQWNXLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFvRGhCLGtCQUFhOzs7OztRQUFHLENBQUMsSUFBWSxFQUFFLElBQVMsRUFBRSxFQUFFO1lBQy9DLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNoQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxFQUFBO0lBa0JMLENBQUM7Ozs7O0lBdkVhLEtBQUs7UUFDWCxJQUFJO1lBQ0EsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDOUM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7OztJQUVTLFlBQVk7UUFDbEIsSUFBSTtZQUNBLElBQUksQ0FBQywwQkFBMEIsR0FBRyxFQUFFLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO2dCQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O2dCQUFDLFNBQVMsQ0FBQyxFQUFFOzswQkFDL0IsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJOzswQkFDMUIsWUFBWSxHQUFHLFNBQVMsQ0FBQyxTQUFTO29CQUN4QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNoRCxZQUFZLENBQUMsT0FBTzs7OztvQkFBQyxXQUFXLENBQUMsRUFBRTs7OEJBQ3pCLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQzt3QkFDakUsSUFBSSxVQUFVLEVBQUU7NEJBQ1osSUFBSTtnQ0FDQSxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzZCQUMvRDs0QkFBQyxPQUFPLEtBQUssRUFBRTtnQ0FDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUN0Qjt5QkFDSjtvQkFDTCxDQUFDLEVBQUMsQ0FBQztnQkFDUCxDQUFDLEVBQUMsQ0FBQzthQUNWO1NBQ0o7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7Ozs7SUFFTSxrQkFBa0IsQ0FBQyxTQUFpQixFQUFFLFNBQWU7UUFDeEQsSUFBSTtZQUNDLElBQUksSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN0RyxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxRQUFRLENBQUMsRUFBRTtvQkFDMUQsSUFBSSxTQUFTLEVBQUU7d0JBQ1gsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUN2Qjt5QkFBTTt3QkFDSCxRQUFRLEVBQUUsQ0FBQztxQkFDZDtnQkFDTCxDQUFDLEVBQUMsQ0FBQzthQUNOO1NBQ0o7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7O0lBT0QsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELElBQUksT0FBTyxDQUFDLE9BQU87UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBSSxRQUFROztZQUNKLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUs7UUFDbEMsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFBRTtZQUMvQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7U0FDckM7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOzs7WUFyRkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixzd0RBQXdDO2dCQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFFeEM7OztnQ0FHSSxTQUFTLFNBQUMsVUFBVTs7OztJQUFyQiw2Q0FBOEM7Ozs7O0lBRTlDLG9DQUF3Qjs7Ozs7SUFFeEIsc0RBQTBDOztJQUMxQyxtQ0FBdUI7O0lBb0R2Qix5Q0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi8uLi9maWVsZC5jbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Mtc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuLi9jb21tb25TdHlsZS5jc3MnLCAnLi4vbmctc2VsZWN0LnRoZW1lLmNzcycsICdjLXNlbGVjdC5jb21wb25lbnQuY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuXG59KVxuZXhwb3J0IGNsYXNzIENTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBGaWVsZCB7XG5cbiAgICBAVmlld0NoaWxkKCduZ1NlbGVjdCcpIG5nU2VsZWN0Q29tcG9uZW50OiBhbnk7XG5cbiAgICBwcm90ZWN0ZWQgX29wdGlvbnM6IGFueTtcblxuICAgIHByb3RlY3RlZCBfZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZzogYW55O1xuICAgIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgX2luaXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdXBlci5faW5pdCgpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5maWVsZERlZi5vcHRpb25zIHx8IFtdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9hcHBseUV2ZW50cygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmcgPSB7fTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGVmLmV2ZW50cyAmJiB0aGlzLmZpZWxkRGVmLmV2ZW50cy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERlZi5ldmVudHMuZm9yRWFjaChldmVudERhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnREYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFja3NBcnIgPSBldmVudERhdGEuY2FsbGJhY2tzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NBcnIuZm9yRWFjaChjYWxiYWNrRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tGbiA9IHRoaXMuX2dldEV2ZW50Q2FsbGJhY2soZXZlbnROYW1lLCBjYWxiYWNrRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmdbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrRm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGxFdmVudENhbGxiYWNrcyhldmVudE5hbWU6IHN0cmluZywgZXZlbnREYXRhPzogYW55KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmdbZXZlbnROYW1lXSAmJiB0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nW2V2ZW50TmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmdbZXZlbnROYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXZlbnREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBmaWx0ZXJPcHRpb25zID0gKHRlcm06IHN0cmluZywgaXRlbTogYW55KSA9PiB7XG4gICAgICAgIHRlcm0gPSB0ZXJtLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBpdGVtLmxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXJtKSA+IC0xO1xuICAgIH1cblxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucyB8fCBbXTtcbiAgICB9XG5cbiAgICBzZXQgb3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIGdldCBtdWx0aXBsZSgpIHtcbiAgICAgICAgbGV0IG11bHRpcGxlID0gdGhpcy50eXBlID09PSAnTVNMJztcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkRGVmLm11bHRpcGxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbXVsdGlwbGUgPSB0aGlzLmZpZWxkRGVmLm11bHRpcGxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtdWx0aXBsZTtcbiAgICB9XG5cbn1cbiJdfQ==