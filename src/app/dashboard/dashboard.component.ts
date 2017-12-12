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

  constructor(private moviesMng: MoviesManager) {
  }

  onChangeCategory(category) {
    this.category = category.id;
    this.movies = this.moviesMng.getByCategory(1, this.sortBy, category.id);
  }

  onChangePage(page) {
    if (this.category === 'all') {
      this.movies = this.moviesMng.getMovies(page, this.sortBy);
    } else {
      this.moviesMng.getByCategory(page, this.sortBy, this.category);
    }
  }

  onChangeFilters(sortBy) {
    this.sortBy = sortBy;

    if (this.category === 'all') {
      this.movies = this.moviesMng.getMovies(1, this.sortBy);
    } else {
      this.movies = this.moviesMng.getByCategory(1, this.sortBy, this.category);
    }
  }

  ngOnInit() {

  }

  ngOnChanges() {
  }
}
