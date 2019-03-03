/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from './../field.class';
import { Component } from '@angular/core';
var RadioComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RadioComponent, _super);
    function RadioComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RadioComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.options;
        },
        enumerable: true,
        configurable: true
    });
    RadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'radio',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"custom-control custom-radio radio-button-cotnainer\" *ngFor=\"let item of options; let i = index;\">\n      <input type=\"radio\" class=\"custom-control-input\" [attr.disabled]=\"disabled\" [attr.disabled]=\"item.disabled\"\n        [value]=\"item.value\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id + '__' + i\"\n        [formControlName]=\"name\">\n      <label class=\"custom-control-label\" for=\"{{id}}__{{i}}\">{{item.label}}</label>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return RadioComponent;
}(Field));
export { RadioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxEO0lBS29DLDBDQUFLO0lBTHpDOztJQVNBLENBQUM7SUFIQSxzQkFBSSxtQ0FBTzs7OztRQUFYO1lBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUM5QixDQUFDOzs7T0FBQTs7Z0JBUkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixxbkNBQXFDOztpQkFFdEM7O0lBS0QscUJBQUM7Q0FBQSxBQVRELENBS29DLEtBQUssR0FJeEM7U0FKWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLy4uL2ZpZWxkLmNsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmFkaW8uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IGV4dGVuZHMgRmllbGQge1xuXHRnZXQgb3B0aW9ucygpIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZERlZi5vcHRpb25zO1xuXHR9XG59XG4iXX0=