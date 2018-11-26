import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [
    {
      id: 1,
      title: "Micsoda nő",
      director: "Garry Marshall",
      movieType: ['Romantikus', 'Vígjáték'],
      ageLimit: '12',
      plot: "Valami leírás",
      releaseDate: '2018-11-11',
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
      movieType: ['Gengszter', 'Dráma'],
      ageLimit: '16',
      plot: "Valami leírás",
      releaseDate: '2018-10-09',
      durationInMin: 125,
      status: "ACTUAL",
      posterLink: ".\img\posters\godfather.jpg",
      trailerLink: "https://www.youtube.com/watch?v=HNWB7M6QkeM",
      rating: '9.5/10'
    },{
        id: 3,
        title: "Peppermint: A bosszú angyala",
        director: "Pierre Morel",
        movieType: ['Akció', 'Thriller', 'Dráma'],
        ageLimit: '16',
        plot: "Valami leírás",
        releaseDate: '2018-11-13',
        durationInMin: 101,
        status: "ACTUAL",
        posterLink: "",
        trailerLink: "https://www.youtube.com/watch?v=FeKe1HaQOE0",
        rating: '8.5/10'
    },{
        id: 4,
        title: "Aquaman",
        director: "James Wan",
        movieType: ['Akció', 'Kaland', 'Fantasy'],
        ageLimit: '12',
        plot: "Valami leírás",
        releaseDate: '2018-12-13',
        durationInMin: 125,
        status: "COMING",
        posterLink: "",
        trailerLink: "https://www.youtube.com/watch?v=l-Z3kH-h3F4",
        rating: 'Még nem értékelt.'
    }
  ]
  constructor() { }
  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: number): Movie {
    return this.movies.find(movie => movie.id === id);
  }

  modifyMovie(id: number, movie: Movie) {
    const oMovie = this.getMovie(id);
    Object.assign(oMovie, movie);
  }
}
