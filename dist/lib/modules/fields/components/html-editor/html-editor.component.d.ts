import { Field } from './../field.class';
export declare class HtmlEditorComponent extends Field {
    protected _eventsAndCallbacksMapping: any;
    private _defaultQuillConfig;
    protected _applyEvents(): void;
    callEventCallbacks(eventName: string, eventData?: any): void;
    readonly options: any;
    readonly multiple: boolean;
    readonly quillConfig: any;
}
