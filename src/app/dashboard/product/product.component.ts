import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { MoviesManager } from '../../manager/movie.manager';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../../model/movie,model';
@Component({
    selector: 'ng-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductComponent implements OnInit, OnChanges {

    @Input() product: Observable<Movie>;

    constructor(private moviesMng: MoviesManager) {
    }

    ngOnInit() {
    }

    ngOnChanges() {
    }
}
