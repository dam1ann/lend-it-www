import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { MoviesManager } from "../manager/movie.manager";

@Component({
    selector: 'ng-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnChanges {

    @Input() movies;

    constructor(private movieMng: MoviesManager) {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        // let dane;
        // this.movies.subscribe(data => dane = data);
        // this.movieMng.setMoviesData(dane);
    }
}
