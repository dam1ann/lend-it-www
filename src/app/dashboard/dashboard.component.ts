import { Component, OnInit } from "@angular/core";
import { MockProduct } from "../mockBackend/mockProducts.service";
import { Movie } from "../model/movie,model";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'ng-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    movies: Observable<Array<Movie>> = this.mockProduct.getPopular().map(movie=> movie.results);
    details = this.mockProduct.getDetails(211672);

    constructor(private mockProduct: MockProduct) {
    }

    ngOnInit() {
        this.details.subscribe(data=>{
            console.log(data);
        });
    }

}
