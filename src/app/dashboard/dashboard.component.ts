import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MockProduct } from "../mockBackend/mockProducts.service";
import { Movie } from "../model/movie,model";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'ng-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent implements OnInit {

    @Input()movies: Observable<Array<Movie>>;

    constructor() {
    }

    ngOnInit() {
    }

}
