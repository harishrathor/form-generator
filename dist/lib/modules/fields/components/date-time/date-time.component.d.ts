import { Field } from './../field.class';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
export declare class DateTimeComponent extends Field {
    bsConfig: Partial<BsDatepickerConfig>;
    protected _init(): void;
}
