import { Injectable, Injector } from '@angular/core';
import { DataFetcherService } from '../http/data_fetcher.service';
import { APP_CONFIG } from '../config/app.config';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
        const {movies} = this.injector.get(APP_CONFIG).urls;

        this.fetcher.GET(movies)
            .map(movies => movies['collection'])
            .subscribe(this.movies);
    }

    getSingleMovie(id) {
        const {singleMovie} = this.injector.get(APP_CONFIG).urls;

        return this.fetcher.GET(singleMovie + id);
    }
}
