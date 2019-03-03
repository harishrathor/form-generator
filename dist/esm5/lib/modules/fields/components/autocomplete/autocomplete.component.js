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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBYyxPQUFPLEVBQUUsRUFBRSxFQUFRLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFDTCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFcEU7SUFVMkMsaURBQWdCO0lBVjNEO1FBQUEscUVBbUhDO1FBdkdVLG1CQUFhLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQzs7SUF1RzlDLENBQUM7Ozs7O0lBckdhLHFDQUFLOzs7O0lBQWY7UUFBQSxpQkEyQkM7UUExQkcsSUFBSTtZQUNBLGlCQUFNLEtBQUssV0FBRSxDQUFDO1lBRWQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FDZixDQUFDO1lBRUYsSUFBSSxDQUFDLGFBQWE7aUJBQ2pCLElBQUksQ0FDRCxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUNwRCxvQkFBb0IsRUFBRSxDQUN6QjtpQkFDQSxTQUFTOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUNYLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO3FCQUNsQixTQUFTOzs7O2dCQUNOLFVBQUEsUUFBUTtvQkFDSixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxF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QyxRQUFRO3dCQUN2QixRQUFRLFVBQUE7cUJBQ1gsQ0FBQztvQkFDRixJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7d0JBQ25GLFdBQVcsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztxQkFDakM7b0JBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNsQzthQUNKO1lBQ0QsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDOUIsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRUQsc0JBQUksNkNBQVU7Ozs7UUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDO1FBQzVDLENBQUM7OztPQUFBOztnQkFsSEosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixnMERBQTRDOztpQkFPN0M7O0lBMEdELDRCQUFDO0NBQUEsQUFuSEQsQ0FVMkMsZ0JBQWdCLEdBeUcxRDtTQXpHWSxxQkFBcUI7OztJQUM5Qix5Q0FBaUM7O0lBQ2pDLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgb2YsIGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWRcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBDU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi8uLi9jLXNlbGVjdC9jLXNlbGVjdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4uL2NvbW1vblN0eWxlLmNzcycsXG4gICAgJy4uL25nLXNlbGVjdC50aGVtZS5jc3MnLFxuICAgICcuLi9jLXNlbGVjdC9jLXNlbGVjdC5jb21wb25lbnQuY3NzJyxcbiAgICAnLi9hdXRvY29tcGxldGUuY29tcG9uZW50LmNzcydcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVDb21wb25lbnQgZXh0ZW5kcyBDU2VsZWN0Q29tcG9uZW50IHtcbiAgICBwdWJsaWMgb3B0aW9ucyQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBwdWJsaWMgZmV0Y2hPcHRpb25zJCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAgIHByb3RlY3RlZCBfaW5pdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN1cGVyLl9pbml0KCk7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyQgPSBvZihcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hPcHRpb25zJFxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuX2RlZmF1bHRzLkFDU19GRVRDSF9ERUJPVU5DRV9USU1FKSxcbiAgICAgICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHRlcm0gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZldGNoT3B0aW9ucyh0ZXJtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyQgPSB0aGlzLl9vbkZldGNoT3B0aW9ucyh0ZXJtLCByZXNwb25zZSk7IHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLm9wdGlvbnMkID0gb2YoW10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2ZldGNoT3B0aW9ucyh0ZXJtOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gdGhpcy5zZWFyY2hEYXRhO1xuICAgICAgICAgICAgaWYgKCFzZWFyY2hEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlYXJjaERhdGEuYmVmb3JlRmV0Y2hGbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZVNlYXJjaEZuID0gdGhpcy5fZ2V0RXZlbnRDYWxsYmFjayggdGhpcy5fZGVmYXVsdHMuQUNTX1NFQVJDSF9FVkVOVF9OQU1FLCBzZWFyY2hEYXRhLmJlZm9yZUZldGNoRm4pO1xuICAgICAgICAgICAgICAgIGlmIChiZWZvcmVTZWFyY2hGbiAmJiAhYmVmb3JlU2VhcmNoRm4odGVybSwgdGhpcy5jb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXJtOiB0ZXJtLFxuICAgICAgICAgICAgICAgIGZpZWxkQ29kZTogdGhpcy5jb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHNlYXJjaERhdGEuZmV0Y2hGbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaEZuID0gdGhpcy5fZ2V0RXZlbnRDYWxsYmFjayggdGhpcy5fZGVmYXVsdHMuQUNTX1NFQVJDSF9FVkVOVF9OQU1FLCBzZWFyY2hEYXRhLmZldGNoRm4gKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNlYXJjaEZuIHx8IHR5cGVvZiBzZWFyY2hGbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBzZWFyY2hGbihkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNlYXJjaFJlc3VsdCB8fCAhc2VhcmNoUmVzdWx0Lm9wdGlvbnMgfHwgc2VhcmNoUmVzdWx0Lm9wdGlvbnMuY29uc3RydWN0b3IgIT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvZihzZWFyY2hSZXN1bHQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWFyY2hEYXRhLnVybCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5mZXRjaE9wdGlvbnMoc2VhcmNoRGF0YS51cmwsIGRhdGEsIHNlYXJjaERhdGEubWV0aG9kVHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9vbkZldGNoT3B0aW9ucyh0ZXJtLCByZXNwb25zZT86IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9IHRoaXMuc2VhcmNoRGF0YTtcblxuICAgICAgICAgICAgaWYgKHNlYXJjaERhdGEgJiYgc2VhcmNoRGF0YS5hZnRlckZldGNoRm4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZnRlclNlYXJjaEZuID0gdGhpcy5fZ2V0RXZlbnRDYWxsYmFjayggdGhpcy5fZGVmYXVsdHMuQUNTX1NFQVJDSF9FVkVOVF9OQU1FLCBzZWFyY2hEYXRhLmFmdGVyRmV0Y2hGbiApO1xuICAgICAgICAgICAgICAgIGlmIChhZnRlclNlYXJjaEZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25zRGF0YSA9IGFmdGVyU2VhcmNoRm4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGVybTogdGVybSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkQ29kZTogdGhpcy5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvZGU6IHRoaXMuZm9ybUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zRGF0YSB8fCAhb3B0aW9uc0RhdGEub3B0aW9ucyB8fCBvcHRpb25zRGF0YS5vcHRpb25zLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc0RhdGEgPSB7IG9wdGlvbnM6IFtdIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG9wdGlvbnNEYXRhLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3BvbnNlLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VhcmNoRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuc2VhcmNoRGF0YSB8fCBudWxsO1xuICAgIH1cbn1cbiJdfQ==