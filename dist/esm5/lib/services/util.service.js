/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    /*
        constructor(public renderer: Renderer2) {
    
        }
     */
    /*
        constructor(public renderer: Renderer2) {
    
        }
     */
    /**
     * @param {?} element
     * @param {?} spaceSeparatedClasses
     * @return {?}
     */
    UtilService.prototype.addCssClasses = /*
        constructor(public renderer: Renderer2) {
    
        }
     */
    /**
     * @param {?} element
     * @param {?} spaceSeparatedClasses
     * @return {?}
     */
    function (element, spaceSeparatedClasses) {
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
    };
    /**
     * @param {?} selector
     * @param {?} cssStyle
     * @return {?}
     */
    UtilService.prototype.applyInlieCssBySelector = /**
     * @param {?} selector
     * @param {?} cssStyle
     * @return {?}
     */
    function (selector, cssStyle) {
        try {
            /** @type {?} */
            var elementList = document.querySelectorAll(selector);
            elementList.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                try {
                    for (var cssProp in cssStyle) {
                        try {
                            /** @type {?} */
                            var propValue = cssStyle[cssProp];
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
    };
    UtilService.decorators = [
        { type: Injectable }
    ];
    return UtilService;
}());
export { UtilService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdXRpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQUE7SUFvQ0EsQ0FBQztJQWxDRDs7OztPQUlHOzs7Ozs7Ozs7OztJQUNRLG1DQUFhOzs7Ozs7Ozs7O0lBQXBCLFVBQXFCLE9BQW9CLEVBQUUscUJBQTZCO1FBQ3BFLElBQUk7WUFDQSxPQUFPLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1lBQzFDOzs7a0JBR007U0FDVDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7Ozs7OztJQUVNLDZDQUF1Qjs7Ozs7SUFBOUIsVUFBK0IsUUFBZ0IsRUFBRSxRQUFhO1FBQzFELElBQUk7O2dCQUNNLFdBQVcsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1lBQ3ZELFdBQVcsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxPQUFPO2dCQUN2QixJQUFJO29CQUNBLEtBQUssSUFBSSxPQUFPLElBQUksUUFBUSxFQUFFO3dCQUMxQixJQUFJOztnQ0FDSSxTQUFTLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQzs0QkFDakMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFNBQVMsQ0FBQzt5QkFDekM7d0JBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRztxQkFDdEI7aUJBQ0o7Z0JBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRztZQUN2QixDQUFDLEVBQUMsQ0FBQztTQUNOO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7Z0JBbkNKLFVBQVU7O0lBb0NYLGtCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FuQ1ksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVdGlsU2VydmljZSB7XHJcbi8qIFxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuXHJcbiAgICB9XHJcbiAqL1xyXG4gICAgcHVibGljIGFkZENzc0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNwYWNlU2VwYXJhdGVkQ2xhc3Nlczogc3RyaW5nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBzcGFjZVNlcGFyYXRlZENsYXNzZXM7XHJcbiAgICAgICAgICAgIC8qIGNvbnN0IGNsYXNzZXNBcnIgPSBzcGFjZVNlcGFyYXRlZENsYXNzZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgY2xhc3Nlc0Fyci5mb3JFYWNoKChjc3NDbGFzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzKTtcclxuICAgICAgICAgICAgfSk7ICovXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwbHlJbmxpZUNzc0J5U2VsZWN0b3Ioc2VsZWN0b3I6IHN0cmluZywgY3NzU3R5bGU6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGVsZW1lbnRMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNzc1Byb3AgaW4gY3NzU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wVmFsdWUgPSBjc3NTdHlsZVtjc3NQcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbXCJzdHlsZVwiXVtjc3NQcm9wXSA9IHByb3BWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==