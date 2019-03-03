/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Field } from './../field.class';
import { Component } from '@angular/core';
var TextComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TextComponent, _super);
    function TextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    TextComponent.prototype._afterViewInit = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            _super.prototype._afterViewInit.call(this);
            if (this.type === 'TXT' || this.type === 'TXA') {
                if (this._validationsDataObj.minlength) {
                    this._renderer.setAttribute(this.fieldRef, 'minlength', this._validationsDataObj.minlength.value);
                }
                if (this._validationsDataObj.maxlength) {
                    this._renderer.setAttribute(this.fieldRef, 'maxlength', this._validationsDataObj.maxlength.value + 1);
                }
            }
        }
        catch (error) {
        }
    };
    TextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'text',
                    template: "<!-- <div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <input type=\"text\" class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\">\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n -->\n<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\" *ngIf=\"prefix\">\n        <div class=\"input-group-text\">{{prefix}}</div>\n      </div>\n      <input type=\"text\" class=\"form-control\" \n        [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n        [attr.placeholder]=\"placeholder\">\n      <div class=\"input-group-append\" *ngIf=\"suffix\">\n        <span class=\"input-group-text\">{{suffix}}</span>\n      </div>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                    styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ""]
                }] }
    ];
    return TextComponent;
}(Field));
export { TextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZpZWxkcy9jb21wb25lbnRzL3RleHQvdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRDtJQU9tQyx5Q0FBSztJQVB4Qzs7SUF5QkEsQ0FBQzs7Ozs7SUFmVSxzQ0FBYzs7OztJQUF4QjtRQUNDLElBQUk7WUFDSCxpQkFBTSxjQUFjLFdBQUUsQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO2dCQUMvQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xHO2dCQUNELElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3RHO2FBQ0Q7U0FDRDtRQUFDLE9BQU8sS0FBSyxFQUFFO1NBRWY7SUFDRixDQUFDOztnQkF4QkQsU0FBUyxTQUFDO29CQUVULFFBQVEsRUFBRSxNQUFNO29CQUNoQixtOURBQW9DOztpQkFFckM7O0lBb0JELG9CQUFDO0NBQUEsQUF6QkQsQ0FPbUMsS0FBSyxHQWtCdkM7U0FsQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi8uLi9maWVsZC5jbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgXG4gIHNlbGVjdG9yOiAndGV4dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4uL2NvbW1vblN0eWxlLmNzcycsICcuL3RleHQuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCBleHRlbmRzIEZpZWxkIHtcblxuXG5cdHByb3RlY3RlZCBfYWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0cnkge1xuXHRcdFx0c3VwZXIuX2FmdGVyVmlld0luaXQoKTtcblx0XHRcdGlmICh0aGlzLnR5cGUgPT09ICdUWFQnIHx8IHRoaXMudHlwZSA9PT0gJ1RYQScpIHtcblx0XHRcdFx0aWYgKHRoaXMuX3ZhbGlkYXRpb25zRGF0YU9iai5taW5sZW5ndGgpIHtcblx0XHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5maWVsZFJlZiwgJ21pbmxlbmd0aCcsIHRoaXMuX3ZhbGlkYXRpb25zRGF0YU9iai5taW5sZW5ndGgudmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLl92YWxpZGF0aW9uc0RhdGFPYmoubWF4bGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZmllbGRSZWYsICdtYXhsZW5ndGgnLCB0aGlzLl92YWxpZGF0aW9uc0RhdGFPYmoubWF4bGVuZ3RoLnZhbHVlICsgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XG5cdFx0fVxuXHR9XG59XG4iXX0=