/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ErrorsComponent = /** @class */ (function () {
    function ErrorsComponent() {
    }
    ErrorsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'errors',
                    template: "\n<div  class=\"invalid-feedback field-error-container\" style=\"display:block !important\"> \n  <span *ngFor=\"let error of errors\" class=\"{{error.name}}-error field-error\" >\n     {{error.message}}\n    </span>\n  \n</div>\n\n",
                    styles: [""]
                }] }
    ];
    ErrorsComponent.propDecorators = {
        errors: [{ type: Input }]
    };
    return ErrorsComponent;
}());
export { ErrorsComponent };
if (false) {
    /** @type {?} */
    ErrorsComponent.prototype.errors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvZXJyb3JzL2Vycm9ycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXBFO0lBQUE7SUFRQSxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLG1QQUFzQzs7aUJBRXZDOzs7eUJBRUcsS0FBSzs7SUFFVCxzQkFBQztDQUFBLEFBUkQsSUFRQztTQUhZLGVBQWU7OztJQUN6QixpQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcnJvcnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXJyb3JzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXJyb3JzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFcnJvcnNDb21wb25lbnQgIHtcbiAgIEBJbnB1dCgpIGVycm9yczogYW55O1xuXG59XG4iXX0=