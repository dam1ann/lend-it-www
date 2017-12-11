import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {MoviesManager} from "../manager/movie.manager";

@Component({
  selector: 'ng-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnChanges {

  @Input() movies;
  categories = this.moviesMng.getCategories();
  sortBy = undefined;

  constructor(private moviesMng: MoviesManager) {
  }

  onChangeCategory(event) {
    // console.log('zmieniłeś');
    // console.log(data);
  }

  onChangePage(page) {
    this.movies = this.moviesMng.getMovies(page, this.sortBy);
  }

  onChangeFilters(sortBy) {
    this.sortBy = sortBy;
    this.movies = this.moviesMng.getMovies(1, sortBy);
  }

  ngOnInit() {

  }

  ngOnChanges() {
  }
}
