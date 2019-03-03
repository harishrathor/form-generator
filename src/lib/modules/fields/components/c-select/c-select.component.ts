import { Field } from './../field.class';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';


@Component({
    selector: 'c-select',
    templateUrl: './c-select.component.html',
    styleUrls: ['../commonStyle.css', '../ng-select.theme.css', 'c-select.component.css'],
    encapsulation: ViewEncapsulation.None

})
export class CSelectComponent extends Field {

    @ViewChild('ngSelect') ngSelectComponent: any;

    protected _options: any;

    protected _eventsAndCallbacksMapping: any;
    public loading = false;

    protected _init() {
        try {
            super._init();
            this.options = this.fieldDef.options || [];
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
             if (this._eventsAndCallbacksMapping[eventName] && this._eventsAndCallbacksMapping[eventName].length > 0) {
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

    public filterOptions = (term: string, item: any) => {
        term = term.toLocaleLowerCase();
        return item.label.toLocaleLowerCase().indexOf(term) > -1;
    }

    get options() {
        return this._options || [];
    }

    set options(options) {
        this._options = options;
    }

    get multiple() {
        let multiple = this.type === 'MSL';
        if (typeof this.fieldDef.multiple !== 'undefined') {
            multiple = this.fieldDef.multiple;
        }
        return multiple;
    }

}
