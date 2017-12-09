import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'ng-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavigationComponent implements OnInit {
    @Input() categories;
    @Output() changeCategory = new EventEmitter();
    activeCategory;

    constructor() {
    }

    ngOnInit() {
    }

    newCategory(category) {
        this.changeCategory.next(category);
        this.activeCategory = category.id;
    }
}
