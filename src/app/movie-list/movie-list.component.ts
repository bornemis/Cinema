import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [
    {
      id: 1,
      title: "Micsoda nő",
      director: "Garry Marshall",
      movie_type: 'Romantikus, Vígjáték',
      age_limit: '12',
      plot: "Valami leírás",
      releaseDate: new Date('2018-11-11'),
      durationInMin: 125,
      status: "ACTUAL",
      posterLink: "",
      trailerLink: "https://www.youtube.com/watch?v=T3Y16is7DNA",
      rating: '8.9/10'
    },
    {
      id: 2,
      title: "A Keresztapa",
      director: "Francis Ford Coppola",
      movie_type: 'Gengszterfilm, Filmdráma',
      age_limit: '16',
      plot: "Valami leírás",
      releaseDate: new Date('2018-10-09'),
      durationInMin: 125,
      status: "ACTUAL",
      posterLink: "",
      trailerLink: "https://www.youtube.com/watch?v=HNWB7M6QkeM",
      rating: '9.5/10'
    },{
        id: 3,
        title: "Peppermint: A bosszú angyala",
        director: "Pierre Morel",
        movie_type: 'Akció, Thriller, Dráma',
        age_limit: '16',
        plot: "Valami leírás",
        releaseDate: new Date('2018-11-13'),
        durationInMin: 101,
        status: "ACTUAL",
        posterLink: "",
        trailerLink: "https://www.youtube.com/watch?v=FeKe1HaQOE0",
        rating: '8.5/10'
    },{
        id: 4,
        title: "Aquaman",
        director: "James Wan",
        movie_type: 'Akció, Kaland, Fantasy',
        age_limit: '12',
        plot: "Valami leírás",
        releaseDate: new Date('2018-12-13'),
        durationInMin: 125,
        status: "COMING",
        posterLink: "",
        trailerLink: "https://www.youtube.com/watch?v=l-Z3kH-h3F4",
        rating: 'Még nem értékelt.'
    }
  ]
  filteredMovies = [];
  selectedStatus = 'ACTUAL';
  selectedMovie = null;

  constructor() { }

  ngOnInit() {
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
