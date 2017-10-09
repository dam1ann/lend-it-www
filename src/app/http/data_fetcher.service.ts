import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class DataFetcherService {
    constructor(private http: HttpClient) {
    }

    POST(url: string, body: Object) {
        console.log(url);
        console.log(body);

        return this.http.post(url, body, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        });

    }
}