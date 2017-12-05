import { Injectable, Injector } from '@angular/core';
import { DataFetcherService } from '../http/data_fetcher.service';
import { APP_CONFIG } from '../config/app.config';

@Injectable()
export class MoviesManager {

    constructor(private fetcher: DataFetcherService,
                private injector: Injector) {
    }

    getPopular() {
        const {movies} = this.injector.get(APP_CONFIG).urls;

        return this.fetcher
            .GET(movies)
            .map(movies => movies['collection']);
    }

    getSingleMovie(id) {
        const {singleMovie} = this.injector.get(APP_CONFIG).urls;

        return this.fetcher
            .GET(singleMovie + id);
    }

    getCategories() {
        const {categories} = this.injector.get(APP_CONFIG).urls;

        return this.fetcher
            .GET(categories)
            .map(categories => categories['collection']);
    }
}
