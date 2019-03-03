/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Field } from '../field.class';
var MonthComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MonthComponent, _super);
    function MonthComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minMode = 'month';
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    MonthComponent.prototype._init = /**
     * @protected
     * @return {?}
     */
    function () {
        _super.prototype._init.call(this);
        this.bsConfig =
            Object.assign({}, {
                minMode: this.minMode,
                dateInputFormat: 'MMMM  YYYY'
            });
    };
    MonthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'month',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\"\n\t[ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]=\"group\">\n\t<label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\"\n\t\t[ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n\t<div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\t\t<input type=\"text\" class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\"\n\t\t\t[attr.id]=\"id\" [formControlName]=\"name\" [attr.placeholder]=\"placeholder\"   [bsConfig]=\"bsConfig\"\n      bsDatepicker><errors [errors]=\"errors\"></errors>\n\t</div>\n\n</div>",
                    styles: [""]
                }] }
    ];
    return MonthComponent;
}(Field));
export { MonthComponent };
if (false) {
    /** @type {?} */
    MonthComponent.prototype.minMode;
    /** @type {?} */
    MonthComponent.prototype.bsConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9maWVsZHMvY29tcG9uZW50cy9tb250aC9tb250aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QztJQUtvQywwQ0FBSztJQUx6QztRQUFBLHFFQW1CQztRQVpDLGFBQU8sR0FBeUIsT0FBTyxDQUFDOztJQVkxQyxDQUFDOzs7OztJQVRXLDhCQUFLOzs7O0lBQWY7UUFDRSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztRQUNWLElBQUksQ0FBQyxRQUFRO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pCLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztnQkFDeEIsZUFBZSxFQUFFLFlBQVk7YUFDNUIsQ0FBQyxDQUFDO0lBRVQsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsaXdCQUFxQzs7aUJBRXRDOztJQWVELHFCQUFDO0NBQUEsQUFuQkQsQ0FLb0MsS0FBSyxHQWN4QztTQWRZLGNBQWM7OztJQUV6QixpQ0FBd0M7O0lBRXhDLGtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkLmNsYXNzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZywgQnNEYXRlcGlja2VyVmlld01vZGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXInO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9udGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9udGguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb250aC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9udGhDb21wb25lbnQgZXh0ZW5kcyBGaWVsZCB7XG5cbiAgbWluTW9kZTogQnNEYXRlcGlja2VyVmlld01vZGUgPSAnbW9udGgnO1xuIFxuICBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVwaWNrZXJDb25maWc+O1xuICBwcm90ZWN0ZWQgX2luaXQoKSB7XG4gICAgc3VwZXIuX2luaXQoKTtcbiAgICAgICAgdGhpcy5ic0NvbmZpZyA9IFxuICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICAgIG1pbk1vZGUgOiB0aGlzLm1pbk1vZGUsXG4gICAgICAgIGRhdGVJbnB1dEZvcm1hdDogJ01NTU0gIFlZWVknXG4gICAgICAgIH0pO1xuXG4gIH1cbn0iXX0=