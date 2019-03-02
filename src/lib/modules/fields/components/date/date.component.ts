import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Field } from './../field.class';


@Component({
    selector: 'date',
    templateUrl: './date.component.html',
    styleUrls: ['../commonStyle.css', './bsDatepicker.css'],
    encapsulation: ViewEncapsulation.None
})
export class DateComponent extends Field implements OnInit {

    protected _eventsAndCallbacksMapping: any;
    minDate: Date;
    maxDate: Date;
    bsValue: Date;

    protected _init() {
        try {
            super._init();

            if (this._validationsDataObj.minDate) {
                this.minDate = new Date();
                let dSrtng = this._validationsDataObj.minDate.value;
                let arr = dSrtng.split('/')
                this.minDate.setMonth(arr[0] - 1);
                this.minDate.setDate(arr[1]);
                this.minDate.setFullYear(arr[2]);
            }
            if (this._validationsDataObj.maxDate) {
                this.maxDate = new Date();
                let dSrtng = this._validationsDataObj.maxDate.value;
                let arr = dSrtng.split('/')
                this.maxDate.setMonth(arr[0] - 1);
                this.maxDate.setDate(arr[1]);
                this.maxDate.setFullYear(arr[2]);

            }


        } catch (error) {
            console.log(error);
        }
    }

    protected _applyEvents() {
        try {
            this._eventsAndCallbacksMapping = {};
            if (this.fieldDef.events && this.fieldDef.events.constructor === Array) {
                this.fieldDef.events.forEach(eventData => {
                    const eventName = eventData.name;
                    const callbacksArr = eventData.callbacks;
                    this._eventsAndCallbacksMapping[eventName] = [];
                    callbacksArr.forEach(calbackData => {
                        const callbackFn = this._getEventCallback(eventName, calbackData);
                        if (callbackFn) {
                            try {
                                this._eventsAndCallbacksMapping[eventName].push(callbackFn);
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    });
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    public callEventCallbacks(eventName: string, eventData?: any) {
        try {
            if (this._eventsAndCallbacksMapping && this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
                this._eventsAndCallbacksMapping[eventName].forEach(callback => {
                    if (eventData) {
                        callback(eventData);
                    } else {
                        callback();
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    get value() {
        return this.control.value;
    }

    set value(value) {
        let setDate = value;
        if (value.constructor === String) {
            this.bsValue = new Date();
            try {
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
