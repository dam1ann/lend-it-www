import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import {Movie} from "../../model/movie,model";

@Component({
  selector: 'ng-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ItemListComponent implements OnInit, OnChanges {

  @Input() movies: Array<Movie>;
  @Output() changePage = new EventEmitter();
  @Output() changeFilters = new EventEmitter();

  filters = [
    {value: 'popularity', viewValue: 'Popularność'},
    {value: 'releasedAt', viewValue: 'Data wydania'},
    {value: 'title', viewValue: 'Tytuł'}
  ];
  selectedFilter: string;

  constructor() {
  }

  onFilterChange(filter) {
    this.changeFilters.next(filter);
  }

  onPageChange(event) {
    this.changePage.next(event.pageIndex + 1);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log(this.movies);
  }
}

