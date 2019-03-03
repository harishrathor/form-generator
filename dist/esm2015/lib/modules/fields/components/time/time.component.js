/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from './../field.class';
import { Component } from '@angular/core';
export class TimeComponent extends Field {
    constructor() {
        super(...arguments);
        this.mytime = new Date();
    }
}
TimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'time',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]= \"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <!-- <input type=\"text\" class=\"form-control\" \n  [ngClass]=\"cssClasses.fieldClasses\"\n  [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n  [formControlName]=\"name\" [attr.placeholder]=\"placeholder\"> -->\n  \n    <timepicker  class=\"\" \n      [ngClass]=\"cssClasses.fieldClasses\"\n      [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n      [formControlName]=\"name\" >></timepicker>\n    \n\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n </div>",
                styles: [""]
            }] }
];
if (false) {
    /** @type {?} */
    TimeComponent.prototype.mytime;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvdGltZS90aW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFRbEQsTUFBTSxPQUFPLGFBQWMsU0FBUSxLQUFLO0lBTHhDOztRQU1FLFdBQU0sR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQVBBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsZ2hDQUFvQzs7YUFFckM7Ozs7SUFFQywrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vLi4vZmllbGQuY2xhc3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aW1lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90aW1lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUaW1lQ29tcG9uZW50IGV4dGVuZHMgRmllbGQge1xuICBteXRpbWU6IERhdGUgPSBuZXcgRGF0ZSgpO1xufVxuIl19