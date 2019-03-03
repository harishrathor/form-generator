/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var DefaultsService = /** @class */ (function () {
    function DefaultsService() {
        this._columns = 2;
    }
    Object.defineProperty(DefaultsService.prototype, "COLUMNS", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columns;
        },
        set: /**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            this._columns = columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "FIELD_DEFAULT_PROPS", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var propsObj = {
                labelPosition: this.FIELD_POSITION,
                labelAlignment: this.FIELD_ALIGNMENT,
                labelWidth: '50%',
                fieldWidth: '50%',
                fieldAlignment: 'left',
                width: '100%'
            };
            return propsObj;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "FORM_COLUMNS", {
        get: /**
         * @return {?}
         */
        function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "FIELD_ALIGNMENT", {
        get: /**
         * @return {?}
         */
        function () {
            return 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "FIELD_POSITION", {
        get: /**
         * @return {?}
         */
        function () {
            return 'left';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "EVENT_HANDLER_OWNER_TYPE", {
        get: /**
         * @return {?}
         */
        function () {
            return 'P';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "EXCEPTIONAL_STYLED_FIELDS", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var labelWidth = '25%';
            /** @type {?} */
            var fieldWidth = '75%';
            if (this.COLUMNS === 2) {
                labelWidth = '24.5%';
                fieldWidth = '75.5%';
            }
            /** @type {?} */
            var defaultProps = {
                labelWidth: labelWidth,
                fieldWidth: fieldWidth,
                columns: 1
            };
            return {
                TXA: defaultProps,
                // MSL: defaultProps,
                // RAD: defaultProps,
                HTML: {
                    columns: 1,
                    labelPosition: 'top',
                    labelWidth: '100%',
                    fieldWidth: '100%',
                    labelAlignment: 'left'
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "DUMMY_FIELDS", {
        get: /**
         * @return {?}
         */
        function () {
            return ['BLK', 'BTN'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "BTN_DEFUALT_THEME", {
        get: /**
         * @return {?}
         */
        function () {
            return 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "ACS_SEARCH_EVENT_NAME", {
        get: /**
         * @return {?}
         */
        function () {
            return 'search';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultsService.prototype, "ACS_FETCH_DEBOUNCE_TIME", {
        get: /**
         * @return {?}
         */
        function () {
            return 400;
        },
        enumerable: true,
        configurable: true
    });
    DefaultsService.decorators = [
        { type: Injectable }
    ];
    return DefaultsService;
}());
export { DefaultsService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DefaultsService.prototype._columns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtRQUdjLGFBQVEsR0FBRyxDQUFDLENBQUM7SUErRTNCLENBQUM7SUE3RUcsc0JBQUksb0NBQU87Ozs7UUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7OztRQUVELFVBQVksT0FBZTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGdEQUFtQjs7OztRQUF2Qjs7Z0JBQ1UsUUFBUSxHQUFHO2dCQUNiLGFBQWEsRUFBSyxJQUFJLENBQUMsY0FBYztnQkFDckMsY0FBYyxFQUFJLElBQUksQ0FBQyxlQUFlO2dCQUN0QyxVQUFVLEVBQVEsS0FBSztnQkFDdkIsVUFBVSxFQUFRLEtBQUs7Z0JBQ3ZCLGNBQWMsRUFBSSxNQUFNO2dCQUN4QixLQUFLLEVBQWEsTUFBTTthQUMzQjtZQUNELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQVk7Ozs7UUFBaEI7WUFDSSxPQUFPLENBQUMsQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQWU7Ozs7UUFBbkI7WUFDSSxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFjOzs7O1FBQWxCO1lBQ0ksT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxREFBd0I7Ozs7UUFBNUI7WUFDSSxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0RBQXlCOzs7O1FBQTdCOztnQkFDUSxVQUFVLEdBQUcsS0FBSzs7Z0JBQ2xCLFVBQVUsR0FBRyxLQUFLO1lBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLFVBQVUsR0FBRyxPQUFPLENBQUM7Z0JBQ3JCLFVBQVUsR0FBSSxPQUFPLENBQUM7YUFDekI7O2dCQUNLLFlBQVksR0FBRztnQkFDakIsVUFBVSxZQUFBO2dCQUNWLFVBQVUsWUFBQTtnQkFDVixPQUFPLEVBQUUsQ0FBQzthQUNiO1lBQ0QsT0FBTztnQkFDSCxHQUFHLEVBQUUsWUFBWTs7O2dCQUdqQixJQUFJLEVBQUU7b0JBQ0YsT0FBTyxFQUFFLENBQUM7b0JBQ1YsYUFBYSxFQUFFLEtBQUs7b0JBQ3BCLFVBQVUsRUFBRSxNQUFNO29CQUNsQixVQUFVLEVBQUUsTUFBTTtvQkFDbEIsY0FBYyxFQUFFLE1BQU07aUJBQ3pCO2FBQ0osQ0FBQztRQUNOLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQVk7Ozs7UUFBaEI7WUFDSSxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQWlCOzs7O1FBQXJCO1lBQ0ksT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBcUI7Ozs7UUFBekI7WUFDSSxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9EQUF1Qjs7OztRQUEzQjtZQUNJLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7O2dCQWpGSixVQUFVOztJQWtGWCxzQkFBQztDQUFBLEFBbEZELElBa0ZDO1NBakZZLGVBQWU7Ozs7OztJQUV4QixtQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0c1NlcnZpY2Uge1xyXG5cclxuICAgIHByb3RlY3RlZCBfY29sdW1ucyA9IDI7XHJcblxyXG4gICAgZ2V0IENPTFVNTlMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IENPTFVNTlMoY29sdW1uczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fY29sdW1ucyA9IGNvbHVtbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEZJRUxEX0RFRkFVTFRfUFJPUFMoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvcHNPYmogPSB7XHJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb24gICA6IHRoaXMuRklFTERfUE9TSVRJT04sXHJcbiAgICAgICAgICAgIGxhYmVsQWxpZ25tZW50ICA6IHRoaXMuRklFTERfQUxJR05NRU5ULFxyXG4gICAgICAgICAgICBsYWJlbFdpZHRoICAgICAgOiAnNTAlJyxcclxuICAgICAgICAgICAgZmllbGRXaWR0aCAgICAgIDogJzUwJScsXHJcbiAgICAgICAgICAgIGZpZWxkQWxpZ25tZW50ICA6ICdsZWZ0JyxcclxuICAgICAgICAgICAgd2lkdGggICAgICAgICAgIDogJzEwMCUnXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcHJvcHNPYmo7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEZPUk1fQ09MVU1OUygpIHtcclxuICAgICAgICByZXR1cm4gMjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRklFTERfQUxJR05NRU5UKCkge1xyXG4gICAgICAgIHJldHVybiAncmlnaHQnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBGSUVMRF9QT1NJVElPTigpIHtcclxuICAgICAgICByZXR1cm4gJ2xlZnQnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBFVkVOVF9IQU5ETEVSX09XTkVSX1RZUEUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdQJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRVhDRVBUSU9OQUxfU1RZTEVEX0ZJRUxEUygpIHtcclxuICAgICAgICBsZXQgbGFiZWxXaWR0aCA9ICcyNSUnO1xyXG4gICAgICAgIGxldCBmaWVsZFdpZHRoID0gJzc1JSc7XHJcbiAgICAgICAgaWYgKHRoaXMuQ09MVU1OUyA9PT0gMikge1xyXG4gICAgICAgICAgICBsYWJlbFdpZHRoID0gJzI0LjUlJztcclxuICAgICAgICAgICAgZmllbGRXaWR0aCA9ICAnNzUuNSUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsV2lkdGgsXHJcbiAgICAgICAgICAgIGZpZWxkV2lkdGgsXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IDFcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFRYQTogZGVmYXVsdFByb3BzLFxyXG4gICAgICAgICAgIC8vIE1TTDogZGVmYXVsdFByb3BzLFxyXG4gICAgICAgICAgIC8vIFJBRDogZGVmYXVsdFByb3BzLFxyXG4gICAgICAgICAgICBIVE1MOiB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBmaWVsZFdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBsYWJlbEFsaWdubWVudDogJ2xlZnQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBEVU1NWV9GSUVMRFMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsnQkxLJywgJ0JUTiddO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBCVE5fREVGVUFMVF9USEVNRSgpIHtcclxuICAgICAgICByZXR1cm4gJ2luZm8nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBBQ1NfU0VBUkNIX0VWRU5UX05BTUUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdzZWFyY2gnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBBQ1NfRkVUQ0hfREVCT1VOQ0VfVElNRSgpIHtcclxuICAgICAgICByZXR1cm4gNDAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==