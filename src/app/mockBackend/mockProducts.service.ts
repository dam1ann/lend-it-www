import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MockProduct {
    private key: string = "684c5d83e02a6730d4886694f0bc4fbe";
    private query: string = "minions";
    private url: string = `https://api.themoviedb.org/3/search/movie?page=1&language=en-US&api_key=${this.key}&query=${this.query}`;
    private popular: string = `https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=en-US&page=1`;

    constructor(private http: HttpClient) {
    }

    getPopular(): Observable<any>{
        return this.http.get(this.popular);
    }
}