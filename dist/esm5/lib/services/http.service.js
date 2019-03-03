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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFHMUI7SUFLSSxxQkFBc0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFHLENBQUM7Ozs7Ozs7SUFFcEMsa0NBQVk7Ozs7OztJQUFuQixVQUFvQixHQUFXLEVBQUUsSUFBUyxFQUFFLFVBQW1CO1FBQzNELElBQUk7WUFDQSxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQU0sR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzFDO1lBQ0QsR0FBRyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ25DO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQzs7Ozs7SUFFTSwyQ0FBcUI7Ozs7SUFBNUIsVUFBNkIsR0FBUTtRQUNqQyxJQUFJOztnQkFDSSxHQUFHLEdBQUcsRUFBRTtZQUNaLEtBQUssSUFBSSxTQUFTLElBQUksR0FBRyxFQUFFOztvQkFDakIsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ2pDLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtvQkFDWixHQUFHLElBQUksR0FBRyxDQUFDO2lCQUNkO3FCQUFNO29CQUNILEdBQUcsSUFBSSxHQUFHLENBQUM7aUJBQ2Q7Z0JBQ0QsR0FBRyxJQUFPLFVBQVUsU0FBSSxVQUFZLENBQUM7YUFDeEM7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNkO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sRUFBRSxDQUFDO1NBQ2I7SUFDTCxDQUFDOztnQkFyQ0osVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OztnQkFOUSxVQUFVOzs7c0JBRG5CO0NBMkNDLEFBdENELElBc0NDO1NBbkNZLFdBQVc7Ozs7OztJQUVSLDRCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gICAgcHVibGljIGZldGNoT3B0aW9ucyh1cmw6IHN0cmluZywgZGF0YTogYW55LCBtZXRob2RUeXBlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZFR5cGUgPT09ICdQT1NUJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdDxhbnk+KHVybCwgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXJsICs9IHRoaXMubWFrZU9ialRvR2V0VXJsUGFyYW1zKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55Pih1cmwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VPYmpUb0dldFVybFBhcmFtcyhvYmo6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICAgICAgZm9yIChsZXQgcGFyYW1OYW1lIGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1WYWx1ZSA9IG9ialtwYXJhbU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ciA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gJz8nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gJyYnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RyICs9IGAke3BhcmFtVmFsdWV9PSR7cGFyYW1WYWx1ZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==