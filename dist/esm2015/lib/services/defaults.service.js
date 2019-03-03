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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pzb24tZm9ybS1nZW5lcmF0b3IvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZGVmYXVsdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUdjLGFBQVEsR0FBRyxDQUFDLENBQUM7SUErRTNCLENBQUM7Ozs7SUE3RUcsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsT0FBZTtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBSSxtQkFBbUI7O2NBQ2IsUUFBUSxHQUFHO1lBQ2IsYUFBYSxFQUFLLElBQUksQ0FBQyxjQUFjO1lBQ3JDLGNBQWMsRUFBSSxJQUFJLENBQUMsZUFBZTtZQUN0QyxVQUFVLEVBQVEsS0FBSztZQUN2QixVQUFVLEVBQVEsS0FBSztZQUN2QixjQUFjLEVBQUksTUFBTTtZQUN4QixLQUFLLEVBQWEsTUFBTTtTQUMzQjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDWixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxJQUFJLGVBQWU7UUFDZixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELElBQUksd0JBQXdCO1FBQ3hCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELElBQUkseUJBQXlCOztZQUNyQixVQUFVLEdBQUcsS0FBSzs7WUFDbEIsVUFBVSxHQUFHLEtBQUs7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTtZQUNwQixVQUFVLEdBQUcsT0FBTyxDQUFDO1lBQ3JCLFVBQVUsR0FBSSxPQUFPLENBQUM7U0FDekI7O2NBQ0ssWUFBWSxHQUFHO1lBQ2pCLFVBQVU7WUFDVixVQUFVO1lBQ1YsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUNELE9BQU87WUFDSCxHQUFHLEVBQUUsWUFBWTs7O1lBR2pCLElBQUksRUFBRTtnQkFDRixPQUFPLEVBQUUsQ0FBQztnQkFDVixhQUFhLEVBQUUsS0FBSztnQkFDcEIsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixjQUFjLEVBQUUsTUFBTTthQUN6QjtTQUNKLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ1osT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDakIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELElBQUkscUJBQXFCO1FBQ3JCLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxJQUFJLHVCQUF1QjtRQUN2QixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7OztZQWpGSixVQUFVOzs7Ozs7O0lBR1AsbUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdHNTZXJ2aWNlIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NvbHVtbnMgPSAyO1xyXG5cclxuICAgIGdldCBDT0xVTU5TKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBDT0xVTU5TKGNvbHVtbnM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBGSUVMRF9ERUZBVUxUX1BST1BTKCkge1xyXG4gICAgICAgIGNvbnN0IHByb3BzT2JqID0ge1xyXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uICAgOiB0aGlzLkZJRUxEX1BPU0lUSU9OLFxyXG4gICAgICAgICAgICBsYWJlbEFsaWdubWVudCAgOiB0aGlzLkZJRUxEX0FMSUdOTUVOVCxcclxuICAgICAgICAgICAgbGFiZWxXaWR0aCAgICAgIDogJzUwJScsXHJcbiAgICAgICAgICAgIGZpZWxkV2lkdGggICAgICA6ICc1MCUnLFxyXG4gICAgICAgICAgICBmaWVsZEFsaWdubWVudCAgOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIHdpZHRoICAgICAgICAgICA6ICcxMDAlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHByb3BzT2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBGT1JNX0NPTFVNTlMoKSB7XHJcbiAgICAgICAgcmV0dXJuIDI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEZJRUxEX0FMSUdOTUVOVCgpIHtcclxuICAgICAgICByZXR1cm4gJ3JpZ2h0JztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRklFTERfUE9TSVRJT04oKSB7XHJcbiAgICAgICAgcmV0dXJuICdsZWZ0JztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRVZFTlRfSEFORExFUl9PV05FUl9UWVBFKCkge1xyXG4gICAgICAgIHJldHVybiAnUCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEVYQ0VQVElPTkFMX1NUWUxFRF9GSUVMRFMoKSB7XHJcbiAgICAgICAgbGV0IGxhYmVsV2lkdGggPSAnMjUlJztcclxuICAgICAgICBsZXQgZmllbGRXaWR0aCA9ICc3NSUnO1xyXG4gICAgICAgIGlmICh0aGlzLkNPTFVNTlMgPT09IDIpIHtcclxuICAgICAgICAgICAgbGFiZWxXaWR0aCA9ICcyNC41JSc7XHJcbiAgICAgICAgICAgIGZpZWxkV2lkdGggPSAgJzc1LjUlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgICAgICBsYWJlbFdpZHRoLFxyXG4gICAgICAgICAgICBmaWVsZFdpZHRoLFxyXG4gICAgICAgICAgICBjb2x1bW5zOiAxXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBUWEE6IGRlZmF1bHRQcm9wcyxcclxuICAgICAgICAgICAvLyBNU0w6IGRlZmF1bHRQcm9wcyxcclxuICAgICAgICAgICAvLyBSQUQ6IGRlZmF1bHRQcm9wcyxcclxuICAgICAgICAgICAgSFRNTDoge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxXaWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgZmllbGRXaWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxBbGlnbm1lbnQ6ICdsZWZ0J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRFVNTVlfRklFTERTKCkge1xyXG4gICAgICAgIHJldHVybiBbJ0JMSycsICdCVE4nXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQlROX0RFRlVBTFRfVEhFTUUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdpbmZvJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQUNTX1NFQVJDSF9FVkVOVF9OQU1FKCkge1xyXG4gICAgICAgIHJldHVybiAnc2VhcmNoJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQUNTX0ZFVENIX0RFQk9VTkNFX1RJTUUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDQwMDtcclxuICAgIH1cclxufVxyXG4iXX0=