/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Field } from './../field.class';
import { Component } from '@angular/core';
export class TextComponent extends Field {
    /**
     * @protected
     * @return {?}
     */
    _afterViewInit() {
        try {
            super._afterViewInit();
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
    }
}
TextComponent.decorators = [
    { type: Component, args: [{
                selector: 'text',
                template: "<!-- <div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <input type=\"text\" class=\"form-control\" \n      [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n      [attr.placeholder]=\"placeholder\">\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n -->\n<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\" [ngStyle]=\"cssStyle.fieldContainerStyle\"\n  [formGroup]=\"group\">\n  <label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\" [ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n  <div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\" *ngIf=\"prefix\">\n        <div class=\"input-group-text\">{{prefix}}</div>\n      </div>\n      <input type=\"text\" class=\"form-control\" \n        [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\" [formControlName]=\"name\"\n        [attr.placeholder]=\"placeholder\">\n      <div class=\"input-group-append\" *ngIf=\"suffix\">\n        <span class=\"input-group-text\">{{suffix}}</span>\n      </div>\n    </div>\n    <small class=\"form-text text-muted\" id=\"{{id}}__HELP\">{{helpText}}</small>\n    <errors [errors]=\"errors\" *ngIf=\"errors.length > 0\"></errors>\n  </div>\n</div>\n",
                styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ""]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFTbEQsTUFBTSxPQUFPLGFBQWMsU0FBUSxLQUFLOzs7OztJQUc3QixjQUFjO1FBQ3ZCLElBQUk7WUFDSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtnQkFDL0MsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFO29CQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNsRztnQkFDRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN0RzthQUNEO1NBQ0Q7UUFBQyxPQUFPLEtBQUssRUFBRTtTQUVmO0lBQ0YsQ0FBQzs7O1lBeEJELFNBQVMsU0FBQztnQkFFVCxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsbTlEQUFvQzs7YUFFckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vLi4vZmllbGQuY2xhc3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIFxuICBzZWxlY3RvcjogJ3RleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLi9jb21tb25TdHlsZS5jc3MnLCAnLi90ZXh0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZCB7XG5cblxuXHRwcm90ZWN0ZWQgX2FmdGVyVmlld0luaXQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHN1cGVyLl9hZnRlclZpZXdJbml0KCk7XG5cdFx0XHRpZiAodGhpcy50eXBlID09PSAnVFhUJyB8fCB0aGlzLnR5cGUgPT09ICdUWEEnKSB7XG5cdFx0XHRcdGlmICh0aGlzLl92YWxpZGF0aW9uc0RhdGFPYmoubWlubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZmllbGRSZWYsICdtaW5sZW5ndGgnLCB0aGlzLl92YWxpZGF0aW9uc0RhdGFPYmoubWlubGVuZ3RoLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5fdmFsaWRhdGlvbnNEYXRhT2JqLm1heGxlbmd0aCkge1xuXHRcdFx0XHRcdHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmZpZWxkUmVmLCAnbWF4bGVuZ3RoJywgdGhpcy5fdmFsaWRhdGlvbnNEYXRhT2JqLm1heGxlbmd0aC52YWx1ZSArIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFxuXHRcdH1cblx0fVxufVxuIl19