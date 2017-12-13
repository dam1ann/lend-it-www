import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Movie} from "../model/movie,model";
import {CartManager} from "../manager/cart.manager";

@Component({
  selector: 'ng-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CartComponent implements OnInit {
  @Input() movies: Observable<Array<Movie>>;
  @Output() removeMovie = new EventEmitter();

  constructor(private cartMng: CartManager) {
  }

  ngOnInit() {
  }

  removeFromCart(movie) {
    this.cartMng.removeMovie(movie);
    this.movies = this.cartMng.getMovies();
  }
}
