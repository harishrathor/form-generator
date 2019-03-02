import { Component } from '@angular/core';
import { Observable, Subject, of, from } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';
import * as _ from 'lodash';

import { CSelectComponent } from './../c-select/c-select.component';

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: [
    '../commonStyle.css',
    '../ng-select.theme.css',
    '../c-select/c-select.component.css',
    './autocomplete.component.css'
  ]
})
export class AutocompleteComponent extends CSelectComponent {
    public options$: Observable<any>;
    public fetchOptions$ = new Subject<any>();

    protected _init() {
        try {
            super._init();

            this.options$ = of(
                this.options
            );

            this.fetchOptions$
            .pipe(
                debounceTime(this._defaults.ACS_FETCH_DEBOUNCE_TIME),
                distinctUntilChanged()
            )
            .subscribe(term => {
                this.loading = true;
                return this._fetchOptions(term)
                            .subscribe(
                                response => {
                                    this.options$ = this._onFetchOptions(term, response); this.loading = false;
                                },
                                error => this.options$ = of([])
                            );

            });
        } catch (error) {
            console.log(error);
        }
    }

    protected _fetchOptions(term: any): Observable<any> {
        try {

            const searchData = this.searchData;
            if (!searchData) {
                return of([]);
            }

            if (searchData.beforeFetchFn) {
                const beforeSearchFn = this._getEventCallback( this._defaults.ACS_SEARCH_EVENT_NAME, searchData.beforeFetchFn);
                if (beforeSearchFn && !beforeSearchFn(term, this.code)) {
                    return of([]);
                }
            }

            const data = {
                term,
                code: this.code
            };
            if (searchData.fetchFn) {
                const searchFn = this._getEventCallback( this._defaults.ACS_SEARCH_EVENT_NAME, searchData.fetchFn );
                if (!searchFn || typeof searchFn !== 'function') {
                    return of([]);
                }
                const searchResult = searchFn(data);
                if (!searchResult || !searchResult.options || searchResult.options.constructor !== Array) {
                    return of([]);
                }
                return of(searchResult);
            } else if (searchData.url) {
                return this._httpService.fetchOptions(searchData.url, data, searchData.methodType);
            }

            return of([]);
        } catch (error) {
            console.log(error);
            return of([]);
        }
    }

    protected _onFetchOptions(term, response?: any) {
        try {
            const searchData = this.searchData;

            if (searchData && searchData.afterFetchFn) {
                const afterSearchFn = this._getEventCallback( this._defaults.ACS_SEARCH_EVENT_NAME, searchData.afterFetchFn );
                if (afterSearchFn) {
                    let optionsData = afterSearchFn({
                        term,
                        fieldCode: this.code,
                        formCode: this.formCode,
                        response
                    });
                    if (!optionsData || !optionsData.options || optionsData.options.constructor !== Array) {
                        optionsData = { options: [] };
                    }
                    return of(optionsData.options);
                }
            }
            if (response && response.options) {
                return of(response.options);
            }
            return of([]);
        } catch (error) {
            console.log(error);
            return of([]);
        }
    }

    get searchData() {
        return this.fieldDef.searchData || null;
    }
}
