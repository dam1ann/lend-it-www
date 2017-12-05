import { Component, Input, OnInit } from "@angular/core";
import { MoviesManager } from "../manager/movie.manager";

@Component({
    selector: 'ng-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    @Input() movies;
    categories = this.moviesMng.getCategories();

    constructor(private moviesMng: MoviesManager) {
    }

    ngOnInit() {
    }
}
