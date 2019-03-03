/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class HttpService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} methodType
     * @return {?}
     */
    fetchOptions(url, data, methodType) {
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
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    makeObjToGetUrlParams(obj) {
        try {
            /** @type {?} */
            let str = '';
            for (let paramName in obj) {
                /** @type {?} */
                const paramValue = obj[paramName];
                if (str === '') {
                    str += '?';
                }
                else {
                    str += '&';
                }
                str += `${paramValue}=${paramValue}`;
            }
            return str;
        }
        catch (error) {
            console.log(error);
            return '';
        }
    }
}
HttpService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HttpService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ HttpService.ngInjectableDef = i0.defineInjectable({ factory: function HttpService_Factory() { return new HttpService(i0.inject(i1.HttpClient)); }, token: HttpService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    HttpService.prototype._http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanNvbi1mb3JtLWdlbmVyYXRvci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQU0xQixNQUFNLE9BQU8sV0FBVzs7OztJQUVwQixZQUFzQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQUcsQ0FBQzs7Ozs7OztJQUVwQyxZQUFZLENBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxVQUFtQjtRQUMzRCxJQUFJO1lBQ0EsSUFBSSxVQUFVLEtBQUssTUFBTSxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMxQztZQUNELEdBQUcsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBTSxHQUFHLENBQUMsQ0FBQztTQUNuQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQjtJQUNMLENBQUM7Ozs7O0lBRU0scUJBQXFCLENBQUMsR0FBUTtRQUNqQyxJQUFJOztnQkFDSSxHQUFHLEdBQUcsRUFBRTtZQUNaLEtBQUssSUFBSSxTQUFTLElBQUksR0FBRyxFQUFFOztzQkFDakIsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ2pDLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtvQkFDWixHQUFHLElBQUksR0FBRyxDQUFDO2lCQUNkO3FCQUFNO29CQUNILEdBQUcsSUFBSSxHQUFHLENBQUM7aUJBQ2Q7Z0JBQ0QsR0FBRyxJQUFJLEdBQUcsVUFBVSxJQUFJLFVBQVUsRUFBRSxDQUFDO2FBQ3hDO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLEVBQUUsQ0FBQztTQUNiO0lBQ0wsQ0FBQzs7O1lBckNKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7OztZQU5RLFVBQVU7Ozs7Ozs7O0lBU0gsNEJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgICBwdWJsaWMgZmV0Y2hPcHRpb25zKHVybDogc3RyaW5nLCBkYXRhOiBhbnksIG1ldGhvZFR5cGU/OiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAobWV0aG9kVHlwZSA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0PGFueT4odXJsLCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1cmwgKz0gdGhpcy5tYWtlT2JqVG9HZXRVcmxQYXJhbXMoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KHVybCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2YoW10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFrZU9ialRvR2V0VXJsUGFyYW1zKG9iajogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwYXJhbU5hbWUgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbVZhbHVlID0gb2JqW3BhcmFtTmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSAnPyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSAnJic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gYCR7cGFyYW1WYWx1ZX09JHtwYXJhbVZhbHVlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19