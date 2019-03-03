/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from './../field.class';
import { Component } from '@angular/core';
export class DateTimeComponent extends Field {
    /**
     * @protected
     * @return {?}
     */
    _init() {
        super._init();
        this.bsConfig = { dateInputFormat: 'MMMM Do YYYY, h:mm:ss a' };
    }
}
DateTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'date-time',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\"\n\t[ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]=\"group\">\n\t<label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\"\n\t\t[ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n\t<div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\t\t<input type=\"text\" class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\"\n\t\t\t[attr.id]=\"id\" [formControlName]=\"name\" [attr.placeholder]=\"placeholder\"   [bsConfig]=\"bsConfig\"\n      bsDatepicker>\n      <errors [errors]=\"errors\"></errors>\n\t</div>\n\n</div>",
                styles: [""]
            }] }
];
if (false) {
    /** @type {?} */
    DateTimeComponent.prototype.bsConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvZGF0ZS10aW1lL2RhdGUtdGltZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBUWxELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxLQUFLOzs7OztJQUloQyxLQUFLO1FBQ2IsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRSxFQUFFLGVBQWUsRUFBRSx5QkFBeUIsRUFBRSxDQUFBO0lBRW5FLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIseXdCQUF5Qzs7YUFFMUM7Ozs7SUFJQyxxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vLi4vZmllbGQuY2xhc3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZywgQnNEYXRlcGlja2VyVmlld01vZGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLXRpbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS10aW1lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS10aW1lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGltZUNvbXBvbmVudCBleHRlbmRzIEZpZWxkIHtcbiAgLy9taW5Nb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZSA9ICdtb250aCc7XG4gXG4gIGJzQ29uZmlnOiBQYXJ0aWFsPEJzRGF0ZXBpY2tlckNvbmZpZz47XG4gIHByb3RlY3RlZCBfaW5pdCgpIHtcbiAgICBzdXBlci5faW5pdCgpO1xuICAgICAgICB0aGlzLmJzQ29uZmlnID17IGRhdGVJbnB1dEZvcm1hdDogJ01NTU0gRG8gWVlZWSwgaDptbTpzcyBhJyB9XG5cbiAgfVxufVxuIl19