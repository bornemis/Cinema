import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  id: number=null;
  movie: Movie = new Movie();
  title='Új film felvitele'

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.movie= await this.movieService.getMovie(this.id);
      this.title = 'A kiválasztott film szerkesztése';
      
    }
  }

  async onFormSave(movie: Movie) {
    if (this.id) {
      await this.movieService.modifyMovie(this.id, movie)
      this.router.navigate(['/movies']);
    } else {
      await this.movieService.addMovie(movie);
      this.router.navigate(['/movies']);
    }
  }
  }


