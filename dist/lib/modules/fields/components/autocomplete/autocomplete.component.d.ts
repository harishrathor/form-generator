import { Observable, Subject } from 'rxjs';
import { CSelectComponent } from './../c-select/c-select.component';
export declare class AutocompleteComponent extends CSelectComponent {
    options$: Observable<any>;
    fetchOptions$: Subject<any>;
    protected _init(): void;
    protected _fetchOptions(term: any): Observable<any>;
    protected _onFetchOptions(term: any, response?: any): Observable<any>;
    readonly searchData: any;
}
