import { OnInit } from '@angular/core';
import { Field } from './../field.class';
export declare class DateComponent extends Field implements OnInit {
    protected _eventsAndCallbacksMapping: any;
    minDate: Date;
    maxDate: Date;
    bsValue: Date;
    protected _init(): void;
    protected _applyEvents(): void;
    callEventCallbacks(eventName: string, eventData?: any): void;
    value: any;
}
