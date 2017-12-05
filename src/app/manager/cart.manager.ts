import { Injectable } from "@angular/core";
import { DataFetcherService } from "../http/data_fetcher.service";
import { Movie } from "../model/movie,model";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CartManager {

    moviesList = [];

    constructor(private fetcher: DataFetcherService) {
    }

    getMovies() {
        return Observable.of(this.moviesList);
    }

    addMovie(movie: Observable<Movie>) {
        movie.subscribe(mov => {
            this.moviesList.push(mov);
        });
    }

    removeMovie(movie: Movie): void {
        this.moviesList = this.moviesList.filter(element => element !== movie);
    }

    fetchCart() {
        const url = '';
        return this.fetcher.GET(url);
    }
}
