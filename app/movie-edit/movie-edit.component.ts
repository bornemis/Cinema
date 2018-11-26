import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Location } from '@angular/common';

@Component({
  selector: 'movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  id: number
  movie: Movie = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movie = this.movieService.getMovie(this.id);
  }

  onFormSave(movie: Movie) {
    this.movieService.modifyMovie(this.id, movie)
    this.location.back();
  }

}
