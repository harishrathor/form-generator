/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Field } from './../field.class';
export class DateComponent extends Field {
    /**
     * @protected
     * @return {?}
     */
    _init() {
        try {
            super._init();
            if (this._validationsDataObj.minDate) {
                this.minDate = new Date();
                /** @type {?} */
                let dSrtng = this._validationsDataObj.minDate.value;
                /** @type {?} */
                let arr = dSrtng.split('/');
                this.minDate.setMonth(arr[0] - 1);
                this.minDate.setDate(arr[1]);
                this.minDate.setFullYear(arr[2]);
            }
            if (this._validationsDataObj.maxDate) {
                this.maxDate = new Date();
                /** @type {?} */
                let dSrtng = this._validationsDataObj.maxDate.value;
                /** @type {?} */
                let arr = dSrtng.split('/');
                this.maxDate.setMonth(arr[0] - 1);
                this.maxDate.setDate(arr[1]);
                this.maxDate.setFullYear(arr[2]);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _applyEvents() {
        try {
            this._eventsAndCallbacksMapping = {};
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                this.fieldDef.events.forEach((/**
                 * @param {?} eventData
                 * @return {?}
                 */
                eventData => {
                    /** @type {?} */
                    const eventName = eventData.name;
                    /** @type {?} */
                    const callbacksArr = eventData.callbacks;
                    this._eventsAndCallbacksMapping[eventName] = [];
                    callbacksArr.forEach((/**
                     * @param {?} calbackData
                     * @return {?}
                     */
                    calbackData => {
                        /** @type {?} */
                        const callbackFn = this._getEventCallback(eventName, calbackData);
                        if (callbackFn) {
                            try {
                                this._eventsAndCallbacksMapping[eventName].push(callbackFn);
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                    }));
                }));
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @param {?} eventName
     * @param {?=} eventData
     * @return {?}
     */
    callEventCallbacks(eventName, eventData) {
        try {
            if (this._eventsAndCallbacksMapping && this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
                this._eventsAndCallbacksMapping[eventName].forEach((/**
                 * @param {?} callback
                 * @return {?}
                 */
                callback => {
                    if (eventData) {
                        callback(eventData);
                    }
                    else {
                        callback();
                    }
                }));
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this.control.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        /** @type {?} */
        let setDate = value;
        if (value.constructor === String) {
            this.bsValue = new Date();
            try {
                /** @type {?} */
                let dateAR = setDate.split('/');
                this.bsValue.setMonth(dateAR[0] - 1);
                this.bsValue.setDate(dateAR[1]);
                this.bsValue.setFullYear(dateAR[2]);
                value = this.bsValue;
            }
            catch (error) {
                console.log(error);
            }
        }
        this.control.setValue(value);
    }
}
DateComponent.decorators = [
    { type: Component, args: [{
                selector: 'date',
                template: "<div class=\"form-group row field-container\" [ngClass]=\"cssClasses.fieldContainerClasses\"\n\t[ngStyle]=\"cssStyle.fieldContainerStyle\" [formGroup]=\"group\">\n\t<label [attr.for]=\"id\" class=\"col-form-label field-label\" [ngClass]=\"cssClasses.labelClasses\"\n\t\t[ngStyle]=\"cssStyle.labelStyle\">{{label}}</label>\n\t<div class=\"input-container\" [ngClass]=\"cssClasses.inputContainerClasses\" [ngStyle]=\"cssStyle.inputContainerStyle\">\n\t\t<input class=\"form-control\" [ngClass]=\"cssClasses.fieldClasses\" [ngStyle]=\"cssStyle.fieldStyle\" [attr.id]=\"id\"\n\t\t\t[formControlName]=\"name\" [attr.placeholder]=\"placeholder\" bsDatepicker [minDate]=\"minDate\"\n\t\t\t[maxDate]=\"maxDate\" (bsValueChange)=\"callEventCallbacks('bsValueChange', $event)\"\n\t\t\t(onHidden)=\"callEventCallbacks('onHidden', $event)\" (onShown)=\"callEventCallbacks('onShown', $event)\">\n\n\n\t\t<errors [errors]=\"errors\"></errors>\n\t</div>\n\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".label-right{flex-direction:row-reverse}.label-bottom{flex-direction:column-reverse}.label-top{flex-direction:column}.label-left{flex-direction:row}.form-column-2 .label-left .field-label,.form-column-2 .label-left .input-container,.form-column-2 .label-right .field-label,.form-column-2 .label-right .input-container,.form-column-3 .label-left .field-label,.form-column-3 .label-left .input-container,.form-column-3 .label-right .field-label,.form-column-3 .label-right .input-container{width:50%}.form-column-2 .label-bottom .field-label,.form-column-2 .label-bottom .input-container,.form-column-2 .label-top .field-label,.form-column-2 .label-top .input-container{width:90%}.form-column-3 .label-bottom .field-label,.form-column-3 .label-bottom .input-container,.form-column-3 .label-top .field-label,.form-column-3 .label-top .input-container{width:100%}.form-column-1 .field-label{width:25%}.form-column-1 .input-container{width:40%}.TXA-field-cotainer .label{width:25%!important}.TXA-field-cotainer .input-container{width:75%!important}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:unset!important}", ".bs-datepicker{display:flex;align-items:stretch;flex-flow:row wrap;background:#fff;box-shadow:0 0 10px 0 #aaa;position:relative;z-index:1}.bs-datepicker:after{clear:both;content:'';display:block}.bs-datepicker bs-day-picker{float:left}.bs-datepicker button:active,.bs-datepicker button:focus,.bs-datepicker button:hover,.bs-datepicker input:active,.bs-datepicker input:focus,.bs-datepicker input:hover,.bs-datepicker-btns button:active,.bs-datepicker-btns button:focus,.bs-datepicker-btns button:hover,.bs-datepicker-predefined-btns button:active,.bs-datepicker-predefined-btns button:focus{outline:0}.bs-datepicker-head{min-width:270px;height:50px;padding:10px;border-radius:3px 3px 0 0;text-align:justify}.bs-datepicker-head:after{content:\"\";display:inline-block;vertical-align:top;width:100%}.bs-datepicker-head button{display:inline-block;vertical-align:top;padding:0;height:30px;line-height:30px;border:0;background:0 0;text-align:center;cursor:pointer;color:#fff;transition:.3s}.bs-datepicker-head button[disabled],.bs-datepicker-head button[disabled]:active,.bs-datepicker-head button[disabled]:hover{background:rgba(221,221,221,.3);color:#f5f5f5;cursor:not-allowed}.bs-datepicker-head button.next,.bs-datepicker-head button.previous{border-radius:50%;width:30px;height:30px}.bs-datepicker-head button.next span,.bs-datepicker-head button.previous span{font-size:28px;line-height:1;display:inline-block;position:relative;height:100%;width:100%;border-radius:50%}.bs-datepicker-head button.current{border-radius:15px;max-width:155px;padding:0 13px}.bs-datepicker-head button:hover{background-color:rgba(0,0,0,.1)}.bs-datepicker-head button:active{background-color:rgba(0,0,0,.2)}.bs-datepicker-body{padding:10px;border-radius:0 0 3px 3px;min-height:232px;min-width:278px;border:1px solid #e9edf0}.bs-datepicker-body .days.weeks{position:relative;z-index:1}.bs-datepicker-body table{width:100%;border-collapse:separate;border-spacing:0}.bs-datepicker-body table th{font-size:13px;color:#9aaec1;font-weight:400;text-align:center}.bs-datepicker-body table td{color:#54708b;text-align:center;position:relative;padding:0}.bs-datepicker-body table td span{display:block;margin:0 auto;font-size:13px;border-radius:50%;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.bs-datepicker-body table td:not(.disabled):not(.week) span:not(.disabled):not(.is-other-month){cursor:pointer}.bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected),.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span{background-color:#e9edf0;transition:none}.bs-datepicker-body table td span.is-active-other-month:not(.disabled):not(.selected),.bs-datepicker-body table td.is-active-other-month:not(.disabled):not(.selected) span{background-color:#e9edf0;transition:none;cursor:pointer}.bs-datepicker-body table td span.disabled,.bs-datepicker-body table td.disabled span{color:#9aaec1}.bs-datepicker-body table td span.selected,.bs-datepicker-body table td.selected span{color:#fff}.bs-datepicker-body table td span.is-other-month,.bs-datepicker-body table td.is-other-month span{color:rgba(0,0,0,.25)}.bs-datepicker-body table td.active{position:relative}.bs-datepicker-body table td.active.select-start:before{left:35%}.bs-datepicker-body table td.active.select-end:before{left:-85%}.bs-datepicker-body table td span.active.select-end:after,.bs-datepicker-body table td span.active.select-start:after,.bs-datepicker-body table td.active.select-end span:after,.bs-datepicker-body table td.active.select-start span:after{content:\"\";display:block;position:absolute;z-index:-1;width:100%;height:100%;transition:.3s;top:0;border-radius:50%}.bs-datepicker-body table td span:before,.bs-datepicker-body table td:before{content:\"\";display:block;position:absolute;z-index:-1;top:6px;bottom:6px;left:-2px;right:-2px;box-sizing:content-box;background:0 0}.bs-datepicker-body table td.active.select-start+td.active:before{left:-20%}.bs-datepicker-body table td:last-child.active:before{border-radius:0 3px 3px 0;width:125%;left:-25%}.bs-datepicker-body table td span[class*=select-],.bs-datepicker-body table td[class*=select-] span{border-radius:50%;color:#fff}.bs-datepicker-body table.days span.active:not(.select-start):before,.bs-datepicker-body table.days span.in-range:not(.select-start):before,.bs-datepicker-body table.days td.active:not(.select-start):before,.bs-datepicker-body table.days td.in-range:not(.select-start):before{background:#e9edf0}.bs-datepicker-body table.days span{width:32px;height:32px;line-height:32px}.bs-datepicker-body table.days span.select-start{z-index:2}.bs-datepicker-body table.days span.in-range.select-end:before,.bs-datepicker-body table.days span.is-highlighted.in-range:before{background:0 0;right:0;left:0}.bs-datepicker-body table.days td.active+td.is-highlighted:before,.bs-datepicker-body table.days td.active+td.select-end:before,.bs-datepicker-body table.days td.in-range+td.is-highlighted:before,.bs-datepicker-body table.days td.in-range+td.select-end:before,.bs-datepicker-body table.days td.select-start+td.is-highlighted:before,.bs-datepicker-body table.days td.select-start+td.select-end:before{background:#e9edf0;width:100%}.bs-datepicker-body table.weeks tr td:nth-child(2).active:before{border-radius:3px 0 0 3px;left:0;width:100%}.bs-datepicker-body table:not(.weeks) tr td:first-child:before{border-radius:3px 0 0 3px}.bs-datepicker-body table.years td span{width:46px;height:46px;line-height:45px;margin:0 auto}.bs-datepicker-body table.years tr:not(:last-child) td span{margin-bottom:8px}.bs-datepicker-body table.months td{height:52px}.bs-datepicker-body table.months td span{padding:6px;border-radius:15px}.bs-datepicker .current-timedate{color:#54708b;font-size:15px;text-align:center;height:30px;line-height:30px;border-radius:20px;border:1px solid #e9edf0;margin-bottom:10px;cursor:pointer;text-transform:uppercase;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.bs-datepicker .current-timedate span:not(:empty):before{content:\"\";width:15px;height:16px;display:inline-block;margin-right:4px;vertical-align:text-bottom;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC)}.bs-datepicker-multiple{border-radius:4px 0 0 4px}.bs-datepicker-multiple+.bs-datepicker-multiple{margin-left:10px}.bs-datepicker-multiple .bs-datepicker{box-shadow:none;position:relative}.bs-datepicker-multiple .bs-datepicker:not(:last-child){padding-right:10px}.bs-datepicker-multiple .bs-datepicker+.bs-datepicker:after{content:\"\";display:block;width:14px;height:10px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);position:absolute;top:25px;left:-8px}.bs-datepicker-multiple .bs-datepicker .left{float:left}.bs-datepicker-multiple .bs-datepicker .right{float:right}.bs-datepicker-container{padding:15px}.bs-datepicker .bs-media-container{display:flex}@media (max-width:768px){.bs-datepicker .bs-media-container{flex-direction:column}}.bs-datepicker-custom-range{padding:15px;background:#eee}.bs-datepicker-predefined-btns button{width:100%;display:block;height:30px;background-color:#9aaec1;border-radius:4px;color:#fff;border:0;margin-bottom:10px;padding:0 18px;text-align:left;transition:.3s}.bs-datepicker-predefined-btns button:active,.bs-datepicker-predefined-btns button:hover{background-color:#54708b}.bs-datepicker-buttons{display:flex;flex-flow:row wrap;justify-content:flex-end;padding-top:10px;border-top:1px solid #e9edf0}.bs-datepicker-buttons .btn-default{margin-left:10px}.bs-timepicker-container{padding:10px 0}.bs-timepicker-label{color:#54708b;margin-bottom:10px}.bs-timepicker-controls{display:inline-block;vertical-align:top;margin-right:10px}.bs-timepicker-controls button{width:20px;height:20px;border-radius:50%;border:0;background-color:#e9edf0;color:#54708b;font-size:16px;font-weight:700;vertical-align:middle;line-height:0;padding:0;transition:.3s}.bs-timepicker-controls button:hover{background-color:#d5dadd}.bs-timepicker-controls input{width:35px;height:25px;border-radius:13px;text-align:center;border:1px solid #e9edf0}.bs-timepicker .switch-time-format{text-transform:uppercase;min-width:54px;height:25px;border-radius:20px;border:1px solid #e9edf0;background:#fff;color:#54708b;font-size:13px}.bs-timepicker .switch-time-format img{vertical-align:initial;margin-left:4px}bs-datepicker-container,bs-daterangepicker-container{z-index:1080}@media (max-width:768px){.bs-datepicker-multiple{display:flex}.bs-datepicker-multiple+.bs-datepicker-multiple{margin-top:10px;margin-left:0}}.theme-default .bs-datepicker-body table td span.selected,.theme-default .bs-datepicker-body table td span[class*=select-]:after,.theme-default .bs-datepicker-body table td.selected span,.theme-default .bs-datepicker-body table td[class*=select-] span:after,.theme-default .bs-datepicker-head{background-color:#777}.theme-default .bs-datepicker-body table td.week span{color:#777}.theme-default .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#777;color:#fff;opacity:.5;transition:none}.theme-green .bs-datepicker-body table td span.selected,.theme-green .bs-datepicker-body table td span[class*=select-]:after,.theme-green .bs-datepicker-body table td.selected span,.theme-green .bs-datepicker-body table td[class*=select-] span:after,.theme-green .bs-datepicker-head{background-color:#5cb85c}.theme-green .bs-datepicker-body table td.week span{color:#5cb85c}.theme-green .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#5cb85c;color:#fff;opacity:.5;transition:none}.theme-blue .bs-datepicker-body table td span.selected,.theme-blue .bs-datepicker-body table td span[class*=select-]:after,.theme-blue .bs-datepicker-body table td.selected span,.theme-blue .bs-datepicker-body table td[class*=select-] span:after,.theme-blue .bs-datepicker-head{background-color:#5bc0de}.theme-blue .bs-datepicker-body table td.week span{color:#5bc0de}.theme-blue .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#5bc0de;color:#fff;opacity:.5;transition:none}.theme-dark-blue .bs-datepicker-body table td span.selected,.theme-dark-blue .bs-datepicker-body table td span[class*=select-]:after,.theme-dark-blue .bs-datepicker-body table td.selected span,.theme-dark-blue .bs-datepicker-body table td[class*=select-] span:after,.theme-dark-blue .bs-datepicker-head{background-color:#337ab7}.theme-dark-blue .bs-datepicker-body table td.week span{color:#337ab7}.theme-dark-blue .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#337ab7;color:#fff;opacity:.5;transition:none}.theme-red .bs-datepicker-body table td span.selected,.theme-red .bs-datepicker-body table td span[class*=select-]:after,.theme-red .bs-datepicker-body table td.selected span,.theme-red .bs-datepicker-body table td[class*=select-] span:after,.theme-red .bs-datepicker-head{background-color:#d9534f}.theme-red .bs-datepicker-body table td.week span{color:#d9534f}.theme-red .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#d9534f;color:#fff;opacity:.5;transition:none}.theme-orange .bs-datepicker-body table td span.selected,.theme-orange .bs-datepicker-body table td span[class*=select-]:after,.theme-orange .bs-datepicker-body table td.selected span,.theme-orange .bs-datepicker-body table td[class*=select-] span:after,.theme-orange .bs-datepicker-head{background-color:#f0ad4e}.theme-orange .bs-datepicker-body table td.week span{color:#f0ad4e}.theme-orange .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#f0ad4e;color:#fff;opacity:.5;transition:none}"]
            }] }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DateComponent.prototype._eventsAndCallbacksMapping;
    /** @type {?} */
    DateComponent.prototype.minDate;
    /** @type {?} */
    DateComponent.prototype.maxDate;
    /** @type {?} */
    DateComponent.prototype.bsValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qc29uLWZvcm0tZ2VuZXJhdG9yLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZmllbGRzL2NvbXBvbmVudHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFTekMsTUFBTSxPQUFPLGFBQWMsU0FBUSxLQUFLOzs7OztJQU8xQixLQUFLO1FBQ1gsSUFBSTtZQUNBLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVkLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtnQkFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztvQkFDdEIsTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsS0FBSzs7b0JBQy9DLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEM7WUFDRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7b0JBQ3RCLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxD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QUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3BCO1lBQ0QsT0FBTyxLQUFLLEVBQUU7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUV0QjtTQUdKO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBekdKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsZzhCQUFvQztnQkFFcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3hDOzs7Ozs7O0lBR0csbURBQTBDOztJQUMxQyxnQ0FBYzs7SUFDZCxnQ0FBYzs7SUFDZCxnQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLy4uL2ZpZWxkLmNsYXNzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RhdGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi4vY29tbW9uU3R5bGUuY3NzJywgJy4vYnNEYXRlcGlja2VyLmNzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUNvbXBvbmVudCBleHRlbmRzIEZpZWxkIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByb3RlY3RlZCBfZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZzogYW55O1xuICAgIG1pbkRhdGU6IERhdGU7XG4gICAgbWF4RGF0ZTogRGF0ZTtcbiAgICBic1ZhbHVlOiBEYXRlO1xuXG4gICAgcHJvdGVjdGVkIF9pbml0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3VwZXIuX2luaXQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbGlkYXRpb25zRGF0YU9iai5taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5EYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgZFNydG5nID0gdGhpcy5fdmFsaWRhdGlvbnNEYXRhT2JqLm1pbkRhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IGRTcnRuZy5zcGxpdCgnLycpXG4gICAgICAgICAgICAgICAgdGhpcy5taW5EYXRlLnNldE1vbnRoKGFyclswXSAtIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubWluRGF0ZS5zZXREYXRlKGFyclsxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5EYXRlLnNldEZ1bGxZZWFyKGFyclsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fdmFsaWRhdGlvbnNEYXRhT2JqLm1heERhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1heERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBkU3J0bmcgPSB0aGlzLl92YWxpZGF0aW9uc0RhdGFPYmoubWF4RGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gZFNydG5nLnNwbGl0KCcvJylcbiAgICAgICAgICAgICAgICB0aGlzLm1heERhdGUuc2V0TW9udGgoYXJyWzBdIC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhEYXRlLnNldERhdGUoYXJyWzFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1heERhdGUuc2V0RnVsbFllYXIoYXJyWzJdKTtcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYXBwbHlFdmVudHMoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nID0ge307XG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERlZi5ldmVudHMgJiYgdGhpcy5maWVsZERlZi5ldmVudHMuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZERlZi5ldmVudHMuZm9yRWFjaChldmVudERhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudE5hbWUgPSBldmVudERhdGEubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzQXJyID0gZXZlbnREYXRhLmNhbGxiYWNrcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc0Fyci5mb3JFYWNoKGNhbGJhY2tEYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrRm4gPSB0aGlzLl9nZXRFdmVudENhbGxiYWNrKGV2ZW50TmFtZSwgY2FsYmFja0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNBbmRDYWxsYmFja3NNYXBwaW5nW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFja0ZuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjYWxsRXZlbnRDYWxsYmFja3MoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50RGF0YT86IGFueSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmcgJiYgdGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdICYmIHRoaXMuX2V2ZW50c0FuZENhbGxiYWNrc01hcHBpbmdbZXZlbnROYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzQW5kQ2FsbGJhY2tzTWFwcGluZ1tldmVudE5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudERhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbHVlO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICBsZXQgc2V0RGF0ZSA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IFN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5ic1ZhbHVlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGVBUiA9IHNldERhdGUuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJzVmFsdWUuc2V0TW9udGgoZGF0ZUFSWzBdIC0gMSk7XG4gICAgICAgICAgICB0aGlzLmJzVmFsdWUuc2V0RGF0ZShkYXRlQVJbMV0pO1xuICAgICAgICAgICAgdGhpcy5ic1ZhbHVlLnNldEZ1bGxZZWFyKGRhdGVBUlsyXSk7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuYnNWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICAgIH1cblxufVxuIl19