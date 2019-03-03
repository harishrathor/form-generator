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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtJQW9DQSxDQUFDO0lBbENEOzs7O09BSUc7Ozs7Ozs7Ozs7O0lBQ1EsbUNBQWE7Ozs7Ozs7Ozs7SUFBcEIsVUFBcUIsT0FBb0IsRUFBRSxxQkFBNkI7UUFDcEUsSUFBSTtZQUNBLE9BQU8sQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7WUFDMUM7OztrQkFHTTtTQUNUO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7Ozs7O0lBRU0sNkNBQXVCOzs7OztJQUE5QixVQUErQixRQUFnQixFQUFFLFFBQWE7UUFDMUQsSUFBSTs7Z0JBQ00sV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7WUFDdkQsV0FBVyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLE9BQU87Z0JBQ3ZCLElBQUk7b0JBQ0EsS0FBSyxJQUFJLE9BQU8sSUFBSSxRQUFRLEVBQUU7d0JBQzFCLElBQUk7O2dDQUNJLFNBQVMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDOzRCQUNqQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDO3lCQUN6Qzt3QkFBQyxPQUFPLEtBQUssRUFBRSxHQUFHO3FCQUN0QjtpQkFDSjtnQkFBQyxPQUFPLEtBQUssRUFBRSxHQUFHO1lBQ3ZCLENBQUMsRUFBQyxDQUFDO1NBQ047UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDOztnQkFuQ0osVUFBVTs7SUFvQ1gsa0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQW5DWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFV0aWxTZXJ2aWNlIHtcclxuLyogXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG5cclxuICAgIH1cclxuICovXHJcbiAgICBwdWJsaWMgYWRkQ3NzQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgc3BhY2VTZXBhcmF0ZWRDbGFzc2VzOiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IHNwYWNlU2VwYXJhdGVkQ2xhc3NlcztcclxuICAgICAgICAgICAgLyogY29uc3QgY2xhc3Nlc0FyciA9IHNwYWNlU2VwYXJhdGVkQ2xhc3Nlcy5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICBjbGFzc2VzQXJyLmZvckVhY2goKGNzc0NsYXNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY3NzQ2xhc3MpO1xyXG4gICAgICAgICAgICB9KTsgKi9cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBseUlubGllQ3NzQnlTZWxlY3RvcihzZWxlY3Rvcjogc3RyaW5nLCBjc3NTdHlsZTogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgZWxlbWVudExpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY3NzUHJvcCBpbiBjc3NTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BWYWx1ZSA9IGNzc1N0eWxlW2Nzc1Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFtcInN0eWxlXCJdW2Nzc1Byb3BdID0gcHJvcFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19