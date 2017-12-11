import {Injectable, Injector} from '@angular/core';
import {DataFetcherService} from '../http/data_fetcher.service';
import {APP_CONFIG} from '../config/app.config';

@Injectable()
export class MoviesManager {

  constructor(private fetcher: DataFetcherService,
              private injector: Injector) {
  }


  getMovies(page: number = 1, sortBy: string = 'title') {
    const {movies} = this.injector.get(APP_CONFIG).urls;

    return this.fetcher
      .GET(`${movies}?page=${page}&limit=20&sortBy[${sortBy}]=ASC`);
    // .map(movies => movies['collection']);
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
