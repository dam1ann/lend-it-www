import { Injectable, Injector } from "@angular/core";
import { DataFetcherService } from "../http/data_fetcher.service";
import { APP_CONFIG } from "../config/app.config";
import { Subject } from "rxjs/Subject";
import { MyLocalStorageService } from "../core/local-storage/localStorage.service";

@Injectable()
export class MoviesManager {

    private movies = new Subject();


    constructor(private fetcher: DataFetcherService,
                private injector: Injector) {
    }

    getMovies() {
        const config = this.injector.get(APP_CONFIG);

        return this.fetcher.GET(config.urls.movies);
    }


}