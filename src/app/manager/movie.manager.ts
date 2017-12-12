import {Injectable, Injector} from '@angular/core';
import {DataFetcherService} from '../http/data_fetcher.service';
import {APP_CONFIG} from '../config/app.config';

@Injectable()
export class MoviesManager {

  /***
   *
   * @param {DataFetcherService} fetcher
   * @param {Injector} injector
   */
  constructor(private fetcher: DataFetcherService,
              private injector: Injector) {
  }

  /***
   *
   * @param {number} page
   * @param sortBy
   * @param {string} categoryId
   * @param {number} limit
   * @returns {Observable<Object>}
   */
  getByCategory(page: number = 1, sortBy: string = 'popularity', categoryId: string, limit: number = 20) {
    const {moviesByCategory} = this.injector.get(APP_CONFIG).urls;

    return this.fetcher
      .GET(`${moviesByCategory}${categoryId}/movies?page=${page}&limit=${limit}&sortBy[${sortBy}]=ASC`);
  }

  /***
   *
   * @param {number} page
   * @param {string} sortBy
   * @param {number} limit
   * @returns {Observable<Object>}
   */
  getMovies(page: number = 1, sortBy: string = 'popularity', limit: number = 20) {
    const {movies} = this.injector.get(APP_CONFIG).urls;

    return this.fetcher
      .GET(`${movies}?page=${page}&limit=${limit}&sortBy[${sortBy}]=ASC`);
    // .map(movies => movies['collection']);
  }

  /***
   *
   * @param id
   * @returns {Observable<Object>}
   */
  getSingleMovie(id) {
    const {singleMovie} = this.injector.get(APP_CONFIG).urls;

    return this.fetcher
      .GET(singleMovie + id);
  }

  /***
   *
   * @returns {Observable<any>}
   */
  getCategories() {
    const {categories} = this.injector.get(APP_CONFIG).urls;

    return this.fetcher
      .GET(categories)
      .map(categories => categories['collection']);
  }
}
