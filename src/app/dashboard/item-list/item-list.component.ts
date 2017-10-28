import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'ng-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ItemListComponent {

    @Input() category;
    items = [
        {
            name: 'Fast and Furious',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur cupiditate deserunt dolorem molestias nihil, placeat quas reprehenderit soluta unde. Accusamus delectus doloribus nisi nostrum obcaecati odit quas similique, vel?'
        }, {
            name: 'Fast and Furious',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur cupiditate deserunt dolorem molestias nihil, placeat quas reprehenderit soluta unde. Accusamus delectus doloribus nisi nostrum obcaecati odit quas similique, vel?'
        }, {
            name: 'Fast and Furious',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur cupiditate deserunt dolorem molestias nihil, placeat quas reprehenderit soluta unde. Accusamus delectus doloribus nisi nostrum obcaecati odit quas similique, vel?'
        }, {
            name: 'Fast and Furious',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur cupiditate deserunt dolorem molestias nihil, placeat quas reprehenderit soluta unde. Accusamus delectus doloribus nisi nostrum obcaecati odit quas similique, vel?'
        }, {
            name: 'Fast and Furious',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur cupiditate deserunt dolorem molestias nihil, placeat quas reprehenderit soluta unde. Accusamus delectus doloribus nisi nostrum obcaecati odit quas similique, vel?'
        }, {
            name: 'Fast and Furious',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur cupiditate deserunt dolorem molestias nihil, placeat quas reprehenderit soluta unde. Accusamus delectus doloribus nisi nostrum obcaecati odit quas similique, vel?'
        }
    ]


}
