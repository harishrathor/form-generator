/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} methodType
     * @return {?}
     */
    HttpService.prototype.fetchOptions = /**
     * @param {?} url
     * @param {?} data
     * @param {?=} methodType
     * @return {?}
     */
    function (url, data, methodType) {
        try {
            if (methodType === 'POST') {
                return this._http.post(url, data);
            }
            url += this.makeObjToGetUrlParams(data);
            return this._http.get(url);
        }
        catch (error) {
            console.log(error);
            return of([]);
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    HttpService.prototype.makeObjToGetUrlParams = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        try {
            /** @type {?} */
            var str = '';
            for (var paramName in obj) {
                /** @type {?} */
                var paramValue = obj[paramName];
                if (str === '') {
                    str += '?';
                }
                else {
                    str += '&';
                }
                str += paramValue + "=" + paramValue;
            }
            return str;
        }
        catch (error) {
            console.log(error);
            return '';
        }
    };
    HttpService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HttpService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ HttpService.ngInjectableDef = i0.defineInjectable({ factory: function HttpService_Factory() { return new HttpService(i0.inject(i1.HttpClient)); }, token: HttpService, providedIn: "root" });
    return HttpService;
}());
export { HttpService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    HttpService.prototype._http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUcxQjtJQUtJLHFCQUFzQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQUcsQ0FBQzs7Ozs7OztJQUVwQyxrQ0FBWTs7Ozs7O0lBQW5CLFVBQW9CLEdBQVcsRUFBRSxJQUFTLEVBQUUsVUFBbUI7UUFDM0QsSUFBSTtZQUNBLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtnQkFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUM7WUFDRCxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQU0sR0FBRyxDQUFDLENBQUM7U0FDbkM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakI7SUFDTCxDQUFDOzs7OztJQUVNLDJDQUFxQjs7OztJQUE1QixVQUE2QixHQUFRO1FBQ2pDLElBQUk7O2dCQUNJLEdBQUcsR0FBRyxFQUFFO1lBQ1osS0FBSyxJQUFJLFNBQVMsSUFBSSxHQUFHLEVBQUU7O29CQUNqQixVQUFVLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDakMsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO29CQUNaLEdBQUcsSUFBSSxHQUFHLENBQUM7aUJBQ2Q7cUJBQU07b0JBQ0gsR0FBRyxJQUFJLEdBQUcsQ0FBQztpQkFDZDtnQkFDRCxHQUFHLElBQU8sVUFBVSxTQUFJLFVBQVksQ0FBQzthQUN4QztZQUNELE9BQU8sR0FBRyxDQUFDO1NBQ2Q7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUNMLENBQUM7O2dCQXJDSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7O2dCQU5RLFVBQVU7OztzQkFEbkI7Q0EyQ0MsQUF0Q0QsSUFzQ0M7U0FuQ1ksV0FBVzs7Ozs7O0lBRVIsNEJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgICBwdWJsaWMgZmV0Y2hPcHRpb25zKHVybDogc3RyaW5nLCBkYXRhOiBhbnksIG1ldGhvZFR5cGU/OiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAobWV0aG9kVHlwZSA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0PGFueT4odXJsLCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1cmwgKz0gdGhpcy5tYWtlT2JqVG9HZXRVcmxQYXJhbXMoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KHVybCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2YoW10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFrZU9ialRvR2V0VXJsUGFyYW1zKG9iajogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwYXJhbU5hbWUgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbVZhbHVlID0gb2JqW3BhcmFtTmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSAnPyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSAnJic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gYCR7cGFyYW1WYWx1ZX09JHtwYXJhbVZhbHVlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19