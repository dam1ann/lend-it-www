import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from "@angular/core";
import { Movie } from "../../../model/movie,model";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'ng-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('flyInOut', [
            transition('void => *', [
                style({
                    transform: 'translateY(5%)',
                    opacity: 0
                }),
                animate('300ms 500ms ease-in')
            ])
        ])
    ]
})

export class ItemComponent implements OnInit, OnChanges {
    @Input() movie: Movie;

    constructor() {
    }

    ngOnInit() {

    }

    ngOnChanges() {
    }
}
