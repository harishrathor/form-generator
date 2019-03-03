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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxEO0lBT21DLHlDQUFLO0lBUHhDOztJQXlCQSxDQUFDOzs7OztJQWZVLHNDQUFjOzs7O0lBQXhCO1FBQ0MsSUFBSTtZQUNILGlCQUFNLGNBQWMsV0FBRSxDQUFDO1lBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7Z0JBQy9DLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEc7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFO29CQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDdEc7YUFDRDtTQUNEO1FBQUMsT0FBTyxLQUFLLEVBQUU7U0FFZjtJQUNGLENBQUM7O2dCQXhCRCxTQUFTLFNBQUM7b0JBRVQsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLG05REFBb0M7O2lCQUVyQzs7SUFvQkQsb0JBQUM7Q0FBQSxBQXpCRCxDQU9tQyxLQUFLLEdBa0J2QztTQWxCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLy4uL2ZpZWxkLmNsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBcbiAgc2VsZWN0b3I6ICd0ZXh0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi4vY29tbW9uU3R5bGUuY3NzJywgJy4vdGV4dC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IGV4dGVuZHMgRmllbGQge1xuXG5cblx0cHJvdGVjdGVkIF9hZnRlclZpZXdJbml0KCkge1xuXHRcdHRyeSB7XG5cdFx0XHRzdXBlci5fYWZ0ZXJWaWV3SW5pdCgpO1xuXHRcdFx0aWYgKHRoaXMudHlwZSA9PT0gJ1RYVCcgfHwgdGhpcy50eXBlID09PSAnVFhBJykge1xuXHRcdFx0XHRpZiAodGhpcy5fdmFsaWRhdGlvbnNEYXRhT2JqLm1pbmxlbmd0aCkge1xuXHRcdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmZpZWxkUmVmLCAnbWlubGVuZ3RoJywgdGhpcy5fdmFsaWRhdGlvbnNEYXRhT2JqLm1pbmxlbmd0aC52YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuX3ZhbGlkYXRpb25zRGF0YU9iai5tYXhsZW5ndGgpIHtcblx0XHRcdFx0XHR0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5maWVsZFJlZiwgJ21heGxlbmd0aCcsIHRoaXMuX3ZhbGlkYXRpb25zRGF0YU9iai5tYXhsZW5ndGgudmFsdWUgKyAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcblx0XHR9XG5cdH1cbn1cbiJdfQ==