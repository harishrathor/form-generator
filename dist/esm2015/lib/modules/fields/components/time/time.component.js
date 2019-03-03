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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL3RpbWUvdGltZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBUWxELE1BQU0sT0FBTyxhQUFjLFNBQVEsS0FBSztJQUx4Qzs7UUFNRSxXQUFNLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7WUFQQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLGdoQ0FBb0M7O2FBRXJDOzs7O0lBRUMsK0JBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLy4uL2ZpZWxkLmNsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGltZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGltZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGltZUNvbXBvbmVudCBleHRlbmRzIEZpZWxkIHtcbiAgbXl0aW1lOiBEYXRlID0gbmV3IERhdGUoKTtcbn1cbiJdfQ==