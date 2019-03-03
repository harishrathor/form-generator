/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component';
var TextAreaComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TextAreaComponent, _super);
    function TextAreaComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'text-area',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <textarea class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\"></textarea>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    return TextAreaComponent;
}(TextComponent));
export { TextAreaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pzb24tZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9maWVsZHMvY29tcG9uZW50cy90ZXh0LWFyZWEvdGV4dC1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSXZEO0lBS3VDLDZDQUFhO0lBTHBEOztJQU9BLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsNDBCQUF5Qzs7aUJBRTFDOztJQUdELHdCQUFDO0NBQUEsQUFQRCxDQUt1QyxhQUFhLEdBRW5EO1NBRlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4uL3RleHQvdGV4dC5jb21wb25lbnQnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dC1hcmVhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtYXJlYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtYXJlYS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dEFyZWFDb21wb25lbnQgZXh0ZW5kcyBUZXh0Q29tcG9uZW50IHtcblxufVxuIl19