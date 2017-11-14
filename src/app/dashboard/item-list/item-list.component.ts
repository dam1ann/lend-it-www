import { ChangeDetectionStrategy, Component, Input, OnChanges } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Movie } from "../../model/movie,model";

@Component({
    selector: 'ng-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ItemListComponent implements OnChanges {

    @Input() movies: Array<Movie>;

    constructor() {
    }

    ngOnChanges() {
        // console.log(this.items);
    }
}

