import { Field } from './../field.class';
export declare class CSelectComponent extends Field {
    ngSelectComponent: any;
    protected _options: any;
    protected _eventsAndCallbacksMapping: any;
    loading: boolean;
    protected _init(): void;
    protected _applyEvents(): void;
    callEventCallbacks(eventName: string, eventData?: any): void;
    filterOptions: (term: string, item: any) => boolean;
    options: any;
    readonly multiple: boolean;
}
