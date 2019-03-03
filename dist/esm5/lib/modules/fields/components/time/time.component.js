/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from './../field.class';
import { Component } from '@angular/core';
var TimeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TimeComponent, _super);
    function TimeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mytime = new Date();
        return _this;
    }
    TimeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'time',
                    template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]= \"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <!-- <input type=\"text\" class=\"form-control\" \n  [ngClass]=\"cssClasses.fieldClasses\"\n  [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n  [formControlName]=\"name\" [attr.placeholder]=\"placeholder\"> -->\n  \n    <timepicker  class=\"\" \n      [ngClass]=\"cssClasses.fieldClasses\"\n      [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n      [formControlName]=\"name\" >></timepicker>\n    \n\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n </div>",
                    styles: [""]
                }] }
    ];
    return TimeComponent;
}(Field));
export { TimeComponent };
if (false) {
    /** @type {?} */
    TimeComponent.prototype.mytime;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvdGltZS90aW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xEO0lBS21DLHlDQUFLO0lBTHhDO1FBQUEscUVBT0M7UUFEQyxZQUFNLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7SUFDNUIsQ0FBQzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxNQUFNO29CQUNoQixnaENBQW9DOztpQkFFckM7O0lBR0Qsb0JBQUM7Q0FBQSxBQVBELENBS21DLEtBQUssR0FFdkM7U0FGWSxhQUFhOzs7SUFDeEIsK0JBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLy4uL2ZpZWxkLmNsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGltZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGltZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGltZUNvbXBvbmVudCBleHRlbmRzIEZpZWxkIHtcbiAgbXl0aW1lOiBEYXRlID0gbmV3IERhdGUoKTtcbn1cbiJdfQ==