/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from './../field.class';
import { Component } from '@angular/core';
var DateTimeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DateTimeComponent, _super);
    function DateTimeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    DateTimeComponent.prototype._init = /**
     * @protected
     * @return {?}
     */
    function () {
        _super.prototype._init.call(this);
        this.bsConfig = { dateInputFormat: 'MMMM Do YYYY, h:mm:ss a' };
    };
    DateTimeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date-time',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\"\n\t[ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]=\"group\">\n\t<label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\"\n\t\t[ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n\t<div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\t\t<input type=\"text\" class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\"\n\t\t\t[attr.id]=\"id\" [formControlName]=\"name\" [attr.placeholder]=\"placeholder\"   [bsConfig]=\"bsConfig\"\n      bsDatepicker>\n      <errors [errors]=\"errors\"></errors>\n\t</div>\n\n</div>",
                    styles: [""]
                }] }
    ];
    return DateTimeComponent;
}(Field));
export { DateTimeComponent };
if (false) {
    /** @type {?} */
    DateTimeComponent.prototype.bsConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pzb24tZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9maWVsZHMvY29tcG9uZW50cy9kYXRlLXRpbWUvZGF0ZS10aW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xEO0lBS3VDLDZDQUFLO0lBTDVDOztJQWNBLENBQUM7Ozs7O0lBTFcsaUNBQUs7Ozs7SUFBZjtRQUNFLGlCQUFNLEtBQUssV0FBRSxDQUFDO1FBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRSxFQUFFLGVBQWUsRUFBRSx5QkFBeUIsRUFBRSxDQUFBO0lBRW5FLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIseXdCQUF5Qzs7aUJBRTFDOztJQVVELHdCQUFDO0NBQUEsQUFkRCxDQUt1QyxLQUFLLEdBUzNDO1NBVFksaUJBQWlCOzs7SUFHNUIscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLy4uL2ZpZWxkLmNsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcsIEJzRGF0ZXBpY2tlclZpZXdNb2RlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS10aW1lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtdGltZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGUtdGltZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVDb21wb25lbnQgZXh0ZW5kcyBGaWVsZCB7XG4gIC8vbWluTW9kZTogQnNEYXRlcGlja2VyVmlld01vZGUgPSAnbW9udGgnO1xuIFxuICBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVwaWNrZXJDb25maWc+O1xuICBwcm90ZWN0ZWQgX2luaXQoKSB7XG4gICAgc3VwZXIuX2luaXQoKTtcbiAgICAgICAgdGhpcy5ic0NvbmZpZyA9eyBkYXRlSW5wdXRGb3JtYXQ6ICdNTU1NIERvIFlZWVksIGg6bW06c3MgYScgfVxuXG4gIH1cbn1cbiJdfQ==