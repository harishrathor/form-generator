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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pzb24tZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZGVmYXVsdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFBO1FBR2MsYUFBUSxHQUFHLENBQUMsQ0FBQztJQStFM0IsQ0FBQztJQTdFRyxzQkFBSSxvQ0FBTzs7OztRQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBRUQsVUFBWSxPQUFlO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzVCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksZ0RBQW1COzs7O1FBQXZCOztnQkFDVSxRQUFRLEdBQUc7Z0JBQ2IsYUFBYSxFQUFLLElBQUksQ0FBQyxjQUFjO2dCQUNyQyxjQUFjLEVBQUksSUFBSSxDQUFDLGVBQWU7Z0JBQ3RDLFVBQVUsRUFBUSxLQUFLO2dCQUN2QixVQUFVLEVBQVEsS0FBSztnQkFDdkIsY0FBYyxFQUFJLE1BQU07Z0JBQ3hCLEtBQUssRUFBYSxNQUFNO2FBQzNCO1lBQ0QsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBWTs7OztRQUFoQjtZQUNJLE9BQU8sQ0FBQyxDQUFDO1FBQ2IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBZTs7OztRQUFuQjtZQUNJLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQWM7Ozs7UUFBbEI7WUFDSSxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFEQUF3Qjs7OztRQUE1QjtZQUNJLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzREFBeUI7Ozs7UUFBN0I7O2dCQUNRLFVBQVUsR0FBRyxLQUFLOztnQkFDbEIsVUFBVSxHQUFHLEtBQUs7WUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsVUFBVSxHQUFHLE9BQU8sQ0FBQztnQkFDckIsVUFBVSxHQUFJLE9BQU8sQ0FBQzthQUN6Qjs7Z0JBQ0ssWUFBWSxHQUFHO2dCQUNqQixVQUFVLFlBQUE7Z0JBQ1YsVUFBVSxZQUFBO2dCQUNWLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFDRCxPQUFPO2dCQUNILEdBQUcsRUFBRSxZQUFZOzs7Z0JBR2pCLElBQUksRUFBRTtvQkFDRixPQUFPLEVBQUUsQ0FBQztvQkFDVixhQUFhLEVBQUUsS0FBSztvQkFDcEIsVUFBVSxFQUFFLE1BQU07b0JBQ2xCLFVBQVUsRUFBRSxNQUFNO29CQUNsQixjQUFjLEVBQUUsTUFBTTtpQkFDekI7YUFDSixDQUFDO1FBQ04sQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBWTs7OztRQUFoQjtZQUNJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4Q0FBaUI7Ozs7UUFBckI7WUFDSSxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtEQUFxQjs7OztRQUF6QjtZQUNJLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksb0RBQXVCOzs7O1FBQTNCO1lBQ0ksT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDOzs7T0FBQTs7Z0JBakZKLFVBQVU7O0lBa0ZYLHNCQUFDO0NBQUEsQUFsRkQsSUFrRkM7U0FqRlksZUFBZTs7Ozs7O0lBRXhCLG1DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRzU2VydmljZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jb2x1bW5zID0gMjtcclxuXHJcbiAgICBnZXQgQ09MVU1OUygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ09MVU1OUyhjb2x1bW5zOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRklFTERfREVGQVVMVF9QUk9QUygpIHtcclxuICAgICAgICBjb25zdCBwcm9wc09iaiA9IHtcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbiAgIDogdGhpcy5GSUVMRF9QT1NJVElPTixcclxuICAgICAgICAgICAgbGFiZWxBbGlnbm1lbnQgIDogdGhpcy5GSUVMRF9BTElHTk1FTlQsXHJcbiAgICAgICAgICAgIGxhYmVsV2lkdGggICAgICA6ICc1MCUnLFxyXG4gICAgICAgICAgICBmaWVsZFdpZHRoICAgICAgOiAnNTAlJyxcclxuICAgICAgICAgICAgZmllbGRBbGlnbm1lbnQgIDogJ2xlZnQnLFxyXG4gICAgICAgICAgICB3aWR0aCAgICAgICAgICAgOiAnMTAwJSdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBwcm9wc09iajtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRk9STV9DT0xVTU5TKCkge1xyXG4gICAgICAgIHJldHVybiAyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBGSUVMRF9BTElHTk1FTlQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdyaWdodCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEZJRUxEX1BPU0lUSU9OKCkge1xyXG4gICAgICAgIHJldHVybiAnbGVmdCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEVWRU5UX0hBTkRMRVJfT1dORVJfVFlQRSgpIHtcclxuICAgICAgICByZXR1cm4gJ1AnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBFWENFUFRJT05BTF9TVFlMRURfRklFTERTKCkge1xyXG4gICAgICAgIGxldCBsYWJlbFdpZHRoID0gJzI1JSc7XHJcbiAgICAgICAgbGV0IGZpZWxkV2lkdGggPSAnNzUlJztcclxuICAgICAgICBpZiAodGhpcy5DT0xVTU5TID09PSAyKSB7XHJcbiAgICAgICAgICAgIGxhYmVsV2lkdGggPSAnMjQuNSUnO1xyXG4gICAgICAgICAgICBmaWVsZFdpZHRoID0gICc3NS41JSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICAgICAgbGFiZWxXaWR0aCxcclxuICAgICAgICAgICAgZmllbGRXaWR0aCxcclxuICAgICAgICAgICAgY29sdW1uczogMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgVFhBOiBkZWZhdWx0UHJvcHMsXHJcbiAgICAgICAgICAgLy8gTVNMOiBkZWZhdWx0UHJvcHMsXHJcbiAgICAgICAgICAgLy8gUkFEOiBkZWZhdWx0UHJvcHMsXHJcbiAgICAgICAgICAgIEhUTUw6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsV2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGZpZWxkV2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsQWxpZ25tZW50OiAnbGVmdCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IERVTU1ZX0ZJRUxEUygpIHtcclxuICAgICAgICByZXR1cm4gWydCTEsnLCAnQlROJ107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEJUTl9ERUZVQUxUX1RIRU1FKCkge1xyXG4gICAgICAgIHJldHVybiAnaW5mbyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEFDU19TRUFSQ0hfRVZFTlRfTkFNRSgpIHtcclxuICAgICAgICByZXR1cm4gJ3NlYXJjaCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEFDU19GRVRDSF9ERUJPVU5DRV9USU1FKCkge1xyXG4gICAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9XHJcbn1cclxuIl19