import {Injectable, Injector, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {APP_CONFIG, AppConfig} from "../config/app.config";

@Injectable()
export class DataFetcherService {
    protected config: AppConfig;

    constructor(private http: HttpClient,
                private injector: Injector,) {
        this.config = this.injector.get(APP_CONFIG);
    }
    
    POST(url: string, body?: Object) {
        return this.http.post(this.config.domain + url, body);
    }

    GET(url: string) {
        return this.http.get(this.config.domain + url);
    }
}
