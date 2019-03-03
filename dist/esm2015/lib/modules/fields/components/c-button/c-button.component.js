/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from './../field.class';
import { Component } from '@angular/core';
export class CButtonComponent extends Field {
    /**
     * @return {?}
     */
    get theme() {
        return this.fieldDef.theme || this._defaults.BTN_DEFUALT_THEME;
    }
    /**
     * @return {?}
     */
    get icon() {
        return this.fieldDef.icon || '';
    }
}
CButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'c-button',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\"></label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\n    <button type=\"button\" class=\"btn btn-{{theme}}\" [attr.id]=\"id\">\n      <div class=\"button-label display-flex\">\n        <i class=\"material-icons mr-1 \" *ngIf=\"icon\">\n          {{icon}}\n        </i>\n        {{label}}\n      </div>\n\n    </button>\n\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <!-- <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors> -->\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL2MtYnV0dG9uL2MtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFRbEQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLEtBQUs7Ozs7SUFDdkMsSUFBSSxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7WUFiSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDAyQkFBd0M7O2FBRXpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLy4uL2ZpZWxkLmNsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2MtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYy1idXR0b24uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQ0J1dHRvbkNvbXBvbmVudCBleHRlbmRzIEZpZWxkIHtcbiAgICBnZXQgdGhlbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRGVmLnRoZW1lIHx8IHRoaXMuX2RlZmF1bHRzLkJUTl9ERUZVQUxUX1RIRU1FO1xuICAgIH1cblxuICAgIGdldCBpY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZERlZi5pY29uIHx8ICcnO1xuICAgIH1cbn1cbiJdfQ==