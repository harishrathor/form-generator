/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CSelectComponent } from './../c-select/c-select.component';
var AutocompleteComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AutocompleteComponent, _super);
    function AutocompleteComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fetchOptions$ = new Subject();
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    AutocompleteComponent.prototype._init = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            _super.prototype._init.call(this);
            this.options$ = of(this.options);
            this.fetchOptions$
                .pipe(debounceTime(this._defaults.ACS_FETCH_DEBOUNCE_TIME), distinctUntilChanged())
                .subscribe((/**
             * @param {?} term
             * @return {?}
             */
            function (term) {
                _this.loading = true;
                return _this._fetchOptions(term)
                    .subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.options$ = _this._onFetchOptions(term, response);
                    _this.loading = false;
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return _this.options$ = of([]); }));
            }));
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * @protected
     * @param {?} term
     * @return {?}
     */
    AutocompleteComponent.prototype._fetchOptions = /**
     * @protected
     * @param {?} term
     * @return {?}
     */
    function (term) {
        try {
            /** @type {?} */
            var searchData = this.searchData;
            if (!searchData) {
                return of([]);
            }
            if (searchData.beforeFetchFn) {
                /** @type {?} */
                var beforeSearchFn = this._getEventCallback(this._defaults.ACS_SEARCH_EVENT_NAME, searchData.beforeFetchFn);
                if (beforeSearchFn && !beforeSearchFn(term, this.code)) {
                    return of([]);
                }
            }
            /** @type {?} */
            var data = {
                searchTerm: term,
                fieldCode: this.code
            };
            if (searchData.fetchFn) {
                /** @type {?} */
                var searchFn = this._getEventCallback(this._defaults.ACS_SEARCH_EVENT_NAME, searchData.fetchFn);
                if (!searchFn || typeof searchFn !== 'function') {
                    return of([]);
                }
                /** @type {?} */
                var searchResult = searchFn(data);
                if (!searchResult || !searchResult.options || searchResult.options.constructor !== Array) {
                    return of([]);
                }
                return of(searchResult);
            }
            else if (searchData.url) {
                return this._httpService.fetchOptions(searchData.url, data, searchData.methodType);
            }
            return of([]);
        }
        catch (error) {
            console.log(error);
            return of([]);
        }
    };
    /**
     * @protected
     * @param {?} term
     * @param {?=} response
     * @return {?}
     */
    AutocompleteComponent.prototype._onFetchOptions = /**
     * @protected
     * @param {?} term
     * @param {?=} response
     * @return {?}
     */
    function (term, response) {
        try {
            /** @type {?} */
            var searchData = this.searchData;
            if (searchData && searchData.afterFetchFn) {
                /** @type {?} */
                var afterSearchFn = this._getEventCallback(this._defaults.ACS_SEARCH_EVENT_NAME, searchData.afterFetchFn);
                if (afterSearchFn) {
                    /** @type {?} */
                    var optionsData = afterSearchFn({
                        searchTerm: term,
                        fieldCode: this.code,
                        formCode: this.formCode,
                        response: response
                    });
                    if (!optionsData || !optionsData.options || optionsData.options.constructor !== Array) {
                        optionsData = { options: [] };
                    }
                    return of(optionsData.options);
                }
            }
            if (response && response.options) {
                return of(response.options);
            }
            return of([]);
        }
        catch (error) {
            console.log(error);
            return of([]);
        }
    };
    Object.defineProperty(AutocompleteComponent.prototype, "searchData", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.searchData || null;
        },
        enumerable: true,
        configurable: true
    });
    AutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'autocomplete',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <ng-select #ngSelect class=\"c-select\" [ngClass]=\"{'select-is-invalid': errors.length > 0, 'select-is-valid': errors.length == 0}\"\n      [ngClass]=\"cssClasses.fieldClasses\" [items]=\"options$ | async\" [selectOnTab]=\"true\" bindValue=\"value\" labelForId=\"{{id}}\"\n      bindLabel=\"label\" [clearOnBackspace]=\"true\" placeholder=\"{{placeholder}}\" [multiple]=\"multiple\" [formControlName]=\"name\"\n      (open)=\"callEventCallbacks('open')\" (close)=\"callEventCallbacks('close')\" (focus)=\"callEventCallbacks('focus', $event)\"\n      (search)=\"callEventCallbacks('search', $event)\" (blur)=\"callEventCallbacks('blur', $event)\" (clear)=\"callEventCallbacks('clear')\"\n      (add)=\"callEventCallbacks('add', $event)\" (scrollToEnd)=\"callEventCallbacks('scrollToEnd', $event)\" (remove)=\"callEventCallbacks('remove', $event)\"\n      (change)=\"callEventCallbacks('change', $event)\" groupBy=\"options\" [hideSelected]=\"true\" [loading]=\"loading\"\n[typeahead]=\"fetchOptions$\">\n\n      <ng-template ng-optgroup-tmp let-item=\"item\">\n        {{item.label}}\n      </ng-template>\n      <ng-template ng-option-tmp let-item=\"item\">\n        {{item.label}}\n      </ng-template>\n    </ng-select>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ".ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1)}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select .ng-select-container:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=rtl] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon,.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.ng-select .ng-clear-wrapper{color:#999}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,.06);left:0}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,.54);cursor:pointer}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,.87);padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .ng-dropdown-panel{direction:rtl;text-align:right}.c-select.select-is-invalid .ng-select-container{border-color:#dc3545;padding-right:calc(1.5em + .75rem)}", ".c-select.select-is-invalid .ng-select-container{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.c-select.select-is-valid .ng-select-container{background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}", ""]
                }] }
    ];
    return AutocompleteComponent;
}(CSelectComponent));
export { AutocompleteComponent };
if (false) {
    /** @type {?} */
    AutocompleteComponent.prototype.options$;
    /** @type {?} */
    AutocompleteComponent.prototype.fetchOptions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pzb24tZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9maWVsZHMvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFjLE9BQU8sRUFBRSxFQUFFLEVBQVEsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsRUFDckIsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVwRTtJQVUyQyxpREFBZ0I7SUFWM0Q7UUFBQSxxRUFtSEM7UUF2R1UsbUJBQWEsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDOztJQXVHOUMsQ0FBQzs7Ozs7SUFyR2EscUNBQUs7Ozs7SUFBZjtRQUFBLGlCQTJCQztRQTFCRyxJQUFJO1lBQ0EsaUJBQU0sS0FBSyxXQUFFLENBQUM7WUFFZCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FDZCxJQUFJLENBQUMsT0FBTyxDQUNmLENBQUM7WUFFRixJQUFJLENBQUMsYUFBYTtpQkFDakIsSUFBSSxDQUNELFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEVBQ3BELG9CQUFvQixFQUFFLENBQ3pCO2lCQUNBLFNBQVM7Ozs7WUFBQyxVQUFBLElBQUk7Z0JBQ1gsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7cUJBQ2xCLFNBQVM7Ozs7Z0JBQ04sVUFBQSxRQUFRO29CQUNKLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJ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SSxDQUFDLFFBQVE7d0JBQ3ZCLFFBQVEsVUFBQTtxQkFDWCxDQUFDO29CQUNGLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTt3QkFDbkYsV0FBVyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO3FCQUNqQztvQkFDRCxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0o7WUFDRCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7WUFDRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFRCxzQkFBSSw2Q0FBVTs7OztRQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7O2dCQWxISixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGcwREFBNEM7O2lCQU83Qzs7SUEwR0QsNEJBQUM7Q0FBQSxBQW5IRCxDQVUyQyxnQkFBZ0IsR0F5RzFEO1NBekdZLHFCQUFxQjs7O0lBQzlCLHlDQUFpQzs7SUFDakMsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBvZiwgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IENTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLy4uL2Mtc2VsZWN0L2Mtc2VsZWN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi4vY29tbW9uU3R5bGUuY3NzJyxcbiAgICAnLi4vbmctc2VsZWN0LnRoZW1lLmNzcycsXG4gICAgJy4uL2Mtc2VsZWN0L2Mtc2VsZWN0LmNvbXBvbmVudC5jc3MnLFxuICAgICcuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENTZWxlY3RDb21wb25lbnQge1xuICAgIHB1YmxpYyBvcHRpb25zJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHB1YmxpYyBmZXRjaE9wdGlvbnMkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgcHJvdGVjdGVkIF9pbml0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3VwZXIuX2luaXQoKTtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zJCA9IG9mKFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5mZXRjaE9wdGlvbnMkXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5fZGVmYXVsdHMuQUNTX0ZFVENIX0RFQk9VTkNFX1RJTUUpLFxuICAgICAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodGVybSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZmV0Y2hPcHRpb25zKHRlcm0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zJCA9IHRoaXMuX29uRmV0Y2hPcHRpb25zKHRlcm0sIHJlc3BvbnNlKTsgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMub3B0aW9ucyQgPSBvZihbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZmV0Y2hPcHRpb25zKHRlcm06IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSB0aGlzLnNlYXJjaERhdGE7XG4gICAgICAgICAgICBpZiAoIXNlYXJjaERhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VhcmNoRGF0YS5iZWZvcmVGZXRjaEZuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmVmb3JlU2VhcmNoRm4gPSB0aGlzLl9nZXRFdmVudENhbGxiYWNrKCB0aGlzLl9kZWZhdWx0cy5BQ1NfU0VBUkNIX0VWRU5UX05BTUUsIHNlYXJjaERhdGEuYmVmb3JlRmV0Y2hGbik7XG4gICAgICAgICAgICAgICAgaWYgKGJlZm9yZVNlYXJjaEZuICYmICFiZWZvcmVTZWFyY2hGbih0ZXJtLCB0aGlzLmNvZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIHNlYXJjaFRlcm06IHRlcm0sXG4gICAgICAgICAgICAgICAgZmllbGRDb2RlOiB0aGlzLmNvZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoc2VhcmNoRGF0YS5mZXRjaEZuKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoRm4gPSB0aGlzLl9nZXRFdmVudENhbGxiYWNrKCB0aGlzLl9kZWZhdWx0cy5BQ1NfU0VBUkNIX0VWRU5UX05BTUUsIHNlYXJjaERhdGEuZmV0Y2hGbiApO1xuICAgICAgICAgICAgICAgIGlmICghc2VhcmNoRm4gfHwgdHlwZW9mIHNlYXJjaEZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IHNlYXJjaEZuKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmICghc2VhcmNoUmVzdWx0IHx8ICFzZWFyY2hSZXN1bHQub3B0aW9ucyB8fCBzZWFyY2hSZXN1bHQub3B0aW9ucy5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHNlYXJjaFJlc3VsdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlYXJjaERhdGEudXJsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLmZldGNoT3B0aW9ucyhzZWFyY2hEYXRhLnVybCwgZGF0YSwgc2VhcmNoRGF0YS5tZXRob2RUeXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX29uRmV0Y2hPcHRpb25zKHRlcm0sIHJlc3BvbnNlPzogYW55KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gdGhpcy5zZWFyY2hEYXRhO1xuXG4gICAgICAgICAgICBpZiAoc2VhcmNoRGF0YSAmJiBzZWFyY2hEYXRhLmFmdGVyRmV0Y2hGbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyU2VhcmNoRm4gPSB0aGlzLl9nZXRFdmVudENhbGxiYWNrKCB0aGlzLl9kZWZhdWx0cy5BQ1NfU0VBUkNIX0VWRU5UX05BTUUsIHNlYXJjaERhdGEuYWZ0ZXJGZXRjaEZuICk7XG4gICAgICAgICAgICAgICAgaWYgKGFmdGVyU2VhcmNoRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbnNEYXRhID0gYWZ0ZXJTZWFyY2hGbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hUZXJtOiB0ZXJtLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRDb2RlOiB0aGlzLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29kZTogdGhpcy5mb3JtQ29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnNEYXRhIHx8ICFvcHRpb25zRGF0YS5vcHRpb25zIHx8IG9wdGlvbnNEYXRhLm9wdGlvbnMuY29uc3RydWN0b3IgIT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zRGF0YSA9IHsgb3B0aW9uczogW10gfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2Yob3B0aW9uc0RhdGEub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YocmVzcG9uc2Uub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWFyY2hEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5zZWFyY2hEYXRhIHx8IG51bGw7XG4gICAgfVxufVxuIl19