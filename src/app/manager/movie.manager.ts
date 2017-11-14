import { Injectable, Injector } from "@angular/core";
import { DataFetcherService } from "../http/data_fetcher.service";
import { APP_CONFIG } from "../config/app.config";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class MoviesManager {

    private movies = new BehaviorSubject([]);

    get getAllMovies() {
        return this.movies;
    }

    constructor(private fetcher: DataFetcherService,
                private injector: Injector) {
        this.getPopular();
    }

    getPopular(): void {
        const config = this.injector.get(APP_CONFIG);

        this.fetcher.GET(config.urls.movies)
            .map(movies => movies["collection"])
            .subscribe(data => {
                this.movies.next(data);
            });
    }
}
