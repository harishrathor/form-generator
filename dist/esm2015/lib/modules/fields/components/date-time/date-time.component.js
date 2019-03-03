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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pzb24tZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9maWVsZHMvY29tcG9uZW50cy9kYXRlLXRpbWUvZGF0ZS10aW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFRbEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLEtBQUs7Ozs7O0lBSWhDLEtBQUs7UUFDYixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFFLEVBQUUsZUFBZSxFQUFFLHlCQUF5QixFQUFFLENBQUE7SUFFbkUsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQix5d0JBQXlDOzthQUUxQzs7OztJQUlDLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi8uLi9maWVsZC5jbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnLCBCc0RhdGVwaWNrZXJWaWV3TW9kZSB9IGZyb20gJ25neC1ib290c3RyYXAvZGF0ZXBpY2tlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtdGltZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXRpbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlLXRpbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUaW1lQ29tcG9uZW50IGV4dGVuZHMgRmllbGQge1xuICAvL21pbk1vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlID0gJ21vbnRoJztcbiBcbiAgYnNDb25maWc6IFBhcnRpYWw8QnNEYXRlcGlja2VyQ29uZmlnPjtcbiAgcHJvdGVjdGVkIF9pbml0KCkge1xuICAgIHN1cGVyLl9pbml0KCk7XG4gICAgICAgIHRoaXMuYnNDb25maWcgPXsgZGF0ZUlucHV0Rm9ybWF0OiAnTU1NTSBEbyBZWVlZLCBoOm1tOnNzIGEnIH1cblxuICB9XG59XG4iXX0=