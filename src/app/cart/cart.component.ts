import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Movie } from "../model/movie,model";

@Component({
    selector: 'ng-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CartComponent implements OnInit {
    @Input() movies: Observable<Array<Movie>>;

    constructor() {
    }

    ngOnInit() {
    }
}
