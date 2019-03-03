export declare class DefaultsService {
    protected _columns: number;
    COLUMNS: number;
    readonly FIELD_DEFAULT_PROPS: {
        labelPosition: string;
        labelAlignment: string;
        labelWidth: string;
        fieldWidth: string;
        fieldAlignment: string;
        width: string;
    };
    readonly FORM_COLUMNS: number;
    readonly FIELD_ALIGNMENT: string;
    readonly FIELD_POSITION: string;
    readonly EVENT_HANDLER_OWNER_TYPE: string;
    readonly EXCEPTIONAL_STYLED_FIELDS: {
        TXA: {
            labelWidth: string;
            fieldWidth: string;
            columns: number;
        };
        HTML: {
            columns: number;
            labelPosition: string;
            labelWidth: string;
            fieldWidth: string;
            labelAlignment: string;
        };
    };
    readonly DUMMY_FIELDS: string[];
    readonly BTN_DEFUALT_THEME: string;
    readonly ACS_SEARCH_EVENT_NAME: string;
    readonly ACS_FETCH_DEBOUNCE_TIME: number;
}
