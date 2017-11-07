import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class DataFetcherService {
    constructor(private http: HttpClient) {
    }

    POST(url: string, body?: Object) {

        return this.http.post(url, body, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        });

    }

    GET(url: string) {
        return this.http.get(url);
    }
}