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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFNMUIsTUFBTSxPQUFPLFdBQVc7Ozs7SUFFcEIsWUFBc0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFHLENBQUM7Ozs7Ozs7SUFFcEMsWUFBWSxDQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsVUFBbUI7UUFDM0QsSUFBSTtZQUNBLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtnQkFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUM7WUFDRCxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQU0sR0FBRyxDQUFDLENBQUM7U0FDbkM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakI7SUFDTCxDQUFDOzs7OztJQUVNLHFCQUFxQixDQUFDLEdBQVE7UUFDakMsSUFBSTs7Z0JBQ0ksR0FBRyxHQUFHLEVBQUU7WUFDWixLQUFLLElBQUksU0FBUyxJQUFJLEdBQUcsRUFBRTs7c0JBQ2pCLFVBQVUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO2dCQUNqQyxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7b0JBQ1osR0FBRyxJQUFJLEdBQUcsQ0FBQztpQkFDZDtxQkFBTTtvQkFDSCxHQUFHLElBQUksR0FBRyxDQUFDO2lCQUNkO2dCQUNELEdBQUcsSUFBSSxHQUFHLFVBQVUsSUFBSSxVQUFVLEVBQUUsQ0FBQzthQUN4QztZQUNELE9BQU8sR0FBRyxDQUFDO1NBQ2Q7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUNMLENBQUM7OztZQXJDSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7WUFOUSxVQUFVOzs7Ozs7OztJQVNILDRCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gICAgcHVibGljIGZldGNoT3B0aW9ucyh1cmw6IHN0cmluZywgZGF0YTogYW55LCBtZXRob2RUeXBlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZFR5cGUgPT09ICdQT1NUJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdDxhbnk+KHVybCwgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXJsICs9IHRoaXMubWFrZU9ialRvR2V0VXJsUGFyYW1zKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55Pih1cmwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VPYmpUb0dldFVybFBhcmFtcyhvYmo6IGFueSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICAgICAgZm9yIChsZXQgcGFyYW1OYW1lIGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1WYWx1ZSA9IG9ialtwYXJhbU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ciA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gJz8nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gJyYnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RyICs9IGAke3BhcmFtVmFsdWV9PSR7cGFyYW1WYWx1ZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==