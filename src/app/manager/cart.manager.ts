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
    if (this.moviesList.includes(movie)) {
      throw new Error('Cart contains that movie');
    }
    this.moviesList.push(movie);
    this.localStorage.saveCart(this.moviesList);
  }

  /***
   *
   * @param {Movie} movie
   */
  removeMovie(movie: Movie): void {
    const newMovies = this.moviesList.filter(element => element !== movie);
    this.localStorage.saveCart(newMovies);
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
