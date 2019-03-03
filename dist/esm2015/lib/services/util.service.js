/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class UtilService {
    /*
        constructor(public renderer: Renderer2) {
    
        }
     */
    /**
     * @param {?} element
     * @param {?} spaceSeparatedClasses
     * @return {?}
     */
    addCssClasses(element, spaceSeparatedClasses) {
        try {
            element.className = spaceSeparatedClasses;
            /* const classesArr = spaceSeparatedClasses.split(' ');
            classesArr.forEach((cssClass) => {
                //this.renderer.addClass(element, cssClass);
            }); */
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} selector
     * @param {?} cssStyle
     * @return {?}
     */
    applyInlieCssBySelector(selector, cssStyle) {
        try {
            /** @type {?} */
            const elementList = document.querySelectorAll(selector);
            elementList.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                try {
                    for (let cssProp in cssStyle) {
                        try {
                            /** @type {?} */
                            let propValue = cssStyle[cssProp];
                            element["style"][cssProp] = propValue;
                        }
                        catch (error) { }
                    }
                }
                catch (error) { }
            }));
        }
        catch (error) {
            console.log(error);
        }
    }
}
UtilService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7Ozs7O0lBTWIsYUFBYSxDQUFDLE9BQW9CLEVBQUUscUJBQTZCO1FBQ3BFLElBQUk7WUFDQSxPQUFPLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1lBQzFDOzs7a0JBR007U0FDVDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7Ozs7OztJQUVNLHVCQUF1QixDQUFDLFFBQWdCLEVBQUUsUUFBYTtRQUMxRCxJQUFJOztrQkFDTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztZQUN2RCxXQUFXLENBQUMsT0FBTzs7OztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMxQixJQUFJO29CQUNBLEtBQUssSUFBSSxPQUFPLElBQUksUUFBUSxFQUFFO3dCQUMxQixJQUFJOztnQ0FDSSxTQUFTLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQzs0QkFDakMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFNBQVMsQ0FBQzt5QkFDekM7d0JBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRztxQkFDdEI7aUJBQ0o7Z0JBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRztZQUN2QixDQUFDLEVBQUMsQ0FBQztTQUNOO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7O1lBbkNKLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXRpbFNlcnZpY2Uge1xyXG4vKiBcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcblxyXG4gICAgfVxyXG4gKi9cclxuICAgIHB1YmxpYyBhZGRDc3NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzcGFjZVNlcGFyYXRlZENsYXNzZXM6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gc3BhY2VTZXBhcmF0ZWRDbGFzc2VzO1xyXG4gICAgICAgICAgICAvKiBjb25zdCBjbGFzc2VzQXJyID0gc3BhY2VTZXBhcmF0ZWRDbGFzc2VzLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgIGNsYXNzZXNBcnIuZm9yRWFjaCgoY3NzQ2xhc3MpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBjc3NDbGFzcyk7XHJcbiAgICAgICAgICAgIH0pOyAqL1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGx5SW5saWVDc3NCeVNlbGVjdG9yKHNlbGVjdG9yOiBzdHJpbmcsIGNzc1N0eWxlOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBlbGVtZW50TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjc3NQcm9wIGluIGNzc1N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcFZhbHVlID0gY3NzU3R5bGVbY3NzUHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50W1wic3R5bGVcIl1bY3NzUHJvcF0gPSBwcm9wVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=