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

  filters = [
    {value: 'steak-0', viewValue: 'Popular'},
    {value: 'pizza-1', viewValue: 'Most rated'},
    {value: 'tacos-2', viewValue: 'Incoming'}
  ];

  years = [2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];

  constructor() {
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

