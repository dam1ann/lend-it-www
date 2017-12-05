import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'ng-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavigationComponent implements OnInit {
    @Input() categories;
    @Input() activeCategory;
    @Output() changeCategory = new EventEmitter();

    constructor() {

    }

    ngOnInit() {
        console.log(this.categories);
    }

}
