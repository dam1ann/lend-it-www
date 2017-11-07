import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Movie } from "../model/movie,model";

@Component({
    selector: 'ng-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CartComponent{
    @Input() movies: Movie;


    constructor(){

    }

}