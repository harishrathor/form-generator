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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL21vbnRoL21vbnRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDO0lBS29DLDBDQUFLO0lBTHpDO1FBQUEscUVBbUJDO1FBWkMsYUFBTyxHQUF5QixPQUFPLENBQUM7O0lBWTFDLENBQUM7Ozs7O0lBVFcsOEJBQUs7Ozs7SUFBZjtRQUNFLGlCQUFNLEtBQUssV0FBRSxDQUFDO1FBQ1YsSUFBSSxDQUFDLFFBQVE7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFDakIsT0FBTyxFQUFHLElBQUksQ0FBQyxPQUFPO2dCQUN4QixlQUFlLEVBQUUsWUFBWTthQUM1QixDQUFDLENBQUM7SUFFVCxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixpd0JBQXFDOztpQkFFdEM7O0lBZUQscUJBQUM7Q0FBQSxBQW5CRCxDQUtvQyxLQUFLLEdBY3hDO1NBZFksY0FBYzs7O0lBRXpCLGlDQUF3Qzs7SUFFeEMsa0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGQuY2xhc3MnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnLCBCc0RhdGVwaWNrZXJWaWV3TW9kZSB9IGZyb20gJ25neC1ib290c3RyYXAvZGF0ZXBpY2tlcic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb250aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb250aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vbnRoLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb250aENvbXBvbmVudCBleHRlbmRzIEZpZWxkIHtcblxuICBtaW5Nb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZSA9ICdtb250aCc7XG4gXG4gIGJzQ29uZmlnOiBQYXJ0aWFsPEJzRGF0ZXBpY2tlckNvbmZpZz47XG4gIHByb3RlY3RlZCBfaW5pdCgpIHtcbiAgICBzdXBlci5faW5pdCgpO1xuICAgICAgICB0aGlzLmJzQ29uZmlnID0gXG4gICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgICAgbWluTW9kZSA6IHRoaXMubWluTW9kZSxcbiAgICAgICAgZGF0ZUlucHV0Rm9ybWF0OiAnTU1NTSAgWVlZWSdcbiAgICAgICAgfSk7XG5cbiAgfVxufSJdfQ==