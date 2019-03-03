/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from './../field.class';
import { Component } from '@angular/core';
export class RadioComponent extends Field {
    /**
     * @return {?}
     */
    get options() {
        return this.fieldDef.options;
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'radio',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"custom-control custom-radio radio-button-cotnainer\" *ngFor=\"let item of options; let i = index;\">\n      <input type=\"radio\" class=\"custom-control-input\" [attr.disabled]=\"disabled\" [attr.disabled]=\"item.disabled\"\n        [value]=\"item.value\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id + '__' + i\"\n        [formControlName]=\"name\">\n      <label class=\"custom-control-label\" for=\"{{id}}__{{i}}\">{{item.label}}</label>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPbEQsTUFBTSxPQUFPLGNBQWUsU0FBUSxLQUFLOzs7O0lBQ3hDLElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQzs7O1lBUkQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixxbkNBQXFDOzthQUV0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi8uLi9maWVsZC5jbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYWRpbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCBleHRlbmRzIEZpZWxkIHtcblx0Z2V0IG9wdGlvbnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGREZWYub3B0aW9ucztcblx0fVxufVxuIl19