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
  sortBy = 'popularity';
  category = 'all';
  limit = 20;

  constructor(private moviesMng: MoviesManager) {
  }

  onChangeCategory(category) {
    this.category = category.id;
    this.movies = this.moviesMng.getByCategory(1, this.sortBy, category.id, this.limit);
  }

  onChangePage(event) {
    this.limit = event.pageSize;
    const pageIndex = event.pageIndex + 1;

    if (this.category === 'all') {
      this.movies = this.moviesMng.getMovies(pageIndex, this.sortBy, this.limit);
    } else {
      this.movies = this.moviesMng.getByCategory(pageIndex, this.sortBy, this.category, this.limit);
    }
  }

  onChangeFilters(sortBy) {
    this.sortBy = sortBy;

    if (this.category === 'all') {
      this.movies = this.moviesMng.getMovies(1, this.sortBy, this.limit);
    } else {
      this.movies = this.moviesMng.getByCategory(1, this.sortBy, this.category, this.limit);
    }
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
