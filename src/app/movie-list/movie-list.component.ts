import { Component, OnInit, Input} from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  movies: Movie[] = []
  filteredMovies = [];
  selectedStatus = 'ACTUAL';
  selectedMovie = null;
  @Input() showAdd = true;
  constructor(private movieService: MovieService,
    private authService:AuthService) { }

  async ngOnInit() {
    this.movies = await this.movieService.getMovies();
    this.filterMovies();
  }

  filterMovies() {
    this.filteredMovies = this.selectedStatus === ''
      ? this.movies
      : this.movies.filter(movie => movie.status === this.selectedStatus);
  }

  onFilterChange(data) {
    this.selectedStatus = data;
    this.filterMovies();
  }

}
