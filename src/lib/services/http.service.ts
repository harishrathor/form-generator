import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(protected _http: HttpClient) {}

    public fetchOptions(url: string, data: any, methodType?: string) {
        try {
            if (methodType === 'POST') {
                return this._http.post<any>(url, data);
            }
            url += this.makeObjToGetUrlParams(data);
            return this._http.get<any>(url);
        } catch (error) {
            console.log(error);
            return of([]);
        }
    }

    public makeObjToGetUrlParams(obj: any) {
        try {
            let str = '';
            for (let paramName in obj) {
                const paramValue = obj[paramName];
                if (str === '') {
                    str += '?';
                } else {
                    str += '&';
                }
                str += `${paramValue}=${paramValue}`;
            }
            return str;
        } catch (error) {
            console.log(error);
            return '';
        }
    }
}
