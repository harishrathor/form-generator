import { Field } from '../field.class';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
export declare class MonthComponent extends Field {
    minMode: BsDatepickerViewMode;
    bsConfig: Partial<BsDatepickerConfig>;
    protected _init(): void;
}
