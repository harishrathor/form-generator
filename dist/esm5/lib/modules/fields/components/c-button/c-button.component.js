/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from './../field.class';
import { Component } from '@angular/core';
var CButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CButtonComponent, _super);
    function CButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CButtonComponent.prototype, "theme", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.theme || this._defaults.BTN_DEFUALT_THEME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CButtonComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fieldDef.icon || '';
        },
        enumerable: true,
        configurable: true
    });
    CButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c-button',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\"></label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\n    <button type=\"button\" class=\"btn btn-{{theme}}\" [attr.id]=\"id\">\n      <div class=\"button-label display-flex\">\n        <i class=\"material-icons mr-1 \" *ngIf=\"icon\">\n          {{icon}}\n        </i>\n        {{label}}\n      </div>\n\n    </button>\n\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <!-- <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors> -->\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return CButtonComponent;
}(Field));
export { CButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL2MtYnV0dG9uL2MtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxEO0lBTXNDLDRDQUFLO0lBTjNDOztJQWNBLENBQUM7SUFQRyxzQkFBSSxtQ0FBSzs7OztRQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDO1FBQ25FLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQUk7Ozs7UUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBOztnQkFiSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDAyQkFBd0M7O2lCQUV6Qzs7SUFVRCx1QkFBQztDQUFBLEFBZEQsQ0FNc0MsS0FBSyxHQVExQztTQVJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi8uLi9maWVsZC5jbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2MtYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBGaWVsZCB7XG4gICAgZ2V0IHRoZW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi50aGVtZSB8fCB0aGlzLl9kZWZhdWx0cy5CVE5fREVGVUFMVF9USEVNRTtcbiAgICB9XG5cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREZWYuaWNvbiB8fCAnJztcbiAgICB9XG59XG4iXX0=