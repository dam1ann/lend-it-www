import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'ng-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ItemComponent {
    @Input() item;


}
