import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from "@angular/core";
import { MockProduct } from "../../mockBackend/mockProducts.service";
@Component({
    selector: 'ng-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductComponent implements OnInit, OnChanges {

    path: string = "https://image.tmdb.org/t/p/w500/";
    product = this.mockProduct.getPopular()
        .map(movies => movies.results[0]);

    poster_path = this.product
        .map(movie => this.path + movie.poster_path);

    backdrop_path = this.product
        .map(movie => this.path + movie.backdrop_path);

    title = this.product
        .map(movie => movie.title);

    overview = this.product
        .map(movie => movie.overview);

    constructor(private mockProduct: MockProduct) {
    }

    ngOnInit() {
    }

    ngOnChanges() {
    }
}