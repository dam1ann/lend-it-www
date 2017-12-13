import {Injectable} from "@angular/core";
import {DataFetcherService} from "../http/data_fetcher.service";
import {Movie} from "../model/movie,model";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {MyLocalStorageService} from "../core/local-storage/localStorage.service";

@Injectable()
export class CartManager {

  moviesList: Array<any> = [];

  constructor(private fetcher: DataFetcherService,
              private localStorage: MyLocalStorageService) {
  }

  /***
   *
   * @returns {Observable<any[]>}
   */
  getMovies() {
    this.moviesList = Array.prototype.slice.call(this.localStorage.getCart());

    return Observable.of(this.moviesList);
  }

  /***
   *
   * @param {Observable<Movie>} movie
   */
  addMovie(movie: Movie) {
    this.moviesList.push(movie);
    this.localStorage.saveCart(this.moviesList);
  }

  /***
   *
   * @param {Movie} movie
   */
  removeMovie(movie: Movie): void {
    this.moviesList = this.moviesList.filter(element => element !== movie);
  }

  /***
   *
   * @returns {Observable<Object>}
   */
  fetchCart() {
    const url = '';
    return this.fetcher.GET(url);
  }
}
