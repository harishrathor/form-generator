/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Field } from '../field.class';
export class MonthComponent extends Field {
    constructor() {
        super(...arguments);
        this.minMode = 'month';
    }
    /**
     * @protected
     * @return {?}
     */
    _init() {
        super._init();
        this.bsConfig =
            Object.assign({}, {
                minMode: this.minMode,
                dateInputFormat: 'MMMM  YYYY'
            });
    }
}
MonthComponent.decorators = [
    { type: Component, args: [{
                selector: 'month',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\"\n\t[ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]=\"group\">\n\t<label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\"\n\t\t[ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n\t<div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\t\t<input type=\"text\" class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\"\n\t\t\t[attr.id]=\"id\" [formControlName]=\"name\" [attr.placeholder]=\"placeholder\"   [bsConfig]=\"bsConfig\"\n      bsDatepicker><errors [errors]=\"errors\"></errors>\n\t</div>\n\n</div>",
                styles: [""]
            }] }
];
if (false) {
    /** @type {?} */
    MonthComponent.prototype.minMode;
    /** @type {?} */
    MonthComponent.prototype.bsConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9maWVsZHMvY29tcG9uZW50cy9tb250aC9tb250aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3ZDLE1BQU0sT0FBTyxjQUFlLFNBQVEsS0FBSztJQUx6Qzs7UUFPRSxZQUFPLEdBQXlCLE9BQU8sQ0FBQztJQVkxQyxDQUFDOzs7OztJQVRXLEtBQUs7UUFDYixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDVixJQUFJLENBQUMsUUFBUTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO2dCQUNqQixPQUFPLEVBQUcsSUFBSSxDQUFDLE9BQU87Z0JBQ3hCLGVBQWUsRUFBRSxZQUFZO2FBQzVCLENBQUMsQ0FBQztJQUVULENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLGl3QkFBcUM7O2FBRXRDOzs7O0lBR0MsaUNBQXdDOztJQUV4QyxrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZC5jbGFzcyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcsIEJzRGF0ZXBpY2tlclZpZXdNb2RlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21vbnRoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9udGguY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoQ29tcG9uZW50IGV4dGVuZHMgRmllbGQge1xuXG4gIG1pbk1vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlID0gJ21vbnRoJztcbiBcbiAgYnNDb25maWc6IFBhcnRpYWw8QnNEYXRlcGlja2VyQ29uZmlnPjtcbiAgcHJvdGVjdGVkIF9pbml0KCkge1xuICAgIHN1cGVyLl9pbml0KCk7XG4gICAgICAgIHRoaXMuYnNDb25maWcgPSBcbiAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgICBtaW5Nb2RlIDogdGhpcy5taW5Nb2RlLFxuICAgICAgICBkYXRlSW5wdXRGb3JtYXQ6ICdNTU1NICBZWVlZJ1xuICAgICAgICB9KTtcblxuICB9XG59Il19