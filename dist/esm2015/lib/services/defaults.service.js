/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class DefaultsService {
    constructor() {
        this._columns = 2;
    }
    /**
     * @return {?}
     */
    get COLUMNS() {
        return this._columns;
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    set COLUMNS(columns) {
        this._columns = columns;
    }
    /**
     * @return {?}
     */
    get FIELD_DEFAULT_PROPS() {
        /** @type {?} */
        const propsObj = {
            labelPosition: this.FIELD_POSITION,
            labelAlignment: this.FIELD_ALIGNMENT,
            labelWidth: '50%',
            fieldWidth: '50%',
            fieldAlignment: 'left',
            width: '100%'
        };
        return propsObj;
    }
    /**
     * @return {?}
     */
    get FORM_COLUMNS() {
        return 2;
    }
    /**
     * @return {?}
     */
    get FIELD_ALIGNMENT() {
        return 'right';
    }
    /**
     * @return {?}
     */
    get FIELD_POSITION() {
        return 'left';
    }
    /**
     * @return {?}
     */
    get EVENT_HANDLER_OWNER_TYPE() {
        return 'P';
    }
    /**
     * @return {?}
     */
    get EXCEPTIONAL_STYLED_FIELDS() {
        /** @type {?} */
        let labelWidth = '25%';
        /** @type {?} */
        let fieldWidth = '75%';
        if (this.COLUMNS === 2) {
            labelWidth = '24.5%';
            fieldWidth = '75.5%';
        }
        /** @type {?} */
        const defaultProps = {
            labelWidth,
            fieldWidth,
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
    }
    /**
     * @return {?}
     */
    get DUMMY_FIELDS() {
        return ['BLK', 'BTN'];
    }
    /**
     * @return {?}
     */
    get BTN_DEFUALT_THEME() {
        return 'info';
    }
    /**
     * @return {?}
     */
    get ACS_SEARCH_EVENT_NAME() {
        return 'search';
    }
    /**
     * @return {?}
     */
    get ACS_FETCH_DEBOUNCE_TIME() {
        return 400;
    }
}
DefaultsService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DefaultsService.prototype._columns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RlZmF1bHRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLGVBQWU7SUFENUI7UUFHYyxhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBK0UzQixDQUFDOzs7O0lBN0VHLElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQUksT0FBTyxDQUFDLE9BQWU7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksbUJBQW1COztjQUNiLFFBQVEsR0FBRztZQUNiLGFBQWEsRUFBSyxJQUFJLENBQUMsY0FBYztZQUNyQyxjQUFjLEVBQUksSUFBSSxDQUFDLGVBQWU7WUFDdEMsVUFBVSxFQUFRLEtBQUs7WUFDdkIsVUFBVSxFQUFRLEtBQUs7WUFDdkIsY0FBYyxFQUFJLE1BQU07WUFDeEIsS0FBSyxFQUFhLE1BQU07U0FDM0I7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ1osT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2YsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELElBQUksY0FBYztRQUNkLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxJQUFJLHdCQUF3QjtRQUN4QixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxJQUFJLHlCQUF5Qjs7WUFDckIsVUFBVSxHQUFHLEtBQUs7O1lBQ2xCLFVBQVUsR0FBRyxLQUFLO1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDcEIsVUFBVSxHQUFHLE9BQU8sQ0FBQztZQUNyQixVQUFVLEdBQUksT0FBTyxDQUFDO1NBQ3pCOztjQUNLLFlBQVksR0FBRztZQUNqQixVQUFVO1lBQ1YsVUFBVTtZQUNWLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxPQUFPO1lBQ0gsR0FBRyxFQUFFLFlBQVk7OztZQUdqQixJQUFJLEVBQUU7Z0JBQ0YsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsY0FBYyxFQUFFLE1BQU07YUFDekI7U0FDSixDQUFDO0lBQ04sQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNaLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELElBQUksaUJBQWlCO1FBQ2pCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxJQUFJLHFCQUFxQjtRQUNyQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsSUFBSSx1QkFBdUI7UUFDdkIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOzs7WUFqRkosVUFBVTs7Ozs7OztJQUdQLG1DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRzU2VydmljZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jb2x1bW5zID0gMjtcclxuXHJcbiAgICBnZXQgQ09MVU1OUygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ09MVU1OUyhjb2x1bW5zOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRklFTERfREVGQVVMVF9QUk9QUygpIHtcclxuICAgICAgICBjb25zdCBwcm9wc09iaiA9IHtcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbiAgIDogdGhpcy5GSUVMRF9QT1NJVElPTixcclxuICAgICAgICAgICAgbGFiZWxBbGlnbm1lbnQgIDogdGhpcy5GSUVMRF9BTElHTk1FTlQsXHJcbiAgICAgICAgICAgIGxhYmVsV2lkdGggICAgICA6ICc1MCUnLFxyXG4gICAgICAgICAgICBmaWVsZFdpZHRoICAgICAgOiAnNTAlJyxcclxuICAgICAgICAgICAgZmllbGRBbGlnbm1lbnQgIDogJ2xlZnQnLFxyXG4gICAgICAgICAgICB3aWR0aCAgICAgICAgICAgOiAnMTAwJSdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBwcm9wc09iajtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRk9STV9DT0xVTU5TKCkge1xyXG4gICAgICAgIHJldHVybiAyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBGSUVMRF9BTElHTk1FTlQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdyaWdodCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEZJRUxEX1BPU0lUSU9OKCkge1xyXG4gICAgICAgIHJldHVybiAnbGVmdCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEVWRU5UX0hBTkRMRVJfT1dORVJfVFlQRSgpIHtcclxuICAgICAgICByZXR1cm4gJ1AnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBFWENFUFRJT05BTF9TVFlMRURfRklFTERTKCkge1xyXG4gICAgICAgIGxldCBsYWJlbFdpZHRoID0gJzI1JSc7XHJcbiAgICAgICAgbGV0IGZpZWxkV2lkdGggPSAnNzUlJztcclxuICAgICAgICBpZiAodGhpcy5DT0xVTU5TID09PSAyKSB7XHJcbiAgICAgICAgICAgIGxhYmVsV2lkdGggPSAnMjQuNSUnO1xyXG4gICAgICAgICAgICBmaWVsZFdpZHRoID0gICc3NS41JSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICAgICAgbGFiZWxXaWR0aCxcclxuICAgICAgICAgICAgZmllbGRXaWR0aCxcclxuICAgICAgICAgICAgY29sdW1uczogMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgVFhBOiBkZWZhdWx0UHJvcHMsXHJcbiAgICAgICAgICAgLy8gTVNMOiBkZWZhdWx0UHJvcHMsXHJcbiAgICAgICAgICAgLy8gUkFEOiBkZWZhdWx0UHJvcHMsXHJcbiAgICAgICAgICAgIEhUTUw6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsV2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGZpZWxkV2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsQWxpZ25tZW50OiAnbGVmdCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IERVTU1ZX0ZJRUxEUygpIHtcclxuICAgICAgICByZXR1cm4gWydCTEsnLCAnQlROJ107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEJUTl9ERUZVQUxUX1RIRU1FKCkge1xyXG4gICAgICAgIHJldHVybiAnaW5mbyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEFDU19TRUFSQ0hfRVZFTlRfTkFNRSgpIHtcclxuICAgICAgICByZXR1cm4gJ3NlYXJjaCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEFDU19GRVRDSF9ERUJPVU5DRV9USU1FKCkge1xyXG4gICAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9XHJcbn1cclxuIl19