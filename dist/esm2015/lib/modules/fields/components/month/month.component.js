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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL21vbnRoL21vbnRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPdkMsTUFBTSxPQUFPLGNBQWUsU0FBUSxLQUFLO0lBTHpDOztRQU9FLFlBQU8sR0FBeUIsT0FBTyxDQUFDO0lBWTFDLENBQUM7Ozs7O0lBVFcsS0FBSztRQUNiLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNWLElBQUksQ0FBQyxRQUFRO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pCLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztnQkFDeEIsZUFBZSxFQUFFLFlBQVk7YUFDNUIsQ0FBQyxDQUFDO0lBRVQsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsaXdCQUFxQzs7YUFFdEM7Ozs7SUFHQyxpQ0FBd0M7O0lBRXhDLGtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkLmNsYXNzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZywgQnNEYXRlcGlja2VyVmlld01vZGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXInO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9udGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9udGguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb250aC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9udGhDb21wb25lbnQgZXh0ZW5kcyBGaWVsZCB7XG5cbiAgbWluTW9kZTogQnNEYXRlcGlja2VyVmlld01vZGUgPSAnbW9udGgnO1xuIFxuICBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVwaWNrZXJDb25maWc+O1xuICBwcm90ZWN0ZWQgX2luaXQoKSB7XG4gICAgc3VwZXIuX2luaXQoKTtcbiAgICAgICAgdGhpcy5ic0NvbmZpZyA9IFxuICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICAgIG1pbk1vZGUgOiB0aGlzLm1pbk1vZGUsXG4gICAgICAgIGRhdGVJbnB1dEZvcm1hdDogJ01NTU0gIFlZWVknXG4gICAgICAgIH0pO1xuXG4gIH1cbn0iXX0=