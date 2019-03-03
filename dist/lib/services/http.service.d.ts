import { HttpClient } from '@angular/common/http';
export declare class HttpService {
    protected _http: HttpClient;
    constructor(_http: HttpClient);
    fetchOptions(url: string, data: any, methodType?: string): import("rxjs").Observable<any>;
    makeObjToGetUrlParams(obj: any): string;
}
