import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'ng-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavigationComponent implements OnInit, OnChanges {
  @Input() categories;
  @Output() changeCategory = new EventEmitter();
  activeCategory;

  constructor() {
  }


  newCategory(category) {
    this.changeCategory.next(category);
    this.activeCategory = category.id;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // this.categories
    //   .subscribe(data => {
    //     console.log(data);
    //   });
  }



}


