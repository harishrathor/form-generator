import { Injectable } from '@angular/core';

@Injectable()
export class DefaultsService {

    protected _columns = 2;

    get COLUMNS() {
        return this._columns;
    }

    set COLUMNS(columns: number) {
        this._columns = columns;
    }

    get FIELD_DEFAULT_PROPS() {
        const propsObj = {
            labelPosition   : this.FIELD_POSITION,
            labelAlignment  : this.FIELD_ALIGNMENT,
            labelWidth      : '50%',
            fieldWidth      : '50%',
            fieldAlignment  : 'left',
            width           : '100%'
        };
        return propsObj;
    }

    get FORM_COLUMNS() {
        return 2;
    }

    get FIELD_ALIGNMENT() {
        return 'right';
    }

    get FIELD_POSITION() {
        return 'left';
    }

    get EVENT_HANDLER_OWNER_TYPE() {
        return 'P';
    }

    get EXCEPTIONAL_STYLED_FIELDS() {
        let labelWidth = '25%';
        let fieldWidth = '75%';
        if (this.COLUMNS === 2) {
            labelWidth = '24.5%';
            fieldWidth =  '75.5%';
        }
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

    get DUMMY_FIELDS() {
        return ['BLK', 'BTN'];
    }

    get BTN_DEFUALT_THEME() {
        return 'info';
    }

    get ACS_SEARCH_EVENT_NAME() {
        return 'search';
    }

    get ACS_FETCH_DEBOUNCE_TIME() {
        return 400;
    }
}
