import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MockProduct {

    private url: string = "https://api.themoviedb.org/3/movie";
    private key: string = '684c5d83e02a6730d4886694f0bc4fbe';
    private query: string = 'minions';
    private querySearch: string = `${this.url}/search/movie?page=1&language=en-US&api_key=${this.key}&query=${this.query}`;

    constructor(private http: HttpClient) {
    }

    getPopular(): Observable<any> {
        const popularMovies: string = `${this.url}/popular?api_key=${this.key}&language=en-US&page=1`;
        return this.http.get(popularMovies);
    }
}
